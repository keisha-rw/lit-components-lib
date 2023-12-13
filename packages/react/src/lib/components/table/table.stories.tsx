import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsTextInput } from '../text-input/text-input';
import { PdsTable } from './table';
import { PdsLink } from '../link/link';

export default {
  title: 'Components/Table',
  component: PdsTable,
  tags: ['autodocs'],
  parameters: {
    happo: {
      delay: 1000,
    },
    docs: {
      description: {
        component: 'Note: This table component uses the _light-dom_.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsTable> = (args) => (
  <PdsTable {...args}>
    <table>
      <thead>
        <tr>
          <th>
            <span>row 1 cell 1</span>
          </th>
          <th>
            <span>row 1 cell 2</span>
          </th>
          <th>
            <span>row 1 cell 3</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span>row 2 cell 1</span>
          </td>
          <td>
            <span>row 2 cell 2</span>
          </td>
          <td>
            <span>row 2 cell 3</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>row 3 cell 1</span>
          </td>
          <td>
            <span>row 3 cell 2</span>
          </td>
          <td>
            <span>row 3 cell 3</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>row 4 cell 1</span>
          </td>
          <td>
            <span>row 4 cell 2</span>
          </td>
          <td>
            <span>row 4 cell 3</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>row 5 cell 1</span>
          </td>
          <td>
            <span>row 5 cell 2</span>
          </td>
          <td>
            <span>row 5 cell 3</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>row 6 cell 1</span>
          </td>
          <td>
            <span>row 6 cell 2</span>
          </td>
          <td>
            <span>row 6 cell 3</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>row 7 cell 1</span>
          </td>
          <td>
            <span>row 7 cell 2</span>
          </td>
          <td>
            <span>row 7 cell 3</span>
          </td>
        </tr>
      </tbody>
    </table>
  </PdsTable>
);

const TemplateForExpandableRow: StoryFn<typeof PdsTable> = (args) => (
  <PdsTable {...args}>
    <table>
      <thead>
        <tr>
          <th>
            <span>Header</span>
          </th>
          <th>
            <span>Header</span>
          </th>
          <th>
            <span>Header</span>
          </th>
          <th>
            <span>Header</span>
          </th>
          <th>
            <span>Header</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="pds-c-table__expandable-row">
          {/* @ts-expect-error */}
          <td colSpan="5" aria-label="Expandable table row">
            <div className="pds-c-table__expandable-row-wrapper">
              <table
                cellPadding="0"
                cellSpacing="0"
                className="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td aria-label="text input">
                      <PdsTextInput size="sm" name="text input" label=" " />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr className="pds-c-table__expandable-row">
          <td colSpan={5} aria-label="Expandable table row">
            <div className="pds-c-table__expandable-row-wrapper">
              <table
                cellPadding="0"
                cellSpacing="0"
                className="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td aria-label="text input">
                      <PdsTextInput size="sm" name="text input" label=" " />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <PdsLink href="www.google.com">Link here</PdsLink>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <PdsLink href="www.google.com">Link here</PdsLink>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                    <td>
                      <span>Cell Body</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </PdsTable>
);

export const Default = Template.bind({});
Default.args = {};

export const TableStripedEven = Template.bind({});
TableStripedEven.storyName = 'Striped even';
TableStripedEven.args = { striped: 'even' };

export const TableStripedOdd = Template.bind({});
TableStripedOdd.storyName = 'Striped odd';
TableStripedOdd.args = { striped: 'odd' };

export const TableWithoutBorder = Template.bind({});
TableWithoutBorder.storyName = 'Without border';
TableWithoutBorder.args = { removeBorder: true };

export const TableWithStickyHeader = Template.bind({});
TableWithStickyHeader.storyName = 'Sticky header';
TableWithStickyHeader.args = { stickyHeader: true };

export const TableWithStickyColumn = Template.bind({});
TableWithStickyColumn.storyName = 'Sticky column';
TableWithStickyColumn.args = { stickyColumn: true };

export const TableWithFixedHeight = Template.bind({});
TableWithFixedHeight.storyName = 'Fixed height';
TableWithFixedHeight.args = { fixedHeight: '300px' };

export const TableWithFixedHeightAndStickyHeader = Template.bind({});
TableWithFixedHeightAndStickyHeader.storyName =
  'Fixed height and sticky header';
TableWithFixedHeightAndStickyHeader.args = {
  fixedHeight: '300px',
  stickyHeader: true,
};

export const TableWithFixedHeightAndStickyHeaderAndStickyColumn = Template.bind(
  {},
);
TableWithFixedHeightAndStickyHeaderAndStickyColumn.storyName =
  'Fixed height and sticky header and sticky column';
TableWithFixedHeightAndStickyHeaderAndStickyColumn.args = {
  fixedHeight: '300px',
  stickyHeader: true,
  stickyColumn: true,
};

export const HoverableRows = Template.bind({});
HoverableRows.storyName = 'Hoverable row';
HoverableRows.args = { hoverableRows: true };

export const TableExpandableRow = TemplateForExpandableRow.bind({});
TableExpandableRow.storyName = 'Expandable rows';
TableExpandableRow.args = {};
