import * as React from 'react';
import { PdsSecondaryNavigationLevelTwo as PdsSecondaryNavigationLevelTwoElement } from '@keisha/design-system';
import { PdsSecondaryNavigationLevelTwoProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSecondaryNavigationLevelTwo =
  createPdsReactComponent<PdsSecondaryNavigationLevelTwoProps>()({
    tagName: 'pds-secondary-navigation-level-two',
    elementClass: PdsSecondaryNavigationLevelTwoElement,
    react: React,
  });
