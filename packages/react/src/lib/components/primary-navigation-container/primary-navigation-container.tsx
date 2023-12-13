import * as React from 'react';
import { PdsPrimaryNavigationContainer as PdsPrimaryNavigationContainerElement } from '@keisha/design-system';
import { PdsPrimaryNavigationContainerProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsPrimaryNavigationContainer =
  createPdsReactComponent<PdsPrimaryNavigationContainerProps>()({
    react: React,
    tagName: 'pds-primary-navigation-container',
    elementClass: PdsPrimaryNavigationContainerElement,
  });
