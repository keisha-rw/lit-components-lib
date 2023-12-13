import { localized, msg } from '@lit/localize';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './step-indicator-item.scss?inline';
import '@keisha/design-system-icons-web/check';

/**
 * @summary A step indicator item
 *
 * @slot default The text of the step, or a link to the step
 *
 * @fires pds-step-indicator-item-click a custom event dispatched on click
 */
@customElement('pds-step-indicator-item', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
@localized()
export class PdsStepIndicatorItem extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  /**
   * status
   * - **complete** renders the step-indicator-item as a completed step
   * - **current** renders the step-indicator-item as the current step
   * - **incomplete** renders the step-indicator-item as an incomplete step
   */
  @property({ reflect: true })
  status: 'completed' | 'current' | 'incomplete';

  /**
   * href
   */
  @property()
  href?: string;

  /**
   * active
   * This indicates the user is viewing this step
   */
  @property({ type: Boolean })
  active: boolean = false;

  /**
   * inverted
   * TODO: convert this to "variant" - this will be a breaking change
   */
  @property({ type: Boolean })
  inverted?: boolean;

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.status]: !!this.status,
      interactive: !!this.href,
      active: !!this.active,
      inverted: !!this.inverted,
    };
  }

  handleClick(e: Event) {
    const customEvent = new CustomEvent('pds-step-indicator-item-click', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        summary: this.textContent,
      },
    });

    this.dispatchEvent(customEvent);

    if (customEvent.defaultPrevented) {
      e.preventDefault();
    }
  }

  completedCircleTemplate() {
    return html`<div class="${this.classEl('outer-circle')}">
      <span class="pds-c-step-indicator-item__icon"
        ><pds-icon-check size="xs"></pds-icon-check></span
    ></span>
    </div>`;
  }

  currentCircleTemplate() {
    return html`<span class="${this.classEl('outer-circle')}">
      <span class="${this.classEl('inner-circle')}"></span>
    </span>`;
  }

  incompleteCircleTemplate() {
    return html`<div class="${this.classEl('outer-circle')}"></div>`;
  }

  circleTemplate() {
    return html`<div
      class="${this.classEl('circle')}"
      focusable="false"
      aria-hidden="true"
    >
      ${this.status === 'completed' ? this.completedCircleTemplate() : nothing}
      ${this.status === 'current' ? this.currentCircleTemplate() : nothing}
      ${this.status === 'incomplete'
        ? this.incompleteCircleTemplate()
        : nothing}
    </div>`;
  }

  stepTextTemplate() {
    return html`${this.circleTemplate()}
      <slot>step indicator item</slot>
      ${this.status === 'completed'
        ? html`<span class="pds-u-sr-only">${msg('completed')}</span>`
        : nothing}
      ${this.status === 'incomplete'
        ? html`<span class="pds-u-sr-only">${msg('incomplete')}</span>`
        : nothing}`;
  }

  render() {
    return html`<li
      class=${this.getClass()}
      aria-current="${this.active ? 'step' : nothing}"
      role="listitem"
    >
      ${this.href
        ? html`<a
            href="${this.href}"
            class="${this.classEl('text')}"
            @click=${this.handleClick}
            >${this.stepTextTemplate()}</a
          >`
        : html`<span class="${this.classEl('text')}"
            >${this.stepTextTemplate()}</span
          >`}
    </li>`;
  }
}
