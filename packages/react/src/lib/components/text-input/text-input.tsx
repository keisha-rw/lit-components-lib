import { EventName } from '@lit-labs/react';
import { PdsTextInput as PdsTextInputElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsTextInputProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsTextInput = createPdsReactComponent<PdsTextInputProps>()({
  tagName: 'pds-text-input',
  elementClass: PdsTextInputElement,
  react: React,
  events: {
    // In React, onChange is really the input event
    onChange: 'pds-text-input-input' as EventName<CustomEvent>,
    onBlur: 'pds-text-input-blur' as EventName<CustomEvent>,
    onFocus: 'pds-text-input-focus' as EventName<CustomEvent>,
  },
});
