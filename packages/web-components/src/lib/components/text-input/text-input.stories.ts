import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import { themedefault } from '@keisha/design-system-tokens';
import './text-input';

export default {
  title: 'Components/Text input',
  component: 'pds-text-input',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'sm'],
    },
    type: {
      control: 'select',
      options: ['email', 'number', 'password', 'search', 'text', 'url'],
    },
    pattern: {
      control: 'text',
    },
    inputmode: {
      control: 'select',
      options: ['none', 'text', 'decimal', 'numeric', 'search', 'email', 'url'],
    },
    autocomplete: {
      control: 'select',
      options: [
        'off',
        'on',
        'name',
        'honorific-prefix',
        'given-name',
        'additional-name',
        'family-name',
        'honorific-suffix',
        'nickname',
        'email',
        'username',
        'new-password',
        'current-password',
        'one-time-code',
        'organization-title',
        'organization',
        'street-address',
        'address-line1',
        'address-line2',
        'address-line3',
        'address-level4',
        'address-level3',
        'address-level2',
        'address-level1',
        'country',
        'country-name',
        'postal-code',
        'cc-name',
        'cc-given-name',
        'cc-additional-name',
        'cc-family-name',
        'cc-number',
        'cc-exp',
        'cc-exp-month',
        'cc-exp-year',
        'cc-csc',
        'cc-type',
        'transaction-currency',
        'transaction-amount',
        'language',
        'bday',
        'bday-day',
        'bday-month',
        'bday-year',
        'sex',
        'impp',
        'url',
        'photo',
      ],
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
    value: {
      control: 'text',
    },
    fieldId: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
  },
  render: (args) =>
    html`<pds-text-input
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
      maskType="${args.maskType || nothing}"
    ></pds-text-input>`,
  parameters: {
    actions: {
      handles: ['pds-text-input-change', 'pds-text-input-input'],
    },
  },
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Basic: StoryObj = {
  args: {
    name: 'basicTextInput',
    label: 'This is the label',
  },
};

export const Required: StoryObj = {
  args: {
    name: 'requiredInput',
    label: 'This is the label',
    required: true,
  },
};

export const DefaultValue: StoryObj = {
  name: 'Default value',
  args: {
    name: 'defaultValueInput',
    label: 'This is the label',
    value: 'input value',
  },
};

export const Error: StoryObj = {
  args: {
    name: 'errorInput',
    label: 'This is the label',
    errorMessage: 'Error message goes here.',
  },
};

export const HelpText: StoryObj = {
  name: 'Help text',
  args: {
    name: 'HelpTextInput',
    label: 'This is the label',
    helpText: 'This is the help text.',
  },
};

export const Disabled: StoryObj = {
  args: {
    name: 'disabledInput',
    label: 'This is the label',
    helpText: 'This is the help text.',
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
    name: 'readonlyInput',
    label: 'This is the label',
    value: 'input value',
    readonly: true,
  },
};

export const Small: StoryObj = {
  args: {
    name: 'smallInput',
    label: 'This is the label',
    size: 'sm',
  },
};

export const HiddenLabel: StoryObj = {
  name: 'Hidden label',
  args: {
    name: 'hiddenLabelInput',
    label: 'This is the label',
    hideLabel: true,
  },
};

export const NumberInput: StoryObj = {
  name: 'Number input',
  args: {
    name: 'numberInput',
    label: 'This is the label',
    type: 'number',
  },
};

export const Prefixed: StoryObj = {
  args: {
    name: 'prefixedInput',
    label: 'This is the label',
  },
  render: (args) =>
    html`<pds-text-input name="${args.name}" label="${args.label}"
      ><span slot="prefix">$</span></pds-text-input
    >`,
};

export const Suffixed: StoryObj = {
  args: {
    name: 'suffixedInput',
    label: 'This is the label',
  },
  render: (args) =>
    html`<pds-text-input name="${args.name}" label="${args.label}"
      ><span slot="suffix"
        ><pds-icon-search
          color=${themedefault.SemanticBorderInteractiveDefault}
        ></pds-icon-search></span
    ></pds-text-input>`,
};

export const SSNMask: StoryObj = {
  name: 'SSN mask',
  args: {
    name: 'ssnMask',
    label: 'Please enter a valid social security number.',
    maskType: 'ssn',
    value: '123456789',
  },
};

export const TaxId: StoryObj = {
  name: 'Tax ID',
  args: {
    name: 'taxId',
    label: 'Please enter a valid tax identification number.',
    maskType: 'tax-id',
    value: '123456789',
  },
};
