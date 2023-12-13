import { PdsLayoutContainer as PdsLayoutContainerElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsLayoutContainerProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsLayoutContainer =
  createPdsReactComponent<PdsLayoutContainerProps>()({
    tagName: 'pds-layout-container',
    elementClass: PdsLayoutContainerElement,
    react: React,
  });
