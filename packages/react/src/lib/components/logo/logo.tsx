import { PdsLogo as PdsLogoElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsLogoProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsLogo = createPdsReactComponent<PdsLogoProps>()({
  tagName: 'pds-logo',
  elementClass: PdsLogoElement,
  react: React,
});
