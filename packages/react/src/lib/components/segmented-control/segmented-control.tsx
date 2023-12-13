import * as React from 'react';
import { PdsSegmentedControl as PdsSegmentedControlElement } from '@keisha/design-system';
import { PdsSegmentedControlProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSegmentedControl =
  createPdsReactComponent<PdsSegmentedControlProps>()({
    tagName: 'pds-segmented-control',
    elementClass: PdsSegmentedControlElement,
    react: React,
  });
