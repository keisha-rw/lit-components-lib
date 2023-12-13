/*
 * This component ported to Lit from the fantastic Stencil-based
 * date picker web component 'wc-datepicker'
 * https://sqrrl.github.io/wc-datepicker/
 */

import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { localized, msg } from '@lit/localize';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './date-picker.scss?inline';
import {
  addDays,
  getDaysOfMonth,
  getFirstOfMonth,
  getISODateString,
  getLastOfMonth,
  getMonths,
  getNextDay,
  getNextMonth,
  getNextYear,
  getPreviousDay,
  getPreviousMonth,
  getPreviousYear,
  getWeekDays,
  getYear,
  isDateInRange,
  isSameDay,
  removeTimezoneOffset,
  subDays,
} from './utils';
import '@keisha/design-system-icons-web/chevrons-left';
import '@keisha/design-system-icons-web/chevron-left';
import '@keisha/design-system-icons-web/chevrons-right';
import '@keisha/design-system-icons-web/chevron-right';
import '../button/button';

export type WCDatepickerLabels = {
  clearButton: string;
  nextMonthButton: string;
  nextYearButton: string;
  picker: string;
  previousMonthButton: string;
  previousYearButton: string;
  todayButton: string;
};

export interface MonthChangedEventDetails {
  month: number;
  year: number;
}

const dateRegEx = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/g;

/**
 * @summary This component displays a calendar for selecting a date
 *
 * @fires pds-date-picker-select-date A custom event dispatched on date selection
 * @fires pds-date-picker-change-view A custom event dispatched on picker view change
 * @fires pds-date-picker-escape A custom event dispatches when keypress = escape
 */
