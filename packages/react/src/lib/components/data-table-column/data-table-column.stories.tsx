import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { PdsDataTableColumn } from './data-table-column';

export default {
  title: 'Components/Data table/Data table columns/Data table column',
  component: PdsDataTableColumn,
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

const Template: StoryFn<typeof PdsDataTableColumn> = (args) => (
  <PdsDataTableColumn {...args} />
);
export const Default = Template.bind({});
Default.args = {};
