import { PropertyValueMap, html, isServer, nothing } from 'lit';
import { msg, localized } from '@lit/localize';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  property,
  query,
  state,
  queryAssignedElements,
} from 'lit/decorators.js';
import * as focusTrap from 'focus-trap';
import { createPopper } from '@popperjs/core';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './primary-navigation.scss?inline';
import '@keisha/design-system-icons-web/menu';
import '@keisha/design-system-icons-web/x';
import '@keisha/design-system-icons-web/bell';
import '@keisha/design-system-icons-web/bell-notification';
import '@keisha/design-system-icons-web/search';
import '../primary-navigation-container/primary-navigation-container';
import '../button/button';
import '../link/link';
import '../layout-container/layout-container';
import '../list/list';
import '../list-item/list-item';
import '../logo/logo';
import '../primary-navigation-main-menu/primary-navigation-main-menu';
import '../primary-navigation-main-menu-item/primary-navigation-main-menu-item';
import '../primary-navigation-utility-menu/primary-navigation-utility-menu';
import '../primary-navigation-utility-menu-item/primary-navigation-utility-menu-item';
import '../primary-navigation-dropdown-link/primary-navigation-dropdown-link';

/**
 * @summary A component that renders a primary navigation
 *
 * @slot logo A slot for an optional custom logo. The slot is restricted to pds-logo, img, and svg elements
 * @slot primary-navigation-main-menu A main menu component containing one or more main menu items. Slot restricted to only PDS primary-navigation-main-menu components
 * @slot primary-navigation-utility-menu A utility menu component containing one or more utility menu items. Slot restricted to only PDS primary-navigation-utility-menu components
 * @slot search If passed in, will populate the search icon.
 * @fires pds-primary-navigation-item-click A custom event dispatched on click of the login/logout button
 */
