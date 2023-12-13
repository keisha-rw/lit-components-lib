import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { PdsSegmentedControlItem } from './segmented-control-item';

export default {
  title: 'Components/Segmented control/Segmented control item',
  component: PdsSegmentedControlItem,
  parameters: {
    happo: false,
    action: {
      handles: ['pds-segmented-control-item-click'],
    },
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the segmented-control component.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsSegmentedControlItem> = (args) => (
  <PdsSegmentedControlItem {...args}>Option</PdsSegmentedControlItem>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
