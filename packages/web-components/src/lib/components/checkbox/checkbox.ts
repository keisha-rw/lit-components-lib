import '@keisha/design-system-icons-web/check';
import { html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsFormElement } from '../pds-form-element/PdsFormElement';
import styles from './checkbox.scss?inline';

/**
 * @summary A checkbox
 *
 * @slot label Use this slot instead of the label property, if the label requires additional markup.
 * @slot label-after Use this slot if markup should be inserted after the label.
 * @slot help-text Use this slot instead of the helpText property, if the help text requires additional markup.
 */
@customElement('pds-checkbox', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsCheckbox extends PdsFormElement {
  /**
   * @internal
   *
   * Needed so consuming applications know this component is type checkbox.
   */
  readonly type = 'checkbox';

  /**
   * @internal
   */
  defaultChecked: boolean;

  /**
   * @internal
   * needed to rerender the component when the hidden checkbox input gets or loses focus
   * managing this via component state and the .pds-is-focused class is simpler
   * than managing this via complicated SCSS selectors
   */
  @state()
  private isFocused: boolean = false;

  // need to override the `value` setter and getter
  // because checkbox works differently
  override set value(newValue) {
    this.internalValue = newValue;

    // set the value on the field
    if (this.field && this.field.value !== newValue) {
      this.field.value = newValue;
    }
  }

  /**
   * The value tied to the checkbox.
   */
  @property()
  override get value() {
    return this.internalValue;
  }

  set checked(newChecked: boolean) {
    const oldCheckedValue = this.checked;

    // ariaChecked needs to be a string
    this.internals.ariaChecked = newChecked ? 'true' : 'false';

    // needed to rerender the component
    this.requestUpdate('checked', oldCheckedValue);

    if (newChecked) {
      // standard HTML form behavior adds the checkbox name
      // with its accompanying value to form data,
      // if the checkbox is checked
      // if the checkbox does not have a value property defined,
      // then it adds the checkbox name with the string 'on'
      this.internals.setFormValue(this.value || 'on');
    } else {
      // if the checkbox is not checked, then remove from form data
      this.internals.setFormValue(null);
    }
  }

  /**
   * Indicates whether the checkbox is checked.
   */
  @property({
    type: Boolean,
  })
  get checked(): boolean {
    return this.internals.ariaChecked === 'true';
  }

  /** @internal */
  @query('input')
  field: HTMLInputElement;

  firstUpdated() {
    super.firstUpdated();

    this.defaultChecked = this.checked || this.hasAttribute('checked');
  }

  /**
   * Reset the input checked back it to its original checked attribute
   */
  formResetCallback() {
    this.checked = this.defaultChecked;
  }

  private handleChange() {
    this.checked = this.field.checked;
    this.field.focus();

    this.dispatchEvent(
      new Event('pds-checkbox-change', { bubbles: true, composed: true }),
    );
  }

  private handleBlur() {
    this.isFocused = false;
    this.dispatchEvent(
      new Event('pds-checkbox-blur', { bubbles: false, composed: true }),
    );
  }

  private handleFocus() {
    this.isFocused = true;
    this.dispatchEvent(
      new Event('pds-checkbox-focus', { bubbles: false, composed: true }),
    );
  }

  override labelTemplate() {
    return html` <label
      for="${this.fieldId || `${this.name}-field`}"
      class="${this.classEl('label')}"
    >
      <span class="${this.classEl('box')}">
        <pds-icon-check
          class="${this.classEl('checkmark')}"
          size="sm"
        ></pds-icon-check>
      </span>
      <span class="${this.classEl('label-text')}">
        <slot name="label">${this.label}</slot>
        ${this.required
          ? html`<span
              class="${this.classEl('required-indicator')}"
              aria-hidden="true"
            >
              *
            </span>`
          : nothing}
      </span>
      <slot name="label-after"></slot>
    </label>`;
  }

  /** @internal */
  get classNames() {
    return {
      'is-checked': this.checked,
      'is-error': !!this.errorMessage,
      'is-disabled': this.disabled,
      'hidden-label': this.hideLabel,
      'is-focused': this.isFocused,
    };
  }

  render() {
    if (!this.verifyLabel()) {
      return nothing;
    }

    return html`<div class="${this.getClass()}">
      <input
        class="${this.classEl('input')}"
        type="checkbox"
        name="${this.name}"
        id="${this.fieldId || `${this.name}-field`}"
        ?disabled=${this.disabled}
        ?checked=${this.checked}
        ?required=${this.required}
        aria-describedby=${this.getAriaDescribedBy() || nothing}
        aria-invalid=${this.errorMessage ? 'true' : nothing}
        value="${this.value || nothing}"
        @change=${this.handleChange}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
      />
      ${this.labelTemplate()}
      <div>${this.errorMessageTemplate()}</div>
    </div>`;
  }
}
