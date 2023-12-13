import * as React from 'react';
import { PdsIconFlag as PdsIconFlagElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconFlag = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-flag',
  elementClass: PdsIconFlagElement,
  react: React,
});
