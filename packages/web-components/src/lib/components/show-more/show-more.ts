import { PropertyValueMap, html, nothing } from 'lit';
import { localized, msg } from '@lit/localize';
import { property, query } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './show-more.scss?inline';
import '../button/button';
import '@keisha/design-system-icons-web/chevron-down';

/**
 * @summary This component is show more that toggles content when it is clicked
 *
 * @slot  Default - This is the default slot where the hidden/shown content will go
 * @fires pds-show-more-open an event dispatched on click when show more is opened
 * @fires pds-show-more-close an event dispatched on click when show more is closed
 */
@customElement('pds-show-more', {
  category: 'component',
  type: 'component',
  styles,
})
@localized()
export class PdsShowMore extends PdsElement {
  /**
   * Style variant
   * - **default** renders the standard show-more color variant
   * - **inverted** renders the inverted show-more color variant
   */
  @property()
  variant: 'default' | 'inverted' = 'default';

  /**
   * The slot element that contains the content element
   * @internal
   */
  @query('.pds-c-show-more__content')
  content: HTMLElement;

  /**
   * This is a check to see if show more is open or not.
   */
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  @property({ type: String })
  showMoreText: string = msg('Show more');

  @property({ type: String })
  showLessText: string = msg('Show less');

  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
    this.addEventListener('keydown', this.handleKeyDown);
  }

  disconnectedCallback() {
    super.connectedCallback();
    this.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.toggle();
    }
  }

  /**
   * Toggle the show more component to either open or closed
   */
  toggle() {
    if (this.open) {
      this.close();
    } else {
      this.expand();
    }
  }

  updated(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    if (changedProperties.has('open')) {
      if (this.open) {
        this.expand();
      } else {
        this.close();
      }
    }
  }

  /**
   * Opening function
   */
  expand() {
    this.content.style.display = 'block';
    this.animateExpand();
    this.open = true;

    const event = new Event('pds-show-more-open', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  /**
   * Closing function
   */
  close() {
    this.animateCollapse();
    this.open = false;

    const event = new Event('pds-show-more-close', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  animateExpand(): void {
    this.content.style.height = '0px';
    this.content.style.overflow = 'hidden';
    this.content.style.transition = 'height 0.3s ease';
    window.requestAnimationFrame(() => {
      this.content.style.height = `${this.content.scrollHeight}px`;
    });
    setTimeout(() => {
      this.content.style.removeProperty('height');
    }, 300);
  }

  animateCollapse(): void {
    const startHeight = `${this.content.scrollHeight}px`;
    const endHeight = '0px';
    this.content.style.overflow = 'hidden';
    this.content.style.transition = 'height 0.3s ease';
    this.content.style.height = startHeight;
    window.requestAnimationFrame(() => {
      this.content.style.height = endHeight;
    });
    setTimeout(() => {
      this.content.style.display = 'none';
    }, 300);
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      'is-active': !!this.open,
      [this.variant]: !!this.variant,
    };
  }

  render() {
    return html`<div class=${this.getClass()}>
      <div
        id="content"
        class="${this.classEl('content')}"
        aria-hidden="${!this.open}"
      >
        <slot></slot>
      </div>
      <pds-button
        link="icon-right"
        class="${this.classEl('button')}"
        variant="${this.variant}"
        ariaExpanded="${this.open}"
        ariaControls="${this.open ? 'content' : nothing}"
        @click="${this.toggle}"
      >
        <span>${this.open ? this.showLessText : this.showMoreText}</span>
        <pds-icon-chevron-down
          class="${this.classEl('icon')}"
        ></pds-icon-chevron-down>
      </pds-button>
    </div>`;
  }
}
