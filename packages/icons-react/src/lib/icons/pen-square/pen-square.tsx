import * as React from 'react';
import { PdsIconPenSquare as PdsIconPenSquareElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconPenSquare = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-pen-square',
  elementClass: PdsIconPenSquareElement,
  react: React,
});
