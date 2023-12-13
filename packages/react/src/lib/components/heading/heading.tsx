import * as React from 'react';
import { PdsHeading as PdsHeadingElement } from '@keisha/design-system';
import { PdsHeadingProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsHeading = createPdsReactComponent<PdsHeadingProps>()({
  tagName: 'pds-heading',
  elementClass: PdsHeadingElement,
  react: React,
});
