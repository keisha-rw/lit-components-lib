import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './date-picker-input';
import '../date-picker/date-picker';

const meta: Meta = {
  title: 'Components/Date picker input',
  component: 'pds-date-picker-input',
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: [
        'pds-date-picker-select-date',
        'pds-date-picker-change-view',
        'pds-date-picker-escape',
        'pds-date-picker-input-change',
        'pds-date-picker-input-input',
      ],
    },
  },
  argTypes: {
    value: {
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
    label: {
      table: {
        category: 'attributes',
      },
      description:
        ' The label of the form field. Must be plain text. If label requires additional markup (e.g., superscript), then use the label slot instead.',
      control: 'text',
    },
    fieldId: {
      control: 'text',
    },
    hideLabel: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    helpText: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
  },
  render: (args) =>
    html`<pds-date-picker-input
      name="${args.name || nothing}"
      size="${args.size || nothing}"
      value="${args.value || nothing}"
      dateFormat="${args.dateFormat}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?required="${args.required}"
      label="${args.label || nothing}"
      lang="${args.lang || nothing}"
      errorMessage="${args.errorMessage || nothing}"
      ?hideLabel="${args.hideLabel}"
      type="${args.type || nothing}"
      maskType="${args.maskType || nothing}"
      .customInvalidDates="${args.customInvalidDates || nothing}"
      ><pds-date-picker slot="datepicker"></pds-date-picker
    ></pds-date-picker-input>`,
};
export default meta;

const customValidation = (date: Date) => {
  if (date.getDay() === 6 || date.getDay() === 0) {
    return false;
  }

  return true;
};

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    name: 'datePickerInput',
    label: 'Select a date',
    dateFormat: 'MM/DD/YYYY',
  },
  parameters: {
    date: new Date('February 14, 2023 12:00:00'),
    happo: {
      beforeScreenshot: () => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });
        const component = document.querySelector('pds-date-picker-input');

        component?.shadowRoot
          ?.querySelector('.pds-c-date-picker-input__input')
          ?.dispatchEvent(clickEvent);
      },
      delay: 300,
    },
  },
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  args: {
    name: 'datePickerInput-disabled',
    label: 'Select a date',
    dateFormat: 'MM/DD/YYYY',
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

export const Alt: StoryObj = {
  name: 'Alt',
  args: {
    name: 'datePickerInput-alt',
    label: 'Select a date',
    dateFormat: 'DD/MM/YYYY',
  },
};

export const DisabledWeekends: StoryObj = {
  name: 'Disabled weekends',
  args: {
    customInvalidDates: customValidation,
    name: 'datePickerInput-disabledWeekends',
    label: 'Select a date',
    dateFormat: 'MM/DD/YYYY',
  },
  render: (args) =>
    html`<pds-date-picker-input
      name="${args.name || nothing}"
      size="${args.size || nothing}"
      value="${args.value || nothing}"
      dateFormat="${args.dateFormat}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?required="${args.required}"
      label="${args.label || nothing}"
      errorMessage="${args.errorMessage || nothing}"
      ?hideLabel="${args.hideLabel}"
      type="${args.type || nothing}"
      maskType="${args.maskType || nothing}"
      .customInvalidDates="${args.customInvalidDates || nothing}"
      ><pds-date-picker
        disabledate="disable-weekends"
        slot="datepicker"
      ></pds-date-picker
    ></pds-date-picker-input>`,
  parameters: {
    date: new Date('February 14, 2023 12:00:00'),
    happo: {
      beforeScreenshot: () => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });
        const component = document.querySelector('pds-date-picker-input');

        component?.shadowRoot
          ?.querySelector('.pds-c-date-picker-input__input')
          ?.dispatchEvent(clickEvent);
      },
      delay: 300,
    },
  },
};

export const Spanish: StoryObj = {
  name: 'Spanish',
  args: {
    name: 'datePickerInput-spanish',
    label: 'Seleccione una fecha',
    dateFormat: 'MM/DD/AAAA',
  },
  parameters: {
    lang: 'es',
    date: new Date('February 14, 2023 12:00:00'),
    happo: {
      beforeScreenshot: () => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });
        const component = document.querySelector('pds-date-picker-input');

        component?.shadowRoot
          ?.querySelector('.pds-c-date-picker-input__input')
          ?.dispatchEvent(clickEvent);
      },
      delay: 1000,
    },
  },
  render: (args) =>
    html`<pds-date-picker-input
      name="${args.name || nothing}"
      size="${args.size || nothing}"
      value="${args.value || nothing}"
      dateFormat="${args.dateFormat}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?required="${args.required}"
      label="${args.label || nothing}"
      errorMessage="${args.errorMessage || nothing}"
      ?hideLabel="${args.hideLabel}"
      type="${args.type || nothing}"
      maskType="${args.maskType || nothing}"
      ><pds-date-picker locale="es-US" slot="datepicker"></pds-date-picker
    ></pds-date-picker-input>`,
};
