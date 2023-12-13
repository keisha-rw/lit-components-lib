import * as React from 'react';
import { PdsHr as PdsHrElement } from '@keisha/design-system';
import { PdsHrProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsHr = createPdsReactComponent<PdsHrProps>()({
  tagName: 'pds-hr',
  elementClass: PdsHrElement,
  react: React,
});
