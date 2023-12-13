import Cleave from 'cleave.js';
import { PropertyValueMap, html, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsButton } from '../button/button';
import { PdsFormElement } from '../pds-form-element/PdsFormElement';

import '@keisha/design-system-icons-web/search';
import styles from './text-input.scss?inline';

const submittable = ['pds-button[type="submit"]:not([disabled])'];

const blocking = ['pds-text-input'];

/**
 * @summary The Company Co text input component
 *
 * @fires pds-text-input-input an event dispatched on input
 * @fires pds-text-input-change an event dispatched on change
 * @fires pds-text-input-blur an event dispatched on blur
 * @fires pds-text-input-focus an event dispatched on focus
 * @slot label Use this slot instead of the label property, if the label requires additonal markup.
 * @slot label-after Use this slot if markup should be inserted after the label.
 * @slot help-text Use this slot instead of the helpText property, if the help text requires additonal markup.
 * @slot prefix Use this slot to add an element to the beginning of the input field.
 * @slot suffix Use this slot to add an element to the end of the input field.
 */
@customElement('pds-text-input', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsTextInput extends PdsFormElement {
  set value(newValue) {
    const oldValue = this.value;

    // store the value so it can be retrieved by the getter
    this.internalValue = newValue;

    // sets the current value of the control
    this.internals.setFormValue(newValue);

    // set the value on the field
    if (this.field && this.field.value !== newValue) {
      this.field.value = newValue;
    }

    // rerender the component
    this.requestUpdate('value', oldValue);
  }

  /**
   * The value of the form field.
   */
  @property()
  get value() {
    return this.internalValue;
  }

  /**
   * The size of the component.
   *
   * - **default**
   * - **sm** renders a the small version of the input
   *
   * NOTE: This is NOT the HTML size attribute that controls the width of the input.
   */
  @property()
  size: 'sm' | 'default' = 'default';

  /**
   * Standard input type attribute.
   * See [HTML attribute: type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   *
   * - **email** - use for inputs that take an email
   * - **number** - use for inputs that take number values
   * - **password** - use for inputs that take passwords
   * - **search** - use for inputs used for searches
   * - **text** - use for inputs that take alphanumeric text
   * - **url** - use for inputs that take urls
   *
   * Explicitly exclude the following input types:
   *
   * - **button** - use PdsButton component with `type="button"`
   * - **checkbox** - use the PdsCheckbox component
   * - **color**
   * - **date**
   * - **datetime-local**
   * - **file**
   * - **hidden** - not needed for a design system
   * - **tel** - use the PDSPhoneNumberInput instead
   * - **image**
   * - **month**
   * - **radio** - use the PdsRadioGroup component
   * - **range**
   * - **reset** - use the PdsButton component with `type="reset"`
   * - **submit** - use the PdsButton component with `type="submit"`
   * - **time**
   * - **week**
   */
  @property({ reflect: true })
  type: 'email' | 'number' | 'password' | 'search' | 'text' | 'url' = 'text';

  /**
   * Standard input min attribute.
   * See [HTML attribute: min](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min)
   */
  @property()
  min?: string | number;

  /**
   * Standard input max attribute.
   * See [HTML attribute: max](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max)
   */
  @property()
  max?: string | number;

  /**
   * Standard input minlength attribute.
   * See [HTML attribute: minlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/minlength)
   */
  @property()
  minLength?: string | number;

  /**
   * Standard input maxlength attribute.
   * See [HTML attribute: maxlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength)
   */
  @property()
  maxLength?: string | number;

  /**
   * Standard input pattern attribute.
   * See [HTML attribute: pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)
   */
  @property()
  pattern?: string;

  /**
   * Standard input step attribute.
   * See [HTML attribute: step](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step)
   */
  @property()
  step?: string | number;

  /**
   * Standard input inputmode attribute.
   * See [HTML attribute: inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/inputmode)
   */
  @property()
  inputmode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';

  /**
   * Standard input autocomplete attribute.
   * See [HTML attribute: autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
   *
   * Note: this explicitly excludes the tel autocomplete values since type tel is not a valid option for this component.
   */
  @property()
  autocomplete:
    | 'off'
    | 'on'
    | 'name'
    | 'honorific-prefix'
    | 'given-name'
    | 'additional-name'
    | 'family-name'
    | 'honorific-suffix'
    | 'nickname'
    | 'email'
    | 'username'
    | 'new-password'
    | 'current-password'
    | 'one-time-code'
    | 'organization-title'
    | 'organization'
    | 'street-address'
    | 'address-line1'
    | 'address-line2'
    | 'address-line3'
    | 'address-level4'
    | 'address-level3'
    | 'address-level2'
    | 'address-level1'
    | 'country'
    | 'country-name'
    | 'postal-code'
    | 'cc-name'
    | 'cc-given-name'
    | 'cc-additional-name'
    | 'cc-family-name'
    | 'cc-number'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-csc'
    | 'cc-type'
    | 'transaction-currency'
    | 'transaction-amount'
    | 'language'
    | 'bday'
    | 'bday-day'
    | 'bday-month'
    | 'bday-year'
    | 'sex'
    | 'impp'
    | 'url'
    | 'photo';

  /**
   * The masking pattern to apply to the input field.
   *
   * - **ssn**
   * - **tax-id**
   *
   * If using `maskType`, then `type` property must be set to "text".
   */
  @property()
  maskType?: 'ssn' | 'tax-id';

  /** @internal */
  @query('input')
  field: HTMLInputElement;

  protected updateField() {
    // set the value on the field
    // when the field exists and there is an internalValue
    if (
      this.field &&
      typeof this.internalValue !== 'undefined' &&
      this.field.value !== this.internalValue
    ) {
      this.field.value = this.internalValue;
    }
  }

  private handleChange() {
    this.value = this.field.value;
    this.dispatchEvent(
      new Event('pds-text-input-change', { bubbles: true, composed: true }),
    );
  }

  private handleInput() {
    this.value = this.field.value;
    this.dispatchEvent(
      new Event('pds-text-input-input', { bubbles: true, composed: true }),
    );
  }

  private handleBlur() {
    this.dispatchEvent(
      new Event('pds-text-input-blur', { bubbles: false, composed: true }),
    );
  }

  private handleFocus() {
    this.dispatchEvent(
      new Event('pds-text-input-focus', { bubbles: false, composed: true }),
    );
  }

  private handleKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      const { form } = this.internals;
      const submitElement: PdsButton | undefined | null = form?.querySelector(
        submittable.join(','),
      );

      if (form) {
        // not testable in Jest
        /* istanbul ignore next */
        if (submitElement) {
          const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            composed: true,
          });
          submitElement.button.dispatchEvent(clickEvent);
        } else {
          const blockingElements = form?.querySelectorAll(blocking.join(','));
          if (blockingElements && blockingElements.length <= 1) {
            // Older versions of Safari don't support the requestSubmit method
            if (form.requestSubmit) {
              form.requestSubmit();
            } else {
              form.submit();
            }
          }
        }
      }
    }
  }

  private createMask(maskType: string): void {
    let mask;

    if (maskType === 'ssn') {
      mask = new Cleave(this.field, {
        numericOnly: true,
        delimiters: ['-', '-'],
        blocks: [3, 2, 4],
      });
    }

    if (maskType === 'tax-id') {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      mask = new Cleave(this.field, {
        numericOnly: true,
        delimiters: ['-'],
        blocks: [2, 7],
      });
    }
  }

  /** @internal */
  get classNames() {
    return {
      sm: this.size === 'sm',
      'is-error': !!this.errorMessage,
      'is-disabled': this.disabled,
      'hidden-label': this.hideLabel,
      prefixed: !!this.slotNotEmpty('prefix'),
      suffixed: !!this.slotNotEmpty('suffix'),
    };
  }

  protected override firstUpdated() {
    super.firstUpdated();

    this.updateField();

    if (this.maskType) {
      this.createMask(this.maskType);
    }
  }

  protected updated(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ) {
    if (changedProperties.has('value')) {
      this.handleChange();
    }
  }

  render() {
    if (!this.verifyLabel()) {
      return nothing;
    }

    return html`<div class="${this.getClass()}">
      ${this.labelTemplate()} ${this.helpTextTemplate()}
      <div class="${this.classEl('input-wrapper')}">
        ${this.slotNotEmpty('prefix')
          ? html`<span
              class="${this.classEl('symbol-prefix')}"
              aria-hidden="true"
            >
              <slot name="prefix"></slot>
            </span>`
          : nothing}
        <input
          class="${this.classEl('input')}"
          type="${this.type}"
          name="${this.name}"
          id="${this.fieldId || `${this.name}-field`}"
          ?required=${this.required}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          autocomplete="${ifDefined(this.autocomplete)}"
          inputmode="${ifDefined(this.inputmode)}"
          min="${ifDefined(this.min)}"
          max="${ifDefined(this.max)}"
          minlength="${ifDefined(this.minLength)}"
          maxlength="${ifDefined(this.maxLength)}"
          pattern="${ifDefined(this.pattern)}"
          step="${ifDefined(this.step)}"
          aria-invalid=${this.errorMessage ? 'true' : nothing}
          aria-describedby=${this.getAriaDescribedBy() || nothing}
          value=${this.internalValue || this.value || nothing}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeydown}
        />

        ${this.slotNotEmpty('suffix')
          ? html`<span
              class="${this.classEl('symbol-suffix')}"
              aria-hidden="true"
            >
              <slot name="suffix"></slot>
            </span>`
          : nothing}
      </div>
      ${this.errorMessageTemplate()}
    </div>`;
  }
}
