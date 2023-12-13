import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './session-timer-countdown';

const meta: Meta = {
  title: 'Components/Session timer/Session timer countdown',
  component: 'pds-session-timer-countdown',
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
  render: () =>
    html`<pds-session-timer-countdown
      timeInMs="${1 * 60 * 1000}"
      notificationThresholds="[60000, 30000]"
    ></pds-session-timer-countdown>`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
