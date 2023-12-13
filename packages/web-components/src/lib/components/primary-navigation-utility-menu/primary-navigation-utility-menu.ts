import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './primary-navigation-utility-menu.scss?inline';
import '../hr/hr';

/**
 * @summary This component is a navigational element (nav) that holds an Un unordered list element (ul)
 *
 * @slot default Contains one or more menu items within the pds-primary-navigation-utility-menu, restricted to pds-primary-navigation-utility-menu-item elements
 */
// TODO: should this be a layout component?  Need to switch that.
@customElement('pds-primary-navigation-utility-menu', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsPrimaryNavigationUtilityMenu extends PdsElement {
  /**
   * Style variant
   * - **default** renders the default primary-navigation-utility-menu
   * - **inverted** renders the inverted primary-navigation-utility-menu
   */
  @property()
  variant: 'default' | 'inverted' = 'default';

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
    };
  }

  render() {
    return html`<pds-hr
        class="pds-c-primary-navigation-utility-menu__divider"
      ></pds-hr>
      <nav class=${this.getClass()}>
        <ul class="pds-c-primary-navigation-utility-menu__list" role="list">
          <slot
            allowed-elements="pds-primary-navigation-utility-menu-item"
            @slotchange=${this.handleSlotValidation}
          ></slot>
        </ul>
      </nav>`;
  }
}
