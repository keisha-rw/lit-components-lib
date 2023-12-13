import { PropertyValueMap, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { themedefault } from '@keisha/design-system-tokens';
import { createPopper } from '@popperjs/core';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './primary-navigation-main-menu-item.scss?inline';
import '@keisha/design-system-icons-web/chevron-down';
import '@keisha/design-system-icons-web/arrow-right';

/**
 * @summary A list item (li) element that contains a link (a), or a button
 *
 * @slot default One or more pds-primary-navigation-dropdown-link elements
 *
 * @fires pds-primary-navigation-main-menu-dropdown-close A custom event dispatched on closing a dropdown
 * @fires pds-primary-navigation-main-menu-dropdown-open A custom event dispatched on opening a dropdown
 * @fires pds-primary-navigation-main-menu-link-click A custom event dispatched when a link inside the main-menu-item gets clicked
 */
@customElement('pds-primary-navigation-main-menu-item', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsPrimaryNavigationMainMenuItem extends PdsElement {
  /**
   * Determines if the item should be a dropdown
   */
  @property({ type: Boolean })
  dropdown: boolean = false;

  /**
   * Determines if the item should be a megamenu
   */
  @property({ type: Boolean })
  megamenu: boolean = false;

  /**
   * Tracks the active class for dropdown items
   * @internal
   */
  @property({ type: Boolean })
  isActive: boolean = false;

  /**
   * If the item is not a dropdown or megamenu, the link for the item
   */
  @property()
  href?: string = undefined;

  /**
   * The item's text
   */
  @property()
  text?: string;

  /**
   * Determines if the item should have an arrow icon
   */
  @property({ type: Boolean })
  arrow: boolean = false;

  /**
   * Determines if the item should have a divider line
   */
  @property({ type: Boolean })
  divider: boolean = false;

  /**
   * @internal
   */
  @state()
  popper: any;

  /**
   * Initialize functions
   */
  constructor() {
    super();
    this.handleOnClickOutside = this.handleOnClickOutside.bind(this);
  }

  firstUpdated() {
    this.setWindowResizeHandler();
  }

  updated(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    if (
      changedProperties.has('isActive') ||
      changedProperties.has('responsiveViewportSize')
    ) {
      this.popper?.destroy();
      this.popper = undefined;

      if (
        this.popper === undefined &&
        this.isActive &&
        (this.responsiveViewportSize === 'lg' ||
          this.responsiveViewportSize === 'xl')
      ) {
        const navItem = this.shadowRoot?.querySelector(
          `.${this.classEl('panel')}`,
        );
        if (navItem) {
          this.popper = createPopper(this, navItem as HTMLElement, {
            placement: 'bottom-start',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 40],
                },
              },
            ],
          });
        }
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
    document.addEventListener('mouseup', this.handleOnClickOutside, false);
    document.addEventListener('keydown', this.handleKeydown, false);
  }

  /*
   * Disconnected callback lifecycle
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    // Remove window resize event listener
    document.removeEventListener('mouseup', this.handleOnClickOutside, false);
    document.removeEventListener('keydown', this.handleKeydown, false);
  }

  /**
   * Handle click outside the component
   */
  handleOnClickOutside(e: MouseEvent) {
    // If the nav is already closed then we don't care about outside clicks and we
    // can bail early
    if (!this.isActive) {
      return;
    }

    // Check to see if we clicked inside the active navigation item
    const didClickInside = e.composedPath().includes(this);

    // Only apply click outside breakpoint greater than or equal to 1024px to get better
    // accordion behavior on small screens
    if (window.innerWidth >= themedefault.BreakpointsPixelLg) {
      // If the navigation is active and we've clicked outside of the nav then it should be closed.
      if (this.isActive && !didClickInside) {
        const customEvent = new CustomEvent(
          'pds-primary-navigation-main-menu-dropdown-close',
          {
            bubbles: true,
            composed: true,
            detail: {
              summary: this.text,
            },
          },
        );

        this.dispatchEvent(customEvent);

        this.isActive = false;
      }
    }
  }

  handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.isActive = false;
      const customEvent = new CustomEvent(
        `pds-primary-navigation-main-menu-dropdown-${
          this.isActive === false ? 'close' : 'open'
        }`,
        {
          bubbles: true,
          composed: true,
          detail: {
            summary: this.text,
          },
        },
      );
      this.dispatchEvent(customEvent);
    }
  }

  toggleIsActive() {
    if (this.parentNode) {
      const navItems =
        this.parentNode.querySelectorAll<PdsPrimaryNavigationMainMenuItem>(
          'pds-primary-navigation-main-menu-item',
        );
      navItems.forEach((element) => {
        if (element !== this) {
          // Close the show hide panel on click outside
          // eslint-disable-next-line no-param-reassign
          element.isActive = false;
        }
      });
    }
    this.isActive = !this.isActive;
  }

  handleClickButton() {
    const customEvent = new CustomEvent(
      `pds-primary-navigation-main-menu-dropdown-${
        this.isActive === false ? 'open' : 'close'
      }`,
      {
        bubbles: true,
        composed: true,
        detail: {
          summary: this.text,
        },
      },
    );

    this.dispatchEvent(customEvent);

    this.toggleIsActive();
  }

  handleClick() {
    const customEvent = new CustomEvent(
      'pds-primary-navigation-main-menu-link-click',
      {
        bubbles: true,
        composed: true,
        detail: {
          summary: this.text,
        },
      },
    );

    this.dispatchEvent(customEvent);
  }

  /**
   * internal
   */
  get classNames() {
    return {
      megamenu: !!this.megamenu,
      dropdown: !!this.dropdown,
      'is-active': !!this.isActive,
      arrow: !!this.arrow,
      divider: !!this.divider,
    };
  }

  render() {
    if (this.href) {
      return html` <li class=${this.getClass()} role="listitem">
        <a
          @click=${this.handleClick}
          class="${this.classEl('link')}"
          part="primary-navigation-main-menu-item-link"
          href=${this.href}
        >
          <span class="${this.classEl('text')}">${this.text}</span>
          ${this.arrow === true
            ? html`<span class="${this.classEl('arrow')}"
                ><pds-icon-arrow-right size="sm"></pds-icon-arrow-right
              ></span>`
            : html`<span class="${this.classEl('arrow--mobile')}"
                ><pds-icon-arrow-right size="sm"></pds-icon-arrow-right
              ></span>`}
        </a>
        <slot></slot>
      </li>`;
    }
    return html` <li class=${this.getClass()} role="listitem">
      <button
        @click=${this.handleClickButton}
        aria-expanded=${this.isActive === true}
        aria-label="dropdown link"
        class="${this.classEl('link')}"
        part="primary-navigation-main-menu-item-link"
        @keydown=${this.handleKeydown}
      >
        <span class="${this.classEl('text')}">${this.text}</span>
        ${this.dropdown === true || this.megamenu === true
          ? html`<span
              class="${this.classEl('icon')}"
              part="primary-navigation-main-menu-item-link-icon"
              ><pds-icon-chevron-down size="sm"></pds-icon-chevron-down
            ></span>`
          : ''}
      </button>
      ${this.dropdown === true || this.megamenu === true
        ? html`
            <div
              class="${this.classEl('panel')}"
              part="primary-navigation-main-menu-item-panel"
              @keydown=${this.handleKeydown}
            >
              <div data-popper-arrow></div>
              <div class="${this.classEl('panel-content')}">
                <slot></slot>
              </div>
            </div>
          `
        : ''}
    </li>`;
  }
}
