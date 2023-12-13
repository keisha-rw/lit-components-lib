import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsPrimaryNavigationMainMenuItem as PdsPrimaryNavigationMainMenuItemElement } from '@keisha/design-system';
import { PdsPrimaryNavigationMainMenuItemProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsPrimaryNavigationMainMenuItem =
  createPdsReactComponent<PdsPrimaryNavigationMainMenuItemProps>()({
    tagName: 'pds-primary-navigation-main-menu-item',
    elementClass: PdsPrimaryNavigationMainMenuItemElement,
    react: React,
    events: {
      onClick:
        'pds-primary-navigation-main-menu-link-click' as EventName<CustomEvent>,
      onDropdownOpen:
        'pds-primary-navigation-main-menu-dropdown-open' as EventName<CustomEvent>,
      onDropdownClose:
        'pds-primary-navigation-main-menu-dropdown-close' as EventName<CustomEvent>,
    },
  });
