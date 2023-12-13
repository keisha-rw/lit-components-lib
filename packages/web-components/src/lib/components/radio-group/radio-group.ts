import { PropertyValues, html, nothing } from 'lit';
import {
  property,
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsFormElement } from '../pds-form-element/PdsFormElement';
import { PdsRadio } from '../radio/radio';
import styles from './radio-group.scss?inline';

/**
 * @summary This component, used with <pds-radio>, allow users
 *   to select a single option from a list of mutually exclusive options.
 *
 * @slot default Use this slot to pass the actual radio. They should be <pds-radio> elements.
 * @slot label Use this slot instead of the label property, if the label requires additonal markup.
 * @slot label-after Use this slot if markup should be inserted after the label.
 * @slot labelAfter **DEPRECATED** Use this slot if markup should be inserted after the label.
 * @slot help-text Use this slot instead of the helpText property, if the help text requires additonal markup.
 */
@customElement('pds-radio-group', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsRadioGroup extends PdsFormElement {
  /**
   * @internal
   *
   * Whether or not one of the radios inside of this component has focus.
   * This is used internally to manage focus and tab behavior.
   */
  @state()
  isFocused: boolean = false;

  /**
   * The amount of space between the radio buttons.
   *
   * - **default**
   * - **sm** condense the spacing between radios
   */
  @property()
  spacing: 'sm' | 'default' = 'default';

  /** @internal */
  @query('fieldset')
  field: HTMLFieldSetElement;

  /** @internal */
  @queryAssignedElements({ selector: 'pds-radio' })
  radios!: Array<PdsRadio>;

  /** @internal */
  @query('#radios')
  radioContainer!: HTMLDivElement;

  protected override updateField() {
    this.radios?.forEach((radio) => {
      // eslint-disable-next-line no-param-reassign
      radio.checked = radio.value === this.internalValue;
    });
  }

  /** set the name and disabled property of the children radios */
  protected setRadios() {
    this.radios.forEach((radio) => {
      if (!radio.name) {
        // eslint-disable-next-line no-param-reassign
        radio.name = this.name;
      }
      // eslint-disable-next-line no-param-reassign
      radio.groupDisabled = this.disabled;
    });
  }

  /** update the name and disabled property of the children radios */
  protected updateRadios() {
    this.radios.forEach((radio) => {
      if (this.name) {
        // eslint-disable-next-line no-param-reassign
        radio.name = this.name;
      }
      // eslint-disable-next-line no-param-reassign
      radio.groupDisabled = this.disabled;
    });
  }

  protected override firstUpdated() {
    super.firstUpdated();

    this.setRadios();

    this.updateField();

    // handle the radio changes and dispatch a change at the group level
    this.shadowRoot?.addEventListener('pds-radio-change', (e: Event) => {
      // consumers should listen to 'pds-radio-group-change'
      // instead of the 'pds-radio-change' event
      e.stopPropagation();

      // only update and dispatch a change, when the value has actually changed
      if (this.value !== (e.target as PdsRadio).value) {
        this.value = (e.target as PdsRadio).value;

        this.dispatchEvent(
          new Event('pds-radio-group-change', {
            bubbles: true,
            composed: true,
          }),
        );
      }
    });

    // Radio buttons can be controlled via the arrow keys as soon as one has focus..
    // Right/down checks the next radio.
    // Left/up checks the previous radio.
    this.shadowRoot?.addEventListener('keydown', (e: Event) => {
      const { code } = e as KeyboardEvent;
      const enabledRadios = this.radios.filter((radio) => !radio.disabled);
      const currentRadioIndex = enabledRadios.findIndex(
        (radio) => radio.isFocused,
      );

      if (code === 'ArrowRight' || code === 'ArrowDown') {
        e.preventDefault();

        // next radio or loop back to the first radio
        const index =
          currentRadioIndex + 1 === enabledRadios.length
            ? 0
            : currentRadioIndex + 1;

        // simulate click
        enabledRadios[index].field.click();
        enabledRadios[index].field.focus();
      }

      if (code === 'ArrowLeft' || code === 'ArrowUp') {
        e.preventDefault();

        // previous radio or loop forward to the last radio
        const index =
          currentRadioIndex === 0
            ? enabledRadios.length - 1
            : currentRadioIndex - 1;

        // simulate click
        enabledRadios[index].field.click();
        enabledRadios[index].field.focus();
      }
    });
  }

  /** if the name or disabled properties change, update the children radios */
  protected override update(changedProperties: PropertyValues<this>) {
    super.update(changedProperties);

    if (changedProperties.has('name') || changedProperties.has('disabled')) {
      this.updateRadios();
    }
  }

  /**
   * Listening to focus on the group of radios. Once it gets focus,
   * pass the focus down to the appropriate radio.
   */
  private handleFocus() {
    // when the radio group takes focus, instead put in on the currently checked radio
    // or on the first radio (assuming is it not disabled)
    const enabledRadios = this.radios.filter((radio) => !radio.disabled);
    const currentRadioIndex = enabledRadios.findIndex((radio) => radio.checked);

    enabledRadios[
      currentRadioIndex === -1 ? 0 : currentRadioIndex
    ].field.focus();

    this.isFocused = true;

    // focus doesn't bubble
    this.dispatchEvent(
      new Event('pds-radio-group-focus', { bubbles: false, composed: true }),
    );
  }

  private triggerBlur() {
    if (
      !this.radios.reduce(
        (isFocused, radio) => isFocused || radio.isFocused,
        false,
      )
    ) {
      this.isFocused = false;

      // blur doesn't bubble
      this.dispatchEvent(
        new Event('pds-radio-group-blur', { bubbles: false, composed: true }),
      );
    }
  }

  /**
   * Listening to focusout since that event bubbles. We do end up
   * getting all of the focusout events from the children, so in
   * order to tell that this is a "blur" from the component, this
   * is looking at the inner radios to check if any other them still
   * have focus.
   */
  private handleFocusOut() {
    // If we have tabbed out of the radios, set isFocused to false.
    // We need to do an arbitrary `setTimeout` here because of the order
    // of focus events: blur, focusout, focus, focusin. When clicking from
    // one radio to another, the selected radio first blur (setting isFocused
    // to false),then the radio group focusOut is called (here), then the
    // new radio's focus is called (setting isFocused to true). As a result,
    // when this callback is initially called, all of the children radios have
    // isFocused as false. We need the setTimeout to wait for the new radio's
    // focus event handle to happen before we evaluate if the radio group
    // still has focus.
    setTimeout(() => {
      this.triggerBlur();
    }, 100 /* 100 seems about right in testing */);
  }

  /**
   * This function renders the radio groups "label"
   * which in this case is actually a <legend>.
   */
  protected override labelTemplate() {
    // because we are using a fieldset to group the radios,
    // we are rendering a <legend> for the label
    return html`<legend class="${this.classEl('label')}" tabindex="-1">
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
      <!-- DEPRECATED - this slot will be removed in a future release -->
      <slot name="labelAfter"></slot>
    </legend>`;
  }

  /**
   * This function renders a div, that is a parent to the actual radios,
   * that helps manage the focus/tab behavior for the radios.
   */
  protected radioTemplate() {
    return html`<div
      id="radios"
      class="${this.classEl('radios')}"
      tabindex="${this.isFocused ? -1 : 0}"
      @focus=${this.handleFocus}
      @focusout=${this.handleFocusOut}
    >
      <slot></slot>
    </div>`;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      'spacing-sm': this.spacing === 'sm',
      'hidden-label': this.hideLabel,
      'is-disabled': !!this.disabled,
    };
  }

  render() {
    if (!this.verifyLabel()) {
      return nothing;
    }

    return html`<fieldset
      class="${this.getClass()}"
      name="${this.name}"
      role="radiogroup"
      aria-required=${this.required ? 'true' : nothing}
      aria-invalid=${this.errorMessage ? 'true' : nothing}
      aria-describedby=${this.getAriaDescribedBy() || nothing}
      ?disabled=${this.disabled}
    >
      ${this.labelTemplate()} ${this.helpTextTemplate()} ${this.radioTemplate()}
      ${this.errorMessageTemplate()}
    </fieldset>`;
  }
}