@customElement('pds-date-picker', {
  category: 'component',
  type: 'component',
  styles,
})
@localized()
export class PdsDatePicker extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
    if (this.locale === '') {
      this.locale = navigator.language;
    }
    if (
      this.closest('[lang]')?.getAttribute('lang') === 'es' &&
      this.locale === 'en-US'
    ) {
      this.locale = 'es-US';
    }
    this.init();
  }

  /**
   * Need to also handle init here due to order of operations in react compoent
   */
  firstUpdated() {
    if (this.initialDate?.split(',').length === 2) {
      this.isRange = true;
    }
    this.init();
  }

  /**
   * Handle the focus change when using keyboard control between months
   */
  updated() {
    if (this.moveFocusAfterMonthChanged) {
      this.focusDate(this.currentDate);
      this.moveFocusAfterMonthChanged = false;
    }
  }

  /**
   * Initial date
   * - The initial date selected when component renders. Comma separated start and end date if range selection is enabled.
   */
  @property()
  initialDate: string | undefined;

  /**
   * Initial displayed month
   * - Date in YYYY-MM-DD format used to determine the initially displayed month.
   */
  @property({ type: String })
  initialDisplayedMonth: string = getISODateString(new Date());

  /**
   * Disable date
   * - **disable-weekends** Disable weekends on the calendar
   * - **YYYY-MM-DD string** Disable a specific date
   */
  @property({ type: String })
  disableDate: string | undefined;

  /**
   * Element class name
   * String for defining the class prefix for the component
   *
   * @internal
   */
  @property({ type: String })
  elementClassName: string = 'pds-c-date-picker';

  /**
   * First day of week
   * - Set first day of a week. 0 for Sunday, 6 for Saturday.
   */
  @property({ type: Number })
  firstDayOfWeek: number = 0;

  /**
   * Range
   * - Enable/disable range selection.
   */ @property({ type: Boolean })
  isRange: boolean;

  /**
   * Labels
   * - Object with label values, by default:
   * {
   *  clearButton: 'Clear value',
   *  nextMonthButton: 'Next month',
   *  nextYearButton: 'Next year',
   *  picker: 'Choose date',
   *  previousMonthButton: 'Previous month',
   *  previousYearButton: 'Previous year',
   *  todayButton: 'Show today',
   *  }
   *
   * @internal
   *
   */
  @property({ type: Object })
  labels?: WCDatepickerLabels;

  /**
   * Locale
   * - BCP 47 locale string used to format dates.
   */
  @property({ type: String })
  locale: string = navigator.language;

  /**
   * Show clear button
   * - Display the clear button.
   */
  @property({ type: Boolean })
  showClearButton: boolean = false;

  /**
   * Hide month stepper
   * - Disable the month stepper buttons.
   */
  @property({ type: Boolean })
  hideMonthStepper: boolean = false;

  /**
   * Show today button
   * - Display the today button.
   */
  @property({ type: Boolean })
  showTodayButton: boolean = false;

  /**
   * Hide year stepper
   * - Disable the year stepper buttons.
   */
  @property({ type: Boolean })
  hideYearStepper: boolean = false;

  /**
   * Today button content
   * Customize the text of the today button
   */
  @property({ type: String })
  todayButtonContent?: string;

  /**
   * Value
   * - The currently selected date. Array of start and end date if range selection is enabled.
   *
   * @internal
   */
  @property()
  value: Date | Date[] | undefined;

  /**
   * Clear button content
   * - Customize the text of the clear button
   */
  @property({ type: String })
  clearButtonContent?: string;

  /**
   * Disabled
   * - Disable the datepicker.
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   *   A function passed directly to this component property via javascript
   *   to disable a day or days on the calendar; function takes a Date and
   *   should return true to disable a date.
   */
  @property()
  disableFunction: (date: Date) => boolean = () => false;

  /**
   * @internal
   */
  @state()
  currentDate: Date;

  /**
   * @internal
   */
  @state()
  hoveredDate: Date | undefined;

  /**
   * @internal
   */
  @state()
  weekdays: string[][];

  /**
   * @internal
   */
  private moveFocusAfterMonthChanged: Boolean;

  private init() {
    this.updateDisableDate();
    this.updateWeekdays();
    // set initial calendar view
    this.currentDate = removeTimezoneOffset(
      new Date(this.initialDisplayedMonth),
    );
    // set initial date
    let rangeDateOne: string;
    let rangeDateTwo: string;
    if (this.initialDate?.split(',').length === 2) {
      rangeDateOne = this.initialDate.split(',')[0].trim();
      rangeDateTwo = this.initialDate.split(',')[1].trim();

      const transformedInitialDateOne = removeTimezoneOffset(
        new Date(rangeDateOne),
      );
      const transformedInitialDateTwo = removeTimezoneOffset(
        new Date(rangeDateTwo),
      );

      this.value = [transformedInitialDateOne, transformedInitialDateTwo];
    } else if (
      this.initialDate &&
      this.initialDate !== '' &&
      typeof this.initialDate === 'string' &&
      Array.isArray(this.initialDate.match(dateRegEx))
    ) {
      const transformedInitialDate = removeTimezoneOffset(
        new Date(this.initialDate),
      );

      this.value = transformedInitialDate;
    }
  }

  private updateWeekdays() {
    this.weekdays = getWeekDays(
      this.firstDayOfWeek === 0 ? 7 : this.firstDayOfWeek,
      this.locale,
    );
  }

  private updateDisableDate() {
    let singleDateValue = '';

    const dateValueArr = String(this.disableDate).trim().match(dateRegEx);
    singleDateValue = dateValueArr ? dateValueArr[0] : '';

    // set up out of the box date disabled functions
    if (
      typeof this.disableDate === 'string' &&
      this.disableDate === 'disable-weekends'
    ) {
      this.disableFunction = (date: Date) => {
        return date.getDay() === 0 || date.getDay() === 6;
      };
    } else if (singleDateValue !== '') {
      const enteredDate = singleDateValue;
      this.disableFunction = (date: Date) => {
        // disable specific yyyy-mm-dd date
        return date.toISOString().split('T')[0] === enteredDate;
      };
    } else if (
      typeof this.disableDate === 'string' &&
      this.disableDate !== ''
    ) {
      console.error(
        'An invalid string was passed to the date picker for the disableDate property.',
      );
      this.disableFunction = () => false;
    }
  }

  private getClassName(element?: string) {
    return `${this.elementClassName}__${element}`;
  }

  private getCalendarRows(): Date[][] {
    const daysOfMonth = getDaysOfMonth(
      this.currentDate,
      this.firstDayOfWeek === 0 ? 7 : this.firstDayOfWeek,
      true,
    );

    const calendarRows: Date[][] = [];

    for (let i = 0; i < daysOfMonth.length; i += 7) {
      const row = daysOfMonth.slice(i, i + 7);
      calendarRows.push(row);
    }

    return calendarRows;
  }

  private getTitle() {
    return Intl.DateTimeFormat(this.locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(this.currentDate);
  }

  private focusDate(date: Date) {
    const dateValue = getISODateString(date);
    (
      this.shadowRoot?.querySelector(
        `[data-date="${dateValue}"]`,
      ) as HTMLElement
    )?.focus();
  }

  private updateCurrentDate(date: Date, moveFocus?: boolean) {
    const month = date.getMonth();
    const year = date.getFullYear();

    const monthChanged =
      month !== this.currentDate.getMonth() ||
      year !== this.currentDate.getFullYear();

    if (monthChanged) {
      const displayMonth = getMonths(this.locale)[month];

      const customEvent = new CustomEvent('pds-date-picker-change-view', {
        bubbles: true,
        composed: true,
        detail: {
          month: displayMonth,
          year: getYear(date),
        },
      });

      this.dispatchEvent(customEvent);

      if (moveFocus) {
        this.moveFocusAfterMonthChanged = true;
      }
    }

    this.currentDate = date;

    if (moveFocus) {
      this.focusDate(this.currentDate);
    }
  }

  private onSelectDate(date: Date) {
    if (this.disableFunction(date)) {
      return;
    }

    if (this.isRangeValue(this.value)) {
      const newValue =
        this.value?.[0] === undefined || this.value.length === 2
          ? [date]
          : [this.value[0], date];

      if (newValue.length === 2 && newValue[0] > newValue[1]) {
        newValue.reverse();
      }

      const isoValue =
        newValue[1] === undefined
          ? [getISODateString(newValue[0])]
          : [getISODateString(newValue[0]), getISODateString(newValue[1])];

      this.value = newValue;

      const customEvent = new CustomEvent('pds-date-picker-select-date', {
        bubbles: true,
        composed: true,
        detail: {
          range: isoValue,
        },
      });

      this.dispatchEvent(customEvent);
    } else {
      if (this.value?.getTime() === date.getTime()) {
        return;
      }

      this.value = date;
      const customEvent = new CustomEvent('pds-date-picker-select-date', {
        bubbles: true,
        composed: true,
        detail: {
          date: getISODateString(date),
        },
      });

      this.dispatchEvent(customEvent);
    }
  }

  /**
   * @internal
   */
  private isRangeValue(value: Date | Date[] | undefined): value is Date[] {
    return this.isRange;
  }

  /**
   * @internal
   */
  private nextMonth = () => {
    this.updateCurrentDate(getNextMonth(this.currentDate));
  };

  /**
   * @internal
   */
  private nextYear = () => {
    this.updateCurrentDate(getNextYear(this.currentDate));
  };

  /**
   * @internal
   */
  private previousMonth = () => {
    this.updateCurrentDate(getPreviousMonth(this.currentDate));
  };

  /**
   * @internal
   */
  private previousYear = () => {
    this.updateCurrentDate(getPreviousYear(this.currentDate));
  };

  /**
   * @internal
   */
  private showToday = () => {
    this.updateCurrentDate(new Date());
  };

  /**
   * @internal
   */
  private clear = () => {
    this.value = undefined;
    const customEvent = new CustomEvent('pds-date-picker-select-date', {
      bubbles: true,
      composed: true,
      detail: {
        date: undefined,
      },
    });

    this.dispatchEvent(customEvent);
  };

  /**
   * @internal
   */
  private handleClick = (e: Event) => {
    if (this.disabled) {
      return;
    }

    const target = (e.target as HTMLElement).closest(
      '[data-date]',
    ) as HTMLElement;

    if (target.dataset.date) {
      const date = removeTimezoneOffset(new Date(target.dataset.date));

      this.updateCurrentDate(date);
      this.onSelectDate(date);
    }
  };

  /**
   * @internal
   */
  handleKeyDown = (e: KeyboardEvent) => {
    if (this.disabled) {
      return;
    }

    if (e.code === 'ArrowLeft') {
      e.preventDefault();
      this.updateCurrentDate(getPreviousDay(this.currentDate), true);
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      this.updateCurrentDate(getNextDay(this.currentDate), true);
    } else if (e.code === 'ArrowUp') {
      e.preventDefault();
      this.updateCurrentDate(subDays(this.currentDate, 7), true);
    } else if (e.code === 'ArrowDown') {
      e.preventDefault();
      this.updateCurrentDate(addDays(this.currentDate, 7), true);
    } else if (e.code === 'PageUp') {
      e.preventDefault();

      if (e.shiftKey) {
        this.updateCurrentDate(getPreviousYear(this.currentDate), true);
      } else {
        this.updateCurrentDate(getPreviousMonth(this.currentDate), true);
      }
    } else if (e.code === 'PageDown') {
      e.preventDefault();

      if (e.shiftKey) {
        this.updateCurrentDate(getNextYear(this.currentDate), true);
      } else {
        this.updateCurrentDate(getNextMonth(this.currentDate), true);
      }
    } else if (e.code === 'Home') {
      e.preventDefault();
      this.updateCurrentDate(getFirstOfMonth(this.currentDate), true);
    } else if (e.code === 'End') {
      e.preventDefault();
      this.updateCurrentDate(getLastOfMonth(this.currentDate), true);
    } else if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      this.onSelectDate(this.currentDate);
    }
  };

  /**
   * @internal
   */
  handleKeyDownEscape = (e: KeyboardEvent) => {
    if (this.disabled) {
      return;
    }

    const customEvent = new CustomEvent('pds-date-picker-escape', {
      bubbles: true,
      composed: true,
      detail: {
        summary: e.target,
      },
    });

    if (e.code === 'Escape') {
      this.dispatchEvent(customEvent);
    }
  };

  /**
   * @internal
   */
  handleMouseEnter = (e: MouseEvent) => {
    if (this.disabled) {
      return;
    }

    const dateString = (e.target as HTMLElement).closest('td')?.dataset.date;

    if (dateString) {
      const date = removeTimezoneOffset(new Date(dateString));

      this.hoveredDate = date;
    }
  };

  /**
   * @internal
   */
  handleMouseLeave = () => {
    this.hoveredDate = undefined;
  };

  /**
   * @internal
   */
  private checkIfValueInRange(day: Date) {
    if (this.value && Array.isArray(this.value)) {
      return isDateInRange(day, {
        from: this.value?.[0],
        to: this.value?.[1] || this.hoveredDate || this.currentDate,
      });
    }
    return false;
  }

  /**
   * @internal
   */
  private getOrderedValues(): Date[] {
    if (Array.isArray(this.value)) {
      return this.value?.[0]
        ? [this.value?.[0], this.value?.[1] || this.hoveredDate].sort(
            (a, b) => a.valueOf() - b.valueOf(),
          )
        : [];
    }
    return [];
  }

  /**
   * @internal
   */
  update(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('firstDayOfWeek')) {
      this.updateWeekdays();
    } else if (changedProperties.has('range')) {
      this.clear();
    }
    super.update(changedProperties);
  }

  /**
   * @internal
   */
  getHeaderMarkup() {
    return html`<div class=${this.getClassName('header')}>
      <span
        aria-atomic="true"
        aria-live="polite"
        aria-label=${msg('Press escape to exit the calendar.')}
        class="pds-u-sr-only"
      >
        ${this.getTitle()}
      </span>
      <div class=${this.getClassName('year-controls')}>
        ${!this.hideYearStepper
          ? html`<button
              aria-label="${this.labels?.previousYearButton
                ? this.labels.previousYearButton
                : msg('Previous year')}"
              class=${this.getClassName('previous-year-button')}
              ?disabled="${this.disabled}"
              @click="${this.previousYear}"
              type="button"
            >
              <pds-icon-chevrons-left size="default"></pds-icon-chevrons-left>
            </button> `
          : nothing}
        <span class=${this.getClassName('year-display')}
          >${this.currentDate.getFullYear()}</span
        >
        ${!this.hideYearStepper
          ? html` <button
                      aria-label=${
                        this.labels?.nextYearButton
                          ? this.labels.nextYearButton
                          : msg('Next year')
                      }
                      class=${this.getClassName('next-year-button')}
                      ?disabled=${this.disabled}
                      @click=${this.nextYear}
                      type="button"
                    >
                    <pds-icon-chevrons-right size="default"></pds-icon-chevrons-left>
                    </button>`
          : nothing}
      </div>
      <div class=${this.getClassName('month-controls')}>
        ${!this.hideMonthStepper
          ? html`
              <button
                aria-label="${
                  this.labels?.previousMonthButton
                    ? this.labels.previousMonthButton
                    : msg('Previous month')
                }"
                class=${this.getClassName('previous-month-button')}
                ?disabled=${this.disabled}
                @click=${this.previousMonth}
                type="button"
              >
              <pds-icon-chevron-left size="default"></pds-icon-chevrons-left>
              </button>
            `
          : nothing}
        <span class=${this.getClassName('current-month')}>
          ${getMonths(this.locale).map(
            (month, index) =>
              html`${this.currentDate.getMonth() === index ? month : ''}`,
          )}
        </span>
        ${!this.hideMonthStepper
          ? html`
                  <button
                    aria-label=${
                      this.labels?.nextMonthButton
                        ? this.labels.nextMonthButton
                        : msg('Next month')
                    }
                    class=${this.getClassName('next-month-button')}
                    ?disabled=${this.disabled}
                    @click=${this.nextMonth}
                    type="button"
                  >
                  <pds-icon-chevron-right size="default"></pds-icon-chevrons-left>
                  </button>
                `
          : nothing}
      </div>
    </div>`;
  }

  /**
   * @internal
   */
  getFooterMarkup() {
    return html`
      <div class=${this.getClassName('footer')}>
        ${this.showTodayButton
          ? html` <pds-button
              size="sm"
              class=${this.getClassName('today-button')}
              ?disabled=${this.disabled}
              innerHTML=${this.todayButtonContent || undefined}
              @click=${this.showToday}
              type="button"
            >
              ${this.labels?.todayButton
                ? this.labels.todayButton
                : msg('Show today')}
            </pds-button>`
          : nothing}
        ${this.showClearButton
          ? html`
              <pds-button
                size="sm"
                class=${this.getClassName('clear-button')}
                ?disabled=${this.disabled}
                innerHTML=${this.clearButtonContent || undefined}
                @click=${this.clear}
                type="button"
              >
                ${this.labels?.clearButton
                  ? this.labels.clearButton
                  : msg('Clear value')}
              </pds-button>
            `
          : nothing}
      </div>
    `;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      disabled: !!this.disabled,
    };
  }

  render() {
    return html`
      <div
        aria-disabled=${this.disabled}
        aria-label=${this.labels?.picker
          ? this.labels.picker
          : msg('Choose date')}
        class=${this.getClass()}
        @keydown=${this.handleKeyDownEscape}
        role="group"
      >
        ${this.getHeaderMarkup()}
        <div class=${this.getClassName('body')}>
          <table
            class=${this.getClassName('calendar')}
            @keydown=${this.handleKeyDown}
            role="grid"
          >
            <thead class=${this.getClassName('calendar-header')}>
              <tr class=${this.getClassName('weekday-row')}>
                ${this.weekdays.map(
                  (weekday) => html`
                    <th
                      abbr=${weekday[1]}
                      class=${this.getClassName('weekday')}
                      key=${weekday[0]}
                      scope="col"
                    >
                      <span>${weekday[0].substring(0, 1)}</span>
                    </th>
                  `,
                )}
              </tr>
            </thead>

            <tbody>
              ${this.getCalendarRows().map((calendarRow) => {
                const rowKey = `row-${calendarRow[0].getMonth()}-${calendarRow[0].getDate()}`;

                return html`
                  <tr class=${this.getClassName('calendar-row')} key=${rowKey}>
                    ${calendarRow.map((day) => {
                      const isCurrent = isSameDay(day, this.currentDate);

                      const isOverflowing =
                        day.getMonth() !== this.currentDate.getMonth();

                      const isSelected = Array.isArray(this.value)
                        ? isSameDay(day, this.value[0]) ||
                          isSameDay(day, this.value[1])
                        : isSameDay(day, this.value);

                      const isInRange = this.checkIfValueInRange(day);

                      const orderedValues = this.getOrderedValues();

                      const isStart =
                        this.isRange && isSameDay(orderedValues[0], day);

                      const isEnd =
                        this.isRange && isSameDay(orderedValues[1], day);

                      const isToday = isSameDay(day, new Date());

                      const isDisabled = this.disableFunction(new Date(day));

                      const cellKey = `cell-${day.getMonth()}-${day.getDate()}`;

                      const className = {
                        [`${this.getClassName('date')}`]: true,
                        [`${this.getClassName('date--current')}`]: isCurrent,
                        [`${this.getClassName('date--disabled')}`]: isDisabled,
                        [`${this.getClassName('date--overflowing')}`]:
                          isOverflowing,
                        [`${this.getClassName('date--today')}`]: isToday,
                        [`${this.getClassName('date--selected')}`]: isSelected,
                        [`${this.getClassName('date--in-range')}`]: isInRange,
                        [`${this.getClassName('date--start')}`]: isStart,
                        [`${this.getClassName('date--end')}`]: isEnd,
                      };

                      let Tag = isSelected ? 'strong' : 'span';
                      Tag = isToday ? 'em' : 'span';
                      const dateMarkup = html`${unsafeHTML(
                        `<${Tag} aria-hidden="true">${day.getDate()}</${Tag}>`,
                      )}`;
                      return html` <td
                        aria-disabled=${String(isDisabled)}
                        aria-selected=${isSelected ? 'true' : 'false'}
                        class=${classMap(className)}
                        data-date=${getISODateString(day)}
                        key=${cellKey}
                        @click=${this.handleClick}
                        @mouseEnter=${this.handleMouseEnter}
                        @mouseLeave=${this.handleMouseLeave}
                        role="gridcell"
                        tabindex=${isSameDay(day, this.currentDate) &&
                        !this.disabled
                          ? 0
                          : -1}
                      >
                        ${dateMarkup}
                        <span class="pds-u-sr-only">
                          ${Intl.DateTimeFormat(this.locale, {
                            day: 'numeric',
                            month: 'long',
                          }).format(day)}
                        </span>
                      </td>`;
                    })}
                  </tr>
                `;
              })}
            </tbody>
          </table>
        </div>
        ${this.showClearButton || this.showTodayButton
          ? this.getFooterMarkup()
          : nothing}
      </div>
    `;
  }
}
