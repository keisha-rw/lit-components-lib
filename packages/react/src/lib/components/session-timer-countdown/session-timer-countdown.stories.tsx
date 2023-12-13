import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { PdsSessionTimerCountdown } from './session-timer-countdown';

export default {
  title: 'Components/Session timer/Session timer countdown',
  component: PdsSessionTimerCountdown,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    actions: {
      handles: [
        'pds-session-timer-countdown-threshold-reached',
        'pds-session-timer-countdown-completed',
      ],
    },
  },
};

const Template: StoryFn<typeof PdsSessionTimerCountdown> = (args) => (
  <PdsSessionTimerCountdown {...args} />
);
export const Default = Template.bind({});
Default.args = { timeInMs: 5000 };
