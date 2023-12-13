import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import { required } from '../../decorators/required';
import styles from './box-button.scss?inline';
import '@keisha/design-system-icons-web/arrow-right';
import '../heading/heading';

/**
 * @summary A clickable box that contains a primary action
 *
 * @slot description The description of the box button
 *
 * @fires pds-box-button-click A custom event dispatched on click
 */
@customElement('pds-box-button', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsBoxButton extends PdsElement {
  /**
   * Style variant
   * - **default** box button has a lighter gradient background
   * - **strong** renders a box button with a darker gradient background
   */
  @property()
  variant: 'default' | 'strong';

  /**
   * The href attribute of the anchor tag that surrounds the box-button
   */
  @property()
  href = '#';

  /**
   * The label text that appears on the box button
   */
  @required
  @property({ type: String })
  label: string;

  /**
   * Specifies the typography styles of the label
   */
  @property()
  labelVariant: 'sm' | 'default' | 'lg' | 'xl' = 'default';

  /**
   * Adds an additional class for aligning content to the vertical center of the box button
   */
  @property({ type: Boolean })
  centerContentVertically: boolean = false;

  handleClick() {
    const customEvent = new CustomEvent('pds-box-button-click', {
      bubbles: true,
      composed: true,
      detail: {
        summary: this.textContent,
      },
    });

    this.dispatchEvent(customEvent);
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
      'center-vertically': !!this.centerContentVertically,
    };
  }

  render() {
    return html`<a
      href=${this.href}
      class=${this.getClass()}
      @click=${this.handleClick}
    >
      <div class="${this.classEl('body')}">
        <div class="${this.classEl('content')}">
          <div class="${this.classEl('label')}--${this.labelVariant}">
            ${this.label}
          </div>
          <slot name="description"></slot>
        </div>
        <div class="${this.classEl('actions')}">
          <span class="${this.classEl('icon')}">
            <pds-icon-arrow-right size="lg"></pds-icon-arrow-right>
          </span>
        </div>
      </div>
    </a>`;
  }
}
