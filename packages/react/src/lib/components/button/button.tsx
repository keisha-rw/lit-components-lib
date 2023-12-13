import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsButton as PdsButtonElement } from '@keisha/design-system';
import { PdsButtonProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsButton = createPdsReactComponent<PdsButtonProps>()({
  tagName: 'pds-button',
  elementClass: PdsButtonElement,
  react: React,
  events: {
    onClick: 'pds-button-click' as EventName<CustomEvent>,
  },
});
