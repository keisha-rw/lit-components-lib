import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './footer-nav.scss?inline';
import '../footer-nav-item/footer-nav-item';

/**
 * @summary A component that renders a group of pds-footer-nav-item elements
 *
 * @slot default One or more pds-foover-nav-item elements
 */
@customElement('pds-footer-nav', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsFooterNav extends PdsElement {
  /**
   * - **default** renders the footer-nav used for primary actions on a dark background
   * - **subtle** renders the footer-nav-item used for primary actions on a subtle background
   */
  @property()
  variant: 'default' | 'subtle' = 'default';

  /**
   * - **3col** renders the footer-nav-items in a three-across grid at desktop
   * - **4col** renders the footer-nav-item in a four-across grid at desktop
   */
  @property()
  behavior: '3col' | '4col' = '3col';

  /**
   * This grabs the footerNavItems from the slot
   * @internal
   */
  @queryAssignedElements({ slot: undefined, selector: 'pds-footer-nav-item' })
  footerNavItems: HTMLElement[];

  /**
   * @internal
   */
  addVariantToFooterNavItems() {
    if (this.footerNavItems && this.footerNavItems.length !== 0) {
      this.footerNavItems.forEach((footerNavItem) => {
        footerNavItem.setAttribute('variant', this.variant);
      });
    }
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
      [this.behavior]: !!this.behavior,
    };
  }

  render() {
    return html`<div class=${this.getClass()} part="footer-nav">
      <slot @slotchange=${this.addVariantToFooterNavItems}></slot>
    </div>`;
  }
}
