import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsTextArea } from './text-area';

export default {
  title: 'Components/Text area',
  component: PdsTextArea,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: [
        'pds-text-area-change',
        'pds-text-area-input',
        'pds-text-area-blur',
        'pds-text-area-focus',
      ],
    },
  },
};

const Template: StoryFn<typeof PdsTextArea> = (args) => (
  <PdsTextArea
    {...args}
    onChange={action('pds-text-area-input')}
    onFocus={action('pds-text-area-focus')}
    onBlur={action('pds-text-area-blur')}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  name: 'basicTextArea',
  label: 'A sample basic PDS text area',
};

export const Required = Template.bind({});
Required.args = {
  name: 'requiredTextArea',
  label: 'A sample required PDS text area',
  required: true,
};

export const Error = Template.bind({});
Error.args = {
  name: 'errorTextArea',
  label: 'A sample basic PDS text area with error message',
  errorMessage: 'Error message goes here.',
};

export const HelpText = Template.bind({});
HelpText.storyName = 'Help text';
HelpText.args = {
  name: 'helpTextArea',
  label: 'A sample basic PDS text area with help text',
  helpText: 'This is the help text.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabledTextArea',
  label: 'A sample disabled PDS text area',
  disabled: true,
};

export const Readonly = Template.bind({});
Readonly.storyName = 'Readonly';
Readonly.args = {
  name: 'readonlyTextArea',
  label:
    'A sample readonly PDS text area with default text set via "value" attribute',
  readonly: true,
  value:
    'Set the value attribute on PDS text area to render default text. The default text is fully editable, unless you set the "readonly" or "disabled" attributes to TRUE.',
};

export const Small = Template.bind({});
Small.args = {
  name: 'smallTextArea',
  label: 'A sample small PDS text area',
  size: 'sm',
};

export const HiddenLabel = Template.bind({});
HiddenLabel.storyName = 'Hidden label';
HiddenLabel.args = {
  name: 'hiddenLabelTextArea',
  label: 'A sample hidden label PDS text area',
  hideLabel: true,
};

export const ResizeSmart = Template.bind({});
ResizeSmart.storyName = 'Resize smart';
ResizeSmart.args = {
  name: 'resizeSmartTextArea',
  label: 'A sample PDS text area with resize of "smart"',
  resize: 'smart',
};

export const ResizeManual = Template.bind({});
ResizeManual.storyName = 'Resize manual';
ResizeManual.args = {
  name: 'resizeManualTextArea',
  label: 'A sample PDS text area with resize of "manual"',
  resize: 'manual',
};

export const ResizeVertical = Template.bind({});
ResizeVertical.storyName = 'Resize vertical';
ResizeVertical.args = {
  name: 'resizeVerticalTextArea',
  label: 'A sample PDS text area with resize of "vertical"',
  resize: 'vertical',
};

export const ResizeNone = Template.bind({});
ResizeNone.storyName = 'Resize none';
ResizeNone.args = {
  name: 'resizeNoneTextArea',
  label: 'A sample PDS text area with resize of "none"',
  resize: 'none',
};
