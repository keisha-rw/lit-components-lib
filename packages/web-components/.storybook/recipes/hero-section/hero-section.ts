import { html } from 'lit';
import { pdsCustomElement as customElement } from '../../../src/lib/decorators/pds-custom-element';
import { PdsElement } from '../../../src/lib/components/PdsElement';
import styles from './hero-section.scss?inline';

@customElement('hero-section', {
  category: 'component',
  type: 'recipe',
  styles,
})
export class HeroSection extends PdsElement {
  render() {
    return html`<slot></slot>`;
  }
}
