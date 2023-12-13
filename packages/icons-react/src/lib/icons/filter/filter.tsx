import * as React from 'react';
import { PdsIconFilter as PdsIconFilterElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconFilter = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-filter',
  elementClass: PdsIconFilterElement,
  react: React,
});
