import * as React from 'react';
import { PdsLoadingPage as PdsLoadingPageElement } from '@keisha/design-system';
import { PdsLoadingPageProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsLoadingPage = createPdsReactComponent<PdsLoadingPageProps>()({
  tagName: 'pds-loading-page',
  elementClass: PdsLoadingPageElement,
  react: React,
});
