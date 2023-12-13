import * as React from 'react';
import { PdsDataTableColumn as PdsDataTableColumnElement } from '@keisha/design-system';
import { PdsDataTableColumnProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsDataTableColumn =
  createPdsReactComponent<PdsDataTableColumnProps>()({
    tagName: 'pds-data-table-column',
    elementClass: PdsDataTableColumnElement,
    react: React,
  });
