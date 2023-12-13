import * as React from 'react';
import { PdsIconLock as PdsIconLockElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconLock = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-lock',
  elementClass: PdsIconLockElement,
  react: React,
});
