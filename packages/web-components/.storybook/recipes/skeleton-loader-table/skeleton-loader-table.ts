import { html } from 'lit';
import { pdsCustomElement as customElement } from '../../../src/lib/decorators/pds-custom-element';
import { PdsElement } from '../../../src/lib/components/PdsElement';
import styles from './skeleton-loader-table.scss?inline';

@customElement('skeleton-loader-table', {
  category: 'component',
  type: 'recipe',
  styles,
})
export class SkeletonLoaderTable extends PdsElement {
  render() {
    return html`<slot></slot>`;
  }
}
