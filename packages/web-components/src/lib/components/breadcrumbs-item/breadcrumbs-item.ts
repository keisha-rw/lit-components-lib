import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './breadcrumbs-item.scss?inline';
import '@keisha/design-system-icons-web/chevron-right';
import '@keisha/design-system-icons-web/chevron-left';

/**
 * @summary A breadcrumbs-item (li) element
 *
 * @slot default The content of the breadcrumbs item
 *
 * @fires pds-breadcrumbs-item-click A custom event dispatched on click
 */

@customElement('pds-breadcrumbs-item', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsBreadcrumbsItem extends PdsElement {
  /**
   * - Active denotes current breadcrumb-item rendering it non-clickable.
   */
  @property({ type: Boolean })
  active = false;

  /**
   * - Href supplies the url for the breadcrumb link
   */
  @property({ type: String })
  href = '#';

  /**
   * @internal
   */
  handleClick() {
    const customEvent = new CustomEvent('pds-breadcrumbs-item-click', {
      bubbles: true,
      composed: true,
      detail: {
        summary: this.textContent,
      },
    });

    this.dispatchEvent(customEvent);
  }

  /**
   * @internal
   */
  getBreadcrumb(): unknown {
    if (this.active) {
      return html`<span
        tabindex="0"
        part="breadcrumb-link"
        class="${this.classEl('text')}"
        aria-current="page"
        ><slot>Breadcrumb</slot></span
      >`;
    }

    return html`<pds-icon-chevron-left size="xs"></pds-icon-chevron-left
      ><a
        @click=${this.handleClick}
        part="breadcrumb-link"
        class="${this.classEl('link')}"
        href="${this.href}"
        ><slot>Breadcrumb</slot></a
      ><pds-icon-chevron-right size="xs"></pds-icon-chevron-right>`;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      active: this.active,
    };
  }

  render() {
    return html`<li class=${this.getClass()} role="listitem">
      ${this.getBreadcrumb()}
    </li>`;
  }
}
