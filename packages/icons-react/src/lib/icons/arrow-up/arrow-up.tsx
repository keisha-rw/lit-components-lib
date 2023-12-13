import * as React from 'react';
import { PdsIconArrowUp as PdsIconArrowUpElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconArrowUp = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-arrow-up',
  elementClass: PdsIconArrowUpElement,
  react: React,
});
