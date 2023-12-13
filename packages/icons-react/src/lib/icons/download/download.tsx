import * as React from 'react';
import { PdsIconDownload as PdsIconDownloadElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconDownload = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-download',
  elementClass: PdsIconDownloadElement,
  react: React,
});
