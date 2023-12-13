import { html } from 'lit';
import { pdsCustomElement as customElement } from '../../../src/lib/decorators/pds-custom-element';
import { PdsElement } from '../../../src/lib/components/PdsElement';
import styles from './card-custom-padding.scss?inline';

@customElement('card-custom-padding', {
  category: 'component',
  type: 'recipe',
  styles,
})
export class CardCustomPadding extends PdsElement {
  render() {
    return html`<slot></slot>`;
  }
}
