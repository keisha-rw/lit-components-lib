import { PropertyValueMap, html, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsFormElement } from '../pds-form-element/PdsFormElement';
import styles from './phone-number-input.scss?inline';
import { PdsButton } from '../button/button';

const submittable = ['pds-button[type="submit"]:not([disabled])'];

const blocking = ['pds-phone-number-input'];

/**
 * @summary The Company Co phone number input component
 *
 * @fires pds-phone-number-input-input an event dispatched on input
 * @fires pds-phone-number-input-change an event dispatched on change
 * @fires pds-phone-number-input-blur an event dispatched on blur
 * @fires pds-phone-number-input-focus an event dispatched on focus
 * @slot label Use this slot instead of the label property, if the label requires additonal markup.
 * @slot label-after Use this slot if markup should be inserted after the label.
 * @slot help-text Use this slot instead of the helpText property, if the help text requires additonal markup.
 */
@customElement('pds-phone-number-input', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsPhoneNumberInput extends PdsFormElement {
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
   * Standard input autocomplete attribute.
   * See [HTML attribute: autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
   *
   */
  @property()
  autocomplete: 'off' | 'tel';

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
      new Event('pds-phone-number-input-change', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleInput() {
    this.value = this.field.value;
    this.dispatchEvent(
      new Event('pds-phone-number-input-input', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleBlur() {
    this.dispatchEvent(
      new Event('pds-phone-number-input-blur', {
        bubbles: false,
        composed: true,
      }),
    );
  }

  private handleFocus() {
    this.dispatchEvent(
      new Event('pds-phone-number-input-focus', {
        bubbles: false,
        composed: true,
      }),
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

  /** @internal */
  get classNames() {
    return {
      sm: this.size === 'sm',
      'is-error': !!this.errorMessage,
      'is-disabled': this.disabled,
      'hidden-label': this.hideLabel,
    };
  }

  protected override firstUpdated() {
    super.firstUpdated();

    this.updateField();
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
        <input
          class="${this.classEl('input')}"
          type="tel"
          name="${this.name}"
          id="${this.fieldId || `${this.name}-field`}"
          ?required=${this.required}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          autocomplete="${ifDefined(this.autocomplete)}"
          inputmode="tel"
          minlength="${ifDefined(this.minLength)}"
          maxlength="${ifDefined(this.maxLength)}"
          pattern="${ifDefined(this.pattern)}"
          aria-invalid=${this.errorMessage ? 'true' : nothing}
          aria-describedby=${this.getAriaDescribedBy() || nothing}
          value=${this.internalValue || this.value || nothing}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeydown}
        />
      </div>
      ${this.errorMessageTemplate()}
    </div>`;
  }
}
