import * as React from 'react';
import { PdsIconInfo as PdsIconInfoElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconInfo = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-info',
  elementClass: PdsIconInfoElement,
  react: React,
});
