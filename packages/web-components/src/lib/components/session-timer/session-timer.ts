/* eslint-disable import/no-duplicates */
import { PropertyValueMap, html, isServer, nothing } from 'lit';
import { choose } from 'lit/directives/choose.js';
import { property, query, state } from 'lit/decorators.js';
import { localized, msg } from '@lit/localize';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './session-timer.scss?inline';
import '../button/button';
import type { PdsButton } from '../button/button';
import { PdsSessionTimerCountdown } from '../session-timer-countdown/session-timer-countdown';
import '../session-timer-countdown/session-timer-countdown';
import '../heading/heading';
import '../text-passage/text-passage';
import '../layout-container/layout-container';
import '../alert/alert';
import '@keisha/design-system-icons-web/clock';
import '@keisha/design-system-icons-web/x';

/**
 * @summary This component presents a session warning to authenticated users when the active session is expiring
 *
 * This component relies on a middle layer application to provide it timeout data from the backend session service,
 * and fires the below events to communicate with the middle layer.
 *
 * The component writes data to local storage to keep the session timer of all open browser windows in sync using the 'pdsSessionValue' key.
 *
 * - Values greater than zero in the local storage will set the countdown timer for that many milliseconds into the future
 * - Value of zero will indicate an expired session and cause the component to emit a logout requested event
 * - Any other value will not set a timer
 *
 * @fires pds-session-timer-activated a custom event dispatched when session timer activates
 * @fires pds-session-timer-threshold-reached { threshold: whichThreshold } a custom event dispatched when a time threshold value has been reached
 * @fires pds-session-timer-session-requested a custom event dispatched when session timer requests session time
 * @fires pds-session-timer-extension-requested a custom event dispatched when session timer requests session to be extended
 * @fires pds-session-timer-logout-requested a custom event dispatched when session timer requests session to be logged out
 * @fires pds-session-timer-dismissed a custom event dispatched when session timer is dismissed after a session extension call failure state
 * @fires pds-session-timer-max-session-dismissed a custom event dispatched when session timer is dismissed during a max timeout
 * @fires pds-session-timer-expired a custom event dispatched when session timer expires
 *
 */

@customElement('pds-session-timer', {
  category: 'component',
  type: 'component',
  styles,
})
@localized()
export class PdsSessionTimer extends PdsElement {
  /**
   * Constants
   * @internal
   */
  CONSTANTS = {
    SESSION_REGEX: /{ "session": {.*}}/g,
    LOCAL_STORAGE_KEY: 'pdsSessionValue',
    NUM_SECONDS_IN_MIN: 60,
    FIVE_MINUTES_IN_MS: 300000,
    TWO_MINUTES_IN_MS: 120000,
  };

  protected firstUpdated() {
    if (document) {
      this.originalDocumentTitle = document.title;
    }

    if (!this.sessionTimerCountdown) {
      this.sessionTimerCountdown = new PdsSessionTimerCountdown();
      this.sessionTimerCountdown.parentElement = this;
    }

    // listen for local storage changes
    if (!isServer && window) {
      window.addEventListener('storage', (e) => {
        if (e.key === this.CONSTANTS.LOCAL_STORAGE_KEY && e.newValue) {
          try {
            const { maxSessionFlag, timeout, timestamp } = JSON.parse(
              e.newValue,
            ).session;

            this.updateSessionInformationFromData(
              maxSessionFlag === 'true',
              Number(timeout),
              Number(timestamp),
            );
          } catch (err) {
            console.error(
              'Error parsing session data from local storage.',
              err,
            );
          }
        }
      });
    }

    if (this.timeout === -1) {
      // without wrapping this in a setTimeout, it doesn't fire the event
      setTimeout(() => {
        this.dispatchEvent(
          new CustomEvent('pds-session-timer-session-requested', {
            bubbles: true,
            composed: true,
            detail: { sessionTimer: this },
          }),
        );
      }, 0);
    }
  }

