import { html } from 'lit';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './data-table-rows.scss?inline';

/**
 * @summary This component supports data table by providing an interface to define table rows
 *
 * @slot default Provides pds-data-table-row elements to define table rows
 */
@customElement('pds-data-table-rows', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsDataTableRows extends PdsElement {
  render() {
    return html`<slot></slot>`;
  }
}
