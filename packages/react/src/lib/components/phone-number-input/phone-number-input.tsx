import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsPhoneNumberInput as PdsPhoneNumberInputElement } from '@keisha/design-system';
import { PdsPhoneNumberInputProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsPhoneNumberInput =
  createPdsReactComponent<PdsPhoneNumberInputProps>()({
    tagName: 'pds-phone-number-input',
    elementClass: PdsPhoneNumberInputElement,
    react: React,
    events: {
      // In React, onChange is really the input event
      onChange: 'pds-phone-number-input-input' as EventName<CustomEvent>,
      onBlur: 'pds-phone-number-input-blur' as EventName<CustomEvent>,
      onFocus: 'pds-phone-number-input-focus' as EventName<CustomEvent>,
    },
  });
