import * as React from 'react';
import { PdsIconUnlock as PdsIconUnlockElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconUnlock = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-unlock',
  elementClass: PdsIconUnlockElement,
  react: React,
});
