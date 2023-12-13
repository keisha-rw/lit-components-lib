import * as React from 'react';
import { PdsIconPlus as PdsIconPlusElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconPlus = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-plus',
  elementClass: PdsIconPlusElement,
  react: React,
});
