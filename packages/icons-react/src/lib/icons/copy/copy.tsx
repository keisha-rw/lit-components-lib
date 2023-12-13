import * as React from 'react';
import { PdsIconCopy as PdsIconCopyElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconCopy = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-copy',
  elementClass: PdsIconCopyElement,
  react: React,
});
