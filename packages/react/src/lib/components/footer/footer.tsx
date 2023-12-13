import * as React from 'react';
import { PdsFooter as PdsFooterElement } from '@keisha/design-system';
import { PdsFooterProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsFooter = createPdsReactComponent<PdsFooterProps>()({
  tagName: 'pds-footer',
  elementClass: PdsFooterElement,
  react: React,
});
