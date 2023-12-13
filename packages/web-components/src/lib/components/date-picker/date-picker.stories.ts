import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './date-picker';

export default {
  title: 'Components/Date picker input/Date picker',
  component: 'pds-date-picker',
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-date-picker-select-date', 'pds-date-picker-change-view'],
    },
    date: new Date('February 14, 2023 12:00:00'),
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the date picker input component.',
      },
    },
  },
  argTypes: {
    initialDate: {
      control: 'text',
    },
  },
  render: () => html`<pds-date-picker></pds-date-picker>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const Spanish: StoryObj = {
  name: 'Spanish',
  args: {},
  render: () => html`<pds-date-picker locale="es-US"></pds-date-picker>`,
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
  render: (args) =>
    html`<pds-date-picker disabled="${args.disabled}"></pds-date-picker>`,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Color contrast is sufficient for disabled fields on most backgrounds.
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

export const NoYearSteppers: StoryObj = {
  name: 'No year steppers',
  args: {
    hideYearStepper: true,
  },
  render: (args) =>
    html`<pds-date-picker
      hideYearStepper="${args.hideYearStepper}"
    ></pds-date-picker>`,
};

export const NoMonthSteppers: StoryObj = {
  name: 'No month steppers',
  args: {
    hideMonthStepper: true,
  },
  render: (args) =>
    html`<pds-date-picker
      hideMonthStepper="${args.hideMonthStepper}"
    ></pds-date-picker>`,
};

// Datepicker input does not handle a range right now, commenting out until ticket #2769 is addressed
// export const Range: StoryObj = {
//   name: 'Range',
//   args: {
//     isRange: true,
//     initialDisplayedMonth: '2017-01-01',
//   },
//   render: (args) =>
//     html`<pds-date-picker
//       isRange="${args.isRange}"
//       initialDisplayedMonth="${args.initialDisplayedMonth}"
//     ></pds-date-picker>`,
// };

export const FirstDayOfWeek: StoryObj = {
  name: 'First day of week',
  args: {
    firstDayOfWeek: 1,
  },
  render: (args) =>
    html`<pds-date-picker
      firstDayOfWeek="${args.firstDayOfWeek}"
    ></pds-date-picker>`,
};

export const SetInitialDate: StoryObj = {
  name: 'Set initial date',
  args: {
    initialDisplayedMonth: '2022-01-01',
    initialDate: '2022-01-01',
  },
  render: (args) =>
    html`<pds-date-picker
      initialDisplayedMonth="${args.initialDisplayedMonth}"
      initialDate="${args.initialDate}"
    ></pds-date-picker>`,
};

// Datepicker input does not handle a range right now, commenting out until ticket #2769 is addressed
// export const SetInitialDateArray: StoryObj = {
//   name: 'Set initial date array',
//   args: {
//     initialDisplayedMonth: '2022-01-01',
//     initialDate: '2022-01-01, 2022-01-10',
//   },
//   render: (args) =>
//     html`<pds-date-picker
//       initialDisplayedMonth="${args.initialDisplayedMonth}"
//       initialDate="${args.initialDate}"
//     ></pds-date-picker>`,
// };

export const SetInitialDisplayedMonth: StoryObj = {
  name: 'Set initial displayed month',
  args: {
    initialDisplayedMonth: '2022-01-01',
  },
  render: (args) =>
    html`<pds-date-picker
      initialDisplayedMonth="${args.initialDisplayedMonth}"
    ></pds-date-picker>`,
};

export const DisabledWeekends: StoryObj = {
  name: 'Disable weekends',
  args: {
    initialDisplayedMonth: '2017-01-01',
    disableDate: 'disable-weekends',
  },
  render: (args) =>
    html`<pds-date-picker
      disableDate="${args.disableDate}"
      initialDisplayedMonth="${args.initialDisplayedMonth}"
    ></pds-date-picker>`,
};

export const DisableSingleDate: StoryObj = {
  name: 'Disable single date',
  args: {
    initialDisplayedMonth: '2017-01-01',
    disableDate: '2017-01-01',
  },
  render: (args) =>
    html`<pds-date-picker
      disableDate="${args.disableDate}"
      initialDisplayedMonth="${args.initialDisplayedMonth}"
    ></pds-date-picker>`,
};

// Unknown use case for this - do not display in storybook for right now
// export const SetLabels: StoryObj = {
//   name: 'Set labels',
//   args: {
//     labels: {
//       clearButton: 'Change it up',
//       nextMonthButton: 'Change it up',
//       nextYearButton: 'Change it up',
//       picker: 'Change it up',
//       previousMonthButton: 'Change it up',
//       previousYearButton: 'Change it up',
//       todayButton: 'Change it up',
//     },
//   },
//   render: (args) =>
//     html`<pds-date-picker
//       labels="${JSON.stringify(args.labels)}"
//     ></pds-date-picker>`,
// };

// SetLabels.parameters = {
//   docs: {
//     source: {
//       code: `
//       <pds-date-picker labels='${JSON.stringify(
//         SetLabels.args?.labels,
//       )}'></pds-date-picker>

// `,
//     },
//   },
// };
