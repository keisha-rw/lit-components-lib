import * as React from 'react';
import { PdsIconUmbrella as PdsIconUmbrellaElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconUmbrella = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-umbrella',
  elementClass: PdsIconUmbrellaElement,
  react: React,
});
