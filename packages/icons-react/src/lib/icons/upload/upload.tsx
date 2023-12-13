import * as React from 'react';
import { PdsIconUpload as PdsIconUploadElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconUpload = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-upload',
  elementClass: PdsIconUploadElement,
  react: React,
});
