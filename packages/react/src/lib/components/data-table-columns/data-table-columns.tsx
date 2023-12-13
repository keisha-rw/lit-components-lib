import * as React from 'react';
import { PdsDataTableColumns as PdsDataTableColumnsElement } from '@keisha/design-system';
import { PdsDataTableColumnsProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsDataTableColumns =
  createPdsReactComponent<PdsDataTableColumnsProps>()({
    tagName: 'pds-data-table-columns',
    elementClass: PdsDataTableColumnsElement,
    react: React,
  });
