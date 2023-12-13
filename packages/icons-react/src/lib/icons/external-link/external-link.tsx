import * as React from 'react';
import { PdsIconExternalLink as PdsIconExternalLinkElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconExternalLink = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-external-link',
  elementClass: PdsIconExternalLinkElement,
  react: React,
});
