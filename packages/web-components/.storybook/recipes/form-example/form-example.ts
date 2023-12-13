import { html } from 'lit';
import { pdsCustomElement as customElement } from '../../../src/lib/decorators/pds-custom-element';
import { PdsElement } from '../../../src/lib/components/PdsElement';
import styles from './form-example.scss?inline';

@customElement('form-example', {
  category: 'component',
  type: 'recipe',
  styles,
})
export class FormExample extends PdsElement {
  render() {
    return html`<slot></slot>`;
  }
}
