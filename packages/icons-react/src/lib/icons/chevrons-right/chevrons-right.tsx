import * as React from 'react';
import { PdsIconChevronsRight as PdsIconChevronsRightElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconChevronsRight = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-chevrons-right',
  elementClass: PdsIconChevronsRightElement,
  react: React,
});
