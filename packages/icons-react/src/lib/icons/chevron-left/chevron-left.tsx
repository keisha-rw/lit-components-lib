import * as React from 'react';
import { PdsIconChevronLeft as PdsIconChevronLeftElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconChevronLeft = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-chevron-left',
  elementClass: PdsIconChevronLeftElement,
  react: React,
});
