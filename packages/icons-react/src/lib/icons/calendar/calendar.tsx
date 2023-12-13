import * as React from 'react';
import { PdsIconCalendar as PdsIconCalendarElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconCalendar = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-calendar',
  elementClass: PdsIconCalendarElement,
  react: React,
});
