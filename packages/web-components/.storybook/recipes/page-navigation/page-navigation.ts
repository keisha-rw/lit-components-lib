import { html } from 'lit';
import { pdsCustomElement as customElement } from '../../../src/lib/decorators/pds-custom-element';
import { PdsElement } from '../../../src/lib/components/PdsElement';
import styles from './page-navigation.scss?inline';

@customElement('page-navigation', {
  category: 'component',
  type: 'recipe',
  styles,
})
export class PageNavigation extends PdsElement {
  render() {
    return html`<slot></slot>`;
  }
}
