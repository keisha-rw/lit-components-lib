import { html } from 'lit';
import { pdsCustomElement as customElement } from '../../../src/lib/decorators/pds-custom-element';
import { PdsElement } from '../../../src/lib/components/PdsElement';
import styles from './aligned-content-cards.scss?inline';

@customElement('aligned-content-cards', {
  category: 'component',
  type: 'recipe',
  styles,
})
export class AlignedContentCards extends PdsElement {
  render() {
    return html`<slot></slot>`;
  }
}
