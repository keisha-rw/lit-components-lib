import { EventName } from '@lit-labs/react';
import { PdsRadio as PdsRadioElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsRadioProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsRadio = createPdsReactComponent<PdsRadioProps>()({
  tagName: 'pds-radio',
  elementClass: PdsRadioElement,
  react: React,
  events: {
    onChange: 'pds-radio-change' as EventName<CustomEvent>,
    onBlur: 'pds-radio-blur' as EventName<CustomEvent>,
    onFocus: 'pds-radio-focus' as EventName<CustomEvent>,
  },
});
