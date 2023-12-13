import * as React from 'react';
import { PdsIconBell as PdsIconBellElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconBell = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-bell',
  elementClass: PdsIconBellElement,
  react: React,
});
