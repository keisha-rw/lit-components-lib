import * as React from 'react';
import { PdsIconCalculator as PdsIconCalculatorElement } from '@keisha/design-system-icons-web';
import {
  IconSize,
  ValidIconColor,
} from '../../../utils/icon-utilities';
import { createPdsReactComponent } from '../../../../../react/src/lib/create-pds-react-component';

interface IconProps {
  size?: IconSize;
  color?: ValidIconColor;
}

export const PdsIconCalculator = createPdsReactComponent<IconProps>()({
  tagName: 'pds-icon-calculator',
  elementClass: PdsIconCalculatorElement,
  react: React,
});
