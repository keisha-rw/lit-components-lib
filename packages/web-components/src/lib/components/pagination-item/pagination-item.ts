import { localized, msg } from '@lit/localize';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { required } from '../../decorators/required';
import { PdsElement } from '../PdsElement';
import styles from './pagination-item.scss?inline';

/**
 * @summary A pagination item
 *
 * @fires pds-pagination-item-click A custom event dispatched on click with an event detail summary indicating the clicked pagination page
 */
@customElement('pds-pagination-item', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
// This is important to place below the @customElement decorator (https://github.com/lit/lit/issues/3264)
@localized()
export class PdsPaginationItem extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  /**
   * Style variant - this should be set programatically by the parent pagination component, so it should not need to be manually set
   * - **no-arrows-first** renders pagination button with rounded left side
   * - **no-arrows-last** renders pagination button with rounded right side
   *
   * @internal
   */
  @property({ type: String })
  variant: 'no-arrows-first' | 'no-arrows-last' | 'no-arrows-one-item';

  /**
   * Active page indicator
   */
  @property({ type: Boolean })
  active: boolean = false;

  /**
   * If page navigation should be the result of the interaction, supply a url for the href
   */
  @property({ type: String })
  href: string;

  /**
   * Handles spacing when no flyers are present- this should be set programmatically by the parent pagination component, so it should not need to be manually set
   *
   * @internal
   */
  @property({ type: Boolean })
  hideFlyers: boolean = false;

  /**
   * Page number to display in pagination item
   */
  @required
  @property({ type: Number })
  pageNumber: Number;

  handleClick(e: { target: { textContent: string } }) {
    const detailSummaryMessage = e.target.textContent.trim();
    const customEvent = new CustomEvent('pds-pagination-item-click', {
      bubbles: true,
      composed: true,
      detail: {
        summary: detailSummaryMessage,
      },
    });

    this.dispatchEvent(customEvent);
  }

  getButtonMarkup() {
    return html`
      <button
        class="${this.classEl('button')} ${this.active
          ? this.classMod('active')
          : ''}"
        aria-label="${msg('go to page')} ${this.pageNumber}"
        @click=${this.handleClick}
        aria-current=${this.active ? 'true' : nothing}
      >
        ${this.pageNumber}
      </button>
    `;
  }

  getAnchorMarkup() {
    return html`
      <a
        class="${this.classEl('button')} ${this.active
          ? this.classMod('active')
          : ''}"
        aria-label="${msg('go to page')} ${this.pageNumber}"
        @click=${this.handleClick}
        aria-current=${this.active ? 'true' : nothing}
        href=${this.href}
      >
        ${this.pageNumber}
      </a>
    `;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
      hideFlyers: this.hideFlyers,
      'list-item': true,
    };
  }

  // aria-current must be set to the actual value of 'true' for the screen reader to announce it
  render() {
    return html` <div class=${this.getClass()} role="listitem">
      ${this.href ? this.getAnchorMarkup() : this.getButtonMarkup()}
    </div>`;
  }
}
