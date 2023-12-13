import { PdsGridItem as PdsGridItemElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsGridItemProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsGridItem = createPdsReactComponent<PdsGridItemProps>()({
  tagName: 'pds-grid-item',
  elementClass: PdsGridItemElement,
  react: React,
});
