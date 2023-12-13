import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
// eslint-disable-next-line import/no-cycle
import { size, ListSize } from '../list/list';
import styles from './list-item.scss?inline';

/**
 * @summary A list item (li) element
 *
 * @slot default The content of the list item
 * @slot icon This slot holds an icon
 */
@customElement('pds-list-item', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsListItem extends PdsElement {
  /**
   * Size
   * Should be inherited from pds-list
   * If provided directly, renders the list with small typography
   * if icons are in the list item, they will inherit the size.
   */
  @property({ reflect: true })
  size: ListSize = 'md';

  @property()
  variant: 'default' | 'description' | 'description-reverse' = 'default';

  /**
   * This grabs the icon from the slot
   * @internal
   */
  @queryAssignedElements({ slot: 'icon' })
  listItemIcons: HTMLElement[];

  addSizeTolistItemIcons() {
    if (
      this.listItemIcons &&
      this.listItemIcons.length &&
      size.includes(this.size)
    ) {
      this.listItemIcons.forEach((icon) =>
        icon.setAttribute('size', this.size),
      );
    }
  }

  updated() {
    this.addSizeTolistItemIcons();
  }

  render() {
    if (
      this.variant === 'description' ||
      this.variant === 'description-reverse'
    ) {
      return html`<dt
          class=${this.variant === 'description-reverse'
            ? this.classEl('term-reverse')
            : this.classEl('term')}
        >
          <slot name="description-term"></slot>
        </dt>
        <dd
          class="${this.variant === 'description-reverse'
            ? this.classEl('details-reverse')
            : this.classEl('details')}"
        >
          <slot name="description"></slot>
        </dd>`;
    }
    return html`<li class=${this.getClass()} role="listitem">
      ${this.slotNotEmpty('icon')
        ? html`<span class="${this.classEl('icon-wrapper')}"
            ><slot name="icon" @slotchange=${this.addSizeTolistItemIcons}></slot
          ></span>`
        : ''}
      <slot></slot>
    </li>`;
  }
}
