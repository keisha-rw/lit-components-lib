import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './data-table-input-column';

const meta: Meta = {
  title: 'Components/Data table/Data table columns/Data table input column',
  component: 'pds-data-table-input-column',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the data table component. It should always be used within a data-table-columns element.',
      },
    },
  },
  render: () =>
    html`<pds-data-table-input-column
      columnId="storybook"
      dataSyncId="datasync"
    ></pds-data-table-input-column>`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
