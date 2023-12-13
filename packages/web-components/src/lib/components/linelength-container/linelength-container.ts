import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './linelength-container.scss?inline';

/**
 * @summary A container element meant to wrap page content, capping width at about 80 characters per line
 *
 * @slot default This slot holds the elements within the layout
 */
@customElement('pds-linelength-container', {
  category: 'layout',
  type: 'component',
  styles,
})
export class PdsLinelengthContainer extends PdsElement {
  /**
   * - **default** linelength container that caps the width at about 80 characters per line
   * - **sm** linelength container that caps the width at about 60 characters per line
   */
  @property()
  size: 'sm' | 'default' = 'default';

  /**
   * @internal
   */
  get classNames() {
    return {
      sm: this.size === 'sm',
    };
  }

  render() {
    return html`<div class=${this.getClass()}>
      <slot></slot>
    </div>`;
  }
}
