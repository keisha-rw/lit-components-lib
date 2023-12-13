import * as React from 'react';
import { PdsFootnoteItem as PdsFootnoteItemElement } from '@keisha/design-system';
import { PdsFootnoteItemProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsFootnoteItem = createPdsReactComponent<PdsFootnoteItemProps>()({
  tagName: 'pds-footnote-item',
  elementClass: PdsFootnoteItemElement,
  react: React,
});
