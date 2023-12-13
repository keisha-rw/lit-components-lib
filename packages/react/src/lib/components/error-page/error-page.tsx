import * as React from 'react';
import { PdsErrorPage as PdsErrorPageElement } from '@keisha/design-system';
import { PdsErrorPageProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsErrorPage = createPdsReactComponent<PdsErrorPageProps>()({
  tagName: 'pds-error-page',
  elementClass: PdsErrorPageElement,
  react: React,
});
