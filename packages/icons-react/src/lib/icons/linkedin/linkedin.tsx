import * as React from 'react';
import { PdsIconLinkedin as PdsIconLinkedinElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconLinkedin = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-linkedin',
  elementClass: PdsIconLinkedinElement,
  react: React,
});
