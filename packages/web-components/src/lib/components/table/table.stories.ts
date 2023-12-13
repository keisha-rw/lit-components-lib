import { html, nothing } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './table';

const tableBasic = html`<table>
  <thead>
    <tr>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
  </tbody>
</table>`;

const tableExtraColumns = html`<table>
  <thead>
    <tr>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
    <tr>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
      <td><span>Cell Body</span></td>
    </tr>
  </tbody>
</table>`;

const tableExpandable = html`<table>
  <thead>
    <tr>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
      <th><span>Header</span></th>
    </tr>
  </thead>
  <tbody>
    <tr class="pds-c-table__expandable-row">
      <td colspan="5">
        <div class="pds-c-table__expandable-row-wrapper">
          <table
            cellpadding="0"
            cellspacing="0"
            class="pds-c-table__expandable-row-table"
          >
            <tbody>
              <tr>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
              </tr>
              <tr>
                <td colspan="5">
                  <div>Full width cell</div>
                </td>
              </tr>
              <tr>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
    <tr class="pds-c-table__expandable-row">
      <td colspan="5">
        <div class="pds-c-table__expandable-row-wrapper">
          <table
            cellpadding="0"
            cellspacing="0"
            class="pds-c-table__expandable-row-table"
          >
            <tbody>
              <tr>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
              </tr>
              <tr>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
              </tr>
              <tr>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
                <td><span>Cell Body</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>
</table>`;

export default {
  title: 'Components/Table',
  component: 'pds-table',
  tags: ['autodocs'],
  argTypes: {
    striped: {
      control: 'select',
      options: ['default', 'odd', 'even'],
    },
  },
  parameters: {
    happo: {
      delay: 1000,
    },
  },
  render: (args) =>
    html`<pds-table
      striped="${args.striped || nothing}"
      fixedHeight="${args.fixedHeight || nothing}"
      ?stickyHeader="${args.stickyHeader}"
      ?stickyColumn="${args.stickyColumn}"
      ?removeBorder="${args.removeBorder}"
      ?hoverableRows="${args.hoverableRows}"
    >
      ${args.nestedTableObject}
    </pds-table>`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: { nestedTableObject: tableBasic },
};

export const TableStripedEven: StoryObj = {
  name: 'Striped even',
  args: {
    striped: 'even',
    nestedTableObject: tableBasic,
  },
};

export const TableStripedOdd: StoryObj = {
  name: 'Striped odd',
  args: {
    striped: 'odd',
    nestedTableObject: tableBasic,
  },
};

export const TableWithoutBorder: StoryObj = {
  name: 'Without border',
  args: {
    removeBorder: true,
    nestedTableObject: tableBasic,
  },
};

export const TableWithStickyHeader: StoryObj = {
  name: 'Sticky header',
  args: {
    stickyHeader: true,
    nestedTableObject: tableBasic,
  },
};

export const TableWithStickyColumn: StoryObj = {
  name: 'Sticky column',
  args: {
    stickyColumn: true,
    nestedTableObject: tableExtraColumns,
  },
};

export const TableWithFixedHeight: StoryObj = {
  name: 'Fixed height',
  args: {
    fixedHeight: '300px',
    nestedTableObject: tableBasic,
  },
};

export const TableWithFixedHeightAndStickyHeader: StoryObj = {
  name: 'Fixed height and sticky header',
  args: {
    stickyHeader: true,
    fixedHeight: '300px',
    nestedTableObject: tableBasic,
  },
};

export const TableWithFixedHeightAndStickyHeaderAndStickyColumn: StoryObj = {
  name: 'Fixed height and sticky header and sticky column',
  args: {
    stickyColumn: true,
    stickyHeader: true,
    fixedHeight: '300px',
    nestedTableObject: tableExtraColumns,
  },
};

export const ExpandableRow: StoryObj = {
  name: 'Expandable row',
  args: { nestedTableObject: tableExpandable },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Axe can't see the colors of the hidden elements, so it fails on them.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/color-contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
};

export const HoverableRows: StoryObj = {
  name: 'Hoverable rows',
  args: {
    hoverableRows: true,
    nestedTableObject: tableBasic,
  },
};
