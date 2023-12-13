/* eslint-disable import/no-duplicates */
import { TemplateResult, html, nothing } from 'lit';
import {
  property,
  query,
  queryAll,
  queryAssignedElements,
  queryAssignedNodes,
  state,
} from 'lit/decorators.js';
import {
  Cell,
  ColumnDef,
  ColumnSort,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Header,
  PaginationState,
  RowModel,
  Table,
  TableOptions,
  TableState,
} from '@tanstack/table-core';
import { localized, msg, str } from '@lit/localize';
import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';

import {
  flexRender,
  returnFilterMarkup,
  returnLoadingMarkup,
  returnPaginatorMarkup,
  usePDSTable,
} from './data-table-utils';
import { PdsDataTableColumn } from '../data-table-column/data-table-column';
import { PdsDataTableCell } from '../data-table-cell/data-table-cell';
import styles from './data-table.scss?inline';
import '@keisha/design-system-icons-web/chevron-up';
import '@keisha/design-system-icons-web/chevron-down';
import '../table/table';
import '../text-input/text-input';
import '../select/select';
import '../pagination/pagination';
import '../data-table-columns/data-table-columns';
import '../data-table-column/data-table-column';
import '../data-table-input-column/data-table-input-column';
import '../data-table-rows/data-table-rows';
import '../data-table-row/data-table-row';
import '../data-table-cell/data-table-cell';
import '../skeleton-loader/skeleton-loader';
import '../grid/grid';
import '../grid-item/grid-item';
import { PdsDataTableRow } from '../data-table-row/data-table-row';
import { PdsTable } from '../table/table';
import { PdsDataTableInputColumn } from '../data-table-input-column/data-table-input-column';

type ColumnMetaData = {
  align: string;
  hidden: boolean;
  type: string;
  borders?: boolean;
  width?: string;
};

// use polyfill if unsupported by browser
let ResizeObserver = ResizeObserverPolyfill;

if (typeof window !== 'undefined' && window.ResizeObserver) {
  ResizeObserver = window.ResizeObserver;
}

/**
 * @summary This component provides data table display features for tabular data
 *
 * @fires pds-data-table-input-updated A custom event dispatched on blur when an input updates data within the table
 * @fires pds-data-table-sorted A custom event dispatched when a table is sorted
 *
 * @slot caption Must be populated with a pds-heading to caption the table for accessibility, may be visually hidden with the hideCaption property
 * @slot columns Can be populated with a single <pds-data-table-columns slot="columns"> component
 * @slot rows Can be populated with a single <pds-data-table-rows slot="rows"> component
 */
@customElement('pds-data-table', {
  category: 'component',
  type: 'component',
  styles,
})
@localized()
export class PdsDataTable extends PdsElement {
  /**
   * @internal
   */
  FILTERABLE_CONTENT = 'filterableContent';

  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  firstUpdated() {
    if (this.globalFilter !== '') {
      this.dataTable.options.state.globalFilter = this.globalFilter;
      this.options.state.globalFilter = this.globalFilter;
    }

    if (this.paginationVariant !== 'none') {
      // @ts-ignore setting this pagination object is problematic because it can't exist on the default implementation or the rows won't all display in the table
      this.options.state.pagination = {
        pageIndex: 0,
        pageSize: this.pageSize,
      };
    }

    // only way to get this to execute in the right order is to set a timeout of 0
    setTimeout(() => {
      this.firstRenderComplete = true;
    }, 0);
  }

