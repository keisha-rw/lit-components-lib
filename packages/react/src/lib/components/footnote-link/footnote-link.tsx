import * as React from 'react';
import { PdsFootnoteLink as PdsFootnoteLinkElement } from '@keisha/design-system';
import { PdsFootnoteLinkProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsFootnoteLink = createPdsReactComponent<PdsFootnoteLinkProps>()({
  tagName: 'pds-footnote-link',
  elementClass: PdsFootnoteLinkElement,
  react: React,
});
