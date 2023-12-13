/* eslint-disable import/no-duplicates */
import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './list.scss?inline';
// eslint-disable-next-line import/no-cycle
import { PdsListItem } from '../list-item/list-item';
import '../list-item/list-item';

export const size = ['sm', 'md'] as const;
export type ListSize = (typeof size)[number];

/**
 * @summary An unordered list element (ul)
 *
 * @slot default Contains one or more list items within the pds-list, restricted to pds-list-item elements
 */
@customElement('pds-list', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsList extends PdsElement {
  /**
   * Size property
   * sm - Renders the list and child list items with small typography
   * also adjusts the icon size if provided
   */
  @property()
  size: ListSize = 'md';

  /**
   * variant
   * - **default** - renders the list with default typography styles
   * - **description** - renders the list with description typography styles
   * - **description-reverse** - renders the list with reverse typography styles
   */
  @property()
  variant: 'default' | 'description' | 'description-reverse' = 'default';

  @property()
  spacing: 'sm' | 'md' | 'lg' | 'none' = 'md';

  /**
   * Align variant
   * - Default section is left aligned
   * - **center** horizontally center aligns the list
   */
  @property()
  align: 'center' | 'default' = 'default';

  /**
   * Style variant
   * - **primary** renders the list used for primary actions
   */
  @property()
  orientation: 'horizontal' | 'default' = 'default';

  /**
   * @internal
   */
  get classNames() {
    return {
      /* This is equivalent to doing
       * 'primary': this.variant === 'primary',
       * 'secondary': this.variant === 'secondary',
       */
      [`${this.orientation}`]: !!this.orientation,
      [`align-${this.align}`]: !!this.align,
      [`${this.size}`]: !!this.size,
      [`spacing-${this.spacing}`]: !!this.spacing,
      [this.variant]: !!this.variant,
    };
  }

  /**
   * This grabs the listItem slots
   * @internal
   */
  @queryAssignedElements({ slot: undefined, selector: 'pds-list-item' })
  listItems: HTMLElement[];

  addSizeToListItems() {
    if (this.listItems && this.listItems.length && size.includes(this.size)) {
      this.listItems.forEach((listItem) =>
        listItem.setAttribute('size', this.size),
      );
    }
  }

  handleSlotChange(e: Event) {
    this.handleSlotValidation(e);
    this.addSizeToListItems();
  }

  updated() {
    this.addSizeToListItems();
  }

  setChildVariant() {
    const descriptionListItem = Array.from(
      this.querySelectorAll('pds-list-item'),
    ) as PdsListItem[];
    descriptionListItem.forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item.variant = this.variant;
    });
  }

  render() {
    if (
      this.variant === 'description' ||
      this.variant === 'description-reverse'
    ) {
      return html`<dl class=${this.getClass()}>
        <slot @slotchange=${this.setChildVariant}></slot>
      </dl>`;
    }
    return html`<ul class=${this.getClass()} part="list" role="list">
      <slot
        allowed-elements="pds-list-item"
        @slotchange=${this.handleSlotChange}
      ></slot>
    </ul>`;
  }
}
