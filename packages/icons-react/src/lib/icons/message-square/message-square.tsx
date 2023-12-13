import * as React from 'react';
import { PdsIconMessageSquare as PdsIconMessageSquareElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconMessageSquare = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-message-square',
  elementClass: PdsIconMessageSquareElement,
  react: React,
});
