import * as React from 'react';
import { PdsIconCornerUpLeft as PdsIconCornerUpLeftElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconCornerUpLeft = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-corner-up-left',
  elementClass: PdsIconCornerUpLeftElement,
  react: React,
});
