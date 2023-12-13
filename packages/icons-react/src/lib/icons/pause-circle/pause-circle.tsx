import * as React from 'react';
import { PdsIconPauseCircle as PdsIconPauseCircleElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconPauseCircle = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-pause-circle',
  elementClass: PdsIconPauseCircleElement,
  react: React,
});
