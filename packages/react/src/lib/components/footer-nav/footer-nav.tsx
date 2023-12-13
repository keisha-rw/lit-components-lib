import * as React from 'react';
import { PdsFooterNav as PdsFooterNavElement } from '@keisha/design-system';
import { PdsFooterNavProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsFooterNav = createPdsReactComponent<PdsFooterNavProps>()({
  tagName: 'pds-footer-nav',
  elementClass: PdsFooterNavElement,
  react: React,
});
