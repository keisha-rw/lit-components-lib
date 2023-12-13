import * as React from 'react';
import { PdsIconMinus as PdsIconMinusElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconMinus = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-minus',
  elementClass: PdsIconMinusElement,
  react: React,
});
