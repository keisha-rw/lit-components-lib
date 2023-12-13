import * as React from 'react';
import { PdsDatePickerInput as PdsDatePickerInputElement } from '@keisha/design-system';
import { EventName } from '@lit-labs/react';
import { PdsDatePickerInputProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsDatePickerInput =
  createPdsReactComponent<PdsDatePickerInputProps>()({
    tagName: 'pds-date-picker-input',
    elementClass: PdsDatePickerInputElement,
    react: React,
    events: {
      // In React, onChange is really the input event
      onChange: 'pds-date-picker-input-input' as EventName<CustomEvent>,
      onBlur: 'pds-date-picker-input-blur' as EventName<CustomEvent>,
      onFocus: 'pds-date-picker-input-focus' as EventName<CustomEvent>,
    },
  });
