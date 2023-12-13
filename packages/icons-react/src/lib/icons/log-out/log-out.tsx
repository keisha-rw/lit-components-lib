import * as React from 'react';
import { PdsIconLogOut as PdsIconLogOutElement } from '@keisha/design-system-icons-web';
import { IconSize, ValidIconColor } from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconLogOut = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-log-out',
  elementClass: PdsIconLogOutElement,
  react: React,
});
