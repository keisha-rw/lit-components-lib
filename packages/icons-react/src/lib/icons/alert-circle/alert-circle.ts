import * as React from 'react';
import { PdsIconAlertCircle as PdsIconAlertCircleElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconAlertCircle = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-alert-circle',
  elementClass: PdsIconAlertCircleElement,
  react: React,
});
