import * as React from 'react';
import { PdsIconStar as PdsIconStarElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconStar = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-star',
  elementClass: PdsIconStarElement,
  react: React,
});
