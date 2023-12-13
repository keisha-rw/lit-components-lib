import * as React from 'react';
import { PdsIconAreaChart as PdsIconAreaChartElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconAreaChart = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-area-chart',
  elementClass: PdsIconAreaChartElement,
  react: React,
});
