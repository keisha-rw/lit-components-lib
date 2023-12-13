import { msg } from '@lit/localize';
import {
  RowData,
  createTable,
  TableOptions,
  TableOptionsResolved,
} from '@tanstack/table-core';
import { html, nothing } from 'lit';

export function flexRender<TProps extends object>(
  Comp: ((props: TProps) => string) | string | undefined,
  props: TProps,
) {
  return typeof Comp === 'function' ? Comp(props) : Comp;
}

export function usePDSTable<TData extends RowData>(
  options: TableOptions<TData>,
) {
  // Compose in the generic options to the user options.
  /* istanbul ignore next */
  const resolvedOptions: TableOptionsResolved<TData> = {
    state: {}, // Dummy state.
    onStateChange: () => {}, // noop
    renderFallbackValue: null,
    ...options,
  };

  // Create a new table and store it in state.
  const tableRef = { current: createTable<TData>(resolvedOptions) };

  // By default, manage table state here using the table's initial state.
  const state = tableRef.current.initialState;

  // Compose the default state above with any user state.
  // This will allow the user to only control a subset of the state if desired.
  tableRef.current.setOptions((prev) => ({
    ...prev,
    ...options,
    state: {
      ...state,
      ...options.state,
    },
    // Warning: we'll maintain only the user-provided state, which is mandatory!
    onStateChange: (updater) => {
      /* istanbul ignore next */
      options.onStateChange?.(updater);
    },
  }));

  return tableRef.current;
}

export function returnLoadingMarkup(context: any) {
  return html`<pds-table
      ><table>
        <thead>
          <tr>
            ${Array.from(Array(context.loadingColumnLength)).map(() => {
              return html`<th>
                <pds-skeleton-loader
                  variant="heading"
                  class="${context.classEl('heading-loader')}"
                ></pds-skeleton-loader>
              </th>`;
            })}
          </tr>
        </thead>
        <tbody>
          ${Array.from(Array(context.pageSize)).map(() => {
            return html`<tr>
              ${Array.from(Array(context.loadingColumnLength)).map(() => {
                return html`<td>
                  <pds-skeleton-loader
                    class="${context.classEl('body-loader')}"
                  ></pds-skeleton-loader>
                </td>`;
              })}
            </tr>`;
          })}
        </tbody>
      </table></pds-table
    ><slot hidden name="columns" @slotchange="${context.updateTableData}"></slot
    ><slot hidden name="rows" @slotchange="${context.updateTableData}"></slot>`;
}

export function returnFilterMarkup(context: any) {
  return context.hideFilter
    ? nothing
    : html`<pds-text-input
        class="${context.classEl('filter-input')}"
        name="suffixedInput"
        size="sm"
        label="${msg('Filter table')}"
        hideLabel=""
        value=${context.globalFilter || ''}
        id="tableFilter"
        @pds-text-input-input="${context.handleFilterChange}"
        @pds-text-input-change="${context.handleFilterChange}"
        ><span slot="suffix"><pds-icon-search></pds-icon-search></span
      ></pds-text-input>`;
}

export function returnPaginatorMarkup(context: any) {
  return context.paginationVariant !== 'none'
    ? html`<div class="${context.classEl('footer')}">
        <div class="${context.classEl('show-entries')}">
          ${context.dataTable.getFilteredRowModel().rows.length === 0
            ? msg('No entries')
            : html`${context.paginationSelectInteracted ||
              (context.dataTable.getFilteredRowModel().rows.length >
                context.pageSize &&
                context.dataTable.getPageCount() > 1)
                ? html`${msg('Show')}
                    <pds-select
                      class="${context.classEl('pagination-select')}"
                      hideLabel
                      name="select-field"
                      label="${msg('Number of rows to display in table')}"
                      size="sm"
                      value="${context.pageSize}"
                      @pds-select-change=${context.handlePaginationSelectChanged}
                    >
                      ${context.paginationSelectArray.map((entry: number) => {
                        return html`<option value="${entry}">${entry}</option>`;
                      })}
                    </pds-select>
                    ${msg('of')}`
                : nothing}
              ${context.dataTable.getFilteredRowModel().rows.length}
              ${context.dataTable.getFilteredRowModel().rows.length > 1
                ? msg('entries')
                : msg('entry')}`}
        </div>
        <pds-pagination
          class="${context.classEl('paginator')}"
          id="paginator"
          variant=${context.paginationVariant}
          backwardDisabled=${context.dataTable.getState().pagination
            .pageIndex === 0 || nothing}
          forwardDisabled=${context.dataTable.getState().pagination.pageIndex +
            1 ===
            context.dataTable.getPageCount() || nothing}
          @pds-pagination-click=${context.handlePaginationClick}
          >${context.paginatorMarkup}</pds-pagination
        >
      </div>`
    : nothing;
}
