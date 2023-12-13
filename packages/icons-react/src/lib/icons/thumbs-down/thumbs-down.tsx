import * as React from 'react';
import { PdsIconThumbsDown as PdsIconThumbsDownElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconThumbsDown = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-thumbs-down',
  elementClass: PdsIconThumbsDownElement,
  react: React,
});
