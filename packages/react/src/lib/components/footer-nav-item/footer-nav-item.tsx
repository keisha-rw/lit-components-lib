import * as React from 'react';
import { PdsFooterNavItem as PdsFooterNavItemElement } from '@keisha/design-system';
import { PdsFooterNavItemProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsFooterNavItem =
  createPdsReactComponent<PdsFooterNavItemProps>()({
    tagName: 'pds-footer-nav-item',
    elementClass: PdsFooterNavItemElement,
    react: React,
  });
