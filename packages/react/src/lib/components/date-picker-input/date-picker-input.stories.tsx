import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsDatePickerInput } from './date-picker-input';
import { PdsDatePicker } from '../date-picker/date-picker';

export default {
  title: 'Components/Date picker input',
  component: PdsDatePickerInput,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: [
        'pds-date-picker-input-change',
        'pds-date-picker-input-input',
        'pds-date-picker-input-blur',
        'pds-date-picker-input-focus',
      ],
    },
  },
};

const customValidation = (date: Date) => {
  if (date.getDay() === 6 || date.getDay() === 0) {
    return false;
  }

  return true;
};

const Template: StoryFn<typeof PdsDatePickerInput> = (args) => (
  <PdsDatePickerInput {...args}>
    <PdsDatePicker slot="datepicker" />
  </PdsDatePickerInput>
);

export const Default = Template.bind({});
Default.args = {
  name: 'datePickerInput',
  label: 'Select a date',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabledDatePickerInput',
  label: 'Select a date',
  disabled: true,
};

export const Alt = Template.bind({});
Alt.args = {
  name: 'altDatePickerInput',
  label: 'Select a date',
  dateFormat: 'DD/MM/YYYY',
};

const DisabledWeekendsTemplate: StoryFn<typeof PdsDatePickerInput> = (args) => (
  <PdsDatePickerInput {...args}>
    <PdsDatePicker slot="datepicker" disableDate="disable-weekends" />
  </PdsDatePickerInput>
);

export const DisabledWeekends = DisabledWeekendsTemplate.bind({});
DisabledWeekends.storyName = 'Disabled weekends';
DisabledWeekends.args = {
  name: 'disabledWeekendsDatePickerInput',
  label: 'Select a date',
  dateFormat: 'MM/DD/YYYY',
  customInvalidDates: customValidation,
};

const SpanishTemplate: StoryFn<typeof PdsDatePickerInput> = (args) => (
  <PdsDatePickerInput {...args}>
    <PdsDatePicker slot="datepicker" locale="es-US" />
  </PdsDatePickerInput>
);

export const Spanish = SpanishTemplate.bind({});
Spanish.args = {
  name: 'spanishDatePickerInput',
  label: 'Seleccione una fecha',
  dateFormat: 'MM/DD/AAAA',
};
Spanish.parameters = {
  lang: 'es',
};
