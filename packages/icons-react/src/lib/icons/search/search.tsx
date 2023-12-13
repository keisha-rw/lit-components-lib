import * as React from 'react';
import { PdsIconSearch as PdsIconSearchElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconSearch = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-search',
  elementClass: PdsIconSearchElement,
  react: React,
});
