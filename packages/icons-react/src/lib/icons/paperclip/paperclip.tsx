import * as React from 'react';
import { PdsIconPaperclip as PdsIconPaperclipElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconPaperclip = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-paperclip',
  elementClass: PdsIconPaperclipElement,
  react: React,
});
