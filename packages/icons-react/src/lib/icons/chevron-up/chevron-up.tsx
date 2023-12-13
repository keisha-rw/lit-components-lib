import * as React from 'react';
import { PdsIconChevronUp as PdsIconChevronUpElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconChevronUp = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-chevron-up',
  elementClass: PdsIconChevronUpElement,
  react: React,
});
