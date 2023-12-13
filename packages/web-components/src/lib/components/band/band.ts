import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './band.scss?inline';

/**
 * @summary A styled band surrounding various html content
 *
 * @slot default This slot holds the html elements within the band
 */
@customElement('pds-band', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsBand extends PdsElement {
  /**
   * Style variant
   * - **default** renders the band using no background
   * - **subtle** renders the band using the subtle background token
   * - **strong** renders the band using the strong background token
   * - **brand-default** renders the band using the brand-default background token
   * - **brand-strong** renders the band using the brand-strong background token
   * - **brand-xstrong** renders the band using the brand-xstrong background token
   * - **brand-gradient-strong** renders the band using the brand-gradient-strong background token
   * - **brand-gradient-xstrong** renders the band using the brand-gradient-xstrong background token
   */
  @property()
  variant:
    | 'default'
    | 'subtle'
    | 'strong'
    | 'brand-default'
    | 'brand-strong'
    | 'brand-xstrong'
    | 'brand-gradient-strong'
    | 'brand-gradient-xstrong' = 'default';

  /**
   * Rounded
   */
  @property({ type: Boolean })
  rounded: boolean = false;

  /**
   * Spacing variants
   * - default (no spacing property added) provides 64px of top/bottom padding on md/lg screens
   *  and 32px of top/bottom padding on sm screens
   * - **none** renders no top and bottom padding. Content within the band will create the spacing
   * - **sm** provides 32px of top/bottom padding on md/lg screens and 16px of top/bottom padding
   *  on sm screens
   * - **lg** provides 128px of top/bottom padding on md/lg screens and 64px of top/bottom padding
   *  on sm screens
   */
  @property()
  spacing: 'none' | 'sm' | 'lg' | 'default' = 'default';

  /**
   * @internal
   */
  get classNames() {
    return {
      [`${this.variant}`]: !!this.variant,
      [`spacing-${this.spacing}`]: !!this.spacing,
      rounded: !!this.rounded,
    };
  }

  render() {
    return html`<div class=${this.getClass()}>
      <slot></slot>
    </div>`;
  }
}
