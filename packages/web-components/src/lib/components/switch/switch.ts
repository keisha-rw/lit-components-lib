import { html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsFormElement } from '../pds-form-element/PdsFormElement';
import styles from './switch.scss?inline';

/**
 * @summary The switch is a selection control that allows users to turn preferences or settings "on or off".
 * @slot label Use this slot instead of the label property, if the label requires additional markup.
 * @slot label-after Use this slot if markup should be inserted after the label.
 * @fires pds-switch-toggle-on An event dispatched on toggling the switch on
 * @fires pds-switch-toggle-off An event dispatched on toggling the switch off
 * @fires pds-switch-blur An event dispatched on switch blur
 * @fires pds-switch-focus An event dispatched on switch focus
 */
@customElement('pds-switch', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsSwitch extends PdsFormElement {
  /**
   * @internal
   *
   * Needed so consuming applications know this component is type checkbox
   * (even though it is styled as a switch).
   */
  readonly type = 'checkbox';

  /**
   * switch can have a right label.
   */
  @property({ type: Boolean })
  labelRight: Boolean = false;

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

  set checked(newChecked: boolean) {
    const oldCheckedValue = this.checked;

    // ariaChecked needs to be a string
    this.internals.ariaChecked = newChecked ? 'true' : 'false';

    // needed to rerender the component
    this.requestUpdate('checked', oldCheckedValue);
  }

  /**
   * Indicates whether the switch is toggled.
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
    this.defaultChecked = this.checked || this.hasAttribute('checked');
  }

  private handleChange() {
    this.checked = this.field.checked;
    this.field.focus();

    const event = new Event(
      `pds-switch-toggle-${this.checked ? 'on' : 'off'}`,
      {
        bubbles: true,
        composed: true,
      },
    );

    this.dispatchEvent(event);
  }

  private handleBlur() {
    this.isFocused = false;

    this.checked = this.field.checked;
    const event = new Event('pds-switch-blur', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  private handleFocus() {
    this.isFocused = true;

    this.checked = this.field.checked;
    const event = new Event('pds-switch-focus', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  override labelTemplate() {
    return html` <label
      for="${this.fieldId || `${this.name}-field`}"
      class="${this.classEl('label')}"
      >${this.labelRight
        ? html`<span class="${this.classEl('slider')}"></span
            ><span class="${this.classEl('label-right')}">
              <slot name="label">${this.label}</slot>
            </span> `
        : html`<span class="${this.classEl('label-text')}">
              <slot name="label">${this.label}</slot>
            </span>
            <span class="${this.classEl('slider')}"></span>`}
      <slot name="label-after"></slot>
    </label>`;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      'is-checked': this.checked,
      'is-disabled': this.disabled,
      'is-focused': this.isFocused,
      'hidden-label': this.hideLabel,
    };
  }

  render() {
    if (!this.verifyLabel()) {
      return nothing;
    }

    return html`<div class=${this.getClass()}>
      <input
        type="checkbox"
        role="switch"
        class="${this.classEl('input')}"
        name=${this.name}
        id="${this.fieldId || `${this.name}-field`}"
        value="${this.value}"
        ?disabled=${this.disabled}
        ?checked=${this.checked}
        @change=${this.handleChange}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        aria-describedby=${this.getAriaDescribedBy() || nothing}
      />
      ${this.labelTemplate()}
    </div>`;
  }
}
