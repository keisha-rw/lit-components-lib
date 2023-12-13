import * as React from 'react';
import { PdsIconCheckCircle as PdsIconCheckCircleElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconCheckCircle = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-check-circle',
  elementClass: PdsIconCheckCircleElement,
  react: React,
});
