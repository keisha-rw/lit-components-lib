import '@keisha/design-system-icons-web/check';
import { html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { required } from '../../decorators/required';
import { PdsElement } from '../PdsElement';
import styles from './radio.scss?inline';

/**
 * @summary A radio button
 *
 * @slot label Use this slot instead of the label property, if the label requires additonal markup
 * @slot label-after Use this slot if markup should be inserted after the label.
 * @slot labelAfter **DEPRECATED** Use this slot if markup should be inserted after the label.
 */
@customElement('pds-radio', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsRadio extends PdsElement {
  /**
   * @internal
   * needed to rerender the component when the hidden radio input gets or loses focus
   * managing this via component state and the .pds-is-focused class is simpler
   * than managing this via complicated SCSS selectors
   */
  @state()
  isFocused: boolean = false;

  /**
   * The `name` property can be set or left blank to be inherited from
   * the `<pds-radio-group>`.
   */
  @property()
  name?: string;

  /**
   * The `id` of the actual `<input>` in the shadow root.
   */
  @property()
  fieldId?: string;

  /**
   * The radio's value. When this radio is checked, the value of the
   * radio group will equal this value.
   */
  @required
  @property()
  value: string;

  /**
   * checked
   * - Renders the radio with checked initially
   */
  @property({
    type: Boolean,
  })
  checked: boolean = false;

  /**
   * disabled
   * - Renders the radio as disabled
   */
  @property({
    type: Boolean,
  })
  disabled: boolean;

  /**
   * @internal
   * only the pds-radio-group should set this property
   */
  @property({
    type: Boolean,
    attribute: false,
  })
  groupDisabled: boolean;

  /**
   * The label for the radio. (Can also be set by the label slot.)
   */
  @property()
  label?: string;

  /**
   * Make the label visually hidden, but still available to a screen reader.
   */
  @property({ type: Boolean })
  hideLabel: boolean = false;

  /** @internal */
  @query('input')
  field: HTMLInputElement;

  /** @internal */
  private get isDisabled() {
    return typeof this.disabled !== 'undefined'
      ? this.disabled
      : this.groupDisabled;
  }

  private handleChange() {
    this.checked = this.field.checked;
    this.field.focus();
    this.dispatchEvent(
      new Event('pds-radio-change', { bubbles: true, composed: true }),
    );
  }

  private handleBlur() {
    this.isFocused = false;
    this.dispatchEvent(
      new Event('pds-radio-blur', { bubbles: false, composed: true }),
    );
  }

  private handleFocus() {
    this.isFocused = true;
    this.dispatchEvent(
      new Event('pds-radio-focus', { bubbles: false, composed: true }),
    );
  }

  private handleKeydown(e: KeyboardEvent) {
    // check the radio when the space button is pressed
    if (e.code === 'Space') {
      this.handleChange();
    }
  }

  protected verifyLabel() {
    const hasLabel = !!this.label || !!this.slotNotEmpty('label');

    if (!hasLabel) {
      // eslint-disable-next-line no-console
      console.error(
        '"label" is required as a property or as a slot in <%s /> but is undefined',
        this.tagName.toLowerCase(),
      );
    }

    return hasLabel;
  }

  protected labelTemplate() {
    return html` <label
      for="${this.fieldId || `${this.value}-field`}"
      class="${this.classEl('label')}"
    >
      <span class="${this.classEl('circle')}">
        <span class="${this.classEl('inner-circle')}"></span>
      </span>
      <span class="${this.classEl('label-text')}">
        <slot name="label">${this.label}</slot>
      </span>
      <slot name="label-after"></slot>
      <!-- DEPRECATED - this slot will be removed in a future release -->
      <slot name="labelAfter"></slot>
    </label>`;
  }

  /** @internal */
  get classNames() {
    return {
      'is-checked': this.checked,
      'is-disabled': this.isDisabled,
      'is-focused': this.isFocused,
      'hidden-label': this.hideLabel,
    };
  }

  render() {
    if (!this.verifyLabel()) {
      return nothing;
    }

    // The tabindex is set to "-1" so that the input
    // can recieve focus programmatically, but will
    // not be tabbed to manually. The focus is managed
    // by the <pds-radio-group>.
    return html`<div class="${this.getClass()}">
      <input
        class="${this.classEl('input')}"
        type="radio"
        name="${this.name}"
        id="${this.fieldId || `${this.value}-field`}"
        value="${this.value}"
        ?disabled=${this.isDisabled}
        ?checked=${this.checked}
        tabindex="-1"
        @click=${this.handleChange}
        @change=${this.handleChange}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @keydown=${this.handleKeydown}
      />
      ${this.labelTemplate()}
    </div>`;
  }
}
