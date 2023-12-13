import '@keisha/design-system-icons-web/alert-circle';
import { html, isServer, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import '../../../element-internals-polyfill/element-internals-polyfill.js';
import { required } from '../../decorators/required';
import { PdsElement } from '../PdsElement';

/**
 * The base class for form elements.
 * All field properties are reflected due to this bug: https://github.com/lit/lit/issues/3912
 */
export abstract class PdsFormElement extends PdsElement {
  /**
   * @internal
   *
   * Tells the browser to treat the element like a form field.
   * Ties the element to the HTML form it is in.
   *
   */
  static formAssociated = true;

  /**
   * @internal
   *
   * An instance of element internals.
   * Contains properties and methods that allows the element
   * to participate fully in the HTML form it's in.
   */
  internals: ElementInternals;

  /**
   * @internal
   *
   * Stores the value for the `value` getter and setter.
   */
  internalValue: string;

  /**
   * @internal
   *
   * Stores the intial value of the field so that it can be reset
   */
  defaultValue: string;

  /**
   * @internal
   *
   * Stores the value for the `errorMessage` getter and setter.
   */
  internalErrorMessage: string;

  /**
   * @internal
   * The underlying HTML form field.
   * This should be implemented with `@query`
   * in the implementing class.
   */
  abstract field: HTMLElement;

  constructor() {
    super();

    /**
     * @internal
     *
     * Call the attachInternals() method on the element
     * to get access to extra methods and properties
     * for form fields, like setFormValue() and setValidity().
     */
    this.internals = this.attachInternals();
  }

  protected firstUpdated() {
    this.setInternalValidity();

    this.defaultValue = this.value || this.getAttribute('value') || '';
  }

  protected customSetterSetAttribute(
    attributeName: string,
    newValue: boolean | string | number,
  ): void {
    // Don't run this in tests because storyshots messes it up
    if (
      newValue &&
      newValue !== 'undefined' &&
      (!isServer || process.env.NODE_ENV !== 'test')
    ) {
      this.setAttribute(attributeName, newValue.toString());
    } else {
      this.removeAttribute(attributeName);
    }
  }

  set value(newValue) {
    const oldValue = this.value;

    this.customSetterSetAttribute('value', newValue);

    // store the value so it can be retrieved by the getter
    this.internalValue = newValue;

    // sets the current value of the control
    this.internals.setFormValue(newValue);

    // update the actual field
    this.updateField();

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
   * The label of the form field.
   * Must be plain text.
   * If label requires additional markup (e.g., superscript),
   * then use the label slot instead.
   */
  @property()
  label?: string;

  /**
   * Makes the label screen-reader-only and visually hidden.
   * Hiding the label is **strongly discouraged** and should only
   * be used when descriptive text exists elsewhere on the page.
   */
  @property({ type: Boolean })
  hideLabel: boolean = false;

  /**
   * The name of the form field. This is a **required** property.
   */
  @required
  @property({ reflect: true })
  name: string;

  /**
   * The id of the form field.
   *
   * Overrides the auto-generated id.
   */
  @property()
  fieldId?: string;

  set required(newRequired: boolean) {
    const oldRequiredValue = this.required;

    this.customSetterSetAttribute('required', newRequired);

    // ariaRequired needs to be a string
    this.internals.ariaRequired = newRequired ? 'true' : 'false';

    // needed to rerender the component
    this.requestUpdate('required', oldRequiredValue);
  }

  /**
   * Indicates that the form field is required.
   */
  @property({ type: Boolean })
  get required(): boolean {
    // default to false
    if (typeof this.internals.ariaRequired === 'undefined') {
      return false;
    }

    return this.internals.ariaRequired === 'true';
  }

  set disabled(newDisabled: boolean) {
    const oldDisabledValue = this.disabled;

    this.customSetterSetAttribute('disabled', newDisabled);

    // ariaDisabled needs to be a string
    this.internals.ariaDisabled = newDisabled ? 'true' : 'false';

    // needed to rerender the component
    this.requestUpdate('disabled', oldDisabledValue);
  }

  /**
   * Indicates that the form field is disabled.
   */
  @property({ type: Boolean })
  get disabled(): boolean {
    // default to false
    if (typeof this.internals.ariaDisabled === 'undefined') {
      return false;
    }
    return this.internals.ariaDisabled === 'true';
  }

  set readonly(newReadonly: boolean) {
    const oldReadonlyValue = this.readonly;

    this.customSetterSetAttribute('readonly', newReadonly);

    // ariaReadOnly needs to be a string
    this.internals.ariaReadOnly = newReadonly ? 'true' : 'false';

    // needed to rerender the component
    this.requestUpdate('readonly', oldReadonlyValue);
  }

  /**
   * Indicates that the form field is readonly.
   */
  @property({ type: Boolean })
  get readonly(): boolean {
    // default to false
    if (typeof this.internals.ariaReadOnly === 'undefined') {
      return false;
    }

    return this.internals.ariaReadOnly === 'true';
  }

  /**
   * The additional context used to assist the
   * user in filling out the form field.
   */
  @property()
  helpText?: string;

  set errorMessage(newErrorMessage) {
    const oldErrorMessageValue = this.errorMessage;

    this.customSetterSetAttribute('errormessage', newErrorMessage);

    this.internalErrorMessage = newErrorMessage;

    this.setInternalValidity();

    // needed to rerender the component
    this.requestUpdate('errorMessage', oldErrorMessageValue);
  }

  /**
   * The error message to display when the form
   * field is in an invalid state.
   */
  @property()
  get errorMessage() {
    return this.internalErrorMessage;
  }

  /**
   * Reset the field's value to it's value attribute.
   * This gets called when `form.reset()` is invoked
   * (typically by clicking a type="reset" button).
   */
  formResetCallback() {
    this.value = this.defaultValue;
  }

  /**
   * Calls `setValidity` on the element internals
   * with the appropriate options depending on whether
   * the element has an `errorMessage` or not.
   */
  setInternalValidity() {
    if (this.field && this.internalErrorMessage) {
      this.internals.setValidity(
        { customError: true },
        this.internalErrorMessage,
        this.field,
      );
    } else {
      // calling setValidity with an empty object
      // indicates that the element meets contraint
      // validation rules (i.e., is in a valid state)
      this.internals.setValidity({});
    }
  }

  /**
   * update the actual field's value
   */
  protected updateField() {}

  /**
   * Determines whether the element includes `helpText`
   */
  hasHelpText() {
    return !!this.helpText || !!this.slotNotEmpty('helpText');
  }

  /**
   * Gets the appropriate `aria-describedby` value
   * based on the existence of `helpText` and `errorMessage`.
   *
   * @returns space-seperated strings of ids
   */
  getAriaDescribedBy() {
    return [
      this.hasHelpText() ? `${this.name}-help-text` : '',
      this.errorMessage ? `${this.name}-error-message` : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  /**
   * Gets the "fieldId" value
   *
   * @returns the field id
   */
  getFieldId() {
    return this.fieldId || `${this.name}-field`;
  }

  /**
   * Determines whether the element has a label.
   * Console logs an error, if not.
   */
  verifyLabel() {
    const hasLabel = !!this.label || !!this.slotNotEmpty('label');

    if (!hasLabel) {
      console.error(
        '"label" is required as a property or as a slot in <%s /> but is undefined',
        this.tagName.toLowerCase(),
      );
    }

    return hasLabel;
  }

  /**
   * Creates an HTML template for the label
   * that is tied to the form field via the `for`
   * attribute and adds the required indicator,
   * if applicable.
   *
   * @returns an HTML template for the label
   */
  protected labelTemplate() {
    return html`<label
      for="${this.getFieldId()}"
      class="${this.classEl('label')}"
    >
      <slot name="label">${this.label}</slot>
      ${this.required
        ? html`<span
            class="${this.classEl('required-indicator')}"
            aria-hidden="true"
          >
            *
          </span>`
        : nothing}
      <slot name="label-after"></slot>
    </label>`;
  }

  /**
   * Creates an HTML template for help text,
   * if the element has help text.
   * Adds an `id` that is included in the form field's
   * aria-describedby attribute.
   *
   * @returns an HTML template for help text
   */
  protected helpTextTemplate() {
    return this.hasHelpText()
      ? html`<div
          class="${this.classEl('help-text')}"
          id="${this.name}-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>`
      : nothing;
  }

  /**
   * Creates an HTML template for error message,
   * if the `errorMessage` prop is defined.
   * Adds an `id` that is included in the form field's
   * aria-describedby attribute.
   *
   * @returns an HTML template for help text
   */
  protected errorMessageTemplate() {
    return this.errorMessage
      ? html`<div
          class="${this.classEl('error-message')}"
          id="${this.name}-error-message"
        >
          <pds-icon-alert-circle></pds-icon-alert-circle>
          ${this.errorMessage}
        </div>`
      : nothing;
  }
}
