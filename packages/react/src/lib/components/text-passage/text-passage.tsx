import * as React from 'react';
import { PdsTextPassage as PdsTextPassageElement } from '@keisha/design-system';
import { PdsTextPassageProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsTextPassage = createPdsReactComponent<PdsTextPassageProps>()({
  tagName: 'pds-text-passage',
  elementClass: PdsTextPassageElement,
  react: React,
});
