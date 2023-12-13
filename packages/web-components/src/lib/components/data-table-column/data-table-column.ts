import { html, PropertyValueMap } from 'lit';
import {
  CellContext,
  ColumnDefTemplate,
  HeaderContext,
} from '@tanstack/table-core';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './data-table-column.scss?inline';
import { required } from '../../decorators/required';

/**
 * @summary This component supports data table by providing an interface to define table columns
 *
 * @slot default Provides an interface to define column header markup and row cells
 */
@customElement('pds-data-table-column', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsDataTableColumn extends PdsElement {
  updated(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ) {
    if (changedProperties.has('dynamicSlotMarkup')) {
      if (this.type === 'display') {
        this.cell = (props) => {
          return html`<div
            class="${this.classEl('display-cell')}"
            row=${props.row.index}
            column=${props.column.id}
          >
            ${this.getDynamicSlotMarkup()}
          </div>`;
        };
      }
    }
  }

  /**
   * columnId
   * - id used to identify column data, required
   */
  @required
  @property({ type: String })
  columnId: string;

  /**
   * Type
   * - **accessor** column has an underlying data model which means it can be sorted, filtered, grouped, etc., default
   * - **display** column does not have a data model which means it cannot be sorted, filtered, etc, but they can be used to display arbitrary content in the table, eg. a row actions button, checkbox, expander, etc.
   */
  @property({ type: String })
  type: 'accessor' | 'display' = 'accessor';

  /**
   * Accessor key
   * - key used to access column data
   */
  @property({ type: String })
  accessorKey: string | number | symbol | (string & {}) = '';

  /**
   * Align
   * - **left** align left, default
   * - **center** align center
   * - **right** align right
   */
  @property({ type: String })
  align: 'left' | 'center' | 'right' = 'left';

  /**
   * Width
   * - css width value string
   */
  @property({ type: String })
  width: string;

  /**
   * Disable sort
   * - boolean to determine if column sorting should be disabled, default is false
   */
  @property({ type: Boolean })
  disableSort: boolean = false;

  /**
   * Hidden column
   * - boolean to determine if column is hidden, default is false
   */
  @property({ type: Boolean })
  hidden: boolean = false;

  /**
   * Header
   * - takes a string or a function to return content for displaying the header cell for the column
   *
   */
  @property()
  header: ColumnDefTemplate<HeaderContext<any, unknown>> | string | undefined =
    () => {
      return this.getDynamicSlotMarkup();
    };

  /**
   * Cell
   * - takes a string or a function to return content for displaying the body cell for the column
   * - defaults to ({ getValue }) => {return html`<div>${getValue()}</div>`;}
   *
   */
  @property()
  cell: ColumnDefTemplate<CellContext<any, unknown>> | undefined = ({
    getValue,
  }: any) => {
    return html`<div>${getValue()}</div>`;
  };

  render() {
    return html`<slot
      id="slot"
      @slotchange="${(e: Event) =>
        this.duplicateSlotMarkup(e.target as HTMLSlotElement)}"
    ></slot>`;
  }
}
