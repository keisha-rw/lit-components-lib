import * as React from 'react';
import { PdsIconChevronsLeft as PdsIconChevronsLeftElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconChevronsLeft = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-chevrons-left',
  elementClass: PdsIconChevronsLeftElement,
  react: React,
});
