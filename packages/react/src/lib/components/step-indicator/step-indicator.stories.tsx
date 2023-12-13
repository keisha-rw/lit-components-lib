import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsStepIndicatorItem } from '../step-indicator-item/step-indicator-item';
import { PdsStepIndicator } from './step-indicator';

export default {
  title: 'Components/Step indicator',
  component: PdsStepIndicator,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsStepIndicator> = (args) => {
  if (args.interactive) {
    return (
      <PdsStepIndicator {...args}>
        <PdsStepIndicatorItem
          onClick={(e: any) =>
            action('pds-step-indicator-item-click')(e.detail)
          }
          status="completed"
          href="#"
        >
          Step 1
        </PdsStepIndicatorItem>
        <PdsStepIndicatorItem
          status="current"
          active
          href="#"
          onClick={(e: any) => {
            e.preventDefault();
            // eslint-disable-next-line no-console
            console.log(e);
          }}
        >
          Step two is longer and wraps to the second line
        </PdsStepIndicatorItem>
        <PdsStepIndicatorItem
          onClick={(e: any) =>
            action('pds-step-indicator-item-click')(e.detail)
          }
          status="incomplete"
        >
          Step 3
        </PdsStepIndicatorItem>
        <PdsStepIndicatorItem
          onClick={(e: any) =>
            action('pds-step-indicator-item-click')(e.detail)
          }
          status="incomplete"
        >
          Step 4
        </PdsStepIndicatorItem>
      </PdsStepIndicator>
    );
  }

  return (
    <PdsStepIndicator {...args}>
      <PdsStepIndicatorItem
        onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
        status="completed"
      >
        Step 1
      </PdsStepIndicatorItem>
      <PdsStepIndicatorItem
        onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
        status="current"
        active
      >
        Step two is longer and wraps to the second line
      </PdsStepIndicatorItem>
      <PdsStepIndicatorItem
        onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
        status="incomplete"
      >
        Step 3
      </PdsStepIndicatorItem>
      <PdsStepIndicatorItem
        onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
        status="incomplete"
      >
        Step 4
      </PdsStepIndicatorItem>
    </PdsStepIndicator>
  );
};

export const Horizontal = Template.bind({});
Horizontal.args = {};

export const HorizontalInteractive = Template.bind({});
HorizontalInteractive.storyName = 'Horizontal interactive';
HorizontalInteractive.args = {
  interactive: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
  variant: 'vertical',
};

export const VerticalInteractive = Template.bind({});
VerticalInteractive.storyName = 'Vertical interactive';
VerticalInteractive.args = {
  interactive: true,
  variant: 'vertical',
};

export const HorizontalInverted = Template.bind({});
HorizontalInverted.storyName = 'Horizontal inverted';
HorizontalInverted.args = {
  inverted: true,
};
HorizontalInverted.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};

export const HorizontalInteractiveInverted = Template.bind({});
HorizontalInteractiveInverted.storyName = 'Horizontal interactive inverted';
HorizontalInteractiveInverted.args = {
  interactive: true,
  inverted: true,
};
HorizontalInteractiveInverted.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};

export const PreviousStepActive = () => (
  <PdsStepIndicator>
    <PdsStepIndicatorItem
      onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
      status="completed"
      href="#"
      active
    >
      Step 1
    </PdsStepIndicatorItem>
    <PdsStepIndicatorItem
      onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
      status="current"
      href="#"
    >
      Step two is longer and wraps to the second line
    </PdsStepIndicatorItem>
    <PdsStepIndicatorItem
      onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
      status="incomplete"
    >
      Step 3
    </PdsStepIndicatorItem>
    <PdsStepIndicatorItem
      onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
      status="incomplete"
    >
      Step 4
    </PdsStepIndicatorItem>
  </PdsStepIndicator>
);
PreviousStepActive.storyName = 'Previous step active';

export const PreviousStepActiveInverted = () => (
  <PdsStepIndicator inverted>
    <PdsStepIndicatorItem
      onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
      status="completed"
      href="#"
      active
    >
      Step 1
    </PdsStepIndicatorItem>
    <PdsStepIndicatorItem
      onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
      status="current"
      href="#"
    >
      Step two is longer and wraps to the second line
    </PdsStepIndicatorItem>
    <PdsStepIndicatorItem
      onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
      status="incomplete"
    >
      Step 3
    </PdsStepIndicatorItem>
    <PdsStepIndicatorItem
      onClick={(e: any) => action('pds-step-indicator-item-click')(e.detail)}
      status="incomplete"
    >
      Step 4
    </PdsStepIndicatorItem>
  </PdsStepIndicator>
);
PreviousStepActiveInverted.storyName = 'Previous step active inverted';
PreviousStepActiveInverted.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};
