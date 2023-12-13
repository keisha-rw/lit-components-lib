import * as React from 'react';
import { PdsBand as PdsBandElement } from '@keisha/design-system';
import { PdsBandProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsBand = createPdsReactComponent<PdsBandProps>()({
  tagName: 'pds-band',
  elementClass: PdsBandElement,
  react: React,
});
