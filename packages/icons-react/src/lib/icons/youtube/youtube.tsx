import * as React from 'react';
import { PdsIconYoutube as PdsIconYoutubeElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconYoutube = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-youtube',
  elementClass: PdsIconYoutubeElement,
  react: React,
});
