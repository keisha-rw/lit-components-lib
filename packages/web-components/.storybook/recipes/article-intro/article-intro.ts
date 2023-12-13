import { html } from 'lit';
import { pdsCustomElement as customElement } from '../../../src/lib/decorators/pds-custom-element';
import { PdsElement } from '../../../src/lib/components/PdsElement';
import styles from './article-intro.scss?inline';

@customElement('article-intro', {
  category: 'component',
  type: 'recipe',
  styles,
})
export class ArticleIntro extends PdsElement {
  render() {
    return html`<slot></slot>`;
  }
}
