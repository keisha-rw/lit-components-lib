import * as React from 'react';
import { PdsIconMenu as PdsIconMenuElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconMenu = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-menu',
  elementClass: PdsIconMenuElement,
  react: React,
});
