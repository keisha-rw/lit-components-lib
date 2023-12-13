import { html } from 'lit';
import {
  CellContext,
  ColumnDefTemplate,
  HeaderContext,
} from '@tanstack/table-core';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import { tabbable, FocusableElement } from 'tabbable';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './data-table-input-column.scss?inline';
import { required } from '../../decorators/required';
import { PdsTextInput } from '../text-input/text-input';
import { PdsSelect } from '../select/select';
import { PdsSwitch } from '../switch/switch';
import type { PdsDataTable } from '../data-table/data-table';

/**
 * @summary This component supports data table by providing an interface to define table columns with an input
 *
 * @slot default Provides an interface to define column header markup and row cells, restricted to pds-select, pds-text-input, pds-switch, and span elements
 */
@customElement('pds-data-table-input-column', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsDataTableInputColumn extends PdsElement {
  protected firstUpdated(): void {
    this.header = this.getHeader();

    if (document) {
      // track state of shift key for tabbing
      document.body.addEventListener('keydown', (event) => {
        if (event.key === 'Shift') {
          this.shiftKeyPressed = true;
        } else if (event.key === 'Tab') {
          this.tabKeyPressed = true;
        }
      });
      document.body.addEventListener('keyup', (event) => {
        if (event.key === 'Shift') {
          this.shiftKeyPressed = false;
        } else if (event.key === 'Tab') {
          this.tabKeyPressed = false;
        }
      });

      // track clicked item for blur
      document.body.addEventListener('mousedown', (event) => {
        this.elementBeingClicked = event.composedPath()[0] as FocusableElement;
      });
      document.body.addEventListener('mouseup', () => {
        this.elementBeingClicked = null;
      });
    }
  }

  /**
   * columnId
   * - id used to identify column, required
   */
  @required
  @property({ type: String })
  columnId: string;

  /**
   * dataSyncId
   * - id used to identify link between input and table data that is manipulated with the input, required
   */
  @required
  @property({ type: String })
  dataSyncId: string;

  /**
   * inputLabel
   * - string used to label the input for accessibility, otherwise will use text from the slot
   */
  @property({ type: String })
  inputLabel: string;

  /**
   * Type
   * - **display** column does not have a data model which means it cannot be sorted, filtered, etc, but they
   * can be used to display arbitrary content in the table, eg. a row actions button, checkbox, expander, etc.
   */
  @property({ type: String })
  type: 'display' = 'display';

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
   * - boolean to determine if column sorting should be disabled, default is true
   */
  @property({ type: Boolean })
  disableSort: boolean = true;

  /**
   * Dynamically generate random unique ID for input fields
   */
  getRandomId(): string {
    if (window.crypto && window.crypto.randomUUID) {
      return window.crypto.randomUUID();
    }

    return '';
  }

  /**
   * Cell
   * - takes a function to return markup for displaying the body cell for the column
   * - defaults to function that handles wiring up data changes from a slotted PDS text input, select or switch
   *
   */
  @property()
  cell: ColumnDefTemplate<CellContext<any, unknown>> = (cell) => {
    const initialValue: string = cell.row.original[this.dataSyncId];
    let value = initialValue;

    // When the input is blurred, we'll set the table data
    const onBlur = async (e: Event) => {
      if (cell.row.original[this.dataSyncId] !== value) {
        // eslint-disable-next-line no-param-reassign
        cell.table.options.data[cell.row.index][this.dataSyncId] = value;

        // fire custom event
        const customEvent = new CustomEvent('pds-data-table-input-updated', {
          bubbles: true,
          composed: true,
          detail: {
            rowIndex: cell.row.index,
            column: this.dataSyncId,
            value,
          },
        });

        this.dispatchEvent(customEvent);

        // if we are showing the column that we are updating in the table, we need to refresh the table
        // @ts-expect-error
        if (!cell.table.getColumn(this.columnId).columnDef.meta.hidden) {
          const eventTarget = e.target as HTMLElement;
          const dataTableWrapper = eventTarget.closest(
            '.pds-c-data-table__wrapper',
          );
          const currentNode = eventTarget.shadowRoot?.querySelector('input');
          const isToggleable = currentNode?.type === 'checkbox';

          if (dataTableWrapper && currentNode) {
            let currentlyTabbableItems = tabbable(dataTableWrapper, {
              getShadowRoot: true,
            });
            let clickedItem;

            // get next and prev tabbable item
            const nextTabbableItem =
              currentlyTabbableItems.indexOf(currentNode) + 1;
            const previousTabbableItem =
              currentlyTabbableItems.indexOf(currentNode) - 1;

            // get clicked item in table
            if (this.elementBeingClicked) {
              clickedItem = currentlyTabbableItems.indexOf(
                this.elementBeingClicked,
              );
            }

            if (!isToggleable) {
              await (
                this.closest('pds-data-table') as PdsDataTable
              ).createTable();
              await this.updateComplete;
              // need to repopulate the tabbable items after table refresh
              currentlyTabbableItems = tabbable(dataTableWrapper, {
                getShadowRoot: true,
              });
            }

            // set correct focus when leaving field
            if (
              // shift tab for going backwards through tab order
              this.tabKeyPressed &&
              this.shiftKeyPressed &&
              currentlyTabbableItems[previousTabbableItem]
            ) {
              currentlyTabbableItems[previousTabbableItem].focus();
            } else if (
              // normal tab for just progressing through tab order
              this.tabKeyPressed &&
              currentlyTabbableItems[nextTabbableItem]
            ) {
              currentlyTabbableItems[nextTabbableItem].focus();
            } else if (
              // if user clicks on another input field, table should rerender and then apply focus where the user clicked
              typeof clickedItem === 'number' &&
              currentlyTabbableItems[clickedItem] !== undefined
            ) {
              currentlyTabbableItems[clickedItem].focus();
            }
          }
        }
      }
    };

    const setValue = (e: Event) => {
      const tagName = (e.target as HTMLElement).tagName.toLowerCase();
      let target;

      if (tagName === 'pds-text-input') {
        target = e.target as PdsTextInput;
        if (target) {
          target.setAttribute('value', target.value);
          value = target.value;
        }
      } else if (tagName === 'pds-select') {
        target = e.target as PdsSelect;
        if (target) {
          target.setAttribute('value', target.value);
          value = target.value;
        }
      } else if (tagName === 'pds-switch') {
        const evt = e as Event;
        target = e.target as PdsSwitch;
        if (target) {
          target.setAttribute(
            'value',
            evt.type === 'pds-switch-toggle-on' ? 'on' : 'off',
          );
          value = evt.type === 'pds-switch-toggle-on' ? 'on' : 'off';
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === 'on'
            ? target.setAttribute('checked', 'true')
            : target.removeAttribute('checked');

          if (value === 'on') {
            target.shadowRoot
              ?.querySelector('input')
              ?.setAttribute('checked', 'true');
          } else {
            target.shadowRoot
              ?.querySelector('input')
              ?.removeAttribute('checked');
          }
        }
      }
    };

    // We need to create our own copy of the element so we can repeat it in every row
    const inputEl = this.cloneLitElement(this.customInput);
    inputEl.setAttribute('value', initialValue);
    const id = `pds-data-table__input${this.getRandomId()}`;
    inputEl.setAttribute('id', id);

    if (this.inputTypeSlotted === 'pds-text-input') {
      inputEl.addEventListener('blur', onBlur);
      inputEl.addEventListener('pds-text-input-change', setValue);
    } else if (this.inputTypeSlotted === 'pds-select') {
      inputEl.addEventListener('pds-select-blur', onBlur);
      inputEl.addEventListener('pds-select-change', setValue);
    } else if (this.inputTypeSlotted === 'pds-switch') {
      inputEl.addEventListener('pds-switch-blur', onBlur);
      inputEl.addEventListener('pds-switch-toggle-on', setValue);
      inputEl.addEventListener('pds-switch-toggle-off', setValue);

      if (initialValue === 'on') {
        inputEl.setAttribute('checked', 'true');
      } else {
        inputEl.removeAttribute('checked');
      }
    }
    return inputEl;
  };

  /**
   * Header
   */
  @state()
  header: ColumnDefTemplate<HeaderContext<any, unknown>> | string;

  /**
   * @internal
   */
  @state()
  inputTypeSlotted: string;

  /**
   * @internal
   */
  @state()
  private customInput: HTMLElement;

  /**
   * @internal
   */
  @state()
  shiftKeyPressed: boolean = false;

  /**
   * @internal
   */
  @state()
  tabKeyPressed: boolean = false;

  /**
   * @internal
   */
  @state()
  elementBeingClicked: FocusableElement | null;

  /**
   * This grabs the slotted input components
   * @internal
   */
  @queryAssignedElements({ slot: 'input' })
  slotInputElements: Array<HTMLElement>;

  getDynamicSlotText() {
    let text = '';
    this.getDynamicSlotMarkup()?.forEach((element: any) => {
      text += element.wholeText ? element.wholeText : element.textContent;
      text += ' ';
    });

    return text.trim();
  }

  getHeader() {
    return this.inputLabel
      ? this.inputLabel
      : () => {
          return this.getDynamicSlotMarkup();
        };
  }

  handleSlotChange(e: Event) {
    this.handleSlotValidation(e);

    if (this.slotInputElements.length > 0) {
      this.setCustomInput();
    }
  }

  setCustomInput() {
    if (this.slotInputElements.length > 1) {
      console.error(
        'Only one input element may be slotted into the input slot',
      );
    }

    [this.customInput] = this.slotInputElements;
    this.inputTypeSlotted = this.slotInputElements[0].tagName.toLowerCase();
  }

  render() {
    return html`<slot
        id="slot"
        @slotchange=${(e: Event) =>
          this.duplicateSlotMarkup(e.target as HTMLSlotElement)}
      ></slot>
      <slot
        allowed-elements="pds-select, pds-text-input, pds-switch, span"
        name="input"
        @slotchange=${(e: Event) => this.handleSlotChange(e)}
      ></slot>`;
  }
}
