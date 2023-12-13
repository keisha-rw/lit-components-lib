import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import { required } from '../../decorators/required';
import styles from './primary-navigation-utility-menu-item.scss?inline';

/**
 * @summary A list item (li) element that contains a link (a)
 *
 * @slot default The link text
 *
 * @fires primary-navigation-utility-menu-item-click A custom event dispatched on click
 */
@customElement('pds-primary-navigation-utility-menu-item', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsPrimaryNavigationUtilityMenuItem extends PdsElement {
  /**
   * The link for the item
   */
  @required
  @property()
  href: string;

  handleClick() {
    const customEvent = new CustomEvent(
      'pds-primary-navigation-utility-menu-item-click',
      {
        bubbles: true,
        composed: true,
        detail: {
          summary: this.textContent,
        },
      },
    );

    this.dispatchEvent(customEvent);
  }

  render() {
    return html`
      <li class=${this.getClass()} role="listitem">
        <a
          @click=${this.handleClick}
          class="${this.classEl('link')}"
          href=${this.href}
          aria-label="link"
        >
          <slot class="${this.classEl('text')}"></slot>
          <pds-icon-arrow-right
            class="${this.classEl('arrow')}"
            size="sm"
          ></pds-icon-arrow-right>
        </a>
      </li>
    `;
  }
}
