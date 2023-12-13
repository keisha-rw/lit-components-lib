import * as React from 'react';
import { PdsIconPin as PdsIconPinElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconPin = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-pin',
  elementClass: PdsIconPinElement,
  react: React,
});
