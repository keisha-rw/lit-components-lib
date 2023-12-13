import { html } from 'lit';
import { pdsCustomElement as customElement } from '../../../src/lib/decorators/pds-custom-element';
import { PdsElement } from '../../../src/lib/components/PdsElement';
import styles from './article-preview-section.scss?inline';

@customElement('article-preview-section', {
  category: 'component',
  type: 'recipe',
  styles,
})
export class ArticlePreviewSection extends PdsElement {
  render() {
    return html`<slot></slot>`;
  }
}
