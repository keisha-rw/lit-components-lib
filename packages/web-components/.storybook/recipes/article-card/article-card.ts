import { html } from 'lit';
import { pdsCustomElement as customElement } from '../../../src/lib/decorators/pds-custom-element';
import { PdsElement } from '../../../src/lib/components/PdsElement';
import styles from './article-card.scss?inline';

@customElement('article-card', {
  category: 'component',
  type: 'recipe',
  styles,
})
export class ArticleCard extends PdsElement {
  render() {
    return html`<slot></slot>`;
  }
}
