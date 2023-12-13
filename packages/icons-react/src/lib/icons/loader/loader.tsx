import * as React from 'react';
import { PdsIconLoader as PdsIconLoaderElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconLoader = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-loader',
  elementClass: PdsIconLoaderElement,
  react: React,
});
