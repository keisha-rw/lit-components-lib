import * as React from 'react';
import { PdsIconLineChart as PdsIconLineChartElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconLineChart = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-line-chart',
  elementClass: PdsIconLineChartElement,
  react: React,
});
