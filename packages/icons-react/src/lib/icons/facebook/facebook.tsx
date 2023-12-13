import * as React from 'react';
import { PdsIconFacebook as PdsIconFacebookElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconFacebook = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-facebook',
  elementClass: PdsIconFacebookElement,
  react: React,
});
