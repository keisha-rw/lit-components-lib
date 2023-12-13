import * as React from 'react';
import { PdsSessionTimer as PdsSessionTimerElement } from '@keisha/design-system';
import { PdsSessionTimerProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSessionTimer = createPdsReactComponent<PdsSessionTimerProps>()({
  tagName: 'pds-session-timer',
  elementClass: PdsSessionTimerElement,
  react: React,
});
