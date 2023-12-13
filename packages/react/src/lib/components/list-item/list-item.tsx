import * as React from 'react';
import { PdsListItem as PdsListItemElement } from '@keisha/design-system';
import { PdsListItemProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsListItem = createPdsReactComponent<PdsListItemProps>()({
  tagName: 'pds-list-item',
  elementClass: PdsListItemElement,
  react: React,
});
