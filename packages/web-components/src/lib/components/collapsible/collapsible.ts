import { html, nothing } from 'lit';
import { query, property, state } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './collapsible.scss?inline';
import '@keisha/design-system-icons-web/chevron-down';

/**
 * @summary This component is a collapsible that toggles content when the header is clicked
 *
 * @slot summary-title This slot holds the header summary title
 * @slot summary-description This slot holds the summary description
 * @slot collapsible-content This is the slot where the hidden/shown content will go
 * @fires pds-collapsible-open A custom event dispatched on click when collapsible is opened
 * @fires pds-collapsible-close A custom event dispatched on click when collapsible is closed
 */
@customElement('pds-collapsible', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsCollapsible extends PdsElement {
  /**
   * Style variant
   * - **default** renders the standard collapsible color variant
   * - **inverted** renders the collapsible on dark backgrounds
   * - **strong** renders the strong collapsible color variant
   */
  @property()
  variant: 'default' | 'inverted' | 'strong' = 'default';

  /**
   * Whether the collapsible is open or not
   */
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  /**
   * The details element that contains the summary and content elements
   * @internal
   */
  @query('details')
  details: HTMLDetailsElement;

  /**
   * The summary element that contains the summary element
   * @internal
   */
  @query('summary')
  summary: HTMLElement;

  /**
   * Returns whether the description slot is empty or not
   * @internal
   */
  @state()
  descriptionPresent: boolean = false;

  updated() {
    this.descriptionPresent = !this.slotEmpty('summary-description');
  }

  /**
   * Because we require animation we have to override the default behavior of the disclosure widget.
   */
  handleClick(e: MouseEvent) {
    e.preventDefault();
    this.toggle();
  }

  /**
   * Toggle the collapsible to either open or closed.
   */
  toggle() {
    if (this.isClosing || !this.open) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.open = true;
      } else {
        this.expand();
      }

      this.open = true;

      const customEvent = new CustomEvent('pds-collapsible-open', {
        bubbles: true,
        composed: true,
        detail: {
          summary: this.querySelector('[slot]')?.textContent,
        },
      });

      this.dispatchEvent(customEvent);
    } else if (this.isExpanding || this.open) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.open = false;
      } else {
        this.close();
      }

      this.open = false;

      const customEvent = new CustomEvent('pds-collapsible-close', {
        bubbles: true,
        composed: true,
        detail: {
          summary: this.querySelector('[slot]')?.textContent,
        },
      });

      this.dispatchEvent(customEvent);
    }
  }

  /**
   * Close the collapsible by setting the height of the details element to the height of the summary element
   */
  close() {
    this.isClosing = true;
    this.details.style.overflow = 'hidden';

    const startHeight = `${this.details.offsetHeight}px`;

    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
      this.isClosing = false;
    }

    this.animation = this.details.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: 'ease-out',
      },
    );

    this.animation.onfinish = () => this.onAnimationFinish(false);
  }

  /**
   * Open the collapsible by setting the height of the details elememt to the height of the summary and content elements
   */
  expand(): void {
    this.details.style.height = `${this.details.offsetHeight}px`;
    this.open = true;
    this.details.style.overflow = 'hidden';
    window.requestAnimationFrame(() => this.animateExpand());
  }

  /**
   * Start the expand animation
   */
  animateExpand(): void {
    this.isExpanding = true;
    const startHeight = `${this.details.offsetHeight}px`;
    const endHeight = `${this.details.scrollHeight}px`;

    if (this.animation) {
      this.animation.cancel();
      this.isExpanding = false;
    }

    this.animation = this.details.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: 'ease-out',
      },
    );

    this.animation.onfinish = () => this.onAnimationFinish(true);
  }

  /**
   * When the animation is finished ensure that the details element's
   * open attribute is set to the correct value and the height
   * and overflow properties are reset.
   */
  onAnimationFinish(open: boolean) {
    this.open = open;
    // Clear this.animation
    this.animation = null;

    this.isClosing = false;
    this.isExpanding = false;
    this.details.style.height = '';
    this.details.style.overflow = '';
  }

  /**
   * @internal
   */
  private isClosing = false;

  /**
   * @internal
   */
  private isExpanding = false;

  /**
   * @internal
   */
  private animation: Animation | null;

  /**
   * @internal
   */
  get classNames() {
    return {
      'is-active': this.open,
      [this.variant]: !!this.variant,
    };
  }

  render() {
    // TODO: Remove the default slot - this will be a breaking change
    return html`<details
      class="${this.getClass()}"
      ?open="${this.open}"
      part="collapsible"
    >
      <summary
        @click=${this.handleClick}
        class="pds-c-collapsible__summary"
        part="collapsible-summary"
      >
        <slot name="summary-title" part="summary-title"></slot>
        <span
          class="${this.descriptionPresent
            ? this.classEl('description-present')
            : nothing}"
        >
          <slot name="summary-description" part="summary-description"></slot>
        </span>
        <span class="pds-c-collapsible__icon">
          <pds-icon-chevron-down size="default"> </pds-icon-chevron-down>
        </span>
      </summary>
      <div class="pds-c-collapsible__content" part="collapsible-content">
        <slot name="collapsible-content"></slot>
      </div>
    </details>`;
  }
}
