import { PdsSupportHeading as PdsSupportHeadingElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsSupportHeadingProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSupportHeading =
  createPdsReactComponent<PdsSupportHeadingProps>()({
    tagName: 'pds-support-heading',
    elementClass: PdsSupportHeadingElement,
    react: React,
  });
