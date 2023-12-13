import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './sidebar.scss?inline';

/**
 * @summary This components provides a layout for webpages containing sidebars
 *
 * @slot default Main content
 * @slot left-sidebar Content to be rendered at left sidebar
 * @slot right-sidebar Content to be rendered at right sidebar
 */
@customElement('pds-sidebar', {
  category: 'layout',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsSidebar extends PdsElement {
  /**
   * - **default** stacks at (64rem/ 1024px) viewport
   * - **faster** stacks at a smaller viewport (48rem/ 768px)
   * - **slower** stacks at a larger viewport (85.375rem/ 1366px)
   */
  @property()
  break: 'faster' | 'slower' | 'default' = 'default';

  /**
   * - **default** spaced with a default gap (24px)
   * - **none** no gap between content and sidebar
   * - **sm** spaced with a smaller gap (8px)
   * - **lg** spaced with a larger gap (32px)
   */
  @property()
  gap: 'none' | 'sm' | 'lg' | 'default' = 'default';

  /**
   * @internal
   */
  get classNames() {
    return {
      [`break-${this.break}`]: !!this.break,
      [`gap-${this.gap}`]: !!this.gap,
      'right-sidebar': !!(
        this.slotNotEmpty('right-sidebar') && this.slotEmpty('left-sidebar')
      ),
      'left-sidebar': !!(
        this.slotNotEmpty('left-sidebar') && this.slotEmpty('right-sidebar')
      ),
      'leftandright-sidebars': !!(
        this.slotNotEmpty('left-sidebar') && this.slotNotEmpty('right-sidebar')
      ),
    };
  }

  render() {
    return html`<div class=${this.getClass()}>
      ${this.slotNotEmpty('left-sidebar') &&
      html` <slot name="left-sidebar"></slot> `}
      <slot></slot>
      ${this.slotNotEmpty('right-sidebar') &&
      html` <slot name="right-sidebar"></slot> `}
    </div>`;
  }
}
