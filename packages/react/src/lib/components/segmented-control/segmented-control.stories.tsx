import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsSegmentedControlItem } from '../segmented-control-item/segmented-control-item';
import { PdsSegmentedControl } from './segmented-control';

export default {
  title: 'Components/Segmented control',
  component: PdsSegmentedControl,
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'sm'],
    },
    disabled: { control: 'boolean' },
    ariaLabel: { control: 'text' },
  },
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsSegmentedControl> = (args) => (
  <PdsSegmentedControl {...args}>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 1
    </PdsSegmentedControlItem>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 2
    </PdsSegmentedControlItem>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 3
    </PdsSegmentedControlItem>
  </PdsSegmentedControl>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

const LargeLabelTemplate: StoryFn<typeof PdsSegmentedControl> = (args) => (
  <PdsSegmentedControl {...args}>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 1
    </PdsSegmentedControlItem>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 2 Large
    </PdsSegmentedControlItem>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 3
    </PdsSegmentedControlItem>
  </PdsSegmentedControl>
);

export const LargeLabel = LargeLabelTemplate.bind({});
LargeLabel.storyName = 'Long label';

const FourSegmentsTemplate: StoryFn<typeof PdsSegmentedControl> = (args) => (
  <PdsSegmentedControl {...args}>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 1
    </PdsSegmentedControlItem>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 2
    </PdsSegmentedControlItem>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 3
    </PdsSegmentedControlItem>
    <PdsSegmentedControlItem
      isSegmentActive
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 4
    </PdsSegmentedControlItem>
  </PdsSegmentedControl>
);

export const FourSegments = FourSegmentsTemplate.bind({});
FourSegments.storyName = '4 segments';

const FiveSegmentsTemplate: StoryFn<typeof PdsSegmentedControl> = (args) => (
  <PdsSegmentedControl {...args}>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 1
    </PdsSegmentedControlItem>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
      isSegmentActive
    >
      Option 2
    </PdsSegmentedControlItem>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 3
    </PdsSegmentedControlItem>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 4
    </PdsSegmentedControlItem>
    <PdsSegmentedControlItem
      onClick={(e: any) => action('pds-segmented-control-item-click')(e.detail)}
    >
      Option 5
    </PdsSegmentedControlItem>
  </PdsSegmentedControl>
);

export const FiveSegments = FiveSegmentsTemplate.bind({});
FiveSegments.storyName = '5 segments';