  protected async updated(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): Promise<void> {
    this.setEventListeners();
    if (changedProperties.has('setMillisecondsToTimeout')) {
      if (this.extendButton) {
        this.handleExtendButtonState('default');
      }

      if (this.setMillisecondsToTimeout > 0) {
        this.timeout = this.setMillisecondsToTimeout;
      }
    }

    if (changedProperties.has('timeout')) {
      if (this.timeout >= 0) {
        this.handleLocalStorageSessionData(
          this.CONSTANTS.LOCAL_STORAGE_KEY,
          'set',
          `{ "session": {"timeout": ${this.timeout.toString()}, "maxSessionFlag": "${this.maxSessionFlag.toString()}", "timestamp": "${new Date().getTime()}"}}`,
        );
        this.sessionTimerCountdown.timeInMs = this.timeout;
        this.sessionTimerCountdown.initTimer();

        if (
          this.maxSessionFlag &&
          this.timeout <= this.CONSTANTS.FIVE_MINUTES_IN_MS &&
          this.timeout > 0
        ) {
          this.type = 'max';
        } else if (
          !this.maxSessionFlag &&
          this.timeout <= this.CONSTANTS.TWO_MINUTES_IN_MS &&
          this.timeout > 0
        ) {
          this.type = 'timeout';
        } else {
          this.type = 'wait';
          this.setTitleInterval(true);
        }

        if (this.type === 'wait') {
          this.returnFocus();
        }
      } else if (this.timeout !== -1) {
        console.error('Timeout value out of range for session timer.');
      }
    }

    if (changedProperties.has('type')) {
      if (
        !this.maxSessionFlag &&
        this.dialog &&
        !this.dialog.open &&
        this.type === 'timeout'
      ) {
        // For some reason the normal pattern of setting locale in firstUpdated isn't working, but running it here does
        this.setLocale();
        this.style.display = 'initial';
        if (document && document.activeElement) {
          this.lastFocusedElement = document.activeElement;
        }
        this.dialog.showModal();
        this.setTitleInterval();
        await this.extendButton.updateComplete;
        this.extendButton.shadowRoot?.querySelector('button')?.focus();
        this.dispatchEvent(
          new CustomEvent('pds-session-timer-activated', {
            bubbles: true,
            composed: true,
            detail: { type: this.type },
          }),
        );
      } else if (this.type === 'max') {
        // For some reason the normal pattern of setting locale in firstUpdated isn't working, but running it here does
        this.setLocale();
        this.style.display = 'initial';
        if (document && document.activeElement) {
          this.lastFocusedElement = document.activeElement;
        }
        this.maxTimer.classList.remove(this.classMod('is-minimized'));
        this.maxTimer.classList.add(this.classMod('is-visible'));
        await this.dismissButton.updateComplete;
        this.dismissButton.shadowRoot?.querySelector('button')?.focus();
        this.setTitleInterval();
        this.dispatchEvent(
          new CustomEvent('pds-session-timer-activated', {
            bubbles: true,
            composed: true,
            detail: { type: this.type },
          }),
        );
      } else if (this.type === 'wait') {
        this.style.display = 'none';
      }
    }

    if (
      changedProperties.has('extendSessionApiEndpointFailure') &&
      !this.extendSessionApiEndpointFailure
    ) {
      this.handleExtendButtonState('loading');
    } else if (changedProperties.has('extendSessionApiEndpointFailure')) {
      this.handleExtendButtonState('default');
    }
  }

  /**
   * Property to manually set milliseconds to timeout
   */
  @property({ type: Number, reflect: true })
  setMillisecondsToTimeout: number = 0;

  /**
   * Flag for max session state, defaults to false
   */
  @property({ reflect: true, type: Boolean })
  maxSessionFlag: boolean = false;

  /**
   * Fully qualified url of custom page to be directed to after logout
   */
  @property()
  customLogoutPage: string;

  /**
   * Flag for extend session api endpoint failure, defaults to false
   */
  @property({ type: Boolean })
  extendSessionApiEndpointFailure: boolean = false;

  /**
   * Array of custom notification thresholds in ms, five minutes and two minutes will always emit events
   */
  @property({ type: Array })
  customNotificationThresholds: Array<number> = [];

  /**
   * Alert document title
   *
   * @internal
   */
  @property()
  alertDocumentTitle: string = msg('Logout alert!');

