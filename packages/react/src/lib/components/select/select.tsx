import { EventName } from '@lit-labs/react';
import { PdsSelect as PdsSelectElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsSelectProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSelect = createPdsReactComponent<PdsSelectProps>()({
  tagName: 'pds-select',
  elementClass: PdsSelectElement,
  react: React,
  events: {
    onChange: 'pds-select-change' as EventName<CustomEvent>,
    onBlur: 'pds-select-blur' as EventName<CustomEvent>,
    onFocus: 'pds-select-focus' as EventName<CustomEvent>,
  },
});
