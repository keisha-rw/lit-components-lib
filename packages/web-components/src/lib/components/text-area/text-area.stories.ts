import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './text-area';

export default {
  title: 'Components/Text area',
  component: 'pds-text-area',
  tags: ['autodocs'],
  argTypes: {
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
    size: {
      control: 'radio',
      options: ['default', 'sm'],
    },
    value: {
      control: 'text',
    },
    helpText: {
      control: 'text',
    },
    resize: {
      control: 'radio',
      options: ['smart', 'manual', 'horizontal', 'vertical', 'none'],
    },
    minLength: {
      control: 'number',
    },
    maxLength: {
      control: 'number',
    },
    fieldId: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
  },
  render: (args) =>
    html`<pds-text-area
      name="${args.name || nothing}"
      size="${args.size || nothing}"
      minlength="${args.minLength || nothing}"
      maxlength="${args.maxLength || nothing}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?required="${args.required}"
      resize="${args.resize || nothing}"
      helpText="${args.helpText || nothing}"
      value="${args.value || nothing}"
      label="${args.label || nothing}"
      errorMessage="${args.errorMessage || nothing}"
      ?hideLabel="${args.hideLabel}"
    ></pds-text-area>`,
  parameters: {
    actions: {
      handles: [
        'pds-text-area-change',
        'pds-text-area-input',
        'pds-text-area-focus',
        'pds-text-area-blur',
      ],
    },
  },
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Basic: StoryObj = {
  args: {
    name: 'basicTextArea',
    label: 'A sample basic PDS text area',
  },
};

export const Required: StoryObj = {
  args: {
    name: 'requiredTextArea',
    label: 'A sample required PDS text area',
    required: true,
  },
};

export const Error: StoryObj = {
  args: {
    name: 'errorTextArea',
    label: 'A sample basic PDS text area with error message',
    errorMessage: 'Error message goes here.',
  },
};

export const HelpText: StoryObj = {
  name: 'Help text',
  args: {
    name: 'helpTextArea',
    label: 'A sample basic PDS text area with help text',
    helpText: 'This is the help text.',
  },
};

export const Disabled: StoryObj = {
  args: {
    name: 'disabledTextArea',
    label: 'A sample disabled PDS text area',
    disabled: true,
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Disabled textareas should have less color contrast, but axe doesn't like it.
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
  name: 'Readonly',
  args: {
    name: 'readonlyTextArea',
    label:
      'A sample readonly PDS text area with default text set via "value" attribute',
    readonly: true,
    value:
      'Set the value attribute on PDS text area to render default text. The default text is fully editable, unless you set the "readonly" or "disabled" attributes to TRUE.',
  },
};

export const Small: StoryObj = {
  args: {
    name: 'smallTextArea',
    label: 'A sample small PDS text area',
    size: 'sm',
  },
};

export const HiddenLabel: StoryObj = {
  name: 'Hidden label',
  args: {
    name: 'hiddenLabelTextArea',
    label: 'A sample hidden label PDS text area',
    hideLabel: true,
  },
};

export const ResizeSmart: StoryObj = {
  name: 'Resize smart',
  args: {
    name: 'resizeSmart',
    label: 'A sample PDS text area with resize of "smart"',
    resize: 'smart',
  },
};

export const ResizeManual: StoryObj = {
  name: 'Resize manual',
  args: {
    name: 'resizeManual',
    label: 'A sample PDS text area with resize of "manual"',
    resize: 'manual',
  },
};

export const ResizeVertical: StoryObj = {
  name: 'Resize vertical',
  args: {
    name: 'resizeVertical',
    label: 'A sample PDS text area with resize of "vertical"',
    resize: 'vertical',
  },
};

export const ResizeNone: StoryObj = {
  name: 'Resize none',
  args: {
    name: 'resizeNone',
    label: 'A sample PDS text area with resize of "none"',
    resize: 'none',
  },
};
