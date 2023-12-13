import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './session-timer';

const meta: Meta = {
  title: 'Components/Session timer',
  component: 'pds-session-timer',
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Axe can't handle the session timer :backdrop psuedo selector
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/color-contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
    actions: {
      handles: [
        'pds-session-timer-threshold-reached',
        'pds-session-timer-session-requested',
        'pds-session-timer-logout-requested',
        'pds-session-timer-extension-requested',
        'pds-session-timer-dismissed',
        'pds-session-timer-max-session-dismissed',
        'pds-session-timer-activated',
        'pds-session-timer-expired',
      ],
    },
  },
};
export default meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
  parameters: {
    happo: false,
  },
  render: () =>
    html`<pds-button
        onclick="document?.querySelectorAll('pds-session-timer')[1]?.remove(); document.querySelector('pds-session-timer').removeAttribute('maxSessionFlag'); document.querySelector('pds-session-timer').setAttribute('setMillisecondsToTimeout', '121000')"
        >Test session timer</pds-button
      ><pds-session-timer
        logSessionTimeRemaining
        style="display:none;"
      ></pds-session-timer>`,
};

export const ExtendSessionApiEndpointFailureExtraThresholdSet: StoryObj = {
  name: 'Extend session api endpoint failure, extra threshold set',
  args: {},
  parameters: {
    happo: {
      delay: 1000,
    },
  },
  render: () =>
    html`<pds-session-timer
      extendSessionApiEndpointFailure
      setMillisecondsToTimeout="1"
      customNotificationThresholds="[118000]"
      logSessionTimeRemaining
      style="display:none;"
    ></pds-session-timer>`,
};

export const Spanish: StoryObj = {
  name: 'Spanish',
  args: {},
  parameters: {
    happo: {
      delay: 1000,
    },
  },
  render: () =>
    html`<pds-session-timer
      extendSessionApiEndpointFailure
      setMillisecondsToTimeout="1"
      style="display:none;"
      lang="es"
    ></pds-session-timer>`,
};

export const MaxTimer: StoryObj = {
  name: 'Max',
  args: {},
  parameters: {
    happo: false,
  },
  render: () =>
    html`<pds-button
        onclick="document?.querySelectorAll('pds-session-timer')[1]?.remove(); document.querySelector('pds-session-timer').setAttribute('maxSessionFlag', ''); document.querySelector('pds-session-timer').setAttribute('setMillisecondsToTimeout', '301000');"
        >Test max session timer</pds-button
      ><pds-session-timer
        logSessionTimeRemaining
        style="display:none;"
      ></pds-session-timer>`,
};
