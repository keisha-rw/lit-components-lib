import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import {
  columnsModelFour,
  columnsModelOne,
  columnsModelThree,
  columnsModelTwo,
  rowsModelCollapsible,
  rowsModelOne,
  rowsModelPagination,
} from './data-table-stories-data';
import './data-table';
import '../action-menu/action-menu';
import '../card/card';
import '../heading/heading';
import '../tooltip/tooltip';
import '../button/button';
import '../switch/switch';
import '@keisha/design-system-icons-web/help-circle';

const meta: Meta = {
  title: 'Components/Data table',
  component: 'pds-data-table',
  tags: ['autodocs'],
  render: (args) =>
    html`<pds-data-table
      striped=${args.striped || nothing}
      fixedHeight=${args.fixedHeight || nothing}
      ?stickyColumn=${args.stickyColumn}
      ?stickyHeader=${args.stickyHeader}
      ?removeBorder=${args.removeBorder}
      ?hoverableRows=${args.hoverableRows}
      paginationVariant=${args.paginationVariant || nothing}
      globalFilter=${args.globalFilter || nothing}
      ?hideFilter=${args.hideFilter}
      ?expandAllOnLoad=${args.expandAllOnLoad}
      columns=${args.columns || nothing}
      rows=${args.rows || nothing}
      ?disableAllSorting=${args.disableAllSorting}
      ?hideCaption=${args.hideCaption}
      ><div slot="caption">
        <pds-heading headingTag="h3" variant="title-default"
          >Example table heading</pds-heading
        >
      </div>
      ${args.columnsSlot} ${args.rowsSlot}
    </pds-data-table>`,
  parameters: {
    happo: {
      // @ts-expect-error
      waitFor: () => document.querySelector('pds-data-table')?.updateComplete,
      delay: 1000,
    },
    docs: {
      description: {
        component: 'Note: This table component uses the _light-dom_.',
      },
    },
    actions: {
      handles: [
        'pds-data-table-input-updated',
        'pds-data-table-sorted',
        'pds-pagination-click',
        'pds-pagination-item-click',
        'pds-text-input-change',
        'pds-text-input-input',
        'pds-select-change',
        'pds-switch-toggle-on',
        'pds-switch-toggle-off',
      ],
    },
  },
  argTypes: {
    columnsSlot: { table: { disable: true } },
    rowsSlot: { table: { disable: true } },
    sortable: { table: { disable: true } },
    striped: {
      control: 'select',
      options: ['odd', 'even', 'default'],
    },
    paginationVariant: {
      control: 'select',
      options: ['arrows', 'no-arrows', 'none', 'default'],
    },
  },
};
export default meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {
    columnsSlot: columnsModelTwo,
    rowsSlot: rowsModelPagination,
  },
};

export const StripedEven: StoryObj = {
  name: 'Striped even',
  args: {
    columnsSlot: columnsModelOne,
    rowsSlot: rowsModelOne,
    striped: 'even',
  },
};

export const HideFilter: StoryObj = {
  name: 'Hide filter',
  args: {
    columnsSlot: columnsModelOne,
    rowsSlot: rowsModelOne,
    hideFilter: true,
  },
};

export const ExpandableRow: StoryObj = {
  name: 'Expandable row',
  args: {
    columnsSlot: columnsModelOne,
    rowsSlot: rowsModelCollapsible,
  },
};

export const RemoveBorder: StoryObj = {
  name: 'Remove border',
  args: {
    columnsSlot: columnsModelOne,
    rowsSlot: rowsModelOne,
    removeBorder: true,
  },
};

export const DataTableWithStickyHeader: StoryObj = {
  name: 'Sticky header',
  args: {
    stickyHeader: true,
    paginationVariant: 'none',
    columnsSlot: columnsModelTwo,
    rowsSlot: rowsModelPagination,
  },
  parameters: {
    happo: {
      waitFor: document
        .querySelector('pds-data-table')
        ?.shadowRoot?.querySelector('.pds-c-table--is-pinned'),
      beforeScreenshot: () => {
        setTimeout(() => {
          document
            .querySelector('pds-data-table')
            ?.shadowRoot?.querySelector('pds-table')
            ?.shadowRoot?.querySelector('.pds-c-table__wrapper')
            ?.scrollTo(0, 100);
          document
            .querySelector('pds-data-table')
            ?.shadowRoot?.querySelector('pds-table')
            ?.shadowRoot?.querySelector('.pds-c-table__wrapper')
            ?.scrollTo(0, 0);
        }, 200);
      },
    },
  },
};

export const DataTableWithStickyColumn: StoryObj = {
  name: 'Sticky column',
  args: {
    stickyColumn: true,
    columnsSlot: columnsModelTwo,
    rowsSlot: rowsModelPagination,
  },
};

