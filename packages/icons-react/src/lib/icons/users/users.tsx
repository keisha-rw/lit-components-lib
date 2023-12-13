import * as React from 'react';
import { PdsIconUsers as PdsIconUsersElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconUsers = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-users',
  elementClass: PdsIconUsersElement,
  react: React,
});
