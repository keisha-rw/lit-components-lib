import * as React from 'react';
import { PdsIconPrinter as PdsIconPrinterElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconPrinter = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-printer',
  elementClass: PdsIconPrinterElement,
  react: React,
});
