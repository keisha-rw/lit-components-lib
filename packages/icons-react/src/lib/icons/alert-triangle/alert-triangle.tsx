import * as React from 'react';
import { PdsIconAlertTriangle as PdsIconAlertTriangleElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconAlertTriangle = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-alert-triangle',
  elementClass: PdsIconAlertTriangleElement,
  react: React,
});
