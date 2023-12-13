import * as React from 'react';
import { PdsFeatureBlock as PdsFeatureBlockElement } from '@keisha/design-system';
import { PdsFeatureBlockProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsFeatureBlock = createPdsReactComponent<PdsFeatureBlockProps>()({
  tagName: 'pds-feature-block',
  elementClass: PdsFeatureBlockElement,
  react: React,
});
