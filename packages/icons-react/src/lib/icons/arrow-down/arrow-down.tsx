import * as React from 'react';
import { PdsIconArrowDown as PdsIconArrowDownElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconArrowDown = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-arrow-down',
  elementClass: PdsIconArrowDownElement,
  react: React,
});
