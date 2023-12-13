import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsCollapsible } from './collapsible';

export default {
  title: 'Components/Collapsible',
  component: PdsCollapsible,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-collapsible-open', 'pds-collapsible-close'],
    },
  },
};

const Template: StoryFn<typeof PdsCollapsible> = (args) => (
  <PdsCollapsible {...args}>
    <span slot="summary-title">What is a 1099 tax form?</span>
    <span slot="collapsible-content">
      Form 1099 is a series of forms described by the Internal Revenue Service
      (IRS) as “information returns”, used to report income other than a regular
      salary.
    </span>
  </PdsCollapsible>
);

export const Default = Template.bind({});
Default.args = {};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'inverted',
};
Inverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};

export const Strong = Template.bind({});
Strong.args = {
  variant: 'strong',
};

const MultipleItemTemplate: StoryFn<typeof PdsCollapsible> = (args) => (
  <>
    <PdsCollapsible {...args}>
      <span slot="summary-title">What is a 1099 tax form?</span>
      <span slot="collapsible-content">
        Form 1099 is a series of forms described by the Internal Revenue Service
        (IRS) as “information returns”, used to report income other than a
        regular salary.
      </span>
    </PdsCollapsible>
    <PdsCollapsible {...args}>
      <span slot="summary-title">What is a 1099 tax form?</span>
      <span slot="collapsible-content">
        Form 1099 is a series of forms described by the Internal Revenue Service
        (IRS) as “information returns”, used to report income other than a
        regular salary.
      </span>
    </PdsCollapsible>
  </>
);

export const MultipleItem = MultipleItemTemplate.bind({});
MultipleItem.storyName = 'Multiple item';
MultipleItem.args = {
  variant: 'default',
};
