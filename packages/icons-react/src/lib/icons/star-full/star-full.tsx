import * as React from 'react';
import { PdsIconStarFull as PdsIconStarFullElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconStarFull = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-star-full',
  elementClass: PdsIconStarFullElement,
  react: React,
});
