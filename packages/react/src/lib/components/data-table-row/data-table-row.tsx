import * as React from 'react';
import { PdsDataTableRow as PdsDataTableRowElement } from '@keisha/design-system';
import { PdsDataTableRowProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsDataTableRow = createPdsReactComponent<PdsDataTableRowProps>()({
  tagName: 'pds-data-table-row',
  elementClass: PdsDataTableRowElement,
  react: React,
});
