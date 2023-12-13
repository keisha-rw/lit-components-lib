import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './data-table-row';

const meta: Meta = {
  title: 'Components/Data table/Data table rows/Data table row',
  component: 'pds-data-table-row',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the data table component. It should either be used within a data-table-rows element or within another data-table-row to create an expandable row.',
      },
    },
  },
  render: () => html`<pds-data-table-row></pds-data-table-row>`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
