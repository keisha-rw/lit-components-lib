import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './primary-navigation-dropdown-link.scss?inline';
import '@keisha/design-system-icons-web/arrow-right';

/**
 * @summary This component renders a styled anchor tag for the primary-nav
 *
 * @slot default This slot holds the link contents
 *
 * @fires pds-primary-navigation-dropdown-link-click A custom event dispatched on click
 */
@customElement('pds-primary-navigation-dropdown-link', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsPrimaryNavigationDropdownLink extends PdsElement {
  /**
   * The link for the item
   */
  @property({ type: String })
  href?: string;

  /**
   * Determines if the item should have an arrow icon
   */
  @property({ type: Boolean })
  arrow: boolean;

  /**
   * Style variant
   * - **default** renders the default primary-navigation
   * - **inverted** renders the inverted primary-navigation
   */
  @property()
  variant: 'default' | 'inverted' = 'default';

  handleClick() {
    const customEvent = new CustomEvent(
      'pds-primary-navigation-dropdown-link-click',
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

  /**
   * @internal
   */
  get classNames() {
    return {
      arrow: !!this.arrow,
      [this.variant]: !!this.variant,
    };
  }

  render() {
    return html`<a
      href=${this.href}
      @click=${this.handleClick}
      class=${this.getClass()}
    >
      <span class="pds-primary-navigation-dropdown-link__content"
        ><slot>This is a link</slot></span
      >
      ${this.arrow === true
        ? html`<pds-icon-arrow-right size="sm"></pds-icon-arrow-right>`
        : ''}
    </a>`;
  }
}
