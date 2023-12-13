import * as React from 'react';
import { PdsIconWrench as PdsIconWrenchElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconWrench = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-wrench',
  elementClass: PdsIconWrenchElement,
  react: React,
});
