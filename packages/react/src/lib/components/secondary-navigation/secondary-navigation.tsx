import * as React from 'react';
import { PdsSecondaryNavigation as PdsSecondaryNavigationElement } from '@keisha/design-system';
import { EventName } from '@lit-labs/react';
import { PdsSecondaryNavigationProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSecondaryNavigation =
  createPdsReactComponent<PdsSecondaryNavigationProps>()({
    tagName: 'pds-secondary-navigation',
    elementClass: PdsSecondaryNavigationElement,
    react: React,
    events: {
      onDropdownClose:
        'pds-secondary-navigation-dropdown-close' as EventName<CustomEvent>,
      onDrodownOpen:
        'pds-secondary-navigation-dropdown-open' as EventName<CustomEvent>,
      onDropdownLinkClick:
        'pds-secondary-navigation-dropdown-link-click' as EventName<CustomEvent>,
      onLinkClick:
        'pds-secondary-navigation-link-click' as EventName<CustomEvent>,
    },
  });
