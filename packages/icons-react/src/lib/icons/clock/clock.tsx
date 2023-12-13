import * as React from 'react';
import { PdsIconClock as PdsIconClockElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconClock = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-clock',
  elementClass: PdsIconClockElement,
  react: React,
});
