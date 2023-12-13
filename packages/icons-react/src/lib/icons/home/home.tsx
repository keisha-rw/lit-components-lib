import * as React from 'react';
import { PdsIconHome as PdsIconHomeElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconHome = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-home',
  elementClass: PdsIconHomeElement,
  react: React,
});
