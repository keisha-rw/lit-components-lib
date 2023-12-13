import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsIconSearch } from '@keisha/design-system-icons-react';
import { PdsTextInput } from './text-input';

export default {
  title: 'Components/Text input',
  component: PdsTextInput,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: [
        'pds-text-input-change',
        'pds-text-input-input',
        'pds-text-input-blur',
        'pds-text-input-focus',
      ],
    },
  },
};

const Template: StoryFn<typeof PdsTextInput> = (args) => (
  <PdsTextInput
    {...args}
    onChange={action('pds-text-input-input')}
    onFocus={action('pds-text-input-focus')}
    onBlur={action('pds-text-input-blur')}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  name: 'basicTextInput',
  label: 'This is the label',
};

export const Required = Template.bind({});
Required.args = {
  name: 'requiredInput',
  label: 'This is the label',
  required: true,
};

export const DefaultValue = Template.bind({});
DefaultValue.storyName = 'Default value';
DefaultValue.args = {
  name: 'defaultValueTextInput',
  label: 'This is the label',
  value: 'default value',
};

export const Error = Template.bind({});
Error.args = {
  name: 'errorInput',
  label: 'This is the label',
  errorMessage: 'Error message goes here.',
};

export const HelpText = Template.bind({});
HelpText.storyName = 'Help text';
HelpText.args = {
  name: 'HelpTextInput',
  label: 'This is the label',
  helpText: 'This is the help text.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabledInput',
  label: 'This is the label',
  helpText: 'This is the help text.',
  disabled: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
  name: 'readonlyInput',
  label: 'This is the label',
  readonly: true,
};

export const Small = Template.bind({});
Small.args = {
  name: 'smallInput',
  label: 'This is the label',
  size: 'sm',
};

export const HiddenLabel = Template.bind({});
HiddenLabel.storyName = 'Hidden label';
HiddenLabel.args = {
  name: 'hiddenLabelInput',
  label: 'This is the label',
  hideLabel: true,
};

export const NumberInput = Template.bind({});
NumberInput.storyName = 'Number input';
NumberInput.args = {
  name: 'numberInput',
  label: 'This is the label',
  type: 'number',
};

const PrefixedTemplate: StoryFn<typeof PdsTextInput> = (args) => (
  <PdsTextInput {...args}>
    <span slot="prefix">$</span>
  </PdsTextInput>
);
export const PrefixedInput = PrefixedTemplate.bind({});
PrefixedInput.storyName = 'Prefixed input';
PrefixedInput.args = {
  name: 'prefixedInput',
  label: 'This is the label',
};

const SuffixedTemplate: StoryFn<typeof PdsTextInput> = (args) => (
  <PdsTextInput {...args}>
    <span slot="suffix">
      <PdsIconSearch />
    </span>
  </PdsTextInput>
);
export const SuffixedInput = SuffixedTemplate.bind({});
SuffixedInput.storyName = 'Suffixed input';
SuffixedInput.args = {
  name: 'suffixedInput',
  label: 'This is the label',
};

export const SSNMask = Template.bind({});
SSNMask.storyName = 'SSN mask';
SSNMask.args = {
  name: 'ssnMask',
  label: 'Please enter a valid social security number.',
  maskType: 'ssn',
};

export const TaxId = Template.bind({});
TaxId.storyName = 'Tax ID';
TaxId.args = {
  name: 'taxId',
  label: 'Please enter a valid tax identification number.',
  maskType: 'tax-id',
};
