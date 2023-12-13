import { html } from 'lit';
import 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './footnote.scss?inline';
import '../hr/hr';
import '../footnote-item/footnote-item';

/**
 * @summary This component creates a card container for other elements
 *
 * @slot default This is the ol element content (one or more pds-footnote-item elements)
 */
@customElement('pds-footnote', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsFootnote extends PdsElement {
  /**
   * @internal
   */
  get classNames() {
    return {};
  }

  render() {
    return html` <ol role="list" class="${this.getClass()}">
      <slot></slot>
    </ol>`;
  }
}
