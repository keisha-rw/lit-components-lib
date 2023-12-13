import * as React from 'react';
import { PdsStepIndicator as PdsStepIndicatorElement } from '@keisha/design-system';
import { PdsStepIndicatorProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsStepIndicator =
  createPdsReactComponent<PdsStepIndicatorProps>()({
    tagName: 'pds-step-indicator',
    elementClass: PdsStepIndicatorElement,
    react: React,
  });
