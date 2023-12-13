import { html, nothing } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { sanitizeUrl } from '@braintree/sanitize-url';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './card.scss?inline';

/**
 * @summary This component creates a card container for other elements
 *
 * @slot header This slot holds the header content of the card
 * @slot default This is the body content of the card
 * @slot footer This slot holds the footer content of the card
 *
 * @fires pds-card-click A custom event dispatched on a card click when href is provided
 */
@customElement('pds-card', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsCard extends PdsElement {
  /**
   * - **default** renders a card with a subtle border and padding
   * - **bare** renders a card without a border or drop shadow
   */
  @property()
  variant: 'default' | 'bare' = 'default';

  /**
   * - **default** renders a card with a border radius of 8px
   * - **sm** renders a card with a border radius of 4px
   */
  @property()
  borderRadiusSize: 'sm' | 'default' = 'default';

  /**
   * Adds an additional class for aligning items to the vertical center of the card.
   */
  @property({ type: Boolean })
  centerContentVertically: boolean = false;

  /**
   * - **default** renders a card in a vertical format
   * - **horizontal** renders a card in a horizontal format
   */
  @property()
  direction: 'horizontal' | 'default' = 'default';

  /**
   * Provides the src value for the href card, renders a clickable card
   * styled with a drop shadow but no border
   */
  @property()
  href?: string;

  /**
   * Used in combination with the href property to determine the target
   * for the clickable card. Not providing a value opens link in the same tab.
   * For a complete list of valid strings, see https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name-or-keyword
   */
  @property()
  target?: string;

  /**
   * ARIA label string that describes a clickable pds-card for screen reader users
   */
  @property()
  ariaLabel: string;

  /**
   * If true, this property will remove the default padding from the card and
   * the content will extend all the way to the edges
   */
  @property({ type: Boolean })
  removePadding: boolean = false;

  /**
   * Boolean to represent that a card has no slotted link content, used
   * to determine logic for a11y features of the clickable card
   *
   * @internal
   */
  @property({ type: Boolean })
  hasNoSlottedLinkContent: boolean = true;

  /**
   * This grabs the pds-links from the header slot
   * @internal
   */
  @queryAssignedElements({ slot: 'header' })
  headerSlotElements: HTMLElement[];

  /**
   * This grabs the pds-links from the default slot
   * @internal
   */
  @queryAssignedElements({ slot: undefined })
  defaultSlotElements: HTMLElement[];

  /**
   * This grabs the pds-links from the footer slot
   * @internal
   */
  @queryAssignedElements({ slot: 'footer' })
  footerSlotElements: HTMLElement[];

  /**
   * Get summary text
   *
   * @returns string summary text
   *
   * @internal
   */
  getSummaryText(textContent: string | null) {
    if (textContent) {
      return textContent.trim();
    }

    return '';
  }

  /**
   * On click, a clickable card will open the src link and fire an event
   *
   * @internal
   */
  handleClick(e: MouseEvent) {
    if (this.href) {
      const target = e.target as HTMLElement;
      // fire event if a clickable card is clicked but the click isn't coming from an enclosed pds-link or anchor element
      if (
        (target.tagName.toLowerCase() !== 'pds-link' &&
          target.tagName.toLowerCase() !== 'a') ||
        target.classList.contains(this.classMod('clickable'))
      ) {
        const customEvent = new CustomEvent('pds-card-click', {
          bubbles: true,
          composed: true,
          detail: {
            summary: this.getSummaryText(this.textContent),
          },
        });
        this.dispatchEvent(customEvent);
        if (window) {
          if (this.target) {
            window.open(this.href, this.target);
          } else {
            window.location.href = sanitizeUrl(
              this.href ?? window.location.href,
            );
          }
        }
      }
    }
  }

  handleKeydown(e: KeyboardEvent) {
    if (this.href) {
      if (e.key === 'Enter') {
        // fire event if a clickable card is clicked with 'Enter' Key
        const customEvent = new CustomEvent('pds-card-click', {
          bubbles: true,
          composed: true,
          detail: {
            summary: this.getSummaryText(this.textContent),
          },
        });
        this.dispatchEvent(customEvent);
        if (window) {
          if (this.target) {
            window.open(this.href, this.target);
          } else {
            window.location.href = sanitizeUrl(
              this.href ?? window.location.href,
            );
          }
        }
      }
    }
  }

  /**
   * On mouseover, a clickable card will add the attribute 'hover' on
   * elements with a class of .pds-c-card__element-with-hover-state
   *
   * @internal
   */
  handleMouseover() {
    if (this.href) {
      const setHover = (element: HTMLElement) => {
        if (
          element.classList.contains(this.classEl('element-with-hover-state'))
        ) {
          element.setAttribute('hover', '');
        } else {
          element
            .querySelectorAll(`.${this.classEl('element-with-hover-state')}`)
            .forEach((hoverableItem) => {
              hoverableItem.setAttribute('hover', '');
            });
        }
      };

      this.headerSlotElements.forEach((element) => setHover(element));
      this.defaultSlotElements.forEach((element) => setHover(element));
      this.footerSlotElements.forEach((element) => setHover(element));
    }
  }

  /**
   * On mouseout, a clickable card will remove the attribute 'hover' on
   * elements with a class of .pds-c-card__element-with-hover-state
   */
  handleMouseout() {
    if (this.href) {
      const removeHover = (element: HTMLElement) => {
        if (
          element.classList.contains(this.classEl('element-with-hover-state'))
        ) {
          element.removeAttribute('hover');
        } else {
          element
            .querySelectorAll(`.${this.classEl('element-with-hover-state')}`)
            .forEach((hoverableItem) => {
              hoverableItem.removeAttribute('hover');
            });
        }
      };

      this.headerSlotElements.forEach((element: HTMLElement) =>
        removeHover(element),
      );
      this.defaultSlotElements.forEach((element: HTMLElement) =>
        removeHover(element),
      );
      this.footerSlotElements.forEach((element: HTMLElement) =>
        removeHover(element),
      );
    }
  }

  /**
   * This function checks for <pds-link> and <a> tags within the card,
   * (first as the only slotted item, then as a child of a slotted item)
   * and then adds the hover class that is targeted to provide the hover
   * attribute when a clickable card is hovered.
   *
   * The <pds-link> tag will handle the hover effect due to the built
   * in support for the 'hover' attribute. An <a> tag will need to have
   * the hover effect coded by the consuming application.
   */
  handleSlotChange(e: { target: { assignedElements: () => any } }) {
    if (this.href) {
      const childElements = e.target.assignedElements();
      childElements.forEach((element: HTMLElement) => {
        if (
          element.tagName.toLowerCase() === 'pds-link' ||
          element.tagName.toLowerCase() === 'a'
        ) {
          this.hasNoSlottedLinkContent = false;
          element.classList.add(this.classEl('element-with-hover-state'));
        } else {
          element.querySelectorAll('pds-link, a').forEach((internalElement) => {
            this.hasNoSlottedLinkContent = false;
            internalElement.classList.add(
              this.classEl('element-with-hover-state'),
            );
          });
        }
      });
    }
  }

  preflight() {
    if (this.target && !this.href) {
      console.warn(
        'A target property without an href property will have no effect. Remove the target property to remove this warning.',
        this,
      );
    }
    if (this.ariaLabel && !this.href) {
      console.warn(
        'An ariaLabel property without an href property will have no effect. Remove the ariaLabel property to remove this warning.',
        this,
      );
    }
    if (this.direction === 'horizontal' && this.centerContentVertically) {
      console.warn(
        'The centerContentVertically property cannot be used when the card has a horizontal direction. Remove the centerContentVertically property to remove this warning.',
        this,
      );
    }
    if (this.variant === 'bare') {
      this.setAttribute('variant', 'bare');
    }
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [`${this.variant}`]: !!this.variant,
      [`${this.direction}`]: !!this.direction,
      [`border-radius-${this.borderRadiusSize}`]: !!this.borderRadiusSize,
      clickable: !!this.href,
      'center-vertically':
        this.direction !== 'horizontal' &&
        this.centerContentVertically === true,
      'remove-padding': !!this.removePadding,
    };
  }

  willUpdate() {
    if (
      this.innerHTML.indexOf('pds-link') > -1 ||
      this.innerHTML.indexOf('<a') > -1
    ) {
      this.hasNoSlottedLinkContent = false;
    }
  }

  updated(): void {
    if (this.shadowRoot) {
      const clickableAnchor = this.shadowRoot.querySelector(
        `.${this.classMod('clickable')}`,
      );
      // Make entire card link tabbable only if there is no visible internal link
      if (clickableAnchor && this.hasNoSlottedLinkContent) {
        clickableAnchor.setAttribute('tabindex', '0');
      }
    }
  }

  render() {
    this.preflight();
    if (this.href && this.hasNoSlottedLinkContent && !this.ariaLabel) {
      console.error(
        'Cards with a href but no slotted pds-link must include an aria label.',
        this,
      );
      return nothing;
    }
    return html`<article
      class=${this.getClass()}
      @click=${this.handleClick}
      @keydown=${this.handleKeydown}
      @mouseover=${this.handleMouseover}
      @mouseout=${this.handleMouseout}
    >
      ${this.slotNotEmpty('header') &&
      html`
        <header class="${this.classEl('header')}">
          <slot @slotchange=${this.handleSlotChange} name="header"></slot>
        </header>
      `}
      <div class="${this.classEl('body')}">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
      ${this.slotNotEmpty('footer') &&
      html`
        <footer class="${this.classEl('footer')}">
          <slot @slotchange=${this.handleSlotChange} name="footer"></slot>
        </footer>
      `}
    </article>`;
  }
}
