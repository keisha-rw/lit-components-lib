import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { PdsStatusIndicator } from './status-indicator';

const meta: Meta<typeof PdsStatusIndicator> = {
  title: 'Components/Status indicator',
  component: PdsStatusIndicator,
  tags: ['autodocs'],
};
export default meta;

const Template: StoryFn<typeof PdsStatusIndicator> = (args) => (
  <PdsStatusIndicator {...args}>
    <span>Status</span>
  </PdsStatusIndicator>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const DefaultWithCheck = Template.bind({});
DefaultWithCheck.storyName = 'Default with check icon';
DefaultWithCheck.args = {
  variant: 'default',
  icon: 'check',
};

export const DefaultWithBorder = Template.bind({});
DefaultWithBorder.storyName = 'Default with border';
DefaultWithBorder.args = {
  variant: 'default',
  border: true,
};

export const Negative = Template.bind({});
Negative.args = {
  variant: 'negative',
};

export const NegativeMinus = Template.bind({});
NegativeMinus.storyName = 'Negative with minus icon';
NegativeMinus.args = {
  variant: 'negative',
  icon: 'minus',
};

export const NegativeAlert = Template.bind({});
NegativeAlert.storyName = 'Negative with alert icon';
NegativeAlert.args = {
  variant: 'negative',
  icon: 'alert',
};

export const NegativeX = Template.bind({});
NegativeX.storyName = 'Negative with x icon';
NegativeX.args = {
  variant: 'negative',
  icon: 'x',
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: 'neutral',
};

export const NeutralMoreHorizontal = Template.bind({});
NeutralMoreHorizontal.storyName = 'Neutral with more horizontal icon';
NeutralMoreHorizontal.args = {
  variant: 'neutral',
  icon: 'moreHorizontal',
};

export const NeutralClock = Template.bind({});
NeutralClock.storyName = 'Neutral with clock icon';
NeutralClock.args = {
  variant: 'neutral',
  icon: 'clock',
};

export const NeutralMinus = Template.bind({});
NeutralMinus.storyName = 'Neutral with minus icon';
NeutralMinus.args = {
  variant: 'neutral',
  icon: 'minus',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

export const WarningAlert = Template.bind({});
WarningAlert.storyName = 'Warning with alert icon';
WarningAlert.args = {
  variant: 'warning',
  icon: 'alert',
};
