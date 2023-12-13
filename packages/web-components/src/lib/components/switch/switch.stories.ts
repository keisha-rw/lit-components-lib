import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './switch';

const meta: Meta = {
  title: 'Components/Switch',
  component: 'pds-switch',
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: [
        'pds-switch-toggle-on',
        'pds-switch-toggle-off',
        'pds-switch-blur',
        'pds-switch-focus',
      ],
    },
  },
  argTypes: {
    // properties we want to remove from the storybook table
    required: {
      table: {
        disable: true,
      },
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
    helpText: {
      table: {
        disable: true,
      },
    },
    errorMessage: {
      table: {
        disable: true,
      },
    },
    readonly: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) =>
    html`<pds-switch
      name="${args.name || nothing}"
      label="${args.label || nothing}"
      ?disabled=${args.disabled}
      ?checked=${args.checked}
      ?hideLabel="${args.hideLabel}"
      ?labelRight="${args.labelRight}"
    ></pds-switch>`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    label: 'This is a switch',
    hideLabel: true,
  },
};

export const Activeted: StoryObj = {
  name: 'Activated',
  args: {
    checked: true,
    name: 'activeSwitch',
    label: 'This is a active switch',
    hideLabel: true,
  },
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  args: {
    disabled: true,
    name: 'disabledSwitch',
    label: 'This is a disabled switch',
    hideLabel: true,
  },
};

export const ActiveDisabled: StoryObj = {
  name: 'Active disabled',
  args: {
    disabled: true,
    checked: true,
    name: 'DisabledActiveSwitch',
    label: 'This is a disabled active switch',
    hideLabel: true,
  },
};

export const Label: StoryObj = {
  name: 'Label',
  args: {
    label: 'Switch label',
  },
};

export const LabelRight: StoryObj = {
  name: 'Label right',
  args: {
    labelRight: true,
    label: 'Switch label',
  },
};
