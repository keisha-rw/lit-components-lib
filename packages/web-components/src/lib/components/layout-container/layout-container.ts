import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './layout-container.scss?inline';

/**
 * @summary A container element meant to wrap page content
 *
 * @slot default This slot holds the elements within the layout
 */
@customElement('pds-layout-container', {
  category: 'layout',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsLayoutContainer extends PdsElement {
  /**
   * Style variant
   * - **narrow** renders the layout-container narrower than the default
   */
  @property()
  variant: 'default' | 'narrow' = 'default';

  /**
   * Remove padding
   * - **md** removes padding from the layout container below md breakpoint
   * - **all** removes padding from the layout container at all screens (used for nested layout containers)
   */
  @property()
  removePadding: 'md' | 'all';

  /**
   * @internal
   */
  get classNames() {
    return {
      [`${this.variant}`]: !!this.variant,
      [`remove-padding-${this.removePadding}`]: !!this.removePadding,
    };
  }

  render() {
    return html`<div class=${this.getClass()}><slot></slot></div>`;
  }
}
