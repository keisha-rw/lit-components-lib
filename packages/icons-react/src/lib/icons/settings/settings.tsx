import * as React from 'react';
import { PdsIconSettings as PdsIconSettingsElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconSettings = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-settings',
  elementClass: PdsIconSettingsElement,
  react: React,
});
