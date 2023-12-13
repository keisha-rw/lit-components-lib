import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsBoxButton as PdsBoxButtonElement } from '@keisha/design-system';
import { PdsBoxButtonProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsBoxButton = createPdsReactComponent<PdsBoxButtonProps>()({
  tagName: 'pds-box-button',
  elementClass: PdsBoxButtonElement,
  react: React,
  events: {
    onClick: 'pds-box-button-click' as EventName<CustomEvent>,
  },
});
