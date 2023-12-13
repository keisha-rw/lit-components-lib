import { PropertyValueMap, html, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsFormElement } from '../pds-form-element/PdsFormElement';

import styles from './text-area.scss?inline';

/**
 * @summary The Company Co text area component
 *
 * @fires pds-text-area-input an event dispatched on input
 * @fires pds-text-area-change an event dispatched on change
 * @fires pds-text-area-blur an event dispatched on blur
 * @fires pds-text-area-focus an event dispatched on focus
 * @slot label Use this slot instead of the label property, if the label requires additional markup.
 * @slot label-after Use this slot if markup should be inserted after the label.
 * @slot help-text Use this slot instead of the helpText property, if the help text requires additional markup.
 */
@customElement('pds-text-area', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsTextArea extends PdsFormElement {
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
   * The default text value.
   *
   * There is no HTML "value" attribute on the native `<textarea>` element.
   * Set the "value" on the `<pds-text-area>` web component to render default text content.
   * The default text is wrapped in the `<textarea>` tags, ie `<textarea>Default text content.</textarea>`.
   */
  @property()
  get value() {
    return this.internalValue;
  }

  /**
   * The size of the component.
   *
   * - **default**
   * - **sm** renders a the small version of the textarea
   *
   * NOTE: This is NOT the HTML size attribute that controls the width of the textarea.
   */
  @property()
  size: 'sm' | 'default' = 'default';

  /**
   * Standard textarea minlength attribute.
   * See [HTML attribute: minlenth](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/minlenth)
   */
  @property()
  minLength?: number;

  /**
   * Standard textarea maxlength attribute.
   * See [HTML attribute: maxlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength)
   */
  @property()
  maxLength?: number;

  /**
   * Resize controls.
   * Set to an allowed value of 'smart', 'manual', 'horizontal', 'vertical' or 'none'.
   * The default value is 'smart' which automatically resizes based on content height.
   * Works via CSS style rule that targets the attribute name and value.
   * See [Controlling whether a textarea is resizable](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#controlling_whether_a_textarea_is_resizable)
   * - **smart** causes automatic resizing of height based on content entry
   * - **manual** allows for resizing in all directions
   * - **horizontal** allows for resizing horizontally
   * - **vertical** allows for resizing vertically
   * - **none** disables resizing
   */
  @property()
  resize: 'smart' | 'manual' | 'horizontal' | 'vertical' | 'none' = 'smart';

  /** @internal */
  @query('textarea')
  field: HTMLTextAreaElement;

  updateField() {
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

  private setSmartHeight() {
    if (this.field) {
      // Set height to auto before calculating new height using scrollHeight.
      this.field.style.height = 'auto';
      const borderHeight = 1;
      const paddingBoxHeight: number = this.field.scrollHeight;
      const borderBoxHeight: number = paddingBoxHeight + borderHeight * 2;
      this.field.style.height = `${borderBoxHeight}px`;
    }
  }

  private handleChange() {
    this.value = this.field.value;
    this.dispatchEvent(
      new Event('pds-text-area-change', { bubbles: true, composed: true }),
    );
  }

  private handleInput() {
    this.value = this.field.value;
    this.dispatchEvent(
      new Event('pds-text-area-input', { bubbles: true, composed: true }),
    );
  }

  private handleBlur() {
    this.dispatchEvent(
      new Event('pds-text-area-blur', { bubbles: false, composed: true }),
    );
  }

  private handleFocus() {
    this.dispatchEvent(
      new Event('pds-text-area-focus', { bubbles: false, composed: true }),
    );
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
    if (this.resize === 'smart') {
      this.setSmartHeight();
    }
  }

  render() {
    if (!this.verifyLabel()) {
      return nothing;
    }

    // Set prettier ignore to not enforce extra white space around the default value text.
    // prettier-ignore
    return html`<div class="${this.getClass()}">
      ${this.labelTemplate()} ${this.helpTextTemplate()}
      <div class="${this.classEl('textarea-wrapper')}">
        <textarea
          class="${this.classEl('textarea')}"
          name="${this.name}"
          id="${this.fieldId || `${this.name}-field`}"
          ?required=${this.required}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          resize=${this.resize}
          minlength="${ifDefined(this.minLength)}"
          maxlength="${ifDefined(this.maxLength)}"
          aria-invalid=${this.errorMessage ? 'true' : nothing}
          aria-describedby=${this.getAriaDescribedBy() || nothing}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        >${this.value}</textarea>
      </div>
      ${this.errorMessageTemplate()}
    </div>`;
  }
}
