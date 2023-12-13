import * as React from 'react';
import { PdsIconInstagram as PdsIconInstagramElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconInstagram = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-instagram',
  elementClass: PdsIconInstagramElement,
  react: React,
});
