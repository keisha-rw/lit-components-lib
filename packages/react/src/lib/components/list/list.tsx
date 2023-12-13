import * as React from 'react';
import { PdsList as PdsListElement } from '@keisha/design-system';
import { PdsListProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsList = createPdsReactComponent<PdsListProps>()({
  tagName: 'pds-list',
  elementClass: PdsListElement,
  react: React,
});
