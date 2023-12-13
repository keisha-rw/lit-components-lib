import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './radio-group';
import '../radio/radio';

export default {
  title: 'Components/Radio group',
  component: 'pds-radio-group',
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: 'radio',
      options: ['default', 'sm'],
    },
    fieldId: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
    helpText: {
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
    slot: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    actions: {
      handles: ['pds-radio-group-change'],
    },
  },
  render: (args) =>
    html`<pds-radio-group
      label="${args.label || nothing}"
      ?hideLabel="${args.hideLabel}"
      name="${args.name || nothing}"
      spacing="${args.spacing || nothing}"
      helpText="${args.helpText || nothing}"
      errorMessage="${args.errorMessage || nothing}"
      ?disabled="${args.disabled}"
      ?required="${args.required}"
    >
      ${args.slot || nothing}
    </pds-radio-group>`,
} as Meta;

const slot = html`
  <pds-radio label="Option 1" value="option-1"></pds-radio>
  <pds-radio label="Option 2" value="option-2"></pds-radio>
  <pds-radio label="Option 3" value="option-3"></pds-radio>
`;
// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    label: 'A group of radios',
    name: 'default',
    slot,
  },
};

export const SpacingSm: StoryObj = {
  name: 'Spacing small',
  args: {
    label: 'A group of radios',
    name: 'sm',
    spacing: 'sm',
    slot,
  },
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  args: {
    label: 'A group of radios',
    name: 'disabled',
    disabled: true,
    slot,
  },
};

export const Required: StoryObj = {
  name: 'Required',
  args: {
    label: 'A group of radios',
    name: 'required',
    required: true,
    slot,
  },
};

export const HiddenLabel: StoryObj = {
  name: 'Hidden label',
  args: {
    label: 'A group of radios',
    hideLabel: true,
    name: 'helpText',
    slot,
  },
};

export const HelpText: StoryObj = {
  name: 'Help text',
  args: {
    label: 'A group of radios',
    helpText: 'This is some help text.',
    name: 'helpText',
    slot,
  },
};

export const Error: StoryObj = {
  name: 'Error',
  args: {
    label: 'A group of radios',
    errorMessage: 'Oh no, an error.',
    name: 'errorMessage',
    slot,
  },
};

export const DisabledOne: StoryObj = {
  name: 'One option disabled',
  args: {
    label: 'A group of radios',
    name: 'disabledOne',
    slot: html`
      <pds-radio label="Option 1" value="option-1"></pds-radio>
      <pds-radio label="Option 2" value="option-2" disabled></pds-radio>
      <pds-radio label="Option 3" value="option-3"></pds-radio>
    `,
  },
};

export const NamedRadios: StoryObj = {
  name: 'Radios already named',
  args: {
    label: 'A group of radios already named',
    slot: html`
      <pds-radio
        label="Option 1"
        value="option-1"
        name="group-name"
      ></pds-radio>
      <pds-radio
        label="Option 2"
        value="option-2"
        name="group-name"
      ></pds-radio>
      <pds-radio
        label="Option 3"
        value="option-3"
        name="group-name"
      ></pds-radio>
    `,
  },
};