export const DataTableWithFixedHeightAndStickyHeader: StoryObj = {
  name: 'Fixed height and sticky header',
  args: {
    stickyHeader: true,
    fixedHeight: '300px',
    paginationVariant: 'none',
    columnsSlot: columnsModelTwo,
    rowsSlot: rowsModelPagination,
  },
  parameters: {
    happo: {
      waitFor: document
        .querySelector('pds-data-table')
        ?.shadowRoot?.querySelector('pds-table')
        ?.shadowRoot?.querySelector('.pds-c-table--can-be-scrolled-down'),
      delay: 500,
      beforeScreenshot: () => {
        setTimeout(() => {
          document
            .querySelector('pds-data-table')
            ?.shadowRoot?.querySelector('pds-table')
            ?.shadowRoot?.querySelector('.pds-c-table__wrapper')
            ?.scrollTo(0, 100);
          document
            .querySelector('pds-data-table')
            ?.shadowRoot?.querySelector('pds-table')
            ?.shadowRoot?.querySelector('.pds-c-table__wrapper')
            ?.scrollTo(0, 0);
        }, 200);
      },
    },
  },
};

export const HidePagination: StoryObj = {
  name: 'Hide pagination',
  args: {
    columnsSlot: columnsModelOne,
    rowsSlot: rowsModelOne,
    paginationVariant: 'none',
  },
};

export const DisableAllSorting: StoryObj = {
  name: 'Disable all sorting',
  args: {
    columnsSlot: columnsModelThree,
    rowsSlot: rowsModelPagination,
    disableAllSorting: true,
  },
  parameters: {
    happo: {
      delay: 500,
    },
  },
};

export const HideCaption: StoryObj = {
  name: 'Hide caption',
  args: {
    columnsSlot: columnsModelOne,
    rowsSlot: rowsModelOne,
    hideCaption: true,
  },
};

export const LoadDataFromObject: StoryObj = {
  name: 'Load data from object',
  args: {},
  parameters: {
    happo: {
      delay: 300,
    },
  },
  render: () =>
    html`<pds-data-table id="test"
        ><pds-heading slot="caption" headingTag="h3" variant="title-default"
          >Example table heading</pds-heading
        ></pds-data-table
      >
      <script>
        // in this case, we are storing the below variables to window to prevent a storybook rendering issue
        window.pdsDatatableInstance = document.querySelector('#test');

        window.columnsDefArrayObj = [
          {
            id: 'firstName',
            header: 'First name',
            meta: {
              align: 'left',
            },
            accessorKey: 'firstName',
          },
          {
            id: 'lastName',
            header: 'Last name',
            meta: {
              align: 'left',
            },
            accessorKey: 'lastName',
          },
          {
            id: 'alterEgo',
            header: 'Alter ego',
            meta: {
              align: 'right',
            },
            accessorKey: 'alterEgo',
            cell: (cell) => {
              return 'This individual becomes ' + cell.getValue();
            },
          },
          {
            id: 'filterableContent',
            meta: {
              hidden: true,
            },
            accessorKey: 'filterableContent',
          },
        ];

        window.rowsArrayObj = [
          {
            firstName: 'Michael',
            lastName: 'Jordan',
            alterEgo: 'Air Jordan',
            filterableContent:
              'This is full width content this individual becomes Air Jordan',
            subRows: [
              {
                fullWidth: 'This is full width content',
                filterableContent: 'This is full width content',
              },
            ],
          },
          {
            firstName: 'Arthur',
            lastName: 'Curry',
            status: 'single',
            alterEgo: 'Aquaman',
            filterableContent:
              'This is a second full width content this individual becomes Aquaman',
            subRows: [
              {
                fullWidth: 'This is full width content',
                filterableContent: 'This is full width content',
              },
              {
                fullWidth: 'This is a second full width content',
                filterableContent: 'This is a second full width content',
              },
            ],
          },
        ];

        window.pdsDatatableInstance.columns = columnsDefArrayObj;
        window.pdsDatatableInstance.data = rowsArrayObj;
      </script>`,
};

export const Loading: StoryObj = {
  name: 'Loading',
  args: {},
  parameters: {
    happo: {
      delay: 500,
    },
  },
};

export const HoverableRows: StoryObj = {
  name: 'Hoverable rows',
  args: {
    columnsSlot: columnsModelOne,
    rowsSlot: rowsModelOne,
    hoverableRows: true,
  },
  parameters: {
    happo: {
      waitFor: () =>
        document
          .querySelector('pds-data-table')
          ?.shadowRoot?.querySelector('pds-pagination-item'),
      delay: 1000,
    },
  },
};

export const InputCells: StoryObj = {
  name: 'Input cells',
  args: {
    columnsSlot: columnsModelFour,
    rowsSlot: rowsModelOne,
    hoverableRows: true,
  },
};
