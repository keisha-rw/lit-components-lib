import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './primary-navigation-container.scss?inline';

/**
 * @summary This component is a container (nav) that holds the primary-navigation-main-menu and primary-navigation-utility-menu elements
 *
 * @slot default One or more pds-primary-navigation-main-menu &/or primary-navigation-utility-menu elements
 */
@customElement('pds-primary-navigation-container', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsPrimaryNavigationContainer extends PdsElement {
  /**
   * Style variant
   * - **default** renders the default primary-navigation
   * - **inverted** renders the inverted primary-navigation
   */
  @property()
  variant: 'default' | 'inverted';

  /**
   * @internal
   */
  get classNames() {
    return {
      /* This is equivalent to doing
       * 'default': this.variant === 'default',
       * 'inverted': this.variant === 'inverted',
       */
      [this.variant]: !!this.variant,
    };
  }

  render() {
    return html`<div class=${this.getClass()}>
      <div
        class="pds-c-primary-navigation-container__inner"
        @click=${(e: Event) => e.stopPropagation()}
      >
        <slot></slot>
      </div>
    </div>`;
  }
}
