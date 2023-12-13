import * as React from 'react';
import { PdsIconArrowLeft as PdsIconArrowLeftElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconArrowLeft = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-arrow-left',
  elementClass: PdsIconArrowLeftElement,
  react: React,
});
