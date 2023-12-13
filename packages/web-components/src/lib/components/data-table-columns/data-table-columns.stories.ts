import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './data-table-columns';

const meta: Meta = {
  title: 'Components/Data table/Data table columns',
  component: 'pds-data-table-columns',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the data table component. It should always be used within a data-table element within a columns slot.',
      },
    },
  },
  render: () => html`<pds-data-table-columns></pds-data-table-columns>`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
