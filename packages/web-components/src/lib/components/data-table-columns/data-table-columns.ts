import { html } from 'lit';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './data-table-columns.scss?inline';

/**
 * @summary This component supports data table by providing an interface to define table columns
 *
 * @slot default Provides pds-data-table-column elements to define table columns
 */
@customElement('pds-data-table-columns', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsDataTableColumns extends PdsElement {
  render() {
    return html`<slot></slot>`;
  }
}
