import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
// eslint-disable-next-line import/extensions
import './checkbox';

export default {
  title: 'Components/Checkbox',
  component: 'pds-checkbox',
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-checkbox-change'],
    },
  },
  argTypes: {
    value: {
      control: 'text',
    },
    label: {
      table: {
        category: 'attributes',
      },
      description:
        ' The label of the form field. Must be plain text. If label requires additional markup (e.g., superscript), then use the label slot instead.',
      control: 'text',
    },
    'slot:label': {
      name: 'label',
      control: 'text',
      table: {
        category: 'slots',
      },
      description:
        'Use this slot instead of the label property, if the label requires additional markup.',
    },
    fieldId: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
    readonly: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) =>
    html`<pds-checkbox
      errorMessage=${args.errorMessage}
      value=${args.value || nothing}
      ?required=${args.required}
      ?hideLabel=${args.hideLabel}
      ?disabled=${args.disabled}
      ?checked=${args.checked}
      label=${args.label}
      name=${args.name}
    ></pds-checkbox>`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    label: 'This checkbox is not disabled or checked.',
    name: 'defaultCheckbox',
  },
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  args: {
    label: 'This checkbox is disabled',
    disabled: true,
    name: 'disabledCheckbox',
  },
};

export const Checked: StoryObj = {
  name: 'Checked',
  args: {
    label: 'This checkbox is checked.',
    checked: true,
    name: 'checkedCheckBox',
  },
};

export const DisabledChecked: StoryObj = {
  name: 'Disabled checked',
  args: {
    label: 'This checkbox is disabled and checked.',
    checked: true,
    disabled: true,
    name: 'disabledCheckedCheckbox',
  },
};

export const Required: StoryObj = {
  name: 'Required',
  args: {
    label: 'This checkbox is required.',
    required: true,
    name: 'requiredCheckBox',
  },
};

export const HiddenLabel: StoryObj = {
  name: 'Hidden label',
  args: {
    label: 'This label is hidden.',
    hideLabel: true,
    name: 'hiddenLabelCheckbox',
  },
};

export const Error: StoryObj = {
  name: 'Error',
  args: {
    label: 'This checkbox has an error.',
    errorMessage: 'This is the error message.',
    name: 'nameCheckbox',
  },
};
