import { PropertyValueMap, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { localized, msg, str } from '@lit/localize';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import type { PdsSessionTimer } from '../session-timer/session-timer';
import styles from './session-timer-countdown.scss?inline';

/**
 * @summary This component displays a countdown timer to the user and includes screen reader text
 *
 * @fires pds-session-timer-countdown-tick { currentTick: Number, context: this.parentElement }
 * @fires pds-session-timer-countdown-threshold-reached { threshold: whichThreshold, context: this.parentElement }
 * @fires pds-session-timer-countdown-completed { totaltime: Number }
 */
@customElement('pds-session-timer-countdown', {
  category: 'component',
  type: 'component',
  styles,
})
@localized()
export class PdsSessionTimerCountdown extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    if (
      this.parentElement &&
      this.parentElement.tagName.toLowerCase() !== 'pds-session-timer'
    ) {
      this.setLocale();
    }
    this.initTimer(this.countdownTimeRemainingInSeconds);
  }

  disconnectedCallback(): void {
    this.removeInterval();
  }

  protected updated(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    if (changedProperties.has('timeInMs')) {
      this.removeInterval();
    }
    if (
      typeof this.intervalId === 'undefined' &&
      changedProperties.has('timeInMs') &&
      this.timeInMs > 0
    ) {
      this.countdownTimeRemainingInSeconds = this.timeInMs / 1000;

      this.displayedCountdownTime = this.formatTimerValue();
      // only update screen reader every 10 seconds
      if (this.countdownTimeRemainingInSeconds % 10 === 0) {
        this.a11yCountdownTime = this.formatA11yTimerValue();
      }
      this.initTimer();
    }
    if (changedProperties.has('countdownTimeRemainingInSeconds')) {
      this.displayedCountdownTime = this.formatTimerValue();
      const parent = this.parentElement as PdsSessionTimer;
      // enable debug logging for session time
      if (parent && parent.logSessionTimeRemaining) {
        // eslint-disable-next-line no-console
        console.log(this.displayedCountdownTime);
      }

      // only update screen reader every 10 seconds
      if (this.countdownTimeRemainingInSeconds % 10 === 0) {
        this.a11yCountdownTime = this.formatA11yTimerValue();
      }

      if (this.displayedCountdownTime === '0:00') {
        this.countdownCompleted();
      }
    }
  }

  /**
   * @internal
   */
  STATUS = {
    STOPPED: 'stopped',
    RUNNING: 'running',
    COMPLETED: 'completed',
    NOTSTARTED: 'not_started',
  };

  /**
   * Initial time for countdown
   */
  @property({ type: Number })
  timeInMs: number = 0;

  /**
   * Optional parent element (may be required for component usage context in certain scenarios)
   */
  @property()
  parentElement: HTMLElement;

  /**
   * Array of notification thresholds in ms
   */
  @property({ type: Array })
  notificationThresholds: Array<number> = [];

  /**
   * @internal
   */
  @state()
  countdownTimeRemainingInSeconds: number;

  /**
   * @internal
   */
  @state()
  notificationThresholdsRemaining: Array<number>;

  /**
   * @internal
   */
  @property()
  displayedCountdownTime: string;

  /**
   * @internal
   */
  @property()
  a11yCountdownTime: string;

  /**
   * @internal
   */
  @property()
  intervalId: NodeJS.Timer | undefined;

  /**
   * @internal
   */
  @state()
  status: string;

  /**
   * @internal
   */
  @state()
  countdownExpiration: number;

  /**
   * Format string for display
   *
   *
   */
  formatTimerValue() {
    let outputString = '0:00';

    if (this.countdownTimeRemainingInSeconds >= 0) {
      const minutesRemaining = Math.floor(
        this.countdownTimeRemainingInSeconds / 60,
      );
      const secondsRemaining = Math.floor(
        this.countdownTimeRemainingInSeconds - minutesRemaining * 60,
      );
      const secondsRemainingPadded =
        secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;

      outputString = `${minutesRemaining}:${secondsRemainingPadded}`;
    }

    return outputString;
  }

  getHumanReadableTimeRemaining() {
    let returnStr = '';

    if (this.displayedCountdownTime) {
      const minSecArray = this.displayedCountdownTime.split(':');
      if (parseInt(minSecArray[0], 10) >= 2) {
        returnStr = `${minSecArray[0]} ${msg('minutes')} `;
      } else if (parseInt(minSecArray[0], 10) === 1) {
        returnStr = `${minSecArray[0]} ${msg('minute')} `;
      }
      if (minSecArray[1] !== '00') {
        returnStr += `${minSecArray[1]} ${msg('seconds')} `;
      }
    }

    return returnStr.trim();
  }

  /**
   * Format string for screenreader
   *
   *
   */
  formatA11yTimerValue() {
    let returnStr = this.getHumanReadableTimeRemaining();

    if (returnStr !== '') {
      returnStr = msg(str`${returnStr.trim()} remaining`);
    } else {
      returnStr = msg('Your session has expired.');
    }

    return returnStr.trim();
  }

  /**
   * intialize countdown
   *
   *
   */
  initTimer(remainingTimeInSeconds?: number) {
    let initTime = this.timeInMs;
    if (remainingTimeInSeconds) {
      initTime = remainingTimeInSeconds * 1000;
      this.timeInMs = initTime;
    }

    // clear previous interval
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    if (initTime < 0) {
      console.warn('timeInMs must be a number zero or larger', this);
    } else {
      this.countdownExpiration =
        // @ts-expect-error - this value should always be a number but in the browser it sometimes gets treated as a string
        parseInt(initTime, 10) + new Date(Date.now()).getTime();
      this.notificationThresholdsRemaining = this.notificationThresholds;

      this.intervalId = setInterval(() => {
        const currentDateTime = new Date(Date.now()).getTime();
        this.status = this.STATUS.RUNNING;
        this.countdownTimeRemainingInSeconds = Math.round(
          ((this.countdownExpiration as number) - currentDateTime) / 1000,
        );
        this.dispatchEvent(
          new CustomEvent('pds-session-timer-countdown-tick', {
            bubbles: true,
            composed: true,
            detail: {
              currentTick: this.countdownTimeRemainingInSeconds,
              context: this.parentElement,
            },
          }),
        );
        this.notificationThresholdsRemaining.forEach((threshold, index) => {
          if (this.countdownTimeRemainingInSeconds * 1000 === threshold) {
            this.notificationThresholdsRemaining.splice(index, 1);
            this.thresholdReached(threshold);
          }
        });
        if (this.countdownTimeRemainingInSeconds === 0) {
          this.countdownCompleted();
        }
      }, 1000);
    }
  }

  /**
   * stop countdown
   *
   *
   */
  stop() {
    if (this.status === this.STATUS.RUNNING) {
      this.status = this.STATUS.STOPPED;
      this.removeInterval();
    }
  }

  /**
   * remove interval
   *
   *
   */
  removeInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  /**
   * threshold reached
   */
  thresholdReached(whichThreshold: number) {
    this.dispatchEvent(
      new CustomEvent('pds-session-timer-countdown-threshold-reached', {
        bubbles: true,
        composed: true,
        detail: { threshold: whichThreshold, context: this.parentElement },
      }),
    );
  }

  /**
   * countdown completed
   */
  countdownCompleted() {
    this.status = this.STATUS.COMPLETED;
    this.removeInterval();
    this.dispatchEvent(
      new CustomEvent('pds-session-timer-countdown-completed', {
        bubbles: true,
        composed: true,
        detail: { totaltime: this.timeInMs },
      }),
    );
  }

  render() {
    return html`${this.displayedCountdownTime}<span
        class=${this.classEl('sr-only')}
        role="region"
        aria-live="polite"
        >${this.a11yCountdownTime}</span
      >`;
  }
}
