import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './select';

export default {
  title: 'Components/Select',
  component: 'pds-select',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'sm'],
    },
    value: {
      control: 'text',
    },
    fieldId: {
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
    helpText: {
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
  parameters: {
    actions: {
      handles: ['pds-select-change'],
    },
  },
  render: (args) =>
    html`<pds-select
      label=${args.label || nothing}
      size=${args.size || nothing}
      name="select-field"
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?hideLabel=${args.hideLabel}
      helpText=${args.helpText || nothing}
      placeholder=${args.placeholder || nothing}
      errorMessage=${args.errorMessage || nothing}
      value=${args.value || nothing}
    >
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </pds-select>`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963
export const Default: StoryObj = {
  name: 'Default',
  args: {
    size: 'default',
    label: 'This is a label',
    placeholder: '',
  },
};

export const DefaultSmall: StoryObj = {
  name: 'Default small',
  args: {
    size: 'sm',
    label: 'This is a label',
    placeholder: '',
  },
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  args: {
    disabled: true,
    label: 'This is a label',
  },
};

export const DisabledWithHelpText: StoryObj = {
  name: 'Disabled with help text',
  args: {
    disabled: true,
    helpText:
      'Here is some more text explaining why you should choose an option',
    label: 'Choose an option',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // This is a disabled field, so we can ignore this check
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

export const Error: StoryObj = {
  name: 'Error',
  args: {
    required: true,
    label: 'This is a label',
    placeholder: '',
    errorMessage: 'Error message goes here.',
  },
};

export const Placeholder: StoryObj = {
  name: 'Placeholder',
  args: {
    required: true,
    label: 'This is a label',
    placeholder: 'Please choose an option.',
  },
};

export const PreselectedOption: StoryObj = {
  name: 'Pre-selected option',
  args: {
    required: true,
    label: 'This is a label',
    value: '2',
  },
};

export const HelpText: StoryObj = {
  name: 'Help text',
  args: {
    helpText:
      'Here is some more text explaining why you should choose an option',
    label: 'Choose an option',
  },
};

export const HiddenLabel: StoryObj = {
  name: 'Hidden label',
  args: {
    label: 'You cannot see this label, but we want it for screen readers',
    hideLabel: true,
    placeholder: 'Choose an option',
  },
};
