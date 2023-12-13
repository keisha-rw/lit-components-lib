import { html } from 'lit';
import { property, queryAssignedNodes } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './data-table-cell.scss?inline';

/**
 * @summary This component supports data table by providing an interface to define table cells
 *
 * @slot default Provides data for the cell - only text will be passed through
 */
@customElement('pds-data-table-cell', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsDataTableCell extends PdsElement {
  /**
   * cellId
   * - id used to identify column data, required
   */
  @property({ type: String })
  cellId: string;

  /**
   * Align
   * - **left** align left, default
   * - **right** align right
   */
  @property({ type: String })
  align: 'left' | 'right' = 'left';

  /**
   * This grabs the slotted components
   * @internal
   */
  @queryAssignedNodes()
  slotNodes: Array<Node>;

  getNodeText() {
    let string = '';
    this.slotNodes.forEach((node) => {
      string += `${node.textContent} `;
    });

    return string.trim();
  }

  render() {
    return html`<slot></slot>`;
  }
}
