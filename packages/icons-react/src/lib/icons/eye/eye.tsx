import * as React from 'react';
import { PdsIconEye as PdsIconEyeElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconEye = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-eye',
  elementClass: PdsIconEyeElement,
  react: React,
});
