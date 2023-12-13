import { EventName } from '@lit-labs/react';
import { PdsPrimaryNavigationDropdownLink as PdsPrimaryNavigationDropdownLinkElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsPrimaryNavigationDropdownLinkProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsPrimaryNavigationDropdownLink =
  createPdsReactComponent<PdsPrimaryNavigationDropdownLinkProps>()({
    tagName: 'pds-primary-navigation-dropdown-link',
    elementClass: PdsPrimaryNavigationDropdownLinkElement,
    react: React,
    events: {
      onClick:
        'pds-primary-navigation-dropdown-link-click' as EventName<CustomEvent>,
    },
  });
