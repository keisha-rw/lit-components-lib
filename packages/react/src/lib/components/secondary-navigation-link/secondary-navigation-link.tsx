import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsSecondaryNavigationLink as PdsSecondaryNavigationLinkElement } from '@keisha/design-system';
import { PdsSecondaryNavigationLinkProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSecondaryNavigationLink =
  createPdsReactComponent<PdsSecondaryNavigationLinkProps>()({
    tagName: 'pds-secondary-navigation-link',
    elementClass: PdsSecondaryNavigationLinkElement,
    react: React,
    events: {
      onClick: 'pds-secondary-navigation-link-click' as EventName<CustomEvent>,
    },
  });
