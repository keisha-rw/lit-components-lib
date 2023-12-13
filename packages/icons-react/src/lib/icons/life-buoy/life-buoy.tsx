import * as React from 'react';
import { PdsIconLifeBuoy as PdsIconLifeBuoyElement } from '@keisha/design-system-icons-web';
import { IconSize, ValidIconColor } from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconLifeBuoy = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-life-buoy',
  elementClass: PdsIconLifeBuoyElement,
  react: React,
});
