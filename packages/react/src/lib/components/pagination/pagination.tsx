import { EventName } from '@lit-labs/react';
import { PdsPagination as PdsPaginationElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsPaginationProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsPagination = createPdsReactComponent<PdsPaginationProps>()({
  tagName: 'pds-pagination',
  elementClass: PdsPaginationElement,
  react: React,
  events: {
    onHandleClick: 'pds-pagination-click' as EventName<CustomEvent>,
  },
});
