import * as React from 'react';
import { PdsDataTableRows as PdsDataTableRowsElement } from '@keisha/design-system';
import { PdsDataTableRowsProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsDataTableRows =
  createPdsReactComponent<PdsDataTableRowsProps>()({
    tagName: 'pds-data-table-rows',
    elementClass: PdsDataTableRowsElement,
    react: React,
  });
