import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { PdsDataTableInputColumn } from './data-table-input-column';

export default {
  title: 'Components/Data table/Data table columns/Data table input column',
  component: PdsDataTableInputColumn,
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
};

const Template: StoryFn<typeof PdsDataTableInputColumn> = (args) => (
  <PdsDataTableInputColumn {...args} />
);
export const Default = Template.bind({});
Default.args = {
  columnId: 'data-table-column',
  dataSyncId: 'data-table-sync-column',
};
