import * as React from 'react';
import { PdsAlert as PdsAlertElement } from '@keisha/design-system';
import { EventName } from '@lit-labs/react';
import { PdsAlertProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsAlert = createPdsReactComponent<PdsAlertProps>()({
  tagName: 'pds-alert',
  elementClass: PdsAlertElement,
  react: React,
  events: {
    onClick: 'pds-button-click' as EventName<CustomEvent>,
  },
});
