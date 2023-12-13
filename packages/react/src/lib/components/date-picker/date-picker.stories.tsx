import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsDatePicker } from './date-picker';

export default {
  title: 'Components/Date picker input/Date picker',
  component: PdsDatePicker,
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
};

const Template: StoryFn<typeof PdsDatePicker> = (args) => (
  <PdsDatePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Spanish = Template.bind({});
Spanish.args = { locale: 'es-US' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const NoYearSteppers = Template.bind({});
NoYearSteppers.storyName = 'No year steppers';
NoYearSteppers.args = { hideYearStepper: true };

export const NoMonthSteppers = Template.bind({});
NoMonthSteppers.storyName = 'No month steppers';
NoMonthSteppers.args = { hideMonthStepper: true };

// Datepicker input does not handle a range right now, commenting out until ticket #2769 is addressed
// export const Range = Template.bind({});
// Range.args = { isRange: true };

export const ChangeFirstDayOfWeek = Template.bind({});
ChangeFirstDayOfWeek.storyName = 'Change first day of week';
ChangeFirstDayOfWeek.args = { firstDayOfWeek: 1 };

export const SetInitialDate = Template.bind({});
SetInitialDate.storyName = 'Set initial date';
SetInitialDate.args = {
  initialDate: '2022-01-01',
  initialDisplayedMonth: '2022-01-01',
};

// Datepicker input does not handle a range right now, commenting out until ticket #2769 is addressed
// export const SetInitialDateArray = Template.bind({});
// SetInitialDateArray.args = {
//   initialDate: '2022-01-01, 2022-01-10',
//   initialDisplayedMonth: '2022-01-01',
// };

export const SetInitialDisplayedMonth = Template.bind({});
SetInitialDisplayedMonth.storyName = 'Set initial displayed month';
SetInitialDisplayedMonth.args = {
  initialDisplayedMonth: '2022-01-01',
};

export const DisableWeekends = Template.bind({});
DisableWeekends.storyName = 'Disable weekends';
DisableWeekends.args = { disableDate: 'disable-weekends' };

export const DisableSingleDate = Template.bind({});
DisableSingleDate.storyName = 'Disable single date';
DisableSingleDate.args = {
  disableDate: '2023-02-01',
  initialDisplayedMonth: '2023-02-01',
};

// Unknown use case for this - do not display in storybook for right now
// export const SetLabels = Template.bind({});
// SetLabels.args = {
//   labels: {
//     clearButton: 'Change it up',
//     nextMonthButton: 'Change it up',
//     nextYearButton: 'Change it up',
//     picker: 'Change it up',
//     previousMonthButton: 'Change it up',
//     previousYearButton: 'Change it up',
//     todayButton: 'Change it up',
//   },
// };
