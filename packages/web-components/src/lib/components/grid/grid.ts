import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import '../grid-item/grid-item';
import styles from './grid.scss?inline';

/**
 * @summary This component provides some helpful layout configurations
 *
 * @slot default Contains grid items within the layout configuration, restricted to pds-grid-item elements
 */
@customElement('pds-grid', {
  category: 'layout',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsGrid extends PdsElement {
  /**
   * - **default** renders the grid item stacked with a gap in between
   * - **2up** yields a grid whose grid items are stacked on small screens but display side-by-side when enough screen real estate is available to do so
   * - **3up** yields a grid whose grid items are stacked on small screens, transforms to a 2-across pattern, and ultimately transforms to a 3-across pattern
   * - **1-2-4up** yields a grid whose grid items are stacked on small screens, transforms to a 2-across pattern, and ultimately transforms to a 4-across pattern
   * - **1-3up** yields a grid whose grid items are stacked on small screens transforms to a 3-across pattern on larger screens
   * - **side-by-side** yields a grid whose grid items don't necessarily ever need to stack and displayed side-by-side for all the viewports
   */
  @property()
  variant: '2up' | '3up' | '1-3up' | '1-2-4up' | 'side-by-side' | 'default' =
    'default';

  /**
   * - **default** grid items are spaced with a gap
   * - **none** grid items are spaced with no gap between items
   * - **sm** grid items are spaced with smaller gap than default
   * - **lg** grid items are spaced with large gap than default
   */
  @property()
  gap: 'none' | 'sm' | 'lg' | 'default' = 'default';

  /**
   * - **default** stacks at default viewport
   * - **faster** stacks at a smaller viewport than the default
   * - **slower** stacks at a larger viewport than the default
   */
  @property()
  break: 'faster' | 'slower' | 'default' = 'default';

  render() {
    const classes = {
      'pds-l-grid': true,
      [`pds-l-grid--${this.variant}`]: !!this.variant,
      [`pds-l-grid--gap-${this.gap}`]: !!this.gap,
      [`pds-l-grid--break-${this.break}`]: this.break,
    };

    return html`<div class=${classMap(classes)}>
      <slot
        allowed-elements="pds-grid-item"
        @slotchange=${this.handleSlotValidation}
      ></slot>
    </div>`;
  }
}
