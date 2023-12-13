import { localized, msg } from '@lit/localize';
import { html, nothing } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { PdsElement } from '../PdsElement';
import styles from './pagination.scss?inline';
import '@keisha/design-system-icons-web/chevrons-left';
import '@keisha/design-system-icons-web/chevron-left';
import '@keisha/design-system-icons-web/chevrons-right';
import '@keisha/design-system-icons-web/chevron-right';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import '../pagination-item/pagination-item';

/**
 * @summary This component renders a pagination control
 *
 * @slot default This slot holds pds-pagination-item components
 *
 * @fires pds-pagination-click A custom event dispatched on click with the following event detail summary messages:
 *
 * **fly-first** - a click registered on the 'fly to first page' control;
 * **step-backward** - a click registered on the 'step backward' control;
 * **step-forward** - a click registered on the 'step forward' control;
 * **fly-last** - a click registered on the 'fly to last page' control
 */
@customElement('pds-pagination', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
// This is important to place below the @customElement decorator (https://github.com/lit/lit/issues/3264)
@localized()
export class PdsPagination extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  /**
   * Style variant
   * - **default** renders the default pagination
   * - **arrows** renders only arrows for pagination navigation, should only be used when horizontal space is extremely limited
   * - **no-arrows** renders pagination navigation without arrows, should only be used when there are only two or three pages of data
   */
  @property({ type: String })
  variant: 'default' | 'arrows' | 'no-arrows' = 'default';

  /**
   * Backward controls disabled
   */
  @property({ type: Boolean })
  backwardDisabled: boolean = false;

  /**
   * Forward controls disabled
   */
  @property({ type: Boolean })
  forwardDisabled: boolean = false;

  /**
   * Hides the fly to first and fly to last buttons, should only be true if a technical limitation prevents their use
   */
  @property({ type: Boolean })
  hideFlyers: boolean = false;

  /**
   * ARIA label string that describes pagination control for screen reader users
   */
  @property()
  ariaLabel: string;

  /**
   * If page navigation should be the result of the interaction, supply a url for the href for going to the first item
   */
  @property({ type: String })
  flyFirstHref: string;

  /**
   * If page navigation should be the result of the interaction, supply a url for the href for going to the next item
   */
  @property({ type: String })
  stepForwardHref: string;

  /**
   * If page navigation should be the result of the interaction, supply a url for the href for going to the last item
   */
  @property({ type: String })
  flyLastHref: string;

  /**
   * If page navigation should be the result of the interaction, supply a url for the href for going to the previous item
   */
  @property()
  stepBackwardHref: string;

  /**
   * @internal
   */
  @queryAssignedElements({ slot: undefined, selector: 'pds-pagination-item' })
  paginationItems: HTMLElement[];

  handleClick(e: Event) {
    const receivedEvent = e.target as Element;
    const buttonElement = receivedEvent.closest('.pds-c-pagination__button');
    const detailSummaryMessage = buttonElement?.classList
      .toString()
      .split('--')
      .pop();
    const customEvent = new CustomEvent('pds-pagination-click', {
      bubbles: true,
      composed: true,
      detail: {
        summary: detailSummaryMessage,
      },
    });

    this.dispatchEvent(customEvent);
  }

  /**
   * @internal
   * provides the arrow markup for the backward arrows
   */
  private backArrowMarkup() {
    return html`${this.hideFlyers
        ? ''
        : html`<div class="${this.classEl('li')}" role="listitem">
            <button
              class="${this.classEl('button')} ${this.classMod('fly-first')}"
              @click=${this.handleClick}
              aria-label="${msg('go to first page')}"
              ?disabled=${this.backwardDisabled}
            >
              <pds-icon-chevrons-left></pds-icon-chevrons-left>
            </button>
          </div>`}
      <div class="${this.classEl('li')}" role="listitem">
        <button
          class="${this.classEl('button')} ${this.classMod('step-backward')}"
          @click=${this.handleClick}
          aria-label="${msg('go to previous page')}"
          ?disabled=${this.backwardDisabled}
        >
          <pds-icon-chevron-left></pds-icon-chevron-left>
        </button>
      </div>`;
  }

  /**
   * @internal
   * provides the arrow markup for the backward arrows
   */
  private backArrowMarkupAnchor() {
    return html`${this.hideFlyers
        ? ''
        : html`<div class="${this.classEl('li')}" role="listitem">
            <a
              class="${this.classEl('button')} ${this.classMod('fly-first')}"
              @click=${this.handleClick}
              aria-label="${msg('go to first page')}"
              ?disabled=${this.backwardDisabled}
              href=${this.backwardDisabled ? nothing : this.flyFirstHref}
            >
              <pds-icon-chevrons-left></pds-icon-chevrons-left>
            </a>
          </div>`}
      <div class="${this.classEl('li')}" role="listitem">
        <a
          class="${this.classEl('button')} ${this.classMod('step-backward')}"
          @click=${this.handleClick}
          aria-label="${msg('go to previous page')}"
          ?disabled=${this.backwardDisabled}
          href=${this.backwardDisabled ? nothing : this.stepBackwardHref}
        >
          <pds-icon-chevron-left></pds-icon-chevron-left>
        </a>
      </div>`;
  }

  /**
   * @internal
   * provides the arrow markup for the forward arrows
   */
  private forwardArrowMarkup() {
    return html`<div class="${this.classEl('li')}" role="listitem">
        <button
          class="${this.classEl('button')} ${this.classMod('step-forward')}"
          @click=${this.handleClick}
          aria-label="${msg('go to next page')}"
          ?disabled=${this.forwardDisabled}
        >
          <pds-icon-chevron-right></pds-icon-chevron-right>
        </button>
      </div>
      ${this.hideFlyers
        ? ''
        : html`<div class="${this.classEl('li')}" role="listitem">
            <button
              class="${this.classEl('button')} ${this.classMod('fly-last')}"
              @click=${this.handleClick}
              aria-label="${msg('go to last page')}"
              ?disabled=${this.forwardDisabled}
            >
              <pds-icon-chevrons-right></pds-icon-chevrons-right>
            </button>
          </div>`}`;
  }

  /**
   * @internal
   * provides the arrow markup for the forward arrows
   */
  private forwardArrowMarkupAnchor() {
    return html`<div class="${this.classEl('li')}" role="listitem">
        <a
          class="${this.classEl('button')} ${this.classMod('step-forward')}"
          @click=${this.handleClick}
          aria-label="${msg('go to next page')}"
          ?disabled=${this.forwardDisabled}
          href=${this.forwardDisabled ? nothing : this.stepForwardHref}
        >
          <pds-icon-chevron-right></pds-icon-chevron-right>
        </a>
      </div>
      ${this.hideFlyers
        ? ''
        : html`<div class="${this.classEl('li')}" role="listitem">
            <a
              class="${this.classEl('button')} ${this.classMod('fly-last')}"
              @click=${this.handleClick}
              aria-label="${msg('go to last page')}"
              ?disabled=${this.forwardDisabled}
              href=${this.forwardDisabled ? nothing : this.flyLastHref}
            >
              <pds-icon-chevrons-right></pds-icon-chevrons-right>
            </a>
          </div>`}`;
  }

  /**
   * @internal
   * pushes properties down to subcomponent pagination items
   */
  addPropertiesToPaginationItems() {
    const noArrowsVariantWithMoreThanOnePage =
      this.variant === 'no-arrows' &&
      this.paginationItems &&
      this.paginationItems.length > 1;
    const noArrowsVariantWithOnlyOnePage =
      this.variant === 'no-arrows' &&
      this.paginationItems &&
      this.paginationItems.length === 1;

    if (noArrowsVariantWithMoreThanOnePage) {
      this.paginationItems.forEach((paginationItem, index, array) => {
        const isFirstPaginationItem = index === 0;
        const isLastPaginationItem = index === array.length - 1;

        if (isFirstPaginationItem) {
          paginationItem.setAttribute('variant', 'no-arrows-first');
        } else if (isLastPaginationItem) {
          paginationItem.setAttribute('variant', 'no-arrows-last');
        }
      });
    } else if (noArrowsVariantWithOnlyOnePage) {
      this.paginationItems[0].setAttribute('variant', 'no-arrows-one-item');
    }

    if (this.hideFlyers) {
      this.paginationItems.forEach((paginationItem) => {
        paginationItem.setAttribute('hideFlyers', '');
      });
    }
  }

  /**
   * @internal
   *
   * Remove slot in the shadow if variant is 'arrows'
   */
  firstUpdated() {
    if (this.variant === 'arrows' && this.shadowRoot) {
      const slot = this.shadowRoot.querySelector('slot');
      slot?.remove();
    }
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
      hideFlyers: this.hideFlyers,
    };
  }

  /**
   * @internal
   * If the user passes in a custom aria-label, that will be populated.
   * If not, the label will be automated and language localized.
   */
  getAriaLabel() {
    if (!this.ariaLabel) {
      const localizedAriaLabel = msg('pagination');
      return localizedAriaLabel;
    }
    return this.ariaLabel;
  }

  render() {
    return html`<nav class=${this.getClass()} aria-label=${this.getAriaLabel()}>
      <div class="${this.classEl('list')}" role="list">
        ${this.variant === 'no-arrows' || this.stepBackwardHref === undefined
          ? nothing
          : this.backArrowMarkupAnchor()}
        ${this.variant === 'no-arrows' || this.stepBackwardHref !== undefined
          ? nothing
          : this.backArrowMarkup()}
        <slot @slotchange=${this.addPropertiesToPaginationItems}></slot>
        ${this.variant === 'no-arrows' || this.stepForwardHref === undefined
          ? nothing
          : this.forwardArrowMarkupAnchor()}
        ${this.variant === 'no-arrows' || this.stepForwardHref !== undefined
          ? nothing
          : this.forwardArrowMarkup()}
      </div>
    </nav>`;
  }
}
