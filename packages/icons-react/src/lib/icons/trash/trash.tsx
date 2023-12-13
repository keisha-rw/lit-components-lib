import * as React from 'react';
import { PdsIconTrash as PdsIconTrash2Element } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconTrash = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-trash',
  elementClass: PdsIconTrash2Element,
  react: React,
});
