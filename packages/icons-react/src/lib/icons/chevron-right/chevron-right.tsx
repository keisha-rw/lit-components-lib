import * as React from 'react';
import { PdsIconChevronRight as PdsIconChevronRightElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconChevronRight = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-chevron-right',
  elementClass: PdsIconChevronRightElement,
  react: React,
});
