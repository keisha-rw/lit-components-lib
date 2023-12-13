import * as React from 'react';
import { PdsIconThumbsUp as PdsIconThumbsUpElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconThumbsUp = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-thumbs-up',
  elementClass: PdsIconThumbsUpElement,
  react: React,
});
