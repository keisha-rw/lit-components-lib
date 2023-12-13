import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsStepIndicatorItem as PdsStepIndicatorItemElement } from '@keisha/design-system';
import { PdsStepIndicatorItemProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsStepIndicatorItem =
  createPdsReactComponent<PdsStepIndicatorItemProps>()({
    tagName: 'pds-step-indicator-item',
    elementClass: PdsStepIndicatorItemElement,
    react: React,
    events: {
      onClick: 'pds-step-indicator-item-click' as EventName<CustomEvent>,
    },
  });
