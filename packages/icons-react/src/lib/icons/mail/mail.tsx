import * as React from 'react';
import { PdsIconMail as PdsIconMailElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconMail = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-mail',
  elementClass: PdsIconMailElement,
  react: React,
});
