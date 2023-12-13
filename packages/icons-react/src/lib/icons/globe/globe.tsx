import * as React from 'react';
import { PdsIconGlobe as PdsIconGlobeElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconGlobe = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-globe',
  elementClass: PdsIconGlobeElement,
  react: React,
});
