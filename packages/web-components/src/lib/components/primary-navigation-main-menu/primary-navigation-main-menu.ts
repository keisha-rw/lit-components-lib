import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './primary-navigation-main-menu.scss?inline';

/**
 * @summary This component is a navigational element (nav) that holds an Un unordered list element (ul)
 *
 * @slot default Contains one or more primary nav menu items within the pds-primary-navigation-main-menu, restricted to pds-primary-navigation-main-menu-item elements
 */
@customElement('pds-primary-navigation-main-menu', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsPrimaryNavigationMainMenu extends PdsElement {
  /**
   * Style variant
   * - default treatment uses a default background
   * - **inverted** variant changes to the inverted background
   */
  @property()
  variant: 'default' | 'inverted' = 'default';

  /**
   * Screen reader label for button
   */
  @property({ type: String })
  ariaLabel: string;

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
    };
  }

  render() {
    return html`<div
      class=${this.getClass()}
      aria-label=${ifDefined(this.ariaLabel)}
    >
      <ul class="pds-c-primary-navigation-main-menu__list" role="list">
        <slot
          allowed-elements="pds-primary-navigation-main-menu-item"
          @slotchange=${this.handleSlotValidation}
        ></slot>
      </ul>
    </div>`;
  }
}
