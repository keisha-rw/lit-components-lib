import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsStepIndicatorItem } from './step-indicator-item';

export default {
  title: 'Components/Step indicator/Step indicator item',
  component: PdsStepIndicatorItem,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the step indicator component.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsStepIndicatorItem> = (args) => {
  return (
    <PdsStepIndicatorItem
      onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
      {...args}
    >
      Step 1
    </PdsStepIndicatorItem>
  );
};

export const CurrentNotInteractive = Template.bind({});
CurrentNotInteractive.storyName = 'Current, not interactive';
CurrentNotInteractive.args = {
  status: 'current',
};

export const CurrentInteractive = Template.bind({});
CurrentInteractive.storyName = 'Current, interactive';
CurrentInteractive.args = {
  status: 'current',
  active: true,
  href: '#',
};

export const CompletedNotInteractive = Template.bind({});
CompletedNotInteractive.storyName = 'Completed, not interactive';
CompletedNotInteractive.args = {
  status: 'completed',
};

export const CompletedInteractive = Template.bind({});
CompletedInteractive.storyName = 'Completed, interactive';
CompletedInteractive.args = {
  status: 'completed',
  href: '#',
};
export const IncompleteNotInteractive = Template.bind({});
IncompleteNotInteractive.storyName = 'Incomplete, not interactive';
IncompleteNotInteractive.args = {
  status: 'incomplete',
};

export const IncompleteInteractive = Template.bind({});
IncompleteInteractive.storyName = 'Incomplete, interactive';
IncompleteInteractive.args = {
  status: 'incomplete',
  href: '#',
};
