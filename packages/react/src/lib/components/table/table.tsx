import * as React from 'react';
import { PdsTable as PdsTableElement } from '@keisha/design-system';
import { PdsTableProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsTable = createPdsReactComponent<PdsTableProps>()({
  tagName: 'pds-table',
  elementClass: PdsTableElement,
  react: React,
});
