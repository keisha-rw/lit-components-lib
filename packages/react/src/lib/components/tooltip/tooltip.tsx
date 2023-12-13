import * as React from 'react';
import { PdsTooltip as PdsTooltipElement } from '@keisha/design-system';
import { PdsTooltipProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsTooltip = createPdsReactComponent<PdsTooltipProps>()({
  tagName: 'pds-tooltip',
  elementClass: PdsTooltipElement,
  react: React,
});
