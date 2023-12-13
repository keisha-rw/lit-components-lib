import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsSwitch as PdsSwitchElement } from '@keisha/design-system';
import { PdsSwitchProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSwitch = createPdsReactComponent<PdsSwitchProps>()({
  tagName: 'pds-switch',
  elementClass: PdsSwitchElement,
  react: React,
  events: {
    onToggleOn: 'pds-switch-toggle-on' as EventName<Event>,
    onToggleOff: 'pds-switch-toggle-off' as EventName<Event>,
    onFocus: 'pds-switch-focus' as EventName<Event>,
    onBlur: 'pds-switch-blur' as EventName<Event>,
  },
});
