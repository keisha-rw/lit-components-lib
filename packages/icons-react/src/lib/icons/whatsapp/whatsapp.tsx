import * as React from 'react';
import { PdsIconWhatsapp as PdsIconWhatsappElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconWhatsapp = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-whatsapp',
  elementClass: PdsIconWhatsappElement,
  react: React,
});
