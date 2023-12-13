import * as React from 'react';
import { PdsIconEyeOff as PdsIconEyeOffElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconEyeOff = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-eye-off',
  elementClass: PdsIconEyeOffElement,
  react: React,
});
