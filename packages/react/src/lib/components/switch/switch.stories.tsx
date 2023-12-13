import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { PdsSwitch } from './switch';

export default {
  title: 'Components/Switch',
  component: PdsSwitch,
  tags: ['autodocs'],
  argTypes: {
    // properties we want to remove from the storybook table
    required: {
      table: {
        disable: true,
      },
    },
    helpText: {
      table: {
        disable: true,
      },
    },
    errorMessage: {
      table: {
        disable: true,
      },
    },
    readonly: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: StoryFn<typeof PdsSwitch> = (args) => <PdsSwitch {...args} />;
export const Default = Template.bind({});
Default.args = { label: 'This is a switch', hideLabel: true };

export const Activated = Template.bind({});
Activated.args = {
  checked: true,
  label: 'This is a active switch',
  hideLabel: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'This is a disabled switch',
  hideLabel: true,
};

export const ActiveDisabled = Template.bind({});
ActiveDisabled.storyName = 'Active disabled';
ActiveDisabled.args = {
  checked: true,
  disabled: true,
  label: 'This is a disabled active switch',
  hideLabel: true,
};

export const Label = Template.bind({});
Label.args = {
  label: 'Switch label',
};

export const LabelRight = Template.bind({});
LabelRight.storyName = 'Label right';
LabelRight.args = {
  label: 'Switch label',
  labelRight: true,
};
