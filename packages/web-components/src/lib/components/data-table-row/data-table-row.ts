import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './data-table-row.scss?inline';

/**
 * @summary This component supports data table by providing an interface to define table rows
 *
 * @slot default Provides pds-data-table-cell elements to define table rows
 */
@customElement('pds-data-table-row', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsDataTableRow extends PdsElement {
  /**
   * Array of subrows
   */
  @property()
  subRows: Array<PdsDataTableRow> = [];

  /**
   * This grabs the slotted column components
   * @internal
   */
  @queryAssignedElements()
  slotElements: any;

  determineHasSubRow() {
    this.slotElements.forEach((element: PdsDataTableRow) => {
      if (element.tagName.toLowerCase() === 'pds-data-table-row') {
        this.subRows.push(element);
      }
    });
  }

  handleSlotChange() {
    this.determineHasSubRow();
  }

  render() {
    return html`<slot @slotchange="${this.handleSlotChange}"></slot>`;
  }
}
