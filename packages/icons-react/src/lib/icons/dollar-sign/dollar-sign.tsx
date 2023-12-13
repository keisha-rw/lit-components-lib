import * as React from 'react';
import { PdsIconDollarSign as PdsIconDollarSignElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconDollarSign = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-dollar-sign',
  elementClass: PdsIconDollarSignElement,
  react: React,
});
