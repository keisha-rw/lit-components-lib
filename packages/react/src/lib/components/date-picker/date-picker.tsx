import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsDatePicker as PdsDatePickerElement } from '@keisha/design-system';
import { PdsDatePickerProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsDatePicker = createPdsReactComponent<PdsDatePickerProps>()({
  tagName: 'pds-date-picker',
  elementClass: PdsDatePickerElement,
  react: React,
  events: {
    selectDate: 'pds-date-picker-select-date' as EventName<CustomEvent>,
    changeView: 'pds-date-picker-change-view' as EventName<CustomEvent>,
  },
});
