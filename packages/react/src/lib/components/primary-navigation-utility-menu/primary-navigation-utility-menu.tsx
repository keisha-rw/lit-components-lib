import * as React from 'react';
import { PdsPrimaryNavigationUtilityMenu as PdsPrimaryNavigationUtilityMenuElement } from '@keisha/design-system';
import { PdsPrimaryNavigationUtilityMenuProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsPrimaryNavigationUtilityMenu =
  createPdsReactComponent<PdsPrimaryNavigationUtilityMenuProps>()({
    tagName: 'pds-primary-navigation-utility-menu',
    elementClass: PdsPrimaryNavigationUtilityMenuElement,
    react: React,
  });
