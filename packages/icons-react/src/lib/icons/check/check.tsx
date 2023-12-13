import * as React from 'react';
import { PdsIconCheck as PdsIconCheckElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconCheck = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-check',
  elementClass: PdsIconCheckElement,
  react: React,
});
