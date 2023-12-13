import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsDataTableInputColumn as PdsDataTableInputColumnElement } from '@keisha/design-system';
import { PdsDataTableInputColumnProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsDataTableInputColumn =
  createPdsReactComponent<PdsDataTableInputColumnProps>()({
    tagName: 'pds-data-table-input-column',
    elementClass: PdsDataTableInputColumnElement,
    react: React,
    events: {
      onChange: 'pds-data-table-input-updated' as EventName<CustomEvent>,
    },
  });
