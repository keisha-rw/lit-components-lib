import * as React from 'react';
import { PdsPrimaryNavigationMainMenu as PdsPrimaryNavigationMainMenuElement } from '@keisha/design-system';
import { EventName } from '@lit-labs/react';
import { PdsPrimaryNavigationMainMenuProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsPrimaryNavigationMainMenu =
  createPdsReactComponent<PdsPrimaryNavigationMainMenuProps>()({
    tagName: 'pds-primary-navigation-main-menu',
    elementClass: PdsPrimaryNavigationMainMenuElement,
    react: React,
    events: {
      onMainMenuDropdownOpen:
        'pds-primary-navigation-main-menu-dropdown-open' as EventName<CustomEvent>,
      onMainMenuDropdownClose:
        'pds-primary-navigation-main-menu-dropdown-close' as EventName<CustomEvent>,
      onMainMenuLinkClick:
        'pds-primary-navigation-main-menu-link-click' as EventName<CustomEvent>,
    },
  });