  async updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('columns') || changedProperties.has('data')) {
      await this.updateComplete;
      this.options.columns = this.columns;
      this.options.data = this.data;
      this.createTable();
    }

    // if state is changing, recreate the table
    if (
      changedProperties.has('sortState') &&
      !this.disableAllSorting &&
      this.sortState
    ) {
      this.setSortingState();
      this.updateTableComponent('collapse');
    }

    // if state is changing, recreate the table
    if (changedProperties.has('tableState')) {
      if (this.paginationVariant !== 'none') {
        this.dataTable.options.state.pagination = {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
        };
        this.resetPagination();
      } else {
        this.dataTable.options.state.pagination = {
          pageIndex: this.pageIndex,
          pageSize: this.data.length,
        };
      }

      this.createTable();
    }

    if (this.expandAllOnLoad) {
      await this.updateComplete;
      this.updateTableComponent('expand');
    }
  }

  /**
   * Boolean to visually hide the caption, default is false
   */
  @property({ type: Boolean })
  hideCaption: boolean = false;

  /**
   * String to determine if the table should have "zebra" striping
   *
   * - odd: striping on odd rows
   * - even: striping on even rows
   * - default: no striping
   */
  @property({ type: String })
  striped: 'odd' | 'even' | 'default' = 'default';

  /**
   * Boolean to remove the borders and rounded corners of the table, default is false.
   */
  @property({ type: Boolean })
  removeBorder: boolean = false;

  /**
   * Boolean to add hoverable rows functionality to the table.  Default is false.
   */
  @property({ type: Boolean })
  hoverableRows: boolean = false;

  /**
   * Boolean to set the header row to sticky, default is false.
   *
   * Sticky row header will stick to the top of the page when scrolled away unless the table is fixed height, in which case it will stick to the top of the scrollable container.
   */
  @property({ type: Boolean })
  stickyHeader: boolean = false;

  /**
   * Boolean to set the first column to sticky, default is false.
   */
  @property({ type: Boolean })
  stickyColumn: boolean = false;

  /**
   * String to set a fixed height for the table. Example values: 300px, .25vh, 25%
   */
  @property()
  fixedHeight: string;

  /**
   * Boolean to hide filter input for the table, default is false.
   */
  @property({ type: Boolean })
  hideFilter: boolean = false;

  /**
   * Global filter value, defaults to ''
   */
  @property()
  globalFilter: string = '';

  /**
   * Pagination style variant
   * - **default** renders full pagination
   * - **arrows** renders only arrows for pagination navigation, should only be used when horizontal space is extremely limited
   * - **no-arrows** renders pagination navigation without arrows, should only be used when there are only two or three pages of data
   * - **none** disable pagination
   */
  @property({ type: String })
  paginationVariant: 'arrows' | 'no-arrows' | 'none' | 'default' = 'default';

  /**
   * Pagination page size, default is 5. Also used to determine loading state rows.
   */
  @property({ type: Number })
  pageSize: number = 5;

  /**
   * Pagination page size array, default is [ ${pageSize}, 10, 25 ]. Used in the pagination select.
   */
  @property({ type: Array<number> })
  paginationSelectArray: Array<number> = [this.pageSize, 10, 25];

  /**
   * Boolean to expand all rows on a collapsible table on initial page load, default is false
   */
  @property({ type: Boolean })
  expandAllOnLoad: boolean = false;

  /**
   * Number of columns to show in loading state, default is 4.
   */
  @property({ type: Number })
  loadingColumnLength: number = 4;

  /**
   * Boolean to disable all column sorting.  Default is false.
   */
  @property({ type: Boolean })
  disableAllSorting: boolean = false;

  /**
   * Current page displayed for paginated tables
   *
   * @internal
   */
  @property()
  pageIndex: number = 0;

  /**
   * Column definitions - see https://tanstack.com/table/v8/docs/guide/column-defs
   *
   * - this array holds the data that is currently defining the columns in the table
   * - data can be passed directly to this state as an array in order to display data without using the subcomponent data model, note that not all TanStack table options are currently supported by PDS
   *
   */
  @state()
  columns: ColumnDef<any>[] = [];

  /**
   * Table data array
   *
   * - this array holds the data that is currently rendered in the table
   * - data can be passed directly to this state as an array of objects in order to display data without using the subcomponent data model, see the provided example story
   * - include a filterableContent key to add content that can be filtered against but not displayed
   * - include a subRows key with an array of sub row objects to make a collapsible row, row will use the same column structure as main table rows unless you include a fullWidth key that will span all columns in the expandable row (this key can contain HTML markup to render)
   *
   */
  @state()
  data: Array<{}> = [{}];

  /**
   * Indicate if table has expandable rows
   *
   * @internal
   */
  @state()
  hasExpandableRows: boolean = false;

  /**
   * Table state object
   *
   * @internal
   */
  @state()
  tableState: TableState | {};

  /**
   * Object containing the sort state
   *
   * For example: { id: "exampleColumnId", desc: false }
   * - id is a string representing columnId
   * - desc is a boolean representing whether or not the column is sorted descending
   *
   * @internal
   */
  @state()
  sortState: ColumnSort;

  /**
   * Conversion object for sort state strings
   *
   * @internal
   */
  @state()
  sortStringObj = {
    asc: 'ascending',
    desc: 'descending',
  };

  /**
   * Options object for generating the table
   *
   * @internal
   */
  @property()
  options = {
    state: {
      globalFilter: '',
    },
    data: this.data,
    columns: this.columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getSubRows: (row: { subRows: any }) => row.subRows,
    renderFallbackValue: '0',
    onStateChange: (updater: {}) => {
      this.tableState =
        typeof updater === 'function'
          ? updater(this.dataTable.getState())
          : updater;
    },
  };

  /**
   * @internal
   */
  @query('pds-table')
  table: PdsTable;

  /**
   * @internal
   */
  @query('thead tr')
  theadTr: HTMLElement;

  /**
   * @internal
   */
  @query('tbody')
  tbody: HTMLElement;

  /**
   * @internal
   */
  @query('#paginator')
  paginator: HTMLElement;

  /**
   * @internal
   */
  @query('#tableFilter')
  tableFilter: HTMLElement;

  /**
   * @internal
   */
  @queryAll('.pds-c-table__toggle')
  rowToggles: HTMLElement[];

  /**
   * @internal
   */
  @queryAll('.pds-c-table__expandable-row-wrapper')
  expandableRowWrappers: HTMLElement[];

  /**
   * @internal
   */
  @state()
  dataTable: Table<any>;

  /**
   * @internal
   */
  @state()
  firstRenderComplete: boolean = false;

  /**
   * Create a new table instance based on the component properties.
   */
  async createTable() {
    this.dataTable = usePDSTable<any>(this.options as TableOptions<any>);

    // does table have expandable rows
    this.hasExpandableRows = this.dataTable.getCanSomeRowsExpand();

    // handle collapse state
    if (this.hasExpandableRows && this.globalFilter === '') {
      await this.updateComplete;
      this.table.classList.remove('pds-c-data-table--rendered');
      this.disableTransition(this.expandableRowWrappers, true);
      this.disableTransition(this.rowToggles, true);
      if (this.table.wrapper) {
        this.table.wrapper.dispatchEvent(new Event(`pds-table-collapse-all`));
      }
      this.disableTransition(this.expandableRowWrappers, false);
      this.disableTransition(this.rowToggles, false);
      this.table.classList.add('pds-c-data-table--rendered');
    } else if (this.hasExpandableRows && this.globalFilter !== '') {
      await this.updateComplete;
      this.updateTableComponent('expand');
    }

    this.resizeObserver.observe(this);
  }

  /**
   * @internal
   */
  @state()
  filteredRows: RowModel<any> | null;

  /**
   * @internal
   */
  @state()
  paginationState: PaginationState = {
    pageIndex: this.pageIndex,
    pageSize: this.pageSize,
  };

  /**
   *  @internal
   */
  @property()
  paginatorMarkup: Array<TemplateResult> = [];

  /**
   * @internal
   */
  handleFilterChange(e: CustomEvent) {
    const target = e.target as EventTarget & HTMLInputElement;
    this.setTableFilter((target.value || '').trim());
  }

  /**
   * @internal
   */
  async setTableFilter(searchTerm: string) {
    this.globalFilter = searchTerm;
    this.dataTable.options.state.globalFilter = searchTerm;
    this.options.state.globalFilter = searchTerm;
    this.resetPagination();

    await this.updateComplete;
    // we need to collapse or expand expandable rows after filtering to clean up display
    if (this.hasExpandableRows && searchTerm === '') {
      await this.updateComplete;
      this.updateTableComponent('collapse');
    } else if (this.hasExpandableRows) {
      this.updateTableComponent('expand');
    }
  }

  /**
   * @internal
   */
  handlePaginationClick(e: CustomEvent) {
    if (e.detail.summary === 'fly-first') {
      this.pageIndex = 0;
    } else if (e.detail.summary === 'fly-last') {
      this.pageIndex = this.dataTable.getPageCount() - 1;
    } else if (e.detail.summary === 'step-backward') {
      this.pageIndex -= 1;
    } else if (e.detail.summary === 'step-forward') {
      this.pageIndex += 1;
    }

    this.dataTable.options.state.pagination = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    };

    // @ts-ignore setting this pagination object is problematic because it can't exist on the default implementation or the rows won't all display in the table
    this.options.state.pagination = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    };

    this.paginationState = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    };

    this.resetPagination();
  }

  /**
   * @internal
   */
  handlePaginationItemClick(e: CustomEvent) {
    const pageNumber = e.detail.summary;
    this.pageIndex = (pageNumber as number) - 1;

    this.dataTable.options.state.pagination = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    };

    // @ts-ignore setting this pagination object is problematic because it can't exist on the default implementation or the rows won't all display in the table
    this.options.state.pagination = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    };

    this.paginationState = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    };

    this.resetPagination();
  }

  /**
   * @internal
   */
  disableTransition(elementArray: Array<HTMLElement>, transitionOff: boolean) {
    elementArray.forEach((element: HTMLElement) => {
      element.setAttribute('style', transitionOff ? 'transition: none' : '');
    });
  }

  /**
   * @internal
   */
  async handlePaginationChanged() {
    if (this.columns.length > 0 && this.paginator) {
      const { pageIndex } = this.dataTable.getState().pagination;
      const pageCount = this.dataTable.getPageCount();

      // Disable or enable backward arrows
      if (pageIndex === 0 || this.dataTable.getRowModel().rows.length === 0) {
        this.paginator.setAttribute('backwardDisabled', 'true');
      } else {
        this.paginator.removeAttribute('backwardDisabled');
      }

      // Disable or enable forward arrows
      if (
        pageIndex + 1 === pageCount ||
        this.dataTable.getRowModel().rows.length === 0
      ) {
        this.paginator.setAttribute('forwardDisabled', 'true');
      } else {
        this.paginator.removeAttribute('forwardDisabled');
      }

      // collapse collapsibles
      if (this.hasExpandableRows) {
        await this.updateComplete;
        this.updateTableComponent('collapse');
      }
    }
  }

  /**
   * @internal
   */
  handlePaginationSelectChanged(e: CustomEvent) {
    this.pageSize = parseInt(e.detail.summary, 10);
    // @ts-ignore setting this pagination object is problematic because it can't exist on the default implementation or the rows won't all display in the table
    this.options.state.pagination = {
      pageIndex: 0,
      pageSize: this.pageSize,
    };

    this.dataTable.options.state.pagination = {
      pageIndex: 0,
      pageSize: this.pageSize,
    };

    this.paginationState = {
      pageIndex: 0,
      pageSize: this.pageSize,
    };

    this.createTable();
  }

  /**
   * @internal
   */
  generatePaginationItems() {
    const currentPage = this.dataTable.getState().pagination.pageIndex + 1;
    const totalPages = this.dataTable.getPageCount();

    const paginatorMarkupTemp: Array<TemplateResult> = [];
    let renderedPaginationItems = 0;

    // iterate through array to build pagination items
    Array.from({
      length: totalPages,
    }).forEach((item, index) => {
      const pageNum = Number(index) + 1;
      if (
        renderedPaginationItems < 3 &&
        (currentPage === pageNum ||
          (currentPage - 2 <= pageNum && currentPage + 2 >= pageNum))
      ) {
        renderedPaginationItems += 1;
        paginatorMarkupTemp.push(
          html`<pds-pagination-item
            @pds-pagination-item-click=${this.handlePaginationItemClick}
            pagenumber="${pageNum}"
            ?active=${currentPage === pageNum}
          ></pds-pagination-item>`,
        );
      }
    });

    return paginatorMarkupTemp;
  }

  /**
   * @internal
   */
  resetPagination() {
    this.paginatorMarkup.splice(0, Infinity, ...this.generatePaginationItems());
    this.handlePaginationChanged();
  }

  /**
   * Fire change event on table to reset expandable row calculations
   *
   * @internal
   */
  updateTableComponent(collapseState: 'expand' | 'collapse' | 'unchanged') {
    if (this.table.wrapper) {
      this.table.classList.remove('pds-c-data-table--rendered');
      if (collapseState !== 'unchanged') {
        this.disableTransition(this.expandableRowWrappers, true);
        this.disableTransition(this.rowToggles, true);

        this.table.wrapper.dispatchEvent(
          new Event(`pds-table-${collapseState}-all`),
        );
        this.disableTransition(this.expandableRowWrappers, false);
        this.disableTransition(this.rowToggles, false);
      }
      this.table.classList.add('pds-c-data-table--rendered');
      this.table.wrapper.dispatchEvent(new Event('change'));
    }
  }

  /**
   * Listen for resize events on an Element and update table component expandable rows
   *
   * @internal
   */
  // We can't actually call the observer, because Jest has no concept of element width
  /* istanbul ignore next */
  resizeObserver = new ResizeObserver((entries: any[]) => {
    entries.forEach(async () => {
      await this.updateComplete;
      this.updateTableComponent('unchanged');
    });
  });

  /**
   * This grabs the slotted table caption
   * @internal
   */
  @queryAssignedNodes({ slot: 'caption' })
  tableCaptionNodes: any;

  /**
   * This grabs the slotted column components
   * @internal
   */
  @queryAssignedElements({ slot: 'columns' })
  columnSlotElements: any;

  /**
   * This grabs the slotted row components
   * @internal
   */
  @queryAssignedElements({ slot: 'rows' })
  rowSlotElements: any;

  /**
   * Handle column header sort clicks
   *
   * @internal
   */
  handleSortClick(e: Event) {
    const parentThElement = (e.target as HTMLElement).closest(
      '.pds-c-data-table--sortable-header-th',
    );
    const rowId = parentThElement?.getAttribute('key');
    const sortIconsDiv = parentThElement?.querySelector(
      '.pds-c-data-table__sort-chevrons',
    ) as HTMLElement;

    const fireCustomEvent = (sorted: boolean = true) => {
      let sort;

      if (sorted) {
        sort = this.sortState.desc ? 'desc' : 'asc';
      } else {
        sort = 'none';
      }

      const customEvent = new CustomEvent('pds-data-table-sorted', {
        bubbles: true,
        composed: true,
        detail: {
          id: this.sortState.id,
          sort,
        },
      });

      this.dispatchEvent(customEvent);
    };

    // set or remove sort
    if (rowId && sortIconsDiv.dataset.sort === 'asc') {
      this.sortState = {
        id: rowId,
        desc: true,
      };
      this.setSortingState();
      fireCustomEvent();
    } else if (sortIconsDiv.dataset.sort === 'desc') {
      // @ts-ignore typescript doesn't think this object exists, but it does
      delete this.options.state.sorting;
      delete this.dataTable.options.state.sorting;
      this.createTable();
      fireCustomEvent(false);
    } else if (rowId) {
      this.sortState = {
        id: rowId,
        desc: false,
      };

      this.setSortingState();
      fireCustomEvent();
    }
  }

  /**
   * Set column data for the table
   *
   * @internal
   */
  setColumns(dataModel: ColumnDef<any>[]) {
    this.columns = dataModel;
    this.dataTable.options.columns = dataModel;
    this.options.columns = dataModel;
  }

  /**
   * Set row data for the table
   *
   * @internal
   */
  setRows(data: Array<{}>) {
    this.data = data;
    this.dataTable.options.data = data;
    this.options.data = data;
    this.resetPagination();
  }

  /**
   * Update table data when the data model changes in the slot
   *
   * @internal
   */
  updateTableData() {
    const columnSlotDataModel = this.getSlottedColumnDataModel();

    if (columnSlotDataModel.length > 0) {
      this.setColumns(columnSlotDataModel);
    }

    const rowSlotDataModel = this.getSlottedRowDataModel();

    if (rowSlotDataModel.length > 0) {
      this.setRows(rowSlotDataModel);
    }
  }

  /**
   * Read data from slotted row components
   *
   * @internal
   */
  getSlottedRowDataModel() {
    let rowObjArr = [{}];

    if (this.rowSlotElements.length > 0) {
      Array.from(this.rowSlotElements[0].children).forEach((element: any) => {
        if (element.tagName.toLowerCase() === 'pds-data-table-row') {
          const row = element as PdsDataTableRow;
          let rowObj = {};

          // build data for the row
          Array.from(row.children).forEach((cellElement: any) => {
            if (cellElement.tagName.toLowerCase() === 'pds-data-table-cell') {
              const cell = cellElement as PdsDataTableCell;
              rowObj = {
                ...rowObj,
                [cell.cellId]: cell.getNodeText(),
              };
            }
          });

          if (row.subRows) {
            const subRowObjArr: {}[] = [];
            row.subRows.forEach((subRowInstance) => {
              let subRowObj = {};
              Array.from(subRowInstance.children).forEach(
                (subRowCellElement: any) => {
                  if (
                    subRowCellElement.tagName.toLowerCase() ===
                      'pds-data-table-cell' &&
                    subRowCellElement.slotNodes
                  ) {
                    const cell = subRowCellElement as PdsDataTableCell;
                    if (cell.cellId === this.FILTERABLE_CONTENT) {
                      subRowObj = {
                        ...subRowObj,
                        [cell.cellId]: cell.getNodeText(),
                      };
                    } else {
                      subRowObj = {
                        ...subRowObj,
                        [cell.cellId]: cell,
                      };
                    }
                  }
                },
              );
              subRowObjArr.push(subRowObj);
            });

            rowObj = { ...rowObj, subRows: subRowObjArr };
          }

          if (Object.entries(rowObjArr[0]).length === 0) {
            rowObjArr = [rowObj];
          } else {
            rowObjArr.push(rowObj);
          }
        }
      });
    }
    return rowObjArr;
  }

  /**
   * Read data from slotted column components
   *
   * @internal
   */
  getSlottedColumnDataModel() {
    const columnHelper = createColumnHelper<any>();
    const columnObjArr: ColumnDef<any, unknown>[] = [];

    if (this.columnSlotElements.length === 1) {
      this.columnSlotElements[0]
        .querySelectorAll('pds-data-table-column, pds-data-table-input-column')
        .forEach((column: PdsDataTableColumn | PdsDataTableInputColumn) => {
          if (column.tagName.toLowerCase() === 'pds-data-table-column') {
            // use the columnHelper to generate the correct object
            columnObjArr.push(
              columnHelper.accessor(column.columnId, {
                id: column.columnId,
                cell: column.cell,
                enableSorting: !column.disableSort,
                header: column.header,
                meta: {
                  align: column.align,
                  hidden: column.hidden,
                  type: column.type,
                  width: column.width,
                },
              }),
            );
          } else {
            // use the columnHelper to generate the correct object
            columnObjArr.push(
              columnHelper.display({
                id: column.columnId,
                cell: column.cell,
                enableSorting: !column.disableSort,
                header: column.header,
                meta: {
                  align: column.align,
                  hidden: column.hidden,
                  type: column.type,
                  width: column.width,
                },
              }),
            );
          }
        });

      // include filterable content column
      columnObjArr.push({
        id: this.FILTERABLE_CONTENT,
        accessorKey: this.FILTERABLE_CONTENT,
        meta: {
          hidden: true,
        },
        header: 'Filterable content (hidden)',
      });
    } else {
      console.error(
        'Unable to process slotted column data for data table, only one pds-data-columns element may be placed in the columns slot.',
      );
    }
    return columnObjArr;
  }

  /**
   * @internal
   */
  getHeaderCellMarkup(header: Header<any, unknown>) {
    const headerData = flexRender(
      header.column.columnDef.header,
      header.getContext(),
    );

    if (!this.disableAllSorting && header.column.getCanSort()) {
      return html`<button
        class=${this.classMod('sortable-header')}
        @click="${this.handleSortClick}"
      >
        <div class=${this.classEl('column-header-text')}>
          ${headerData}
        </div>
        <div
                class="${this.classEl('sort-chevrons')}"
                data-sort="${
                  header.column.getIsSorted()
                    ? header.column.getIsSorted()
                    : nothing
                }"
              >
                <pds-icon-chevron-up size="sm"></pds-icon-chevron-up
                ><pds-icon-chevron-down size="sm"></pds-icon-chevron-down>&nbsp;
              </div>
      </div> `;
    }
    return html`<div>
      <div class=${this.classEl('column-header-text')}>
        ${headerData}
      </div>
    </button> `;
  }

  /**
   * @internal
   */
  getCellMarkup(cell: Cell<any, unknown>) {
    return html`<td
      style=${!this.hasExpandableRows &&
      cell.column.columnDef.meta &&
      (cell.column.columnDef.meta as ColumnMetaData).width
        ? `min-width: ${
            (cell.column.columnDef.meta as ColumnMetaData).width
          }; max-width: ${
            (cell.column.columnDef.meta as ColumnMetaData).width
          }; width: ${(cell.column.columnDef.meta as ColumnMetaData).width};`
        : nothing}
      key=${cell.id}
      class="${cell.column.columnDef.meta &&
      (cell.column.columnDef.meta as ColumnMetaData)?.borders === true
        ? this.classEl('display-cell')
        : this.classEl('accessor-cell')} ${cell.column.columnDef.meta &&
      (cell.column.columnDef.meta as ColumnMetaData).align
        ? this.classMod(
            `align-${(cell.column.columnDef.meta as ColumnMetaData).align}`,
          )
        : this.classMod(`align-left`)} ${cell.column.columnDef.meta &&
      (cell.column.columnDef.meta as ColumnMetaData).hidden === true
        ? this.classEl('hidden-filter-text')
        : ''} ${(cell.column.columnDef.meta as ColumnMetaData)?.type
        ? this.classEl(
            `${(cell.column.columnDef.meta as ColumnMetaData).type}-cell`,
          )
        : ''}"
    >
      <div class=${this.classEl('cell-text')}>
        ${flexRender(cell.column.columnDef.cell, cell.getContext())}
      </div>
    </td>`;
  }

  /**
   * @internal
   */
  setSortingState() {
    // @ts-ignore setting this sorting object is problematic because it can't exist on the default implementation or the table throws an error
    this.options.state.sorting = [this.sortState];
    this.dataTable.options.state.sorting = [this.sortState];
  }

  /**
   * @internal
   */
  getCaptionSlotText() {
    let text = '';
    Array.from(this.tableCaptionNodes).forEach((element: any) => {
      text += element.innerText;
    });
    return text;
  }

  /**
   * @internal
   */
  @state()
  sortDirection: string;

  /**
   * Live region for screenreader to announce table sort direction
   * @internal
   */
  @query('.pds-c-data-table__live-region')
  liveRegion: HTMLSpanElement;

  /**
   * @internal
   */
  returnSortString(sortValue: string | boolean): 'asc' | 'desc' {
    if (sortValue === 'desc') {
      this.sortDirection = msg('descending');
      return 'desc';
    }
    this.sortDirection = msg('ascending');
    return 'asc';
  }

  /**
   * Announce table sort direction to screenreaders
   * @internal
   */
  updateLiveRegion(headerName: string) {
    const captionText = msg(
      str`${this.getCaptionSlotText()} table, column ${headerName} is now sorted by ${
        this.sortDirection
      } values`,
    );
    this.liveRegion.innerHTML = captionText;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      'table-visible': this.firstRenderComplete,
      'with-border': !this.removeBorder,
    };
  }

  render() {
    // generate the initial dataTable if it doesn't exist
    if (!this.dataTable) {
      this.createTable();
    }

    // if we don't have columns defined, return a loading state
    if (this.columns.length === 0) {
      return returnLoadingMarkup(this);
    }

    // if we don't have a table caption defined, return a loading state and console error
    if (this.slotEmpty('caption')) {
      console.error(
        'For accessibility, a pds-data-table must include caption slot content.',
      );
      return returnLoadingMarkup(this);
    }

    // build paginator item markup
    if (this.paginationVariant !== 'none') {
      this.paginatorMarkup = this.generatePaginationItems();
    }

    // render the table
    return html`<div class="${this.classEl('wrapper')}">
        ${this.hideCaption && !this.hideFilter
          ? html`<div class=${this.classMod('caption-hidden')}>
              ${returnFilterMarkup(this)}
            </div>`
          : nothing}
        ${this.hideFilter && !this.hideCaption
          ? html`<div
              aria-hidden="true"
              class=${this.classMod('filter-hidden')}
            >
              <slot name="caption"></slot>
            </div>`
          : nothing}
        ${!this.hideFilter && !this.hideCaption
          ? html`<pds-grid
              break="faster"
              variant="2up"
              class="${this.classEl('header')}"
              ><pds-grid-item>
                <div aria-hidden="true">
                  <slot name="caption"></slot>
                </div>
              </pds-grid-item>
              <pds-grid-item>
                <div>${returnFilterMarkup(this)}</div>
              </pds-grid-item></pds-grid
            >`
          : nothing}
        <pds-table
          striped=${this.striped}
          stickyColumn=${this.stickyColumn || nothing}
          stickyHeader=${this.stickyHeader || nothing}
          expandAllOnLoad=${this.expandAllOnLoad || nothing}
          removeBorder=${this.removeBorder || nothing}
          hoverableRows=${this.hoverableRows || nothing}
          fixedHeight=${this.fixedHeight || nothing}
          class="${this.getClass()}"
        >
          <table>
            <caption class="${this.classEl('caption')}">
              ${this.getCaptionSlotText()}
              ${this.disableAllSorting
                ? nothing
                : html`<span
                    >, ${msg('column headers with buttons are sortable')}</span
                  >`}
            </caption>
            <thead>
              ${this.dataTable.getHeaderGroups().map((headerGroup) => {
                return html`<tr
                  key=${headerGroup.id}
                  class="${this.hasExpandableRows
                    ? this.classEl('expandable-row-spacer')
                    : nothing}"
                >
                  ${headerGroup.headers.map((header) => {
                    let sortString;
                    if (typeof header.column.getIsSorted() === 'string') {
                      sortString =
                        this.sortStringObj[
                          this.returnSortString(header.column.getIsSorted())
                        ];

                      // Typescript is confused about what kind of object this
                      // @ts-expect-error
                      const colName = flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                        // @ts-expect-error
                      )[0].textContent;

                      this.updateLiveRegion(colName);
                    }
                    return html`<th
                      width=${!this.hasExpandableRows &&
                      header.column.columnDef.meta &&
                      (header.column.columnDef.meta as ColumnMetaData).width
                        ? (header.column.columnDef.meta as ColumnMetaData).width
                        : nothing}
                      key=${header.id}
                      colspan=${header.colSpan}
                      aria-sort="${sortString || nothing}"
                      class="${header.column.columnDef.meta &&
                      (header.column.columnDef.meta as ColumnMetaData)
                        ?.borders === true
                        ? this.classEl('display-cell')
                        : this.classEl(
                            'accessor-cell',
                          )} ${header.column.getCanSort()
                        ? this.classMod('sortable-header-th')
                        : ''} ${header.column.columnDef.meta &&
                      (header.column.columnDef.meta as ColumnMetaData).align
                        ? this.classMod(
                            `align-${
                              (header.column.columnDef.meta as ColumnMetaData)
                                .align
                            }`,
                          )
                        : this.classMod(`align-left`)} ${header.column.columnDef
                        .meta &&
                      (header.column.columnDef.meta as ColumnMetaData)
                        ?.hidden === true
                        ? this.classEl('hidden-filter-text')
                        : ''} ${(header.column.columnDef.meta as ColumnMetaData)
                        ?.type
                        ? this.classEl(
                            `${
                              (header.column.columnDef.meta as ColumnMetaData)
                                .type
                            }-cell`,
                          )
                        : ''}
                      "
                    >
                      ${header.isPlaceholder
                        ? null
                        : this.getHeaderCellMarkup(header)}
                    </th>`;
                  })}
                </tr>`;
              })}
            </thead>
            <tbody>
              ${this.dataTable &&
              this.dataTable.getRowModel().rows.map((row) => {
                if (this.hasExpandableRows && row.getCanExpand()) {
                  // this is a collapsible row
                  // aria-rowindex value must be >= 1, see https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex
                  return html`<tr
                    key=${row.id}
                    class="pds-c-table__expandable-row"
                    role="row"
                    aria-rowindex=${Number(row.id) + 1}
                  >
                    <td colspan="5">
                      <div class="pds-c-table__expandable-row-wrapper">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="pds-c-table__expandable-row-table"
                        >
                          <tbody>
                            <tr key=${row.id}>
                              ${this.dataTable &&
                              row
                                .getVisibleCells()
                                .map((cell) => this.getCellMarkup(cell))}
                            </tr>
                            ${this.dataTable &&
                            row.subRows.map((subRow) => {
                              if (
                                Object.keys(subRow.original).includes(
                                  'fullWidth',
                                )
                              ) {
                                return html`<tr>
                                  <td
                                    colspan="${this.dataTable.getHeaderGroups()[0]
                                      .headers.length}"
                                  >
                                    ${subRow.original.fullWidth}
                                  </td>
                                </tr>`;
                              }
                              return html`<tr>
                                ${this.dataTable &&
                                subRow
                                  .getVisibleCells()
                                  .map((cell) => this.getCellMarkup(cell))}
                              </tr>`;
                            })}
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>`;
                }
                // this is a regular row
                // aria-rowindex value must be >= 1, see https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex
                return html`<tr
                  key=${row.id}
                  class=${this.hasExpandableRows
                    ? this.classEl('expandable-row-spacer')
                    : nothing}
                  role="row"
                  aria-rowindex=${Number(row.id) + 1}
                >
                  ${this.dataTable &&
                  row.getVisibleCells().map((cell) => this.getCellMarkup(cell))}
                </tr>`;
              })}
            </tbody>
          </table>
          <span
            class="pds-c-data-table__live-region pds-u-sr-only"
            aria-live="polite"
          ></span>
        </pds-table>
        ${returnPaginatorMarkup(this)}
      </div>
      <slot hidden name="columns" @slotchange="${this.updateTableData}"></slot>
      <slot hidden name="rows" @slotchange="${this.updateTableData}"></slot>`;
  }
}
