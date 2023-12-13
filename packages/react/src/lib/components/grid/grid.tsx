import { PdsGrid as PdsGridElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsGridProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsGrid = createPdsReactComponent<PdsGridProps>()({
  tagName: 'pds-grid',
  elementClass: PdsGridElement,
  react: React,
});
