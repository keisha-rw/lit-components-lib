import * as React from 'react';
import { PdsIconPhone as PdsIconPhoneElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconPhone = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-phone',
  elementClass: PdsIconPhoneElement,
  react: React,
});
