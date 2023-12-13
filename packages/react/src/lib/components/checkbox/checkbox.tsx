import { EventName } from '@lit-labs/react';
import { PdsCheckbox as PdsCheckboxElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsCheckboxProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsCheckbox = createPdsReactComponent<PdsCheckboxProps>()({
  tagName: 'pds-checkbox',
  elementClass: PdsCheckboxElement,
  react: React,
  events: {
    onChange: 'pds-checkbox-change' as EventName<CustomEvent>,
    onBlur: 'pds-checkbox-blur' as EventName<CustomEvent>,
    onFocus: 'pds-checkbox-focus' as EventName<CustomEvent>,
  },
});
