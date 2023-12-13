import * as React from 'react';
import { PdsCard as PdsCardElement } from '@keisha/design-system';
import { EventName } from '@lit-labs/react';
import { PdsCardProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsCard = createPdsReactComponent<PdsCardProps>()({
  tagName: 'pds-card',
  elementClass: PdsCardElement,
  react: React,
  events: {
    onClick: 'pds-card-click' as EventName<CustomEvent>,
  },
});
