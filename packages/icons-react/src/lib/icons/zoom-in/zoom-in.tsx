import * as React from 'react';
import { PdsIconZoomIn as PdsIconZoomInElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconZoomIn = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-zoom-in',
  elementClass: PdsIconZoomInElement,
  react: React,
});
