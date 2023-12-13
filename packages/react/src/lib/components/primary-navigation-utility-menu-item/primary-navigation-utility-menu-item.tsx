import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsPrimaryNavigationUtilityMenuItem as PdsPrimaryNavigationUtilityMenuItemElement } from '@keisha/design-system';
import { PdsPrimaryNavigationUtilityMenuItemProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsPrimaryNavigationUtilityMenuItem =
  createPdsReactComponent<PdsPrimaryNavigationUtilityMenuItemProps>()({
    tagName: 'pds-primary-navigation-utility-menu-item',
    elementClass: PdsPrimaryNavigationUtilityMenuItemElement,
    react: React,
    events: {
      onHandleClick:
        'pds-primary-navigation-utility-menu-item-click' as EventName<CustomEvent>,
    },
  });
