import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsRadio } from '../radio/radio';
import { PdsRadioGroup } from './radio-group';

export default {
  title: 'Components/Radio group',
  component: PdsRadioGroup,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsRadioGroup> = (args) => (
  <PdsRadioGroup
    {...args}
    onFocus={action('pds-radio-group-focus')}
    onBlur={action('pds-radio-group-blur')}
    onChange={action('pds-radio-group-change')}
  >
    <PdsRadio label="Option 1" value="option-1" />
    <PdsRadio label="Option 2" value="option-2" />
    <PdsRadio label="Option 3" value="option-3" />
  </PdsRadioGroup>
);

export const Default = Template.bind({});
Default.args = {
  label: 'A group of radios',
  name: 'default',
};

export const SpacingSm = Template.bind({});
SpacingSm.storyName = 'Spacing small';
SpacingSm.args = {
  label: 'A group of radios',
  name: 'sm',
  spacing: 'sm',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'A group of radios',
  name: 'disabled',
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  label: 'A group of radios',
  name: 'required',
  required: true,
};

export const DefaultValue = Template.bind({});
DefaultValue.storyName = 'Pre-selected option';
DefaultValue.args = {
  label: 'A group of radios',
  name: 'required',
  value: 'option-2',
};

export const HiddenLabel = Template.bind({});
HiddenLabel.storyName = 'Hidden label';
HiddenLabel.args = {
  label: 'A group of radios',
  hideLabel: true,
  name: 'helpText',
};

export const HelpText = Template.bind({});
HelpText.storyName = 'Help text';
HelpText.args = {
  label: 'A group of radios',
  helpText: 'This is some help text.',
  name: 'helpText',
};

export const Error = Template.bind({});
Error.args = {
  label: 'A group of radios',
  errorMessage: 'Oh no, an error.',
  name: 'errorMessage',
};

export const DisabledOne = () => (
  <PdsRadioGroup name="disableOne" label="A group of radios">
    <PdsRadio label="Option 1" value="option-1" />
    <PdsRadio label="Option 2" value="option-2" disabled />
    <PdsRadio label="Option 3" value="option-3" />
  </PdsRadioGroup>
);
DisabledOne.storyName = 'One option disabled';
DisabledOne.args = {
  label: 'A group of radios',
  name: 'disabledOne',
};

const NamedTemplate: StoryFn<typeof PdsRadioGroup> = (args) => (
  <PdsRadioGroup {...args}>
    <PdsRadio label="Option 1" value="option-1" name="group-name" />
    <PdsRadio label="Option 2" value="option-2" name="group-name" />
    <PdsRadio label="Option 3" value="option-3" name="group-name" />
  </PdsRadioGroup>
);
export const Named = NamedTemplate.bind({});
Named.args = {
  label: 'A group of radios already named',
};
