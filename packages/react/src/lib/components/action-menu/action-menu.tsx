import * as React from 'react';
import { PdsActionMenu as PdsActionMenuElement } from '@keisha/design-system';
import { createPdsReactComponent } from '../../create-pds-react-component';
import { PdsActionMenuProps } from '../../built-component-props';

export const PdsActionMenu = createPdsReactComponent<PdsActionMenuProps>()({
  tagName: 'pds-action-menu',
  elementClass: PdsActionMenuElement,
  react: React,
});
