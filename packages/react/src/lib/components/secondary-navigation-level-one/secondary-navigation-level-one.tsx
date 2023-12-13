import * as React from 'react';
import { PdsSecondaryNavigationLevelOne as PdsSecondaryNavigationLevelOneElement } from '@keisha/design-system';
import { EventName } from '@lit-labs/react';
import { PdsSecondaryNavigationLevelOneProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSecondaryNavigationLevelOne =
  createPdsReactComponent<PdsSecondaryNavigationLevelOneProps>()({
    tagName: 'pds-secondary-navigation-level-one',
    elementClass: PdsSecondaryNavigationLevelOneElement,
    react: React,
    events: {
      onDropdownClose:
        'pds-secondary-navigation-dropdown-close' as EventName<CustomEvent>,
      onDrodownOpen:
        'pds-secondary-navigation-dropdown-open' as EventName<CustomEvent>,
    },
  });
