import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsShowMore as PdsShowMoreElement } from '@keisha/design-system';
import { PdsShowMoreProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsShowMore = createPdsReactComponent<PdsShowMoreProps>()({
  tagName: 'pds-show-more',
  elementClass: PdsShowMoreElement,
  react: React,
  events: {
    onOpen: 'pds-show-more-open' as EventName<CustomEvent>,
    onClose: 'pds-show-more-close' as EventName<CustomEvent>,
  },
});
