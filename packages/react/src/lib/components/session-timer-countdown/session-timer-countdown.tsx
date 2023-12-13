import * as React from 'react';
import { PdsSessionTimerCountdown as PdsSessionTimerCountdownElement } from '@keisha/design-system';
import { PdsSessionTimerCountdownProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSessionTimerCountdown =
  createPdsReactComponent<PdsSessionTimerCountdownProps>()({
    tagName: 'pds-session-timer-countdown',
    elementClass: PdsSessionTimerCountdownElement,
    react: React,
  });
