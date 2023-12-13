import { EventName } from '@lit-labs/react';
import { PdsPaginationItem as PdsPaginationItemElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsPaginationItemProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsPaginationItem =
  createPdsReactComponent<PdsPaginationItemProps>()({
    tagName: 'pds-pagination-item',
    elementClass: PdsPaginationItemElement,
    react: React,
    events: {
      onClick: 'pds-pagination-item-click' as EventName<CustomEvent>,
    },
  });