@customElement('pds-primary-navigation', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
// This is important to place below the @customElement decorator (https://github.com/lit/lit/issues/3264)
@localized()
export class PdsPrimaryNavigation extends PdsElement {
  /**
   * Style variant
   * - **default** renders the primary-navigation used for primary actions
   * - **inverted** renders the primary-navigation used for primary actions
   */
  @property()
  variant: 'default' | 'inverted' = 'default';

  /**
   * Determines if search | notifications should be rendered
   * - **search** renders the search icon & panel in the navigation
   * - **notification** renders the notification bell & panel in the navigation
   */
  @property()
  includeAction?: 'search' | 'notification';

  /**
   * Determines if we should place the header in a layout container
   * If this property isn't passed, no layout container is used.
   */
  @property({ type: String })
  layoutContainerVariant?: 'default' | 'narrow';

  /**
   * Remove layout container padding (only to be used if layoutContainerVariant has a value)
   * - **md** removes padding from the layout container below md breakpoint
   * - **all** removes padding from the layout container at all screens (used for nested layout containers)
   */
  @property({ type: String })
  layoutContainerRemovePadding?: 'md' | 'all';

  /**
   * Gives users some flexibility if they don't want other notifications to show in the notifications panel
   */
  @property({ type: Boolean })
  hideOtherAlerts: boolean = false;

  /**
   * The number of unread messages
   */
  @property({ type: Number })
  messagesCount: number = 0;

  /**
   * The number of other unread notifications
   */
  @property({ type: Number })
  otherAlertsCount: number = 0;

  /**
   * Link to the message center
   */
  @property({ type: String })
  messagesHref: string =
    'https://google.com/common/member/messagecenter';

  // TODO: is there a notifications center default link?
  /**
   * Link to the notifications center
   */
  @property({ type: String })
  otherAlertsHref: string = 'https://www.google.com';

  /**
   * Link to the main content or 'none' to disable the skip content link
   */
  @property({ type: String })
  skipToContentHref: string = '#main';

  /**
   * The header element that contains the entire primary navigation
   * @internal
   */
  @query('header')
  header: HTMLElement;

  /**
   * The notifications panel card
   * @internal
   */
  @query('.pds-c-primary-navigation__notification-panel')
  notificationsPanel: HTMLElement;

  /**
   * The search panel card
   * @internal
   */
  @query('.pds-c-primary-navigation__search-panel')
  searchPanel: HTMLElement;

  /**
   * The notifications bell button (either with messages or without)
   * @internal
   */
  @query('.pds-c-primary-navigation__bell-icon')
  bellIcon: HTMLElement;

  /**
   * The menu button
   * @internal
   */
  @query('.pds-c-primary-navigation__menu-button')
  menuIcon: HTMLElement;

  /**
   * The search icon button
   * @internal
   */
  @query('.pds-c-primary-navigation__search-icon')
  searchIcon: HTMLElement;

  clickNotificationLink(linkId: string) {
    const notificationLink = this.shadowRoot?.querySelector(
      `#${linkId}`,
    ) as HTMLAnchorElement;
    const textContent = notificationLink?.textContent;

    const customEvent = new CustomEvent(
      'pds-primary-navigation-notification-link-click',
      {
        bubbles: true,
        composed: true,
        detail: {
          summary: textContent,
        },
      },
    );

    // Actually click the notification link
    if (notificationLink) {
      notificationLink.click();
    }
    this.dispatchEvent(customEvent);
  }

  /**
   * Handle click outside the notifications panel
   * @internal
   */
  handleOnClickOutsideNotifications(e: MouseEvent) {
    // If the notification panel is already closed then we don't care about outside clicks and we
    // can bail early
    if (!this.isPanelActive) {
      return;
    }

    // If clicking the notification bell or search icon again, bail here and let the toggle function take over
    if (
      (this.bellIcon && e.composedPath().includes(this.bellIcon)) ||
      (this.searchIcon && e.composedPath().includes(this.searchIcon))
    ) {
      return;
    }

    let didClickInside = false;

    // Check to see if we clicked inside the active navigation item
    if (this.notificationsPanel || this.searchPanel) {
      didClickInside =
        e.composedPath().includes(this.notificationsPanel) ||
        e.composedPath().includes(this.searchPanel);
    }

    // Only apply click outside breakpoint greater than or equal to 768px to get better
    // accordion behavior on small screens
    // TODO: can we tokenize this?
    if (window.innerWidth >= 768) {
      // If the navigation is active and we've clicked outside of the nav then it should be closed.
      if (this.isPanelActive && !didClickInside) {
        const event = new Event('pds-primary-navigation-panel-close', {
          bubbles: true,
          composed: true,
        });

        this.dispatchEvent(event);

        this.isPanelActive = false;
      }
    }
  }

  /**
   * On escape key press, close the notification panel and return focus to the bell icon
   * @internal
   */
  handlePanelKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.isPanelActive = false;
      if (this.bellIcon && this.bellIcon.shadowRoot) {
        this.bellIcon.shadowRoot.querySelector('button')?.focus();
      } else if (this.searchIcon && this.searchIcon.shadowRoot) {
        this.searchIcon.shadowRoot.querySelector('button')?.focus();
      }
    }
  }

  /**
   * An object map of logo variants, keyed off the primary navigation variants
   * @internal
   */
  @state()
  logoVariants = {
    default: {
      logoVariant: 'default',
    },
    inverted: {
      logoVariant: 'white',
    },
  };

  /**
   * @internal
   */
  @state()
  popper: any;

  /**
   * Tracks the active class across all items in the navigation
   * @internal
   */
  @property({ type: Boolean })
  isActive: boolean;

  /**
   * Tracks whether the notification/search panel is active or not
   * @internal
   */
  @property({ type: Boolean })
  isPanelActive: boolean = false;

  /**
   * @internal
   */
  @state()
  trap: focusTrap.FocusTrap;

  /**
   * Called from menu button at mobile, closes notifications panel and opens navigation panel
   * @internal
   */
  toggleIsActive() {
    // Close all other open panels
    if (this.isPanelActive) {
      this.isPanelActive = false;
    }

    if (!this.isActive) {
      setTimeout(() => {
        this.initializeMainMenuTrap();
        this.trap.activate();
      }, 10);
    }

    if (this.isActive) {
      if (this.trap) {
        this.trap.deactivate();
      }
    }

    this.isActive = !this.isActive;

    const event = new Event(
      `pds-primary-navigation-menu-button-${
        this.isActive === true ? 'open' : 'close'
      }`,
      {
        bubbles: true,
        composed: true,
      },
    );

    this.dispatchEvent(event);
  }

  /**
   * Called from clicking notification bell or the search icon, closes other panels and opens the notification or search panel
   * @internal
   */
  togglePanelActive() {
    // Close all other open panels
    if (this.isActive) {
      this.isActive = false;
    }

    if (!this.isPanelActive && this.bellIcon) {
      setTimeout(() => {
        this.initializeNotificationPanelTrap();
        this.trap.activate();
      }, 10);
    }

    if (!this.isPanelActive && this.searchIcon) {
      setTimeout(() => {
        this.initializeSearchPanelTrap();
        this.trap.activate();
      }, 10);
    }

    if (this.isPanelActive) {
      if (this.trap) {
        this.trap.deactivate();
      }
    }

    this.isPanelActive = !this.isPanelActive;

    const event = new Event(
      `pds-primary-navigation-panel-${
        this.isPanelActive === true ? 'open' : 'close'
      }`,
      {
        bubbles: true,
        composed: true,
      },
    );

    this.dispatchEvent(event);
  }

  handleClick(e: { target: { textContent: string } }) {
    const detailSummaryInfo = e.target.textContent
      ? e.target.textContent.trim()
      : this.getLogoAriaLabel();
    const customEvent = new CustomEvent('pds-primary-navigation-item-click', {
      bubbles: true,
      composed: true,
      detail: {
        summary: detailSummaryInfo,
      },
    });

    this.dispatchEvent(customEvent);
  }

  handleSlotChangeMainMenu(e: Event) {
    this.handleSlotValidation(e);
    this.addVariantToMainMenu();
  }

  handleSlotChangeUtilityMenu(e: Event) {
    this.handleSlotValidation(e);
    this.addVariantToUtilityMenu();
  }

  /**
   * @internal
   */
  @queryAssignedElements({
    slot: 'primary-navigation-main-menu',
    selector: 'pds-primary-navigation-main-menu',
  })
  mainMenus: HTMLElement[];

  /**
   * @internal
   */
  @queryAssignedElements({
    slot: 'primary-navigation-utility-menu',
    selector: 'pds-primary-navigation-utility-menu',
  })
  utilityMenus: HTMLElement[];

  /**
   * Initialize the focus trap for main menu
   */
  initializeMainMenuTrap() {
    const trapSelectors = [];
    if (this.slotNotEmpty('primary-navigation-main-menu')) {
      trapSelectors.push('pds-primary-navigation-main-menu');
    }
    if (this.slotNotEmpty('primary-navigation-utility-menu')) {
      trapSelectors.push('pds-primary-navigation-utility-menu');
    }
    if (this.loginLink !== 'none') {
      trapSelectors.push(this.menuIcon);
    }

    this.trap = focusTrap.createFocusTrap(trapSelectors, {
      initialFocus: false,
      allowOutsideClick: true,
      clickOutsideDeactivates: true,
      setReturnFocus: this.menuIcon,
      escapeDeactivates: true,
      tabbableOptions: {
        getShadowRoot: true,
      },
    });
  }

  /**
   * Initialize the focus trap for notifications panel
   */
  initializeNotificationPanelTrap() {
    const trapSelectors = [this.notificationsPanel, this.bellIcon];

    this.trap = focusTrap.createFocusTrap(trapSelectors, {
      initialFocus: false,
      allowOutsideClick: true,
      clickOutsideDeactivates: true,
      setReturnFocus: this.bellIcon,
      escapeDeactivates: true,
      tabbableOptions: {
        getShadowRoot: true,
      },
    });
  }

  /**
   * Initialize the focus trap for search panel
   */
  initializeSearchPanelTrap() {
    const trapSelectors = [this.searchPanel, this.searchIcon];

    this.trap = focusTrap.createFocusTrap(trapSelectors, {
      initialFocus: false,
      allowOutsideClick: true,
      clickOutsideDeactivates: true,
      setReturnFocus: this.searchIcon,
      escapeDeactivates: true,
      tabbableOptions: {
        getShadowRoot: true,
      },
    });
  }

  /**
   * Adds variant to primary-navigation-main-menu components
   * @internal
   */
  addVariantToMainMenu() {
    if (this.mainMenus && this.mainMenus.length !== 0) {
      this.mainMenus.forEach((mainMenu) => {
        mainMenu.setAttribute('variant', this.variant);
      });
    }

    return '';
  }

  /**
   * Adds variant to utility menu components
   * @internal
   */
  addVariantToUtilityMenu() {
    if (this.utilityMenus && this.utilityMenus.length !== 0) {
      this.utilityMenus.forEach((utilityMenu) => {
        utilityMenu.setAttribute('variant', this.variant);
      });
    }

    return '';
  }

  /**
   * Adds variant to utility menu components
   * @internal
   */
  getIconVariant() {
    return this.variant === 'default' ? 'icon' : 'icon-inverted';
  }

  /**
   * @internal
   */
  addVariantToNavDropdownLinks() {
    document.querySelectorAll('pds-primary-navigation-dropdown-link');

    const navDropdownLinks = Array.from(
      document.querySelectorAll('pds-primary-navigation-dropdown-link'),
    ) as HTMLElement[];

    navDropdownLinks.forEach((navDropdownLink) => {
      navDropdownLink.setAttribute('variant', this.variant);
    });
  }

  async firstUpdated(): Promise<void> {
    this.setWindowResizeHandler();
    // We need to wait for the update to complete to make sure that the primary nav elements are available
    // so we can adjust their variants
    await this.updateComplete;
    this.addVariantToNavDropdownLinks();
    this.addVariantToUtilityMenu();
    this.addVariantToMainMenu();
  }

  updated(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    if (
      changedProperties.has('isPanelActive') ||
      changedProperties.has('responsiveViewportSize')
    ) {
      this.popper?.destroy();
      this.popper = undefined;
      if (
        this.popper === undefined &&
        this.isPanelActive &&
        (this.responsiveViewportSize === 'lg' ||
          this.responsiveViewportSize === 'xl')
      ) {
        const searchPanel = this.shadowRoot?.querySelector(
          `.${this.classEl('search-panel')}`,
        );
        const notificationsPanel = this.shadowRoot?.querySelector(
          `.${this.classEl('notification-panel')}`,
        );
        const poppedPanel = searchPanel || notificationsPanel;
        const poppingItem = this.searchIcon || this.bellIcon;

        if (poppedPanel && poppingItem) {
          this.popper = createPopper(poppingItem, poppedPanel as HTMLElement, {
            placement: 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [128, 40],
                },
              },
            ],
          });
        }
      }
    }
  }

  /**
   * Link for the logo
   */
  @property({ type: String })
  logoHref: string = 'https://www.google.com';

  /**
   * String for a custom aria label describing the logo element
   * - By default, aria label for the logo will read "Link to Company Co homepage"
   * - Pass a string of "false" in order to suppress the aria label attribute
   */
  @property()
  logoAriaLabel: String;

  /**
   * Link for the log in link button
   *
   * - if **customLogout** is designated, a semantic button element will be rendered instead of a link and the application will be responsible for providing logout behavior when the pds-primary-navigation-item-click event is caught
   *
   */
  @property({ type: String })
  loginLink: 'none' | 'login' | 'logout' | 'customLogout' = 'login';

  /**
   * Variant for the log in link; valid values should match the link component's button attribute allowed values
   */
  @property({ type: String })
  loginLinkVariant: string = 'primary';

  /**
   * Href for the log in link button
   */
  @property({ type: String })
  loginLinkHref: string = 'https://login.google.com/login';

  /**
   * Returns the log in link button markup
   * @internal
   */
  returnLogInMarkup() {
    if (this.loginLink === 'customLogout') {
      return html`<pds-button
          class="${this.classEl('buttons-nav--desktop-button')}"
          variant="${this.loginLinkVariant}"
          type="button"
          @click=${this.handleClick}
          >${msg('Log out')}</pds-button
        >
        <pds-button
          class="${this.classEl('buttons-nav--mobile-button')}"
          size="sm"
          type="button"
          variant="${this.loginLinkVariant}"
          @click=${this.handleClick}
          >${msg('Log out')}</pds-button
        >`;
    }

    if (this.loginLink !== 'none') {
      return html`<pds-link
          button="${this.loginLinkVariant}"
          href="${this.loginLinkHref}"
          ariaLabel="${this.loginLink === 'login'
            ? msg('Log in')
            : msg('Log out')}"
          role="button"
          class="${this.classEl('buttons-nav--desktop-button')}"
          @click=${this.handleClick}
          >${this.loginLink === 'login'
            ? msg('Log in')
            : msg('Log out')}</pds-link
        >
        <pds-link
          button="${this.loginLinkVariant}"
          href="${this.loginLinkHref}"
          size="sm"
          ariaLabel="${this.loginLink === 'login'
            ? msg('Log in')
            : msg('Log out')}"
          role="button"
          class="${this.classEl('buttons-nav--mobile-button')}"
          @click=${this.handleClick}
          >${this.loginLink === 'login'
            ? msg('Log in')
            : msg('Log out')}</pds-link
        >`;
    }

    return nothing;
  }

  /**
   * Returns the inner div markup
   * @internal
   */
  returnInnerDivMarkup() {
    return html`<div class="${this.classEl('inner')}">
      ${this.skipToContentHref !== 'none'
        ? html`<a
            href="${this.skipToContentHref}"
            class="${this.classEl('skip-to-main')}"
            @click=${this.handleClick}
            >${msg('Skip to content')}</a
          >`
        : nothing}
      <a
        class="${this.classEl('logo-link')}"
        href="${this.logoHref}"
        aria-label="${this.getLogoAriaLabel()}"
        @click=${this.handleClick}
      >
        <slot
          allowed-elements="pds-logo, img, svg"
          name="logo"
          @slotchange=${this.handleSlotValidation}
        ></slot>
        ${this.slotEmpty('logo')
          ? html`<pds-logo
                class="${this.classEl('logo--desktop')}"
                variant="${this.logoVariants[this.variant].logoVariant}"
              ></pds-logo
              ><pds-logo
                class="${this.classEl('logo--mobile')}"
                variant="${this.logoVariants[this.variant].logoVariant}"
              ></pds-logo>`
          : nothing}
      </a>
      <pds-primary-navigation-container
        variant="${this.variant}"
        class="${this.classEl('primary-navigation-container')}"
      >
        <slot
          allowed-elements="pds-primary-navigation-main-menu"
          name="primary-navigation-main-menu"
          @slotchange=${this.handleSlotChangeMainMenu}
        ></slot>
        <slot
          allowed-elements="pds-primary-navigation-utility-menu"
          name="primary-navigation-utility-menu"
          @slotchange=${this.handleSlotChangeUtilityMenu}
        ></slot>
      </pds-primary-navigation-container>
      <div
        class="${this.classEl('icons-nav')} ${this.isPanelActive
          ? 'pds-is-notification-active'
          : ''}"
      >
        ${this.includeAction &&
        this.includeAction === 'search' &&
        !this.slotEmpty('search')
          ? // This needs to be conditional based on inverted or default variant of nav
            html`<pds-button
                variant=${this.getIconVariant()}
                type="button"
                class="${this.classEl('search-icon')}"
                name="search"
                aria-expanded="${this.isPanelActive}"
                role="button"
                isActive=${this.isPanelActive ? true : nothing}
                ariaLabel="${msg('search')}"
                @click=${this.togglePanelActive}
              >
                ${this.isPanelActive
                  ? html`<pds-icon-x size="lg"></pds-icon-x>`
                  : html`<pds-icon-search
                      size="lg"
                    ></pds-icon-search>`}</pds-button
              >
              <div
                class="${this.classEl('search-panel')}"
                @click=${this.togglePanelActive}
              >
                <div data-popper-arrow></div>
                <div
                  class="${this.classEl('search-panel--inner-card')}"
                  @keydown=${this.handlePanelKeyDown}
                  @click=${(e: Event) => e.stopPropagation()}
                >
                  <slot name="search"></slot>
                </div>
              </div>`
          : nothing}
        ${this.includeAction &&
        this.includeAction === 'notification' &&
        this.messagesCount === 0 &&
        this.otherAlertsCount === 0
          ? html`<pds-button
              variant=${this.getIconVariant()}
              type="button"
              @click=${this.togglePanelActive}
              class="${this.classEl('bell-icon')}"
              name="notifications"
              isActive=${this.isPanelActive ? true : nothing}
              aria-expanded=${this.isPanelActive}
              role="button"
              ariaLabel="${msg('notifications')}"
            >
              ${this.isPanelActive
                ? html`<pds-icon-x size="lg"></pds-icon-x>`
                : html`<pds-icon-bell size="lg"></pds-icon-bell>`}
            </pds-button>`
          : nothing}
        ${this.includeAction &&
        this.includeAction === 'notification' &&
        ((this.messagesCount && this.messagesCount > 0) ||
          (this.otherAlertsCount && this.otherAlertsCount > 0))
          ? html`<pds-button
              variant=${this.getIconVariant()}
              type="button"
              @click=${this.togglePanelActive}
              class="${this.classEl('bell-icon')}"
              name="notifications"
              isActive=${this.isPanelActive ? true : nothing}
              aria-expanded=${this.isPanelActive}
              role="button"
              ariaLabel="${msg('notifications')}"
            >
              ${this.isPanelActive
                ? html`<pds-icon-x size="lg"></pds-icon-x>`
                : html`<pds-icon-bell-notification
                    size="lg"
                  ></pds-icon-bell-notification>`}
            </pds-button>`
          : nothing}
        ${this.includeAction && this.includeAction === 'notification'
          ? html`
              <div
                class="${this.classEl('notification-panel')}"
                @keydown=${this.handlePanelKeyDown}
                @click=${this.togglePanelActive}
              >
                <div data-popper-arrow></div>
                <div
                  class="${this.classEl('notification-panel--inner-card')}"
                  @click=${(e: Event) => e.stopPropagation()}
                >
                  <pds-list size="sm" spacing="none">
                    <pds-list-item
                      @click="${() => {
                        this.clickNotificationLink(
                          'pds-c-primary-nav-messages-link',
                        );
                      }}"
                      ><span
                        class="${this.classEl(
                          'notification-panel--left-column',
                        )}"
                        ><a
                          id="pds-c-primary-nav-messages-link"
                          href="${this.messagesHref}"
                          >${msg('Messages')}</a
                        ></span
                      >${this.messagesCount < 99
                        ? html`<span
                            class="${this.classEl(
                              'notification-panel--right-column',
                            )}"
                            >${this.messagesCount}</span
                          >`
                        : html`<span
                            class="${this.classEl(
                              'notification-panel--right-column-large',
                            )}"
                            >99+</span
                          >`}
                    </pds-list-item>
                    ${!this.hideOtherAlerts
                      ? html` <pds-list-item
                          @click="${() =>
                            this.clickNotificationLink(
                              'pds-c-primary-nav-other-notifications-link',
                            )}"
                          ><span
                            class="${this.classEl(
                              'notification-panel--left-column',
                            )}"
                            ><a
                              id="pds-c-primary-nav-other-notifications-link"
                              href="${this.otherAlertsHref}"
                              >${msg('Other alerts')}</a
                            ></span
                          >${this.otherAlertsCount < 99
                            ? html`<span
                                class="${this.classEl(
                                  'notification-panel--right-column',
                                )}"
                                >${this.otherAlertsCount}</span
                              >`
                            : html`<span
                                class="${this.classEl(
                                  'notification-panel--right-column-large',
                                )}"
                                >99+</span
                              >`}</pds-list-item
                        >`
                      : nothing}
                  </pds-list>
                </div>
              </div>
            `
          : nothing}
      </div>
      <span class="${this.classEl('buttons-nav')}">
        ${this.returnLogInMarkup()}
        ${!isServer &&
        !this.querySelector('[slot="primary-navigation-main-menu"]')?.children
          .length &&
        !this.querySelector('[slot="primary-navigation-utility-menu"]')
          ?.children.length
          ? nothing
          : html`<pds-button
              variant=${this.getIconVariant()}
              ariaLabel="${msg('Menu')}"
              role="button"
              isActive=${this.isActive ? true : nothing}
              ariaExpanded=${this.isActive}
              @click=${this.toggleIsActive}
              class="${this.classEl('menu-button')}"
            >
              ${this.isActive
                ? html`<pds-icon-x size="lg"></pds-icon-x>`
                : html`<pds-icon-menu size="lg"></pds-icon-menu>`}
            </pds-button>`}
      </span>
    </div>`;
  }

  /**
   * @internal
   * If the user passes in a custom aria-label, that will be populated.
   * If not, the label will be automated and language localized.
   */
  getLogoAriaLabel() {
    if (!this.logoAriaLabel) {
      const localizedAriaLabel = msg('Link to Company Co homepage');
      return localizedAriaLabel;
    }
    if (this.logoAriaLabel && this.logoAriaLabel !== 'false') {
      return this.logoAriaLabel;
    }
    return nothing;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      'is-active': this.isActive,
      [`${this.variant}`]: !!this.variant,
      'remove-padding': typeof this.layoutContainerVariant !== 'undefined',
    };
  }

  /**
   * Attach functions
   */
  constructor() {
    super();
    this.handleOnClickOutsideNotifications =
      this.handleOnClickOutsideNotifications.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
    document.addEventListener(
      'mouseup',
      this.handleOnClickOutsideNotifications,
      false,
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Remove window resize event listener
    document.removeEventListener(
      'mouseup',
      this.handleOnClickOutsideNotifications,
      false,
    );
  }

  render() {
    return html`<nav aria-label="primary navigation" class=${this.getClass()}>
      ${typeof this.layoutContainerVariant !== 'undefined'
        ? html`<pds-layout-container
            variant=${this.layoutContainerVariant}
            removePadding=${ifDefined(this.layoutContainerRemovePadding)}
            >${this.returnInnerDivMarkup()}</pds-layout-container
          >`
        : this.returnInnerDivMarkup()}
    </nav>`;
  }
}
