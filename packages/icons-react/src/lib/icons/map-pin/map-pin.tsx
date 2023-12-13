import * as React from 'react';
import { PdsIconMapPin as PdsIconMapPinElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconMapPin = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-map-pin',
  elementClass: PdsIconMapPinElement,
  react: React,
});
