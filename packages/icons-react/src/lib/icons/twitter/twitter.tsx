import * as React from 'react';
import { PdsIconTwitter as PdsIconTwitterElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconTwitter = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-twitter',
  elementClass: PdsIconTwitterElement,
  react: React,
});
