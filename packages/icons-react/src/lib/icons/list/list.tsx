import * as React from 'react';
import { PdsIconList as PdsIconListElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconList = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-list',
  elementClass: PdsIconListElement,
  react: React,
});
