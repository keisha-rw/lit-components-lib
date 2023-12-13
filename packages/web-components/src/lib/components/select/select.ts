import '@keisha/design-system-icons-web/chevron-down';
import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { property, query, state } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsFormElement } from '../pds-form-element/PdsFormElement';
import styles from './select.scss?inline';

/**
 * @summary This component renders a styled select input component.
 *
 * @slot label Use this slot instead of the label property, if the label requires additional markup.
 * @slot label-after Use this slot if markup should be inserted after the label.
 * @slot help-text Use this slot instead of the helpText property, if the help text requires additonal markup.
 */
@customElement('pds-select', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsSelect extends PdsFormElement {
  /**
   * Size
   * -**sm** renders a the small version of the Select
   */
  @property()
  size: 'sm' | 'default' = 'default';

  @property({ type: String })
  placeholder?: string;

  /** @internal */
  @state()
  childNodeObserver = new MutationObserver((mutationList) => {
    const me = this;
    mutationList.forEach((mutation) => {
      const mutationTargetHtmlElement = mutation.target as HTMLElement;
      const mutationAddedNode = mutation.addedNodes[0] as HTMLElement;
      const mutationRemovedNode = mutation.removedNodes[0] as HTMLElement;

      if (
        mutationTargetHtmlElement &&
        mutationTargetHtmlElement.tagName &&
        mutationTargetHtmlElement.tagName.toLowerCase() === 'option'
      ) {
        // option attribute modified
        this.childNodeObserverCallback(me);
      } else if (
        mutationTargetHtmlElement &&
        mutationTargetHtmlElement.parentElement &&
        mutationTargetHtmlElement.parentElement.tagName &&
        mutationTargetHtmlElement.parentElement.tagName.toLowerCase() ===
          'option'
      ) {
        // option text modified
        this.childNodeObserverCallback(me);
      } else if (
        mutation.addedNodes &&
        mutationAddedNode &&
        mutationAddedNode.tagName &&
        mutationAddedNode.tagName.toLowerCase() === 'option'
      ) {
        // new option added
        this.childNodeObserverCallback(me);
      } else if (
        mutation.removedNodes &&
        mutationRemovedNode &&
        mutationRemovedNode.tagName &&
        mutationRemovedNode.tagName.toLowerCase() === 'option'
      ) {
        // option removed
        this.childNodeObserverCallback(me);
      }
    });
  });

  @query('select')
  field: HTMLSelectElement;

  /**
   * Set the selected option based on the current value
   */
  protected override updateField() {
    // for loop for the case where a browser doesn't make a collection iterable
    for (let i = 0; i < this.field?.options?.length; i += 1) {
      const option = this.field.options[i];

      if (option.value === (this.internalValue || '')) {
        option.selected = true;
        break;
      }
    }
  }

  protected override firstUpdated() {
    super.firstUpdated();

    this.updateField();
    // Options for the observer (which mutations to observe)
    const config = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    };
    this.childNodeObserver.observe(this, config);
  }

  private handleBlur() {
    this.dispatchEvent(
      new CustomEvent('pds-select-blur', {
        bubbles: false,
        composed: true,
        detail: {
          summary: this.value,
        },
      }),
    );
  }

  private handleChange() {
    this.value = this.field.value;
    this.dispatchEvent(
      new CustomEvent('pds-select-change', {
        bubbles: true,
        composed: true,
        detail: {
          summary: this.value,
        },
      }),
    );
  }

  private handleFocus() {
    this.dispatchEvent(
      new Event('pds-select-focus', { bubbles: false, composed: true }),
    );
  }

  /**
   * Check if an option exists in the select
   */
  selectContainsOption(select: HTMLSelectElement, value: string) {
    return (
      Array.from(select.options).filter((option) => option.value === value)
        .length > 0
    );
  }

  async childNodeObserverCallback(currentSelect: PdsSelect) {
    // When child options change, we need to request update of the component
    currentSelect.requestUpdate();
    await currentSelect.updateComplete;

    // check if the value still is a valid option in the select and set it
    if (this.selectContainsOption(currentSelect.field, currentSelect.value)) {
      const selectValue = currentSelect.value;
      // eslint-disable-next-line no-param-reassign
      currentSelect.value = selectValue;
      currentSelect.updateField();
    } else {
      currentSelect.formResetCallback();
      currentSelect.handleChange();
    }
  }

  /** @internal */
  get classNames() {
    return {
      [this.size]: !!this.size,
      'is-error': !!this.errorMessage,
      'is-disabled': this.disabled,
      'hidden-label': this.hideLabel,
    };
  }

  /**
   * Creates an HTML template for placeholder,
   * if the `placeholder` prop is defined.
   * Adds a hidden and disabled attribute
   * when this select is required.
   *
   * @returns an HTML template for placeholder or nothing
   */
  protected placeholderTemplate() {
    // Set prettier ignore to not enforce extra white space around the placeholder text.
    // prettier-ignore
    return this.placeholder
      ? html`<option id="placeholder"
          value=""
          ?hidden=${this.required}
          ?disabled=${this.required}
        >${this.placeholder}</option>`
      : nothing;
  }

  render() {
    if (!this.verifyLabel()) {
      return nothing;
    }

    return html`<div class="${this.getClass()}">
      ${this.labelTemplate()} ${this.helpTextTemplate()}
      <div class="${this.classEl('wrapper')}">
        <select
          class="${this.classEl('select')}"
          id="${this.fieldId || `${this.name}-field`}"
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-describedby=${this.getAriaDescribedBy() || nothing}
          aria-invalid=${this.errorMessage ? 'true' : nothing}
          name="${this.name}"
          @change=${this.handleChange}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        >
          ${this.placeholderTemplate()}
          ${Array.from(this.children).map((child: Element) => {
            return html`${unsafeHTML(child.outerHTML)}`;
          })}
        </select>
        <span class="${this.classEl('down')}">
          <pds-icon-chevron-down size="default"></pds-icon-chevron-down>
        </span>
      </div>
      ${this.errorMessageTemplate()}
    </div>`;
  }
}
