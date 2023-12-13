import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsSessionTimer } from './session-timer';
import createSnapshots from '../../../../test/utils/snapshots';

jest.mock('lit', () => ({
  ...jest.requireActual('lit'),
  isServer: false,
}));

initStoryshots({
  storyKindRegex: /Session timer/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('SessionTimer unit tests', () => {
  let element: Element;

  beforeAll(() => {
    // The native HTML dialog is not yet supported by jest. See:
    // https://github.com/jsdom/jsdom/issues/3294
    HTMLDialogElement.prototype.show = jest.fn(function mock(
      this: HTMLDialogElement,
    ) {
      this.open = true;
    });

    HTMLDialogElement.prototype.showModal = jest.fn(function mock(
      this: HTMLDialogElement,
    ) {
      this.open = true;
    });

    HTMLDialogElement.prototype.close = jest.fn(function mock(
      this: HTMLDialogElement,
    ) {
      this.open = false;
    });
  });

  beforeEach(async () => {
    element = await fixture('<pds-session-timer/>');
  });

  it('is an instance of PdsSessionTimer', () => {
    expect(element).toBeInstanceOf(PdsSessionTimer);
  });

  it('is accessible', async () => {
    const accessibleElement = (await fixture(
      '<pds-session-timer/>',
    )) as PdsSessionTimer;
    await assert.isAccessible(accessibleElement);
  });

  it('handles storage event', async () => {
    const sessionStorageListenerElement = (await fixture(
      '<pds-session-timer/>',
    )) as PdsSessionTimer;

    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'pdsSessionValue',
        newValue:
          '{ "session": {"timeout": "122000", "maxSessionFlag": "false", "timestamp": "12345"}}',
      }),
    );

    expect(sessionStorageListenerElement.timeout).toBe(122000);
  });

  it('handles storage event with invalid timeout value', async () => {
    let consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sessionStorageNotANumberElement = (await fixture(
      '<pds-session-timer/>',
    )) as PdsSessionTimer;

    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'pdsSessionValue',
        newValue:
          '{ "session": {"timeout": "wonky", "maxSessionFlag": "false", "timestamp": "12345"}}',
      }),
    );

    expect(consoleError).toHaveBeenCalledWith(
      'Value in the session timer local storage key is not a number, unable to update session timer.',
    );

    consoleError.mockRestore();

    consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sessionStorageNegativeNumberElement = (await fixture(
      '<pds-session-timer/>',
    )) as PdsSessionTimer;

    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'pdsSessionValue',
        newValue:
          '{ "session": {"timeout": "-50", "maxSessionFlag": "false", "timestamp": "12345"}}',
      }),
    );

    expect(consoleError).toHaveBeenCalledWith(
      'Timeout value out of range for session timer.',
    );

    consoleError.mockRestore();

    consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sessionStorageNegativeOneElement = (await fixture(
      '<pds-session-timer/>',
    )) as PdsSessionTimer;

    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'pdsSessionValue',
        newValue:
          '{ "session": {"timeout": "-1", "maxSessionFlag": "false", "timestamp": "12345"}}',
      }),
    );

    expect(consoleError).not.toHaveBeenCalled();

    consoleError.mockRestore();
  });

  it('handles storage event with invalid session object JSON', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sessionStorageListenerElement = (await fixture(
      '<pds-session-timer/>',
    )) as PdsSessionTimer;

    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'pdsSessionValue',
        newValue:
          '[ "session": {"timeout": "wonky", "maxSessionFlag": "false"}}',
      }),
    );

    expect(consoleError).toHaveBeenCalled();

    consoleError.mockRestore();
  });

  it('handles storage event with timeout equals zero', async () => {
    const handler = jest.fn();
    const sessionStorageListenerElement = (await fixture(
      '<pds-session-timer customLogoutPage="https://www.google.com" />',
    )) as PdsSessionTimer;
    sessionStorageListenerElement.addEventListener(
      'pds-session-timer-logout-requested',
      handler,
    );
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'pdsSessionValue',
        newValue:
          '{ "session": {"timeout": "0", "maxSessionFlag": "false", "timestamp": "12345"}}',
      }),
    );
    return Promise.resolve().then(() => {
      expect(handler).toHaveBeenCalled();
      expect(handler.mock.lastCall[0].detail.customLogoutPage).toBe(
        'https://www.google.com',
      );
    });
  });

  it('handles timeout out of range', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    (element as PdsSessionTimer).timeout = -50;

    await (element as PdsSessionTimer).updateComplete;

    expect(consoleError).toHaveBeenCalled();

    consoleError.mockRestore();
  });

  it('enables extend button if timeout value changes', async () => {
    const sessionTimerActiveElement = (await fixture(
      '<pds-session-timer/>',
    )) as PdsSessionTimer;

    sessionTimerActiveElement.setMillisecondsToTimeout = 119000;
    sessionTimerActiveElement.type = 'timeout';
    await sessionTimerActiveElement.updateComplete;

    sessionTimerActiveElement.extendButton.click();
    await sessionTimerActiveElement.updateComplete;

    expect(
      sessionTimerActiveElement.shadowRoot
        ?.querySelector('.pds-c-session-timer__extend-button')
        ?.getAttribute('disabled'),
    ).toBe('true');

    sessionTimerActiveElement.setMillisecondsToTimeout = 118000;
    await sessionTimerActiveElement.extendButton.updateComplete;

    expect(
      sessionTimerActiveElement.shadowRoot
        ?.querySelector('.pds-c-session-timer__extend-button')
        ?.getAttribute('disabled'),
    ).toBeFalsy();
  });

  it('sets type to max if max session flag and under five minutes on timeout', async () => {
    document.body.insertAdjacentHTML('afterbegin', '<button id="button">');
    (element as PdsSessionTimer).maxSessionFlag = true;
    await (element as PdsSessionTimer).updateComplete;
    (element as PdsSessionTimer).timeout = 299000;
    await (element as PdsSessionTimer).updateComplete;
    (document.querySelector('#button') as HTMLElement)?.focus();

    expect((element as PdsSessionTimer).type).toBe('max');
  });

  it('handles local storage session data', async () => {
    const pdsSessionTimerInstance = element as PdsSessionTimer;
    pdsSessionTimerInstance.handleLocalStorageSessionData(
      pdsSessionTimerInstance.CONSTANTS.LOCAL_STORAGE_KEY,
      'set',
      '{ "session": {"timeout": 119000, "maxSessionFlag": "false"}}',
    );

    expect(
      pdsSessionTimerInstance.handleLocalStorageSessionData(
        pdsSessionTimerInstance.CONSTANTS.LOCAL_STORAGE_KEY,
        'get',
      ),
    ).toBe('{ "session": {"timeout": 119000, "maxSessionFlag": "false"}}');

    pdsSessionTimerInstance.handleLocalStorageSessionData(
      pdsSessionTimerInstance.CONSTANTS.LOCAL_STORAGE_KEY,
      'remove',
    );

    expect(
      pdsSessionTimerInstance.handleLocalStorageSessionData(
        pdsSessionTimerInstance.CONSTANTS.LOCAL_STORAGE_KEY,
      ),
    ).toBeFalsy();

    expect(
      pdsSessionTimerInstance.handleLocalStorageSessionData(
        'lousyNoGoodMadeUpKey',
        'get',
      ),
    ).toBeUndefined();
  });

  it('handles bad local storage session data', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const pdsSessionTimerInstance = element as PdsSessionTimer;
    localStorage.setItem(
      pdsSessionTimerInstance.CONSTANTS.LOCAL_STORAGE_KEY,
      'This data is bad',
    );
    pdsSessionTimerInstance.handleLocalStorageSessionData(
      pdsSessionTimerInstance.CONSTANTS.LOCAL_STORAGE_KEY,
      'get',
    );

    expect(consoleError).toHaveBeenCalledWith(
      'Bad data in local storage',
      'This data is bad',
    );

    consoleError.mockRestore();

    const consoleWarning = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    pdsSessionTimerInstance.handleLocalStorageSessionData(
      pdsSessionTimerInstance.CONSTANTS.LOCAL_STORAGE_KEY,
      'set',
      'This data is even worse.',
    );

    expect(consoleWarning).toHaveBeenCalledWith(
      'Invalid string passed for session data, cannot write to local storage',
    );
  });

  it('sets title interval correctly', async () => {
    jest.useFakeTimers();
    const pdsSessionTimerInstance = element as PdsSessionTimer;

    pdsSessionTimerInstance.titleInterval = setInterval(() => {});
    document.title = 'temporary title';

    pdsSessionTimerInstance.setTitleInterval(true);

    expect(pdsSessionTimerInstance.titleInterval).toBeNull();
    expect(document.title).toBe('');

    pdsSessionTimerInstance.sessionTimerCountdown.countdownTimeRemainingInSeconds = 118;

    pdsSessionTimerInstance.setTitleInterval();

    jest.advanceTimersByTime(1000);

    expect(pdsSessionTimerInstance.sessionMessageSuffix).toBe('minutes');
    expect(document.title).toBe('');

    pdsSessionTimerInstance.sessionTimerCountdown.countdownTimeRemainingInSeconds = 40;

    pdsSessionTimerInstance.setTitleInterval();

    jest.advanceTimersByTime(1000);

    expect(pdsSessionTimerInstance.sessionMessageSuffix).toBe('seconds');
    expect(document.title).toBe('Logout alert!');

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('fires session expired event', async () => {
    const expiredHandler = jest.fn();
    const expiredElement = (await fixture(
      '<pds-session-timer/>',
    )) as PdsSessionTimer;

    expiredElement?.addEventListener(
      'pds-session-timer-expired',
      expiredHandler,
    );

    const sessionExpiredEventObj = {
      target: expiredElement.countdownComponent,
    };

    expiredElement.sessionExpired(sessionExpiredEventObj as unknown as Event);

    expect(expiredHandler).toBeCalled();
  });

  it('dismisses the timer', async () => {
    jest.useFakeTimers();
    const activeElement = (await fixture(
      '<pds-session-timer setMillisecondsToTimeout="118"/>',
    )) as PdsSessionTimer;

    activeElement.dismissTimer();

    jest.advanceTimersByTime(1000);

    expect(activeElement.type).toBe('wait');
    expect(activeElement.dialog.classList[1]).toBe(
      'pds-c-session-timer--is-minimized',
    );

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('handles reached thresholds', async () => {
    const thresholdHandler = jest.fn();
    const thresholdMaxElement = (await fixture(
      '<pds-session-timer maxSessionFlag/>',
    )) as PdsSessionTimer;

    const customMaxEvent = new CustomEvent('test-event', {
      detail: {
        context: thresholdMaxElement,
        threshold: thresholdMaxElement.CONSTANTS.FIVE_MINUTES_IN_MS,
      },
    });

    thresholdMaxElement?.addEventListener(
      'pds-session-timer-threshold-reached',
      thresholdHandler,
    );

    thresholdMaxElement.handleThresholdReached(customMaxEvent);

    expect(thresholdHandler.mock.calls[0][0].detail.threshold).toBe(
      thresholdMaxElement.CONSTANTS.FIVE_MINUTES_IN_MS,
    );
    expect(thresholdMaxElement.type).toBe('max');

    const thresholdElement = (await fixture(
      '<pds-session-timer />',
    )) as PdsSessionTimer;

    const customEvent = new CustomEvent('test-event', {
      detail: {
        context: thresholdElement,
        threshold: thresholdElement.CONSTANTS.TWO_MINUTES_IN_MS,
      },
    });

    thresholdElement?.addEventListener(
      'pds-session-timer-threshold-reached',
      thresholdHandler,
    );

    thresholdElement.handleThresholdReached(customEvent);

    expect(thresholdHandler.mock.calls[1][0].detail.threshold).toBe(
      thresholdElement.CONSTANTS.TWO_MINUTES_IN_MS,
    );
    expect(thresholdElement.type).toBe('timeout');
  });

  it('handles max dismiss', async () => {
    const maxDismissHandler = jest.fn();
    const thresholdMaxElement = (await fixture(
      '<pds-session-timer maxSessionFlag/>',
    )) as PdsSessionTimer;

    thresholdMaxElement?.addEventListener(
      'pds-session-timer-max-session-dismissed',
      maxDismissHandler,
    );

    thresholdMaxElement.timeout =
      thresholdMaxElement.CONSTANTS.FIVE_MINUTES_IN_MS;
    thresholdMaxElement.type = 'max';

    await thresholdMaxElement.updateComplete;

    thresholdMaxElement.handleMaxDismiss();

    expect(maxDismissHandler).toBeCalled();

    expect(thresholdMaxElement.maxTimer.classList[2]).toBe(
      'pds-c-session-timer--is-minimized',
    );
  });

  it('handles logout click', async () => {
    jest.useFakeTimers().setSystemTime(new Date('2023-07-01'));
    const logoutClickHandler = jest.fn();
    const pdsSessionTimerInstance = element as PdsSessionTimer;

    pdsSessionTimerInstance.addEventListener(
      'pds-session-timer-logout-requested',
      logoutClickHandler,
    );

    localStorage.setItem(
      pdsSessionTimerInstance.CONSTANTS.LOCAL_STORAGE_KEY,
      'test',
    );

    pdsSessionTimerInstance.handleLogoutClick();

    expect(logoutClickHandler).toBeCalled();
    expect(
      localStorage.getItem(pdsSessionTimerInstance.CONSTANTS.LOCAL_STORAGE_KEY),
    ).toBe(
      '{ "session": {"timeout": -1, "maxSessionFlag": "false", "timestamp": "1688169600000"}}',
    );
  });

  it('shows alert if extendSessionApiEndpointFailure prop is passed', async () => {
    const alertedElement = (await fixture(
      '<pds-session-timer extendSessionApiEndpointFailure setMillisecondsToTimeout="10000"/>',
    )) as PdsSessionTimer;

    expect(
      alertedElement.shadowRoot?.querySelector('.pds-c-session-timer__alert'),
    ).toBeTruthy();
  });

  it('returns focus', async () => {
    const pdsSessionTimerInstance = element as PdsSessionTimer;

    document.body.insertAdjacentHTML('afterbegin', '<button id="test">');

    const button = document.querySelector('#test');

    if (button) {
      pdsSessionTimerInstance.lastFocusedElement = button;
    }

    pdsSessionTimerInstance.returnFocus();

    expect(document.activeElement).toBe(button);
  });
});
