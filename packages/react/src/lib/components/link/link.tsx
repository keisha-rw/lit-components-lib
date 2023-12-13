import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsLink as PdsLinkElement } from '@keisha/design-system';
import { PdsLinkProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsLink = createPdsReactComponent<PdsLinkProps>()({
  tagName: 'pds-link',
  elementClass: PdsLinkElement,
  react: React,
  events: {
    onClick: 'pds-link-click' as EventName<CustomEvent>,
  },
});
