import { localized, msg, str } from '@lit/localize';
import '@keisha/design-system-icons-web/calendar';
import * as focusTrap from 'focus-trap';
import { html, nothing } from 'lit';
import {
  property,
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { tabbable } from 'tabbable';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsFormElement } from '../pds-form-element/PdsFormElement';
import styles from './date-picker-input.scss?inline';

/**
 * @summary The date picker input component
 *
 * @slot datepicker This slot holds a PDS Datepicker element
 */
@customElement('pds-date-picker-input', {
  category: 'component',
  type: 'component',
  styles,
})
@localized()
export class PdsDatePickerInput extends PdsFormElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
    this.datePickerSelectDateListener();
    this.helpText = msg(str`Please follow the ${this.dateFormat} format.`);
  }

  /**
   * This grabs the pds-date-picker element
   * @internal
   */
  @queryAssignedElements({ slot: 'datepicker' })
  datePickerCalendar: HTMLElement[];

  /**
   * This grabs the input element
   * @internal
   */
  @query('input')
  field: HTMLInputElement;

  /**
   * This is the selected date from the datepicker
   * @internal
   */
  @state()
  selectedDate: string;

  /**
   * Displays format of the date
   * Dates with 'AAAA' are Spanish date formats
   */
  @property()
  dateFormat: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'DD/MM/AAAA' | 'MM/DD/AAAA' =
    'MM/DD/YYYY';

  /**
   * Datepicker state - true = open, false = closed
   * @internal
   */
  @property({ type: Boolean })
  datePickerState: boolean = false;

  /**
   * @internal
   */
  @state()
  trap: any;

  /**
   * @internal
   */
  @state()
  valueAsDateObject: Date;

  /**
   *
   * Function to add custom date validation.
   * Should take in a date object as a parameter (which represents the current value of the input to validate against).
   * Should return a boolean value.
   *
   * @type {Function}
   * @memberof PdsDatePickerInput
   */
  @property()
  customInvalidDates?: Function;

  /**
   * Initialize the focus trap
   */
  initializeTrap() {
    this.trap = focusTrap.createFocusTrap(this.datePickerCalendar, {
      initialFocus: false,
      allowOutsideClick: true,
      clickOutsideDeactivates: true,
      setReturnFocus: this.field,
      escapeDeactivates: true,
      tabbableOptions: {
        getShadowRoot: true,
      },
    });
  }

  datePickerSelectDateListener() {
    this.shadowRoot?.addEventListener(
      'pds-date-picker-select-date',
      (e: any) => {
        this.datePickerSelectDate(e);
      },
    );
  }

  // gets the date that was selected from the picker and
  // stores it, hides the datepicker
  datePickerSelectDate(e: CustomEvent) {
    if (this.value === undefined) {
      this.dispatchInputEvent();
    } else {
      this.dispatchChangeEvent();
    }
    const getDate = e.detail.date.split('-');
    const day = getDate[2];
    const month = getDate[1];
    const year = getDate[0];
    if (this.dateFormat === 'DD/MM/YYYY') {
      this.selectedDate = [day, month, year].join('/');
      this.value = this.selectedDate;
      this.field.value = this.selectedDate;
      this.dispatchInputEvent();
    } else {
      this.selectedDate = [month, day, year].join('/');
      this.value = this.selectedDate;
      this.field.value = this.selectedDate;
      this.field.focus();
      this.dispatchInputEvent();
    }
    this.hideDatePicker();
  }

  /**
   * Validate the date
   */
  isCorrectDate(date: string) {
    let newDate;
    let localeDateFormat;
    // A date str as dd/mm/yyyy is considered a non-standard date format in
    // javascript so can't be passed directly to the Date() constructor
    if (this.dateFormat === 'DD/MM/YYYY') {
      localeDateFormat = 'en-GB';
      const [day, month, year] = date.split('/');
      newDate = new Date(+year, +month - 1, +day);
    } else {
      localeDateFormat = 'en-US';
      newDate = new Date(date);
    }
    const localeDate = newDate.toLocaleDateString(localeDateFormat, {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });

    this.valueAsDateObject = newDate;
    // just get the actual date string (get rid of timestamp) & compare to input value
    if (localeDate.split(',')[0] === this.value) {
      return true;
    }
    return false;
  }

  dispatchInputEvent() {
    this.dispatchEvent(
      new Event('pds-date-picker-input-input', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  dispatchChangeEvent() {
    this.dispatchEvent(
      new Event('pds-date-picker-input-change', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleInput() {
    this.value = this.field.value;
    this.dispatchInputEvent();
  }

  private handleChange() {
    this.value = this.field.value;
    this.dispatchChangeEvent();
  }

  private handleBlur(e: FocusEvent) {
    this.dispatchEvent(
      new Event('pds-date-picker-input-blur', {
        bubbles: false,
        composed: true,
      }),
    );
    const target = e.relatedTarget as HTMLInputElement;
    const currentDatePickerInput = document.querySelector(
      'pds-date-picker-input.active',
    );
    const currentDatePicker =
      currentDatePickerInput?.querySelector('pds-date-picker');

    if (target === null || target !== currentDatePicker) {
      this.hideDatePicker();
    }

    // only show the error message if there is a value to check
    if (this.value) {
      // Matches regex pattern on input & is a real date
      if (this.field.checkValidity() && this.isCorrectDate(this.value)) {
        this.errorMessage = '';
        // if user passes in a custom validation function, we should validate against their criteria
        if (this.customInvalidDates) {
          if (!this.customInvalidDates(this.valueAsDateObject)) {
            this.errorMessage = msg('Please enter a valid date.');
          }
        }
      } else {
        this.errorMessage = msg('Please enter a valid date.');
      }
    }
  }

  private handleFocus() {
    this.dispatchEvent(
      new Event('pds-date-picker-input-focus', {
        bubbles: false,
        composed: true,
      }),
    );
  }

  toggleDatePicker(e: MouseEvent) {
    const target = e.target as HTMLElement;
    this.field.focus();

    if (
      (e.type === 'click' &&
        this.datePickerState === false &&
        e.target === this.field) ||
      (this.datePickerState === false &&
        target.nodeName === 'PDS-ICON-CALENDAR')
    ) {
      this.showDatePicker();
    }
  }

  async toggleOnKeyboard(e: KeyboardEvent) {
    const keyEvent = e as KeyboardEvent;
    // pressing the down arrow on the focused input should open the calendar
    if (keyEvent.code === 'ArrowDown') {
      this.showDatePicker();
      await this.updateComplete;

      const currentNode = this.querySelector(
        'pds-date-picker',
      )?.shadowRoot?.querySelector('.pds-c-date-picker') as Element;

      // get all tabbable items within the <pds-date-picker>
      const currentlyTabbableItems = tabbable(currentNode);
      // programmatically set focus on the 1st focusable el in calendar
      currentlyTabbableItems[0].focus();
    }
    // if open calendar on click, hitting esc should still close it
    if (keyEvent.code === 'Escape') {
      this.hideDatePicker();
    }
    // hitting escape within the datepicker should close the calendar
    document.addEventListener('pds-date-picker-escape', () => {
      this.hideDatePicker();
      this.field.focus();
    });
  }

  showDatePicker() {
    this.datePickerState = true;
    this.classList.add('active');
    setTimeout(() => {
      this.initializeTrap();
      this.trap.activate();
    }, 10);
  }

  hideDatePicker() {
    this.datePickerState = false;
    this.classList.remove('active');
    if (this.trap) {
      this.trap.deactivate();
    }
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      'is-error': !!this.errorMessage,
      'is-disabled': this.disabled,
      'hidden-label': this.hideLabel,
    };
  }

  render() {
    if (!this.verifyLabel()) {
      return nothing;
    }
    return html`<div class="${this.getClass()}">
      ${this.labelTemplate()} ${this.helpTextTemplate()}
      <div class="${this.classEl('input-wrapper')}">
        <input
          class="${this.classEl('input')}"
          type="text"
          inputmode="numeric"
          maxlength="10"
          placeholder="${this.dateFormat}"
          pattern="${this.dateFormat === 'DD/MM/YYYY'
            ? '((0[1-9]|1[0-9]|2[0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4})'
            : '((0[1-9]|1[0-2])/(0[1-9]|1[0-9]|2[0-9]|3[01])/[0-9]{4})'}"
          name="${this.name}"
          id="${this.fieldId || `${this.name}-field`}"
          ?required=${this.required}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          aria-label="${msg(
            'Press the down arrow key to access the calendar.',
          )}"
          aria-describedby=${this.getAriaDescribedBy() || nothing}
          aria-invalid=${this.errorMessage ? 'true' : nothing}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          @change=${this.handleChange}
          @click=${this.toggleDatePicker}
          @keydown=${(e: KeyboardEvent) => this.toggleOnKeyboard(e)}
          value=${this.value}
        />
        <!-- aria-hidden and not tabbable for a11y purposes -->
        <button
          class="pds-c-date-picker-input__button"
          tabindex="-1"
          aria-hidden="true"
          ?disabled=${this.disabled}
          @blur=${this.handleBlur}
          @click="${(e: MouseEvent) => this.toggleDatePicker(e)}"
        >
          <pds-icon-calendar size="lg"></pds-icon-calendar>
        </button>
      </div>
      ${this.datePickerState === true
        ? html`<slot name="datepicker"></slot>`
        : nothing}
      ${this.errorMessageTemplate()}
    </div> `;
  }
}
