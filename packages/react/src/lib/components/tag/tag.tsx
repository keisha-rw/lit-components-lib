import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsTag as PdsTagElement } from '@keisha/design-system';
import { PdsTagProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsTag = createPdsReactComponent<PdsTagProps>()({
  tagName: 'pds-tag',
  elementClass: PdsTagElement,
  react: React,
  events: {
    onClick: 'pds-tag-click' as EventName<CustomEvent>,
  },
});
