import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './action-menu-item.scss?inline';
import '../link/link';

/**
 * @summary This component is a sub component of action-menu built upon li elements
 *
 * @slot default Accepts the label for the menu item
 *
 * @fires pds-action-menu-item-click on menu-item click
 */
@customElement('pds-action-menu-item', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsActionMenuItem extends PdsElement {
  /**
   * Adds an aria-label to the link
   */
  @property()
  ariaLabel: string;

  /**
   * Specifies information about a linked document
   * Automatically set to 'noopener noreferrer' when target is '_blank'
   */
  @property()
  rel?: string;

  /**
   * Adds a target to action menu link item
   */
  @property()
  target?: '_self' | '_blank' | '_parent' | '_top';

  /**
   * Adds a href to the link
   */
  @property()
  linkHref: string;

  handleClick() {
    const customEvent = new CustomEvent('pds-action-menu-item-click', {
      bubbles: true,
      composed: true,
      detail: {
        summary: this.textContent,
      },
    });

    this.dispatchEvent(customEvent);
  }

  render() {
    let { rel } = this;

    if (this.target === '_blank') {
      rel = 'noopener noreferrer';
    }

    if (this.linkHref) {
      return html`<li>
        <a
          href="${this.linkHref}"
          rel=${ifDefined(rel)}
          target="${ifDefined(this.target)}"
          class="${this.classEl('link')}"
          aria-label=${ifDefined(this.ariaLabel)}
          @click=${this.handleClick}
        >
          <slot></slot>
        </a>
      </li>`;
    }

    return html`<li>
      <button
        class="${this.getClass()}"
        aria-label=${ifDefined(this.ariaLabel)}
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    </li>`;
  }
}
