import * as React from 'react';
import { PdsIconShieldCheck as PdsIconShieldCheckElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconShieldCheck = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-shield-check',
  elementClass: PdsIconShieldCheckElement,
  react: React,
});
