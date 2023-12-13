import { EventName } from '@lit-labs/react';
import { PdsRadioGroup as PdsRadioGroupElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsRadioGroupProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsRadioGroup = createPdsReactComponent<PdsRadioGroupProps>()({
  tagName: 'pds-radio-group',
  elementClass: PdsRadioGroupElement,
  react: React,
  events: {
    onChange: 'pds-radio-group-change' as EventName<CustomEvent>,
    onBlur: 'pds-radio-group-blur' as EventName<CustomEvent>,
    onFocus: 'pds-radio-group-focus' as EventName<CustomEvent>,
  },
});
