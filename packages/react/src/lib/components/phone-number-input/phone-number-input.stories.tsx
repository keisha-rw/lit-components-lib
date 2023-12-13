import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsPhoneNumberInput } from './phone-number-input';

export default {
  title: 'Components/Phone number input',
  component: PdsPhoneNumberInput,
  parameters: {
    actions: {
      handles: [
        'pds-phone-number-input-change',
        'pds-phone-number-input-input',
        'pds-phone-number-input-blur',
        'pds-phone-number-input-focus',
      ],
    },
  },
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsPhoneNumberInput> = (args) => (
  <PdsPhoneNumberInput
    {...args}
    onChange={action('pds-phone-number-input-input')}
    onFocus={action('pds-phone-number-input-focus')}
    onBlur={action('pds-phone-number-input-blur')}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  name: 'basicPhoneNumberInput',
  label: 'Mobile phone number',
};

export const Required = Template.bind({});
Required.args = {
  name: 'requiredPhoneNumberInput',
  label: 'Mobile phone number',
  required: true,
};

export const DefaultValue = Template.bind({});
DefaultValue.storyName = 'Default value';
DefaultValue.args = {
  name: 'defaultValuePhoneNumberInput',
  label: 'Mobile phone number',
  value: '800-986-3343',
};

export const Error = Template.bind({});
Error.args = {
  name: 'errorPhoneNumberInput',
  label: 'Mobile phone number',
  errorMessage: 'Error message goes here.',
};

export const HelpText = Template.bind({});
HelpText.storyName = 'Help text';
HelpText.args = {
  name: 'HelpPhoneNumberInput',
  label: 'Mobile phone number',
  helpText: 'Please enter a valid phone number.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabledPhoneNumberInput',
  label: 'Mobile phone number',
  helpText: 'Please enter a valid phone number.',
  disabled: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
  name: 'readonlyPhoneNumberInput',
  label: 'Mobile phone number',
  readonly: true,
};

export const Small = Template.bind({});
Small.args = {
  name: 'smallPhoneNumberInput',
  label: 'Mobile phone number',
  size: 'sm',
};

export const HiddenLabel = Template.bind({});
HiddenLabel.storyName = 'Hidden label';
HiddenLabel.args = {
  name: 'hiddenLabelPhoneNumberInput',
  label: 'Mobile phone number',
  hideLabel: true,
};
