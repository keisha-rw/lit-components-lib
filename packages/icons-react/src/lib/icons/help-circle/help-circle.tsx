import * as React from 'react';
import { PdsIconHelpCircle as PdsIconHelpCircleElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconHelpCircle = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-help-circle',
  elementClass: PdsIconHelpCircleElement,
  react: React,
});
