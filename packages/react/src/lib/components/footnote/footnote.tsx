import * as React from 'react';
import { PdsFootnote as PdsFootnoteElement } from '@keisha/design-system';
import { PdsFootnoteProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsFootnote = createPdsReactComponent<PdsFootnoteProps>()({
  tagName: 'pds-footnote',
  elementClass: PdsFootnoteElement,
  react: React,
});
