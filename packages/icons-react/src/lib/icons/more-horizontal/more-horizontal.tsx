import * as React from 'react';
import { PdsIconMoreHorizontal as PdsIconMoreHorizontalElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconMoreHorizontal = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-more-horizontal',
  elementClass: PdsIconMoreHorizontalElement,
  react: React,
});
