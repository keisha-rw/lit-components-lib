import * as React from 'react';
import { PdsIconSun as PdsIconSunElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconSun = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-sun',
  elementClass: PdsIconSunElement,
  react: React,
});
