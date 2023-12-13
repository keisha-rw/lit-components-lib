import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './phone-number-input';

const meta: Meta = {
  title: 'Components/Phone number input',
  component: 'pds-phone-number-input',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'sm'],
      pattern: {
        control: 'text',
      },
    },
    value: {
      control: 'text',
    },
    autocomplete: {
      control: 'radio',
      options: ['off', 'tel'],
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
    pattern: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
    helpText: {
      control: 'text',
    },
  },
  render: (args) =>
    html`<pds-phone-number-input
      name="${args.name || nothing}"
      size="${args.size || nothing}"
      value="${args.value || nothing}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?required="${args.required}"
      helpText="${args.helpText || nothing}"
      label="${args.label || nothing}"
      errorMessage="${args.errorMessage || nothing}"
      ?hideLabel="${args.hideLabel}"
      type="${args.type || nothing}"
    ></pds-phone-number-input>`,
  parameters: {
    actions: {
      handles: [
        'pds-phone-number-input-change',
        'pds-phone-number-input-input',
      ],
    },
  },
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Basic: StoryObj = {
  name: 'Basic',
  args: { name: 'basicPhoneNumberInput', label: 'Mobile phone number' },
};

export const Required: StoryObj = {
  args: {
    name: 'requiredPhoneNumberInput',
    label: 'Mobile phone number',
    required: true,
  },
};

export const DefaultValue: StoryObj = {
  name: 'Default value',
  args: {
    name: 'defaultValuePhoneNumberInput',
    label: 'Mobile phone number',
    value: '800-986-3343',
  },
};

export const Error: StoryObj = {
  args: {
    name: 'errorPhoneNumberInput',
    label: 'Mobile phone number',
    errorMessage: 'Error message goes here.',
  },
};

export const HelpText: StoryObj = {
  name: 'Help text',
  args: {
    name: 'phoneNumberHelpTextInput',
    label: 'Mobile phone number',
    helpText: 'Please enter a valid mobile phone number',
  },
};

export const Disabled: StoryObj = {
  args: {
    name: 'disabledPhoneNumberInput',
    label: 'Mobile phone number',
    helpText: 'Please enter a valid mobile phone number',
    disabled: true,
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Disabled inputs should have less color contrast, but axe doesn't like it.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/color-contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
};

export const Readonly: StoryObj = {
  args: {
    name: 'readonlyPhoneNumberInput',
    label: 'Mobile phone number',
    value: '800-986-3343',
    readonly: true,
  },
};

export const Small: StoryObj = {
  args: {
    name: 'smallPhoneNumberInput',
    label: 'Mobile phone number',
    size: 'sm',
  },
};

export const HiddenLabel: StoryObj = {
  name: 'Hidden label',
  args: {
    name: 'hiddenLabelPhoneNumberInput',
    label: 'Mobile phone number',
    hideLabel: true,
  },
};
