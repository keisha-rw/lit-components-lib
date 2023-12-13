import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsSelect } from './select';

export default {
  title: 'Components/Select',
  component: PdsSelect,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsSelect> = (args) => (
  <PdsSelect
    {...args}
    onChange={action('pds-select-change')}
    onBlur={action('pds-select-blur')}
    onFocus={action('pds-select-focus')}
  />
);

export const Default = Template.bind({});
Default.args = {
  label: 'This is a label',
  name: 'default-select',
  placeholder: '',
  children: (
    <>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </>
  ),
};

export const DefaultSmall = Template.bind({});
DefaultSmall.storyName = 'Default small';
DefaultSmall.args = {
  size: 'sm',
  label: 'This is a label',
  placeholder: '',
  children: (
    <>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  id: 'disabled',
  label: 'This is a label',
  placeholder: '',
  children: (
    <>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </>
  ),
};

export const DisabledWithHelpText = Template.bind({});
DisabledWithHelpText.storyName = 'Disabled with help text';
DisabledWithHelpText.args = {
  disabled: true,
  id: 'disabledwhelptext',
  label: 'Choose an option',
  helpText: 'Here is some more text explaining why you should choose an option',
  children: (
    <>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </>
  ),
};

export const Error = Template.bind({});
Error.args = {
  required: true,
  placeholder: '',
  label: 'This is a label',
  errorMessage: 'Error message goes here.',
  children: (
    <>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </>
  ),
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  required: true,
  label: 'This is a label',
  placeholder: 'Please choose an option.',
  children: (
    <>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </>
  ),
};

export const DefaultValue = Template.bind({});
DefaultValue.storyName = 'Pre-selected option';
DefaultValue.args = {
  label: 'This is a label',
  name: 'defaultValue-select',
  value: 'option2',
  children: (
    <>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </>
  ),
};

export const HelpText = Template.bind({});
HelpText.storyName = 'Help text';
HelpText.args = {
  id: 'helptext',
  label: 'Choose an option',
  helpText: 'Here is some more text explaining why you should choose an option',
  children: (
    <>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </>
  ),
};

export const HiddenLabel = Template.bind({});
HiddenLabel.storyName = 'Hidden label';
HiddenLabel.args = {
  placeholder: 'Choose an option',
  hideLabel: true,
  label: 'You cannot see this label, but we want it for screen readers',
  children: (
    <>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </>
  ),
};
