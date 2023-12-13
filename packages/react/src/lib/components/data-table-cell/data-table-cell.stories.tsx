import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { PdsDataTableCell } from './data-table-cell';

export default {
  title: 'Components/Data table/Data table rows/Data table row/Data table cell',
  component: PdsDataTableCell,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the data table component. It should always be used within a data-table-row element.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsDataTableCell> = (args) => (
  <PdsDataTableCell {...args} />
);

export const Default = Template.bind({});
Default.args = {};
