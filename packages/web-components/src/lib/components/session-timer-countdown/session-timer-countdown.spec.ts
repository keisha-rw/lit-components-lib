import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsSessionTimerCountdown } from './session-timer-countdown';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Session timer countdown/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('SessionTimerCountdown unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-session-timer-countdown />');
  });

  it('is an instance of PdsSessionTimerCountdown', () => {
    expect(element).toBeInstanceOf(PdsSessionTimerCountdown);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('notifies when threshold reached', () => {
    jest.useFakeTimers();
    const thresholdHandler = jest.fn();
    const countdownElement = element as PdsSessionTimerCountdown;

    countdownElement?.addEventListener(
      'pds-session-timer-countdown-threshold-reached',
      thresholdHandler,
    );

    countdownElement.notificationThresholds = [4000, 3000];

    countdownElement.initTimer(5);

    jest.advanceTimersByTime(1000);

    expect(countdownElement.notificationThresholdsRemaining).toStrictEqual([
      3000,
    ]);
    expect(thresholdHandler.mock.calls[0][0].detail.threshold).toBe(4000);

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('notifies when countdown completed reached', async () => {
    jest.useFakeTimers();
    const countdownCompleteHandler = jest.fn();
    const countdownElement = element as PdsSessionTimerCountdown;

    countdownElement?.addEventListener(
      'pds-session-timer-countdown-completed',
      countdownCompleteHandler,
    );

    countdownElement.initTimer(5);

    jest.advanceTimersByTime(5000);

    expect(countdownElement.status).toBe('completed');
    expect(countdownElement.intervalId).toBeUndefined();
    expect(countdownCompleteHandler.mock.calls[0][0].detail.totaltime).toBe(
      5000,
    );

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('stops countdown when stop is called', async () => {
    const stopElement = (await fixture(
      '<pds-session-timer-countdown />',
    )) as PdsSessionTimerCountdown;

    stopElement.status = stopElement.STATUS.RUNNING;
    stopElement.intervalId = setInterval(() => {});

    stopElement.stop();

    expect(stopElement.status).toBe(stopElement.STATUS.STOPPED);
    expect(stopElement.intervalId).toBeUndefined();
  });

  it('correctly formats timer value', () => {
    const countdownElement = element as PdsSessionTimerCountdown;

    countdownElement.countdownTimeRemainingInSeconds = 0;

    expect(countdownElement.formatTimerValue()).toBe('0:00');

    countdownElement.countdownTimeRemainingInSeconds = 1;

    expect(countdownElement.formatTimerValue()).toBe('0:01');

    countdownElement.countdownTimeRemainingInSeconds = 62;

    expect(countdownElement.formatTimerValue()).toBe('1:02');
  });

  it('correctly formats a11y timer value', () => {
    const countdownElement = element as PdsSessionTimerCountdown;

    countdownElement.displayedCountdownTime = '0:00';

    expect(countdownElement.formatA11yTimerValue()).toBe(
      'Your session has expired.',
    );

    countdownElement.displayedCountdownTime = '0:10';

    expect(countdownElement.formatA11yTimerValue()).toBe(
      '10 seconds remaining',
    );

    countdownElement.displayedCountdownTime = '1:00';

    expect(countdownElement.formatA11yTimerValue()).toBe('1 minute remaining');
  });

  it('gets human readable time remaining from getHumanReadableTimeRemaing', async () => {
    const countdownElement = element as PdsSessionTimerCountdown;

    countdownElement.displayedCountdownTime = '0:10';

    expect(countdownElement.getHumanReadableTimeRemaining()).toBe('10 seconds');

    countdownElement.displayedCountdownTime = '1:00';

    expect(countdownElement.getHumanReadableTimeRemaining()).toBe('1 minute');
  });
});
