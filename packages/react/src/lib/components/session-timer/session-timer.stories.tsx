import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { PdsSessionTimer } from './session-timer';
import { PdsButton } from '../button/button';

const meta: Meta<typeof PdsSessionTimer> = {
  title: 'Components/Session timer',
  component: PdsSessionTimer,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: [
        'pds-session-timer-threshold-reached',
        'pds-session-timer-session-session-requested',
        'pds-session-timer-session-logout-requested',
        'pds-session-timer-session-extension-requested',
        'pds-session-timer-dismissed',
        'pds-session-timer-max-session-dismissed',
        'pds-session-timer-activated',
        'pds-session-timer-expired',
      ],
    },
  },
};
export default meta;

const Template: StoryFn<typeof PdsSessionTimer> = (args) => {
  return (
    <>
      <PdsButton
        onClick={() => {
          // remove extra session timer inserted due to storybook quirk
          document?.querySelectorAll('pds-session-timer')[1]?.remove();
          document
            .querySelector('pds-session-timer')
            ?.removeAttribute('maxSessionFlag');
          document
            .querySelector('pds-session-timer')
            ?.setAttribute('setMillisecondsToTimeout', '121000');
        }}
      >
        Test session timer
      </PdsButton>
      <PdsSessionTimer {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  logSessionTimeRemaining: true,
};

const ExtendTemplate: StoryFn<typeof PdsSessionTimer> = () => {
  return (
    <PdsSessionTimer
      type="timeout"
      extendSessionApiEndpointFailure
      setMillisecondsToTimeout={500}
      customNotificationThresholds={[118000]}
      logSessionTimeRemaining
    />
  );
};

export const ExtendSessionApiEndpointFailureAndExtraThresholdSet =
  ExtendTemplate.bind({});
ExtendSessionApiEndpointFailureAndExtraThresholdSet.storyName =
  'Extend session api endpoint failure and extra threshold set';

const MaxTemplate: StoryFn<typeof PdsSessionTimer> = (args) => {
  return (
    <>
      <PdsButton
        onClick={() => {
          // remove extra session timer inserted due to storybook quirk
          document?.querySelectorAll('pds-session-timer')[1]?.remove();
          document
            .querySelector('pds-session-timer')
            ?.setAttribute('setMillisecondsToTimeout', '303000');
        }}
      >
        Test session timer
      </PdsButton>
      <PdsSessionTimer {...args} />
    </>
  );
};

export const MaxTimer = MaxTemplate.bind({});
MaxTimer.storyName = 'Max timer';
MaxTimer.args = {
  maxSessionFlag: true,
  logSessionTimeRemaining: true,
};
