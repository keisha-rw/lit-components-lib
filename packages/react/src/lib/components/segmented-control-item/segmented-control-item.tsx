import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsSegmentedControlItem as PdsSegmentedControlItemElement } from '@keisha/design-system';
import { PdsSegmentedControlItemProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSegmentedControlItem =
  createPdsReactComponent<PdsSegmentedControlItemProps>()({
    tagName: 'pds-segmented-control-item',
    elementClass: PdsSegmentedControlItemElement,
    react: React,
    events: {
      onClick: 'pds-segmented-control-item-click' as EventName<CustomEvent>,
    },
  });
