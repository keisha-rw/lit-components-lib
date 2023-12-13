import { html, isServer, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './secondary-navigation-level-two.scss?inline';
import '../heading/heading';
import '../secondary-navigation-link/secondary-navigation-link';
import '../list/list';
import '../list-item/list-item';
import '../collapsible/collapsible';

/**
 * @summary This component generates the level two navigation within the secondary navigation, and generates a heading over slotted list contents at desktop and either a collapsible or a link (depending on props) at mobile.
 *
 * @slot default A list of link items
 */
@customElement('pds-secondary-navigation-level-two', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsSecondaryNavigationLevelTwo extends PdsElement {
  firstUpdated(): void {
    this.setWindowResizeHandler();
  }

  updated(changedProperties: Map<string, unknown>): void {
    if (
      changedProperties.has('activePageCallback') &&
      this.activePageCallback
    ) {
      this.activePageCallback();
    }
  }

  /**
   * The title of the top tier item (whether a parent or link)
   */
  @property({ type: String })
  title: string = '';

  /**
   * If the top tier item is a link, the href for it
   */
  @property({ reflect: true })
  href: string;

  /**
   * Set to true for visual representation of the user's current page
   * If not set, component logic will determine the value by matching the window location's href to the component's href property
   */
  @property()
  activePage: boolean = false;

  /**
   * Function to determine if this is the active page
   * This function looks at the url of each link item
   * and determines if the current URL matches the nav item URL
   * This is the default behavior of the activePageCallback prop
   */
  determineActivePage(): void {
    // Handle when this component is just a single link
    if (this.href) {
      if (window.location.href === this.href) {
        this.activePage = true;
      }
      // bail because we know this is a single link and don't need to continue
      return;
    }

    // Not a single link, but a list of links
    // Loop through links and determine if href matches the current url
    const links = this.querySelectorAll('pds-secondary-navigation-link');
    if (links) {
      links.forEach((link) => {
        if (link.getAttribute('href') === window.location.href) {
          link.setAttribute('activePage', 'true');
          link.setAttribute('ariaCurrent', 'page');
        }
      });
    }
  }

  /**
   * Callback function to determine if this is the active page
   * Defaults to looking at the url of each secondary nav level two item
   * and determines if the current URL matches the nav item URL
   */
  @property({ type: Function })
  activePageCallback?: Function = this.determineActivePage;

  handleSlotChange() {
    this.requestUpdate();
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
      return html`<div class=${this.getClass()}>
        <div class="${this.classMod('mobile')}">
          <pds-secondary-navigation-link
            class="${this.classEl('menu-item')} ${this.classMod(
              'menu-item-link',
            )}"
            href="${this.href}"
            activePage="${this.activePage || nothing}"
            ariaCurrent="${this.activePage ? 'page' : nothing}"
            >${this.title}</pds-secondary-navigation-link
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
      return html`<div class=${this.getClass()}>
        <div class="${this.classMod('mobile')}">
          <pds-collapsible
            variant="default"
            class="${this.classEl('menu-item')}"
            ><span slot="summary-title">${this.title}</span
            ><span slot="collapsible-content"
              ><slot
                @slotchange="${this.handleSlotChange}"
                class="${this.classEl('slot')}"
              ></slot></span
          ></pds-collapsible>
        </div>
      </div>`;
    }
    if (this.href) {
      return html`<div class=${this.getClass()}>
        <div class="${this.classMod('desktop')}">
          <pds-secondary-navigation-link
            class="${this.classEl('menu-item')} ${this.classMod(
              'menu-item-link',
            )}"
            activePage="${this.activePage || nothing}"
            href="${this.href}"
            ariaCurrent="${this.activePage ? 'page' : nothing}"
            >${this.title}</pds-secondary-navigation-link
          >
        </div>
      </div>`;
    }
    return html`<div class=${this.getClass()}>
      <div class="${this.classMod('desktop')}">
        <div class="${this.classEl('menu-item')}">
          <span class="${this.classEl('category-title')}">${this.title}</span>
          <slot
            @slotchange="${this.handleSlotChange}"
            class="${this.classEl('slot')}"
          ></slot>
        </div>
      </div>
    </div>`;
  }
}
