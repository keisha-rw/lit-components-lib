import * as React from 'react';
import { PdsLogoutPage as PdsLogoutPageElement } from '@keisha/design-system';
import { PdsLogoutPageProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsLogoutPage = createPdsReactComponent<PdsLogoutPageProps>()({
  tagName: 'pds-logout-page',
  elementClass: PdsLogoutPageElement,
  react: React,
});
