import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsActionMenuItem as PdsActionMenuItemElement } from '@keisha/design-system';
import { PdsActionMenuItemProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsActionMenuItem =
  createPdsReactComponent<PdsActionMenuItemProps>()({
    tagName: 'pds-action-menu-item',
    elementClass: PdsActionMenuItemElement,
    react: React,
    events: {
      onClick: 'pds-action-menu-item-click' as EventName<CustomEvent>,
    },
  });
