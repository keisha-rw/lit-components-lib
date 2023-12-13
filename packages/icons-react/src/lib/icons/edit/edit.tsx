import * as React from 'react';
import { PdsIconEdit as PdsIconEditElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconEdit = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-edit',
  elementClass: PdsIconEditElement,
  react: React,
});
