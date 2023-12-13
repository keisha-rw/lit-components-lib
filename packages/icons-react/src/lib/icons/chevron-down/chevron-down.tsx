import * as React from 'react';
import { PdsIconChevronDown as PdsIconChevronDownElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconChevronDown = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-chevron-down',
  elementClass: PdsIconChevronDownElement,
  react: React,
});
