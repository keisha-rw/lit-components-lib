import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { msg, localized } from '@lit/localize';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import '../step-indicator-item/step-indicator-item';
import styles from './step-indicator.scss?inline';

/**
 * @summary A step indicator
 *
 * @slot @slot default Contains the step indicator items, restricted to pds-step-indicator-item element
 */
@customElement('pds-step-indicator', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
@localized()
export class PdsStepIndicator extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  /**
   * variant
   * - **horizontal** renders the step-indicator horizontal on large screens and up
   * - **vertical** renders the step-indicator always vertical
   */
  @property()
  variant: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * interactive
   */
  @property({ type: Boolean })
  interactive: boolean = false;

  /**
   * inverted
   */
  @property({ type: Boolean })
  inverted: boolean = false;

  /**
   * @internal
   */
  @queryAssignedElements({
    slot: undefined,
    selector: 'pds-step-indicator-item',
  })
  stepIndicatorItems: HTMLElement[];

  /**
   * @internal
   * pushes properties down to subcomponent step indicator items
   */
  addPropertiesToStepIndicatorItems() {
    this.stepIndicatorItems.forEach((stepIndicatorItem) => {
      stepIndicatorItem.setAttribute('inverted', '');
    });
  }

  handleSlotChange(e: Event) {
    this.handleSlotValidation(e);
    this.addPropertiesToStepIndicatorItems();
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
      inverted: !!this.inverted,
    };
  }

  listTemplate() {
    return html`<ol role="list" class="${this.classEl('list')}">
      <slot
        allowed-elements="pds-step-indicator-item"
        @slotchange=${this.handleSlotChange}
        >Step indicator items</slot
      >
    </ol>`;
  }

  render() {
    if (this.interactive) {
      return html`<nav
        class="${this.getClass()}"
        aria-label="${msg('progress')}"
      >
        ${this.listTemplate()}
      </nav>`;
    }

    return html`<div
      class="${this.getClass()}"
      role="group"
      aria-label="${msg('progress')}"
    >
      ${this.listTemplate()}
    </div>`;
  }
}
