import * as React from 'react';
import { PdsDataTableCell as PdsDataTableCellElement } from '@keisha/design-system';
import { PdsDataTableCellProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsDataTableCell =
  createPdsReactComponent<PdsDataTableCellProps>()({
    tagName: 'pds-data-table-cell',
    elementClass: PdsDataTableCellElement,
    react: React,
  });
