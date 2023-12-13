import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsCollapsible as PdsCollapsibleElement } from '@keisha/design-system';
import { PdsCollapsibleProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsCollapsible = createPdsReactComponent<PdsCollapsibleProps>()({
  tagName: 'pds-collapsible',
  elementClass: PdsCollapsibleElement,
  react: React,
  events: {
    onOpen: 'pds-collapsible-open' as EventName<CustomEvent>,
    onClose: 'pds-collapsible-close' as EventName<CustomEvent>,
  },
});
