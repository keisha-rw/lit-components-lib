import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsPrimaryNavigation as PdsPrimaryNavigationElement } from '@keisha/design-system';
import { PdsPrimaryNavigationProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsPrimaryNavigation =
  createPdsReactComponent<PdsPrimaryNavigationProps>()({
    tagName: 'pds-primary-navigation',
    elementClass: PdsPrimaryNavigationElement,
    react: React,
    events: {
      onHandleClick:
        'pds-primary-navigation-item-click' as EventName<CustomEvent>,
      onNotificationLinkClick:
        'pds-primary-navigation-notification-link-click' as EventName<CustomEvent>,
      onPanelOpen:
        'pds-primary-navigation-panel-open' as EventName<CustomEvent>,
      onPanelClose:
        'pds-primary-navigation-panel-close' as EventName<CustomEvent>,
      onButtonOpen:
        'pds-primary-navigation-menu-button-open' as EventName<CustomEvent>,
      onButtonClose:
        'pds-primary-navigation-menu-button-close' as EventName<CustomEvent>,
      onMainMenuDropdownOpen:
        'pds-primary-navigation-main-menu-dropdown-open' as EventName<CustomEvent>,
      onMainMenuDropdownClose:
        'pds-primary-navigation-main-menu-dropdown-close' as EventName<CustomEvent>,
      onMainMenuLinkClick:
        'pds-primary-navigation-main-menu-link-click' as EventName<CustomEvent>,
      onUtilityMenuItemClick:
        'pds-primary-navigation-utility-menu-item-click' as EventName<CustomEvent>,
    },
  });
