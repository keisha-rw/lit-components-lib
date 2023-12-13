import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { PdsDataTable } from './data-table';
import createSnapshots from '../../../../test/utils/snapshots';
import { PdsTextInput } from '../text-input/text-input';

initStoryshots({
  storyKindRegex: /Data table/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('DataTable unit tests', () => {
  it('is an instance of PdsDataTable', async () => {
    const element = (await fixture(
      '<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Extra row</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;

    expect(element).toBeInstanceOf(PdsDataTable);
    expect(element.dataTable.getRowModel().rows).toHaveLength(2);
  });

  it('sets globalFilter when passed', async () => {
    const elementGlobalFilter = (await fixture(
      '<pds-data-table globalFilter="test filter"><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-row><pds-data-table-cell cellId="test">Expandable row</pds-data-table-cell></pds-data-table-row></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;

    await elementGlobalFilter.updateComplete;

    const tableTds = elementGlobalFilter.shadowRoot?.querySelectorAll('td');
    expect(elementGlobalFilter.options.state.globalFilter).toBe('test filter');
    expect(elementGlobalFilter.dataTable.getRowModel().rows).toHaveLength(0);
    expect(tableTds).toHaveLength(0);
  });

  it('sets pagination', async () => {
    const elementPagination = (await fixture(
      '<pds-data-table pageSize="1"><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;
    // @ts-expect-error because pagination can't be on the initial state of the options object due to a library limitation
    expect(elementPagination.options.state.pagination.pageIndex).toBe(0);
    expect(
      elementPagination.shadowRoot?.querySelector('pds-pagination'),
    ).toBeTruthy();

    elementPagination.createTable();

    expect(
      elementPagination.shadowRoot
        ?.querySelector('pds-pagination')
        ?.querySelectorAll('pds-pagination-item').length,
    ).toBe(3);
  });

  it('performs expandable row logic when expandable rows are detected', async () => {
    const elementExpandableRows = (await fixture(
      '<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-row><pds-data-table-cell cellId="test">Expandable row</pds-data-table-cell></pds-data-table-row></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;
    expect(elementExpandableRows.hasExpandableRows).toBeTruthy();

    elementExpandableRows.createTable();

    expect(
      elementExpandableRows.shadowRoot?.querySelectorAll(
        '.pds-c-table__expandable-row--is-collapsed',
      ).length,
    ).toBe(1);
  });

  it('performs expandable row logic when expandable rows are detected and global filter is passed', async () => {
    const elementExpandableRows = (await fixture(
      `<pds-data-table globalFilter="Test"><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows">
      <pds-data-table-row>
        <pds-data-table-cell cellId="test">Test</pds-data-table-cell>
        <pds-data-table-cell cellId="filterableContent"
          >Test expandable row</pds-data-table-cell
        >
        <pds-data-table-row>
          <pds-data-table-cell cellId="filterableContent"
            >Test expandable row</pds-data-table-cell
          >
          <pds-data-table-cell cellId="fullWidth"
            ><pds-card direction="horizontal">
              <span
                >Test expandable row</span
              >
            </pds-card>
          </pds-data-table-cell>
        </pds-data-table-row>
      </pds-data-table-row></pds-data-table-rows></pds-data-table>`,
    )) as PdsDataTable;
    expect(elementExpandableRows.hasExpandableRows).toBeTruthy();

    elementExpandableRows.createTable();

    expect(
      elementExpandableRows.shadowRoot?.querySelectorAll(
        '.pds-c-table__expandable-row--is-collapsed',
      ).length,
    ).toBe(0);
  });

  it('expands all rows when expandable rows are detected and expandAllOnLoad prop is passed', async () => {
    const elementExpandableRowsExpandAllOnLoad: PdsDataTable = await fixture(
      '<pds-data-table expandAllOnLoad><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    );
    expect(elementExpandableRowsExpandAllOnLoad.hasExpandableRows).toBeTruthy();

    await elementExpandableRowsExpandAllOnLoad.updateComplete;
    expect(
      elementExpandableRowsExpandAllOnLoad.shadowRoot?.querySelectorAll(
        '.pds-c-table__expandable-row--is-collapsed',
      ).length,
    ).toBe(0);
  });

  it('handles filter change', async () => {
    const element = (await fixture(
      '<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Extra row</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;
    const filterInput = element.shadowRoot?.querySelector(
      '.pds-c-data-table__filter-input',
    ) as PdsTextInput;
    filterInput.value = 'test';
    element.setTableFilter(filterInput.value);

    expect(element.options.state.globalFilter).toBe('test');
    expect(element.dataTable.getFilteredRowModel().rows).toHaveLength(1);

    filterInput.value = '';
    element.setTableFilter(filterInput.value);

    expect(element.options.state.globalFilter).toBe('');
    expect(element.dataTable.getFilteredRowModel().rows).toHaveLength(2);
  });

  it('handles filter change with expandable rows', async () => {
    const elementExpandableRows = (await fixture(
      '<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-row><pds-data-table-cell cellId="test">Expandable row</pds-data-table-cell></pds-data-table-row></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Second row value</pds-data-table-cell><pds-data-table-row><pds-data-table-cell cellId="test">Expandable row 2</pds-data-table-cell></pds-data-table-row></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;
    expect(elementExpandableRows.hasExpandableRows).toBeTruthy();

    const filterInput = elementExpandableRows.shadowRoot?.querySelector(
      '.pds-c-data-table__filter-input',
    ) as PdsTextInput;
    filterInput.value = 'test';
    elementExpandableRows.setTableFilter(filterInput.value);

    expect(elementExpandableRows.options.state.globalFilter).toBe('test');
    expect(
      elementExpandableRows.dataTable.getFilteredRowModel().rows,
    ).toHaveLength(1);

    filterInput.value = '';
    elementExpandableRows.setTableFilter(filterInput.value);

    expect(elementExpandableRows.options.state.globalFilter).toBe('');
    expect(
      elementExpandableRows.dataTable.getFilteredRowModel().rows,
    ).toHaveLength(2);
  });

  it('removes filter with hideFilter prop', async () => {
    const element = (await fixture(
      '<pds-data-table hideFilter><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Extra row</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;

    expect(element.tableFilter).toBeNull();
  });

  it('adds sort icons', async () => {
    const element = (await fixture(
      '<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Extra row</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;

    expect(
      element.shadowRoot?.querySelector('.pds-c-data-table__sort-chevrons'),
    ).not.toBeNull();
  });

  it('handles click on the pagination items', async () => {
    const elementPagination = (await fixture(
      '<pds-data-table pageSize="1"><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;
    const customEvent = new CustomEvent('custom-event', {
      detail: { summary: '2' },
    });
    elementPagination.handlePaginationItemClick(customEvent);

    expect(elementPagination.pageIndex).toBe(1);
  });

  it('handles pagination clicks', async () => {
    const elementPagination = (await fixture(
      '<pds-data-table pageSize="1"><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;
    let customEvent = new CustomEvent('custom-event', {
      detail: { summary: 'fly-last' },
    });
    elementPagination.handlePaginationClick(customEvent);

    expect(elementPagination.pageIndex).toBe(2);

    customEvent = new CustomEvent('custom-event', {
      detail: { summary: 'fly-first' },
    });
    elementPagination.handlePaginationClick(customEvent);

    expect(elementPagination.pageIndex).toBe(0);

    customEvent = new CustomEvent('custom-event', {
      detail: { summary: 'step-forward' },
    });
    elementPagination.handlePaginationClick(customEvent);

    expect(elementPagination.pageIndex).toBe(1);

    customEvent = new CustomEvent('custom-event', {
      detail: { summary: 'step-backward' },
    });
    elementPagination.handlePaginationClick(customEvent);

    expect(elementPagination.pageIndex).toBe(0);
  });

  it('handles pagination select changes', async () => {
    const elementPagination = (await fixture(
      '<pds-data-table pageSize="1"><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;
    const customEvent = new CustomEvent('custom-event', {
      detail: { summary: '1' },
    });

    elementPagination.handlePaginationSelectChanged(customEvent);

    expect(elementPagination.shadowRoot?.querySelectorAll('td').length).toBe(2);
  });

  it('handles pagination none', async () => {
    const elementNoPagination = (await fixture(
      '<pds-data-table paginationVariant="none"><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;

    expect(elementNoPagination.paginator).toBe(null);
  });

  it('handles table update event dispatch', async () => {
    const elementExpandableRows = (await fixture(
      '<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-row><pds-data-table-cell cellId="test">Expandable row</pds-data-table-cell></pds-data-table-row></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;
    const elementExpandableRowsTable =
      elementExpandableRows.shadowRoot?.querySelector('pds-table');
    const changeHandler = jest.fn();
    elementExpandableRowsTable?.addEventListener(
      'pds-table-changed',
      changeHandler,
    );
    elementExpandableRows.updateTableComponent('expand');

    expect(changeHandler).toBeCalled();
  });

  it('handles full width subrows', async () => {
    const elementFullWidthSubrow = (await fixture(
      '<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column><pds-data-table-column columnId="test">Test 2</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-row><pds-data-table-cell cellId="fullWidth">Expandable row</pds-data-table-cell></pds-data-table-row></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;
    const subrows =
      elementFullWidthSubrow.dataTable.getCoreRowModel().rows[0].subRows;

    expect(subrows).toHaveLength(1);
  });

  it('handles columns with right alignment', async () => {
    const elementRightAlignedColumn = await fixture(
      '<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column align="right" columnId="test">Test</pds-data-table-column><pds-data-table-column type="display" columnId="tester">Tester</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Extra row</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    );
    expect(
      elementRightAlignedColumn.shadowRoot?.querySelectorAll(
        '.pds-c-data-table--align-right',
      ),
    ).toHaveLength(4);
  });

  it('should console warn when columns are passed correctly to the columns slot', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const element = (await fixture(
      '<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;

    expect(consoleError).toBeCalledTimes(2);

    consoleError.mockRestore();
  });

  it('handles disabling all sorting', async () => {
    const elementNoSorting = (await fixture(
      '<pds-data-table disableAllSorting><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-column columnId="testy">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-cell cellId="testy">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-cell cellId="testy">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-cell cellId="testy">Test value</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;

    expect(
      elementNoSorting.shadowRoot?.querySelectorAll(
        '.pds-c-data-table__sort-chevrons',
      ),
    ).toHaveLength(0);
  });

  it('handles a sort state', async () => {
    const elementSorting = (await fixture(
      `<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-column columnId="testy">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-cell cellId="testy">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-cell cellId="testy">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-cell cellId="testy">Test value</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>`,
    )) as PdsDataTable;

    elementSorting.sortState = { id: 'test', desc: false };
    // @ts-ignore setting this sorting object is problematic because it can't exist on the default implementation or the table throws an error
    elementSorting.options.state.sorting = [elementSorting.sortState];
    elementSorting.dataTable.options.state.sorting = [elementSorting.sortState];

    await elementSorting.updateComplete;

    expect(
      elementSorting.shadowRoot?.querySelectorAll(
        ".pds-c-data-table__sort-chevrons[data-sort='asc']",
      ),
    ).toHaveLength(1);
  });

  it('handles a click on a sorting column', async () => {
    const elementSorting = (await fixture(
      `<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-column columnId="testy">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-cell cellId="testy">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-cell cellId="testy">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-cell cellId="testy">Test value</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>`,
    )) as PdsDataTable;

    const liveRegion = elementSorting.shadowRoot?.querySelector(
      '.pds-c-data-table__live-region',
    );

    const handler = jest.fn();
    elementSorting.addEventListener('pds-data-table-sorted', handler);

    const sortButton = elementSorting.shadowRoot?.querySelector(
      '.pds-c-data-table--sortable-header',
    ) as Element;

    await userEvent.click(sortButton);

    expect(
      elementSorting.shadowRoot?.querySelectorAll(
        ".pds-c-data-table__sort-chevrons[data-sort='asc']",
      ),
    ).toHaveLength(1);

    expect(liveRegion?.textContent).toContain('ascending');

    await userEvent.click(sortButton);

    expect(
      elementSorting.shadowRoot?.querySelectorAll(
        ".pds-c-data-table__sort-chevrons[data-sort='desc']",
      ),
    ).toHaveLength(1);

    expect(liveRegion?.textContent).toContain('descending');

    await userEvent.click(sortButton);

    expect(
      elementSorting.shadowRoot?.querySelectorAll(
        '.pds-c-data-table__sort-chevrons[data-sort]',
      ),
    ).toHaveLength(0);

    expect(handler.mock.calls[0][0].detail).toEqual({
      id: 'test',
      sort: 'asc',
    });
  });

  it('returns correct value from returnSortString', async () => {
    const elementSorting = (await fixture(
      `<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-column columnId="testy">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-cell cellId="testy">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-cell cellId="testy">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell><pds-data-table-cell cellId="testy">Test value</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>`,
    )) as PdsDataTable;

    expect(elementSorting.returnSortString(false)).toBe('asc');
    expect(elementSorting.returnSortString(true)).toBe('asc');
    expect(elementSorting.returnSortString('asc')).toBe('asc');
    expect(elementSorting.returnSortString('desc')).toBe('desc');
  });

  it('is accessible', async () => {
    const element = (await fixture(
      '<pds-data-table><pds-heading slot="caption" headingTag="h3" variant="title-default">Example table heading</pds-heading><pds-data-table-columns slot="columns"><pds-data-table-column columnId="test">Test</pds-data-table-column></pds-data-table-columns><pds-data-table-rows slot="rows"><pds-data-table-row><pds-data-table-cell cellId="test">Test value</pds-data-table-cell></pds-data-table-row><pds-data-table-row><pds-data-table-cell cellId="test">Extra row</pds-data-table-cell></pds-data-table-row></pds-data-table-rows></pds-data-table>',
    )) as PdsDataTable;
    await assert.isAccessible(element);
  });
});
