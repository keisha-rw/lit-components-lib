import * as React from 'react';
import { PdsIconShare as PdsIconShareElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconShare = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-share',
  elementClass: PdsIconShareElement,
  react: React,
});
