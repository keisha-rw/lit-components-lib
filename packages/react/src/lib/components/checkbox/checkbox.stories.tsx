import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsCheckbox } from './checkbox';

export default {
  title: 'Components/Checkbox',
  component: PdsCheckbox,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsCheckbox> = (args) => (
  <PdsCheckbox
    {...args}
    onFocus={action('pds-checkbox-focus')}
    onBlur={action('pds-checkbox-blur')}
    onChange={action('pds-checkbox-change')}
  />
);

export const Default = Template.bind({});
Default.args = {
  name: 'defaultCheckbox',
  label: 'This checkbox is not disabled or checked.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabledCheckbox',
  disabled: true,
  label: 'This checkbox is disabled.',
};

export const Checked = Template.bind({});
Checked.args = {
  name: 'checkedCheckbox',
  checked: true,
  label: 'This checkbox is checked.',
};

export const DisabledChecked = Template.bind({});
DisabledChecked.storyName = 'Disabled checked';
DisabledChecked.args = {
  name: 'disabledCheckedCheckbox',
  checked: true,
  disabled: true,
  label: 'This checkbox is disabled and checked.',
};

export const Required = Template.bind({});
Required.args = {
  name: 'requiredCheckbox',
  required: true,
  label: 'This checkbox is required.',
};

export const HiddenLabel = Template.bind({});
HiddenLabel.storyName = 'Hidden label';
HiddenLabel.args = {
  label: 'This label is hidden.',
  hideLabel: true,
  name: 'hiddenLabelCheckbox',
};

export const Error = Template.bind({});
Error.args = {
  name: 'errorCheckbox',
  errorMessage: 'This is the error message.',
  label: 'This checkbox has an error.',
};
