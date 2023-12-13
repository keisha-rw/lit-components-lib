import * as React from 'react';
import { PdsSidebar as PdsSidebarElement } from '@keisha/design-system';
import { PdsSidebarProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSidebar = createPdsReactComponent<PdsSidebarProps>()({
  tagName: 'pds-sidebar',
  elementClass: PdsSidebarElement,
  react: React,
});
