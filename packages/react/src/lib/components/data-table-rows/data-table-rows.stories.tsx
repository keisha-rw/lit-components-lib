import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { PdsDataTableRows } from './data-table-rows';

export default {
  title: 'Components/Data table/Data table rows',
  component: PdsDataTableRows,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the data table component. It should always be used within a data-table element.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsDataTableRows> = (args) => (
  <PdsDataTableRows {...args} />
);
export const Default = Template.bind({});
Default.args = {};
