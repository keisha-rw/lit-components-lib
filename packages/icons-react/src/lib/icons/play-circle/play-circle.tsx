import * as React from 'react';
import { PdsIconPlayCircle as PdsIconPlayCircleElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconPlayCircle = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-play-circle',
  elementClass: PdsIconPlayCircleElement,
  react: React,
});
