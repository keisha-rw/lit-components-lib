import * as React from 'react';
import { PdsIconUser as PdsIconUserElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconUser = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-user',
  elementClass: PdsIconUserElement,
  react: React,
});
