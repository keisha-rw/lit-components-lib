import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './decorator.scss?inline';

/**
 * @summary A styled decorator
 *
 * @slot default This slot holds the text to display underneath the decorator
 */
@customElement('pds-decorator', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsDecorator extends PdsElement {
  @property()
  variant: 'default' | 'inverted' = 'default';

  @property()
  size: 'sm' | 'default' = 'default';

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
      [this.size]: !!this.size,
    };
  }

  render() {
    return html`<div class=${this.getClass()}></div>
      <slot class="${this.classEl(this.variant)}-heading"></slot>`;
  }
}
