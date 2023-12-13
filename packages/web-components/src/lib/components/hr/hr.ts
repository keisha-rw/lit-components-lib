import { html } from 'lit';
import 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './hr.scss?inline';

/**
 * @summary A horizontal rule component
 */
@customElement('pds-hr', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsHr extends PdsElement {
  /**
   * @internal
   */
  get classNames() {
    return {};
  }

  render() {
    return html`<hr class=${this.getClass()} />`;
  }
}
