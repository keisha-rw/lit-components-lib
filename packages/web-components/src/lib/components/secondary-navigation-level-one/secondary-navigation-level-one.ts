import { PropertyValueMap, html, isServer, nothing } from 'lit';
import {
  property,
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { themedefault } from '@keisha/design-system-tokens';
import { createPopper } from '@popperjs/core';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './secondary-navigation-level-one.scss?inline';
import '../secondary-navigation-level-two/secondary-navigation-level-two';
import '@keisha/design-system-icons-web/chevron-down';

/**
 * @summary This component generates the level one navigation within the secondary navigation, and generates a dropdown menu at desktop and either a collapsible or a link (depending on props) at mobile.
 *
 * @slot default One or more pds-secondary-navigation-level-two elements
 * @fires pds-secondary-navigation-dropdown-close A custom event dispatched on closing a dropdown
 * @fires pds-secondary-navigation-dropdown-open A custom event dispatched on opening a dropdown
 */
@customElement('pds-secondary-navigation-level-one', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsSecondaryNavigationLevelOne extends PdsElement {
  firstUpdated(): void {
    this.setWindowResizeHandler();
  }

  updated(
    changedProperties:
      | PropertyValueMap<any>
      | Map<PropertyKey | string, unknown>,
  ): void {
    if (
      changedProperties.has('isOpen') ||
      changedProperties.has('responsiveViewportSize')
    ) {
      this.popper?.destroy();
      this.popper = undefined;

      if (
        this.popper === undefined &&
        this.isOpen &&
        (this.responsiveViewportSize === 'lg' ||
          this.responsiveViewportSize === 'xl')
      ) {
        if (this.navItem) {
          this.popper = createPopper(
            this.menuButton,
            this.navItem as HTMLElement,
            {
              placement: 'bottom-start',
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 40],
                  },
                },
              ],
            },
          );
        }
      }
    }
    if (
      changedProperties.has('activeSectionCallback') &&
      this.activeSectionCallback
    ) {
      this.activeSectionCallback();
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
   * The title of the top tier item (whether a parent or link)
   */
  @property({ type: String })
  title: string = '';

  /**
   * If the top tier item is a link (not a dropdown), this represents its href
   */
  @property({ reflect: true })
  href: string;

  /**
   * However many columns the items under a parent should have at desktop
   */
  @property()
  columns: '1col' | '2col' | '3col' | '4col' = '1col';

  /**
   * Tracks the open/closed state of the dropdown menu item
   * @internal
   */
  @state()
  isOpen: boolean = false;

  /**
   * @internal
   * Set to true for visual representation of the user's current section
   * If not set, component logic will determine the value by matching the window location's href to the nested links' href properties
   */
  @property()
  activeSection: boolean = false;

  /**
   * @internal
   */
  @state()
  popper: any;

  /**
   * @internal
   * This grabs the secondary-nav-level-one items
   */
  @queryAssignedElements({ slot: undefined })
  defaultSlotElements: HTMLElement[];

  /**
   * @internal
   * This grabs the panel elements in the nav
   */
  @query('.pds-c-secondary-navigation-level-one__panel')
  navItem: HTMLDivElement;

  /**
   * @internal
   * This grabs the button that triggers the dropdown
   */
  @query('.pds-c-secondary-navigation-level-one__link')
  menuButton: HTMLAnchorElement;

  /**
   * Initialize functions
   */
  constructor() {
    super();
    this.handleOnClickOutside = this.handleOnClickOutside.bind(this);
  }

  /**
   * Handle click outside the component
   */
  handleOnClickOutside(e: MouseEvent) {
    // If the nav is already closed then we don't care about outside clicks and we can bail early
    if (!this.isOpen) {
      return;
    }

    // Check to see if we clicked inside the active navigation item
    const didClickInside = e.composedPath().includes(this);

    // Only apply click outside breakpoint greater than or equal to 1024px to get better
    // accordion behavior on small screens
    if (window.innerWidth >= themedefault.BreakpointsPixelLg) {
      // If the navigation is active and we've clicked outside of the nav then it should be closed.
      if (this.isOpen && !didClickInside) {
        const customEvent = new CustomEvent(
          'pds-secondary-navigation-dropdown-close',
          {
            bubbles: true,
            composed: true,
            detail: {
              summary: this.title,
            },
          },
        );
        this.dispatchEvent(customEvent);

        this.isOpen = false;
      }
    }
  }

  handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.isOpen = false;
      const customEvent = new CustomEvent(
        `pds-secondary-navigation-dropdown-${
          this.isOpen === false ? 'close' : 'open'
        }`,
        {
          bubbles: true,
          composed: true,
          detail: {
            summary: this.title,
          },
        },
      );
      this.dispatchEvent(customEvent);
    }
  }

  toggleIsOpen() {
    if (this.parentNode) {
      const navItems =
        this.parentNode.querySelectorAll<PdsSecondaryNavigationLevelOne>(
          'pds-secondary-navigation-level-one',
        );
      navItems.forEach((element) => {
        if (element !== this) {
          // eslint-disable-next-line no-param-reassign
          element.isOpen = false;
        }
      });
    }
    this.isOpen = !this.isOpen;
  }

  handleClickButton() {
    const customEvent = new CustomEvent(
      `pds-secondary-navigation-dropdown-${
        this.isOpen === false ? 'open' : 'close'
      }`,
      {
        bubbles: true,
        composed: true,
        detail: {
          summary: this.title,
        },
      },
    );

    this.dispatchEvent(customEvent);

    this.toggleIsOpen();
  }

  handleClick() {
    const customEvent = new CustomEvent(
      'pds-secondary-navigation-dropdown-link-click',
      {
        bubbles: true,
        composed: true,
        detail: {
          summary: this.title,
        },
      },
    );

    this.dispatchEvent(customEvent);
  }

  /**
   * @internal
   * Function to determine if this is the active section
   * This function looks at the url of each secondary nav level two item
   * and determines if the current URL matches the nav item URL
   * This is the default behavior of the activeSectionCallback prop
   *
   */
  determineActiveSection(): void {
    // Check if this is a link and if it's the current URL
    // If so, set activeSection to true and bail early
    if (this.href && window.location.href === this.href) {
      this.activeSection = true;
      return;
    }

    this.defaultSlotElements.forEach((element: HTMLElement) => {
      if (element.tagName === 'PDS-SECONDARY-NAVIGATION-LEVEL-TWO') {
        // @ts-expect-error __href is a custom attribute
        // eslint-disable-next-line @typescript-eslint/dot-notation
        const elementHref = element.getAttribute('href') ?? element['__href'];
        if (window.location.href === elementHref) {
          this.activeSection = true;
        }
      }
    });
  }

  /**
   * Callback function to determine if this is the active section
   * Defaults to looking at the url of each secondary nav level two item
   * and determines if the current URL matches the nav item URL
   */
  @property({ type: Function })
  activeSectionCallback?: Function = this.determineActiveSection;

  handleSlotChange() {
    this.requestUpdate();
  }

  /**
   * internal
   */
  get classNames() {
    return {
      'is-open': !!this.isOpen,
      'active-section': !!this.activeSection,
    };
  }

  render() {
    if (
      !isServer &&
      window &&
      window.visualViewport &&
      (this.responsiveViewportSize === 'xs' ||
        this.responsiveViewportSize === 'sm' ||
        this.responsiveViewportSize === 'md') &&
      this.href
    ) {
      return html`<div class="${this.getClass()}">
        <div class="${this.classMod('mobile')}">
          <pds-link
            class="${this.classEl('menu-item-section')}"
            href="${this.href}"
            ariaLabel="${this.title}"
            ariaCurrent="${this.activeSection ? 'true' : nothing}"
            >${this.title}</pds-link
          >
        </div>
      </div>`;
    }
    if (
      !isServer &&
      window &&
      window.visualViewport &&
      (this.responsiveViewportSize === 'xs' ||
        this.responsiveViewportSize === 'sm' ||
        this.responsiveViewportSize === 'md')
    ) {
      // for mobile (uses collapsible)
      return html`<div class="${this.getClass()}">
        <div class="${this.classMod('mobile')}">
          <pds-collapsible
            variant="default"
            class="${this.classEl('menu-item-section')}"
            ><span slot="summary-title">${this.title}</span>
            <span slot="collapsible-content">
              <slot
                @slotchange=${this.handleSlotChange}
                class="${this.classEl('slot')}"
              ></slot></span
          ></pds-collapsible>
        </div>
      </div>`;
    }
    // for no dropdown menu, just a plain link item
    if (this.href) {
      return html`<div class="${this.getClass()}">
        <div class="${this.classMod('desktop')}">
          <li class="${this.classEl('dropdown-item')}" role="listitem">
            <a
              @click=${this.handleClick}
              class="${this.classEl('link')} ${this.classEl('menu-item')}"
              part="link"
              href=${this.href}
              aria-current="${this.activeSection ? 'true' : nothing}"
            >
              <span class="${this.classEl('text')}">${this.title}</span>
            </a>
          </li>
        </div>
      </div>`;
    }
    // for a dropdown menu item
    return html`<div class="${this.getClass()}">
      <div class="${this.classMod('desktop')}">
        <li class="${this.classMod('dropdown-menu-item')}" role="listitem">
          <button
            @click=${this.handleClickButton}
            aria-expanded=${this.isOpen === true}
            aria-label="dropdown link"
            aria-current="${this.activeSection ? 'true' : nothing}"
            class="${this.classEl('link')}"
            @keydown=${this.handleKeydown}
          >
            <span class="${this.classEl('text')}">${this.title}</span>
            <span class="${this.classEl('icon')}"
              ><pds-icon-chevron-down size="sm"></pds-icon-chevron-down
            ></span>
          </button>
          <div class="${this.classEl('panel')}" @keydown=${this.handleKeydown}>
            <div data-popper-arrow></div>
            <div class="${this.classEl('panel-content')}">
              <span class="${this.classMod(this.columns)}">
                <slot
                  @slotchange=${this.handleSlotChange}
                  class="${this.classEl('slot')}"
                ></slot
              ></span>
            </div>
          </div>
        </li>
      </div>
    </div>`;
  }
}
