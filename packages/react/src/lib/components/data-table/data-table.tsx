import * as React from 'react';
import { PdsDataTable as PdsDataTableElement } from '@keisha/design-system';
import { EventName } from '@lit-labs/react';
import { PdsDataTableProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsDataTable = createPdsReactComponent<PdsDataTableProps>()({
  tagName: 'pds-data-table',
  elementClass: PdsDataTableElement,
  react: React,
  events: {
    inputUpdated: 'pds-data-table-input-updated' as EventName<CustomEvent>,
    tableSorted: 'pds-data-table-sorted' as EventName<CustomEvent>,
  },
});
