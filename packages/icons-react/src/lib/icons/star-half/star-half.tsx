import * as React from 'react';
import { PdsIconStarHalf as PdsIconStarHalfElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconStarHalf = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-star-half',
  elementClass: PdsIconStarHalfElement,
  react: React,
});
