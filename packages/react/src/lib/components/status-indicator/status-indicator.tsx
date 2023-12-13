import * as React from 'react';
import { PdsStatusIndicator as PdsStatusIndicatorElement } from '@keisha/design-system';
import { PdsStatusIndicatorProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsStatusIndicator =
  createPdsReactComponent<PdsStatusIndicatorProps>()({
    tagName: 'pds-status-indicator',
    elementClass: PdsStatusIndicatorElement,
    react: React,
  });
