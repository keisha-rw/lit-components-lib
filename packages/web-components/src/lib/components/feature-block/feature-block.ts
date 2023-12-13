import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './feature-block.scss?inline';

/**
 * @summary A wrapper that contains stacked media and a body of content
 * on small screens and then breaks them side-by-side on large screens
 *
 * @slot media This slot holds the image or video
 * @slot default Holds the content of the feature block (heading, text-passage, CTAs)
 */
@customElement('pds-feature-block', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsFeatureBlock extends PdsElement {
  /**
   * Behavior variant
   * - **reversed** renders the media slot to the right of the body on md/lg screens
   */
  @property()
  behavior: 'reversed' | 'default' = 'default';

  /**
   * Full width variant
   * 1) Turns on the full bleed media slot behind the body overlay
   */
  @property({ type: Boolean })
  fullWidth: boolean = false;

  /**
   * reverse the stacking order in mobile display
   */
  @property({ type: Boolean })
  reverseMobileDisplay: boolean = false;

  /**
   * @internal
   */
  get classNames() {
    return {
      [`${this.behavior}`]: !!this.behavior,
      'full-width': !!this.fullWidth,
      'reverse-mobile-display': !!this.reverseMobileDisplay,
    };
  }

  render() {
    return html`<div class=${this.getClass()}>
      <div class="pds-c-feature-block__media">
        <slot name="media"></slot>
      </div>
      <div class="pds-c-feature-block__body">
        <slot></slot>
      </div>
    </div>`;
  }
}