  /**
   * Turn on session time logger for debugging
   */
  @property({ type: Boolean })
  logSessionTimeRemaining: boolean = false;

  /**
   * Countdown timer amount in ms, defaults to -1 which indicates that the timer should wait for input
   *
   * @internal
   */
  @property({ type: Number })
  timeout: number = -1;

  /**
   * Type of session warning to display
   *
   * @internal
   */
  @property({ reflect: true })
  type: 'wait' | 'timeout' | 'max' = 'wait';

  /**
   * Use subcomponent to run session timer clock
   *
   * @internal
   */
  @state()
  sessionTimerCountdown: PdsSessionTimerCountdown;

  /**
   * Original document title
   *
   * @internal
   */
  @state()
  originalDocumentTitle: string;

  /**
   * Interval to handle title flash
   *
   * @internal
   */
  @state()
  titleInterval: NodeJS.Timer | null;

  /**
   * Session message suffix
   *
   * @internal
   */
  @state()
  sessionMessageSuffix: string = msg('minutes');

  /**
   * Focused element when session timer fires
   *
   * @internal
   */
  @state()
  lastFocusedElement: Element;

  /**
   * Label for extend button
   *
   * @internal
   */
  @state()
  extendButtonLabel: string = msg('Stay logged in');

  /**
   * Loading state for extend button
   *
   * @internal
   */
  @state()
  extendButtonLoading: boolean = false;

  /**
   * Most recent write to storage
   *
   * @internal
   */
  @state()
  lastWroteToStorage: number = 0;

  /**
   * Session timer modal
   *
   * @internal
   */
  @query('dialog')
  dialog: HTMLDialogElement;

  /**
   * Session timer max div
   *
   * @internal
   */
  @query(`.pds-c-session-timer__max-timer`)
  maxTimer: HTMLElement;

  /**
   * Countdown subcomponent for visual display
   *
   * @internal
   */
  @query('pds-session-timer-countdown')
  countdownComponent: PdsSessionTimerCountdown;

  /**
   * Extend button
   *
   * @internal
   */
  @query('.pds-c-session-timer__extend-button')
  extendButton: PdsButton;

  /**
   * Logout button
   *
   * @internal
   */
  @query('.pds-c-session-timer__logout-button')
  logoutButton: PdsButton;

  /**
   * Logout button
   *
   * @internal
   */
  @query('.pds-c-session-timer__dismiss-button')
  dismissButton: PdsButton;

  /**
   * Abstract local storage commands for SSR
   */
  handleLocalStorageSessionData = (
    key: string,
    operation: 'get' | 'set' | 'remove' = 'get',
    value?: string,
  ) => {
    // check first for browser environment
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      if (operation === 'get' && key && localStorage[key]) {
        const localSessExpiration = localStorage[key];

        if (localSessExpiration) {
          if (
            localSessExpiration.match(this.CONSTANTS.SESSION_REGEX) &&
            JSON.parse(localSessExpiration)
          ) {
            return localSessExpiration;
          }
        }

        console.error('Bad data in local storage', localSessExpiration);
      } else if (operation === 'set' && key && value) {
        if (value.match(this.CONSTANTS.SESSION_REGEX)) {
          localStorage.setItem(key, value);

          return true;
        }
        console.warn(
          'Invalid string passed for session data, cannot write to local storage',
        );
      } else if (operation === 'remove' && key) {
        localStorage.removeItem(key);

        return true;
      } else if (operation === 'get' && key) {
        return localStorage[key];
      }
    }

