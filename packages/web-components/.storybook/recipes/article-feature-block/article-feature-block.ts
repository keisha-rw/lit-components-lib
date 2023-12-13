import { html } from 'lit';
import { pdsCustomElement as customElement } from '../../../src/lib/decorators/pds-custom-element';
import { PdsElement } from '../../../src/lib/components/PdsElement';
import styles from './article-feature-block.scss?inline';

@customElement('article-feature-block', {
  category: 'component',
  type: 'recipe',
  styles,
})
export class ArticleFeatureBlock extends PdsElement {
  render() {
    return html`<slot></slot>`;
  }
}
