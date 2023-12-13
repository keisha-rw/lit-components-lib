import { html } from 'lit';
import 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './grid-item.scss?inline';

/**
 * @summary A grid item element should always be contained within a pds-grid element
 *
 * @slot default This slot holds the grid item content
 */
@customElement('pds-grid-item', {
  category: 'layout',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsGridItem extends PdsElement {
  render() {
    const classes = {
      'pds-l-grid-item': true,
    };

    return html`<div class=${classMap(classes)}><slot></slot></div>`;
  }
}