    return false;
  };

  /**
   * Handle title notification in browser
   */
  setTitleInterval(reset: boolean = false) {
    if (reset && this.titleInterval) {
      clearInterval(this.titleInterval);
      this.titleInterval = null;
      document.title = this.originalDocumentTitle;
    } else if (!this.titleInterval) {
      this.titleInterval = setInterval(() => {
        const currentSeconds =
          this.sessionTimerCountdown.countdownTimeRemainingInSeconds;

        // change string in message if under 1 minute remaining
        if (currentSeconds <= this.CONSTANTS.NUM_SECONDS_IN_MIN) {
          this.sessionMessageSuffix = msg('seconds');
        } else {
          this.sessionMessageSuffix = msg('minutes');
        }

        // flash document title
        if (Math.floor(currentSeconds) % 4 === 0) {
          document.title = this.alertDocumentTitle;
        } else if (Math.floor(currentSeconds) % 2 === 0) {
          document.title = this.originalDocumentTitle;
        }
      }, 1000);
    }
  }

  /**
   * Fires session extension request event
   */
  handleExtendSessionClicked() {
    this.dispatchEvent(
      new Event('pds-session-timer-extension-requested', {
        bubbles: true,
        composed: true,
      }),
    );
    this.handleExtendButtonState('loading');
  }

  /**
   * Fires session expired event
   */
  sessionExpired(e?: Event) {
    let context: PdsSessionTimer | PdsSessionTimerCountdown = this;
    if (e && e.target) {
      context = (e?.target as PdsSessionTimerCountdown)
        .parentElement as PdsSessionTimer;
    }
    context.resetSessionStorage(context);
    context.dispatchEvent(
      new CustomEvent('pds-session-timer-expired', {
        bubbles: true,
        composed: true,
        detail: {
          customLogoutPage: this.customLogoutPage,
        },
      }),
    );
  }

  /**
   * Dismiss the timer
   */
  dismissTimer() {
    this.dialog.classList.add(this.classMod('is-minimized'));
    this.dispatchEvent(
      new Event('pds-session-timer-dismissed', {
        bubbles: true,
        composed: true,
      }),
    );
    this.setTitleInterval(true);

    setTimeout(() => {
      this.dialog.close();
      this.type = 'wait';
      this.returnFocus();
    }, 625);
  }

  /**
   * Handle countdown thresholds reached
   */
  handleThresholdReached(e: Event) {
    const customEvent = e as CustomEvent;
    const host = customEvent.detail.context as PdsSessionTimer;

    if (
      host.maxSessionFlag &&
      customEvent.detail.threshold === host.CONSTANTS.FIVE_MINUTES_IN_MS &&
      !host.extendSessionApiEndpointFailure
    ) {
      host.type = 'max';
    } else if (
      !host.maxSessionFlag &&
      customEvent.detail.threshold === host.CONSTANTS.TWO_MINUTES_IN_MS &&
      !host.extendSessionApiEndpointFailure
    ) {
      host.type = 'timeout';
    }

    host.dispatchEvent(
      new CustomEvent('pds-session-timer-threshold-reached', {
        bubbles: true,
        composed: true,
        detail: { threshold: customEvent.detail.threshold },
      }),
    );
  }

  /**
   * Handle dimissing the max timeout message
   */
  handleMaxDismiss() {
    this.dispatchEvent(
      new Event('pds-session-timer-max-session-dismissed', {
        bubbles: true,
        composed: true,
      }),
    );
    this.maxTimer.classList.add(this.classMod('is-minimized'));
    this.returnFocus();
  }

  /**
   * Handle a logout click
   */
  handleLogoutClick() {
    this.resetSessionStorage();
    this.handleLogout();
  }

  /**
   * Fires session logout requested event
   */
  handleLogout() {
    this.dispatchEvent(
      new CustomEvent('pds-session-timer-logout-requested', {
        bubbles: true,
        composed: true,
        detail: {
          customLogoutPage: this.customLogoutPage,
        },
      }),
    );
  }

  /**
   * Handle extend button click
   */
  handleExtendButtonState(type: 'loading' | 'default') {
    if (type === 'loading' && this.extendButton) {
      this.extendButtonLoading = true;
      this.extendButtonLabel = msg('One moment');
    } else if (this.extendButton) {
      this.extendButton.removeAttribute('disabled');
      this.extendButtonLoading = false;
      this.extendButtonLabel = msg('Stay logged in');
    }
  }

  /**
   * Set event listeners
   */
  setEventListeners() {
    // customNotificationThresholds come through as null in React SSR
    // (depite the default being set to []), so we need to handle that
    try {
      this.sessionTimerCountdown.notificationThresholds = [
        this.CONSTANTS.FIVE_MINUTES_IN_MS,
        this.CONSTANTS.TWO_MINUTES_IN_MS,
        ...this.customNotificationThresholds,
      ];
    } catch {
      this.sessionTimerCountdown.notificationThresholds = [
        this.CONSTANTS.FIVE_MINUTES_IN_MS,
        this.CONSTANTS.TWO_MINUTES_IN_MS,
      ];
    }

    this.sessionTimerCountdown.addEventListener(
      'pds-session-timer-countdown-threshold-reached',
      this.handleThresholdReached,
    );

    this.sessionTimerCountdown.addEventListener(
      'pds-session-timer-countdown-completed',
      this.sessionExpired,
    );

    this.sessionTimerCountdown.addEventListener(
      'pds-session-timer-countdown-tick',
      this.checkTick,
    );

    // prevent esc key from closing dialog
    if (this.dialog) {
      this.dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
      });
    }
  }

  /**
   * Return focus to specified element
   */
  returnFocus() {
    if (
      this.lastFocusedElement &&
      typeof this.lastFocusedElement !== 'undefined'
    ) {
      (this.lastFocusedElement as HTMLElement).focus();
    }
  }

  /**
   * Reset session in local storage
   */
  resetSessionStorage(contextElement?: PdsSessionTimer | undefined) {
    let context: PdsSessionTimer = this;
    if (contextElement) {
      context = contextElement as PdsSessionTimer;
    }
    context.handleLocalStorageSessionData(
      context.CONSTANTS.LOCAL_STORAGE_KEY,
      'set',
      `{ "session": {"timeout": -1, "maxSessionFlag": "${context.maxSessionFlag.toString()}", "timestamp": "${new Date().getTime()}"}}`,
    );
  }

  updateSessionInformationFromData(
    maxSessionFlag: boolean,
    timeout: number,
    timestamp: number,
  ) {
    // check to make sure that this is a new entry
    if (Number(timestamp) > this.lastWroteToStorage) {
      if (Number.isNaN(Number(timeout))) {
        console.error(
          'Value in the session timer local storage key is not a number, unable to update session timer.',
        );
      } else if (Number(timeout) > 0) {
        this.timeout = Number(timeout);
        this.maxSessionFlag = maxSessionFlag;

        // check if we should be in a activated state
        if (
          this.maxSessionFlag &&
          this.timeout <= this.CONSTANTS.FIVE_MINUTES_IN_MS
        ) {
          this.type = 'max';
        } else if (
          !this.maxSessionFlag &&
          this.timeout <= this.CONSTANTS.TWO_MINUTES_IN_MS
        ) {
          this.type = 'timeout';
        } else {
          this.type = 'wait';
        }
      } else if (Number(timeout) === 0) {
        this.handleLogout();
      } else if (Number(timeout) !== -1) {
        console.error('Timeout value out of range for session timer.');
      }
    }
  }

  /**
   * Check if this tick of the timer requires action
   */
  checkTick(e: Event) {
    const customEvent = e as CustomEvent;

    try {
      const context = customEvent.detail.context as PdsSessionTimer;
      const timeout = customEvent.detail.currentTick * 1000;

      const { maxSessionFlag, timestamp } = JSON.parse(
        context.handleLocalStorageSessionData(
          context.CONSTANTS.LOCAL_STORAGE_KEY,
        ),
      ).session;

      context.updateSessionInformationFromData(
        maxSessionFlag === 'true',
        Number(timeout),
        Number(timestamp),
      );
    } catch (err) {
      console.error('Error parsing session data.', err);
    }
  }

  render() {
    return html`${choose(
      this.type,
      [
        [
          'timeout',
          () =>
            html`<dialog
              class=${this.classEl('modal')}
              aria-labelledby="session-timeout-heading"
            >
              <pds-text-passage
                lineLength="none"
                class=${this.classEl('text-passage')}
              >
                ${this.extendSessionApiEndpointFailure
                  ? html`<pds-alert
                      class=${this.classEl('alert')}
                      variant="warning"
                      hideDismissButton
                      >${msg(
                        `Sorry! Something went wrong on our end when trying to extend your session. Give it another try, or `,
                      )}<pds-button
                        removeLinkPadding
                        link="default"
                        @click=${this.dismissTimer}
                        >${msg('dismiss the timer')}</pds-button
                      >
                      ${msg(
                        `to save your work before you get logged out.`,
                      )}</pds-alert
                    >`
                  : nothing}
                <pds-heading
                  id="session-timeout-heading"
                  class=${this.classEl('heading')}
                  variant="headline-default"
                  headingTag="h1"
                  ><pds-icon-clock
                    size="xxl"
                    class=${this.classEl('icon')}
                  ></pds-icon-clock
                  ><span
                    >${msg("Still there? You're about to be logged out.")}</span
                  ></pds-heading
                >
                <p class=${this.classEl('text')} id="session-timeout-text">
                  ${msg(
                    `To keep your account secure, we'll automatically log you out in `,
                  )}<mark class=${this.classEl('time-remaining')}
                    >${this.sessionTimerCountdown
                      ? this.sessionTimerCountdown
                      : '0:00'}</mark
                  >
                  <span class=${this.classEl('sr-only')}
                    >${this.sessionTimerCountdown?.timeInMs
                      ? this.sessionTimerCountdown.getHumanReadableTimeRemaining()
                      : nothing}</span
                  >
                  <span
                    aria-hidden="true"
                    id="pds-session-timer-countdown-suffix"
                    >${this.sessionMessageSuffix}.</span
                  >
                </p>
              </pds-text-passage>
              <div class=${this.classEl('footer')}>
                <pds-button
                  class=${this.classEl('extend-button')}
                  @click="${this.handleExtendSessionClicked}"
                  disabled=${this.extendButtonLoading ? true : nothing}
                  ><span>${this.extendButtonLabel}</span></pds-button
                ><br />
                <pds-button
                  class=${this.classEl('logout-button')}
                  link="emphasis-inverted"
                  @click="${this.handleLogoutClick}"
                  >${msg('Log out')}</pds-button
                >
              </div>
            </dialog>`,
        ],
        [
          'max',
          () =>
            html`<div
              class=${this.classEl('max-timer')}
              role="dialog"
              aria-modal="true"
              aria-labelledby="session-timeout-heading"
            >
              <pds-layout-container class=${this.classEl('layout-container')}>
                <pds-text-passage
                  lineLength="none"
                  class=${this.classEl('text-passage')}
                  ><pds-heading
                    id="session-timeout-heading"
                    variant="title-default"
                    class=${this.classEl('heading')}
                    headingTag="h1"
                    ><pds-icon-clock
                      size="xxl"
                      class=${this.classEl('icon')}
                    ></pds-icon-clock
                    >${msg("Still there? You're about to be logged out")}<span
                      aria-hidden="true"
                      >.</span
                    ></pds-heading
                  >
                  <p class=${this.classEl('text')} id="session-timeout-text">
                    <span class=${this.classEl('text-span')}
                      >${msg(
                        `To keep your account secure, we'll automatically log you out in `,
                      )}</span
                    ><mark class=${this.classEl('time-remaining')}
                      >${this.sessionTimerCountdown}</mark
                    >
                    <span id="pds-session-timer-countdown-suffix"
                      >${this.sessionMessageSuffix}</span
                    >.
                  </p>
                </pds-text-passage>
              </pds-layout-container>
              <pds-button
                @click=${this.handleMaxDismiss}
                class=${this.classEl('dismiss-button')}
                link="emphasis-inverted"
                removeLinkPadding
                ><span>${msg('Dismiss')}</span>
                <pds-icon-x class=${this.classEl('dismiss-x')}></pds-icon-x
              ></pds-button>
            </div>`,
        ],
      ],
      () =>
        html`<span aria-hidden="true" style="display:none"
          >${this.sessionTimerCountdown}</span
        >`,
    )}`;
  }
}

if (!isServer && document && !document.querySelector('pds-session-timer')) {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<pds-session-timer style="display: none" timeout="-1"></pds-session-timer>`,
  );
}
