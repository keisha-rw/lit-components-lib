import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { PdsDataTableRow } from './data-table-row';

export default {
  title: 'Components/Data table/Data table rows/Data table row',
  component: PdsDataTableRow,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the data table component. It should always be used within a data-table-rows element.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsDataTableRow> = (args) => (
  <PdsDataTableRow {...args} />
);
export const Default = Template.bind({});
Default.args = {};
