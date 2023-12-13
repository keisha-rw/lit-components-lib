import { html, isServer, nothing } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { msg, localized } from '@lit/localize';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './secondary-navigation.scss?inline';
import '../heading/heading';
import '../hr/hr';
import '../layout-container/layout-container';
import '../secondary-navigation-level-one/secondary-navigation-level-one';
import { required } from '../../decorators/required';

/**
 * @summary A component that renders a secondary navigation
 *
 * @slot logo If passed in, will display a logo in the navigation area
 * @slot default Contains one or more secondary nav level one items, restricted to pds-secondary-navigation-level-one elements
 */
@customElement('pds-secondary-navigation', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
@localized()
export class PdsSecondaryNavigation extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  firstUpdated() {
    this.setWindowResizeHandler();
  }

  /**
   * @internal
   */
  @property()
  responsiveViewportSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Aria label to go around the navigation container
   */
  @property({ type: String })
  navAriaLabel: string;

  /**
   * Sets a title for your secondary nav element
   */
  @required
  @property({ type: String })
  title: string;

  /**
   * Sets a description for your secondary nav element
   */
  @property()
  description: string;

  /**
   * @internal
   * This grabs the logo from the logo slot
   */
  @queryAssignedElements({ slot: 'logo' })
  slottedLogo: HTMLElement[];

  handleSlotChange() {
    this.requestUpdate();
  }

  render() {
    if (
      !isServer &&
      (this.responsiveViewportSize === 'xs' ||
        this.responsiveViewportSize === 'sm' ||
        this.responsiveViewportSize === 'md')
    ) {
      return html`<nav
      aria-label="${msg('secondary navigation')}"
      class=${this.getClass()}
    ><div class="${this.classMod('mobile')}"><div class="${this.classEl(
      'collapsible',
    )}">
      <pds-collapsible
        variant="inverted"
        class="${this.classEl('title-collapsible')}"
        ><span slot="summary-title">
          <span class="${this.classEl('category-title')}"
            >${this.title}</span
          ></span>
          ${
            this.description
              ? html`<span
                  slot="summary-description"
                  class="${this.classEl('description')}"
                >
                  ${this.description}
                </span>`
              : nothing
          }
        </span>
        <span slot="collapsible-content"><slot
        @slotchange=${this.handleSlotChange}
      ></slot></span>
      </pds-collapsible>
    </div></div></nav>`;
    }
    return html`<nav
      aria-label="${msg('secondary navigation')}"
      class=${this.getClass()}
    >
      <div class="${this.classMod('desktop')}">
        <div class="${this.classEl('desktop-wrapper')}">
          <pds-layout-container>
            <span class="${this.classEl('container')}">
              <span class="${this.classEl('logo')}"
                ><slot name="logo"></slot
              ></span>
              <span class="${this.classEl('category-title')}"
                >${this.title}</span
              >
              ${this.description
                ? html`<p class="${this.classEl('description')}">
                    ${this.description}
                  </p>`
                : nothing}
              <div
                aria-label="${this.navAriaLabel}"
                class="${this.classEl('nav-container')}"
              >
                <ul class="${this.classEl('nav-container-list')}" role="list">
                  <slot
                    allowed-elements="pds-secondary-navigation-level-one, slot"
                    @slotchange=${this.handleSlotChange}
                  ></slot>
                </ul>
              </div>
              <pds-hr class="${this.classEl('hr')}"></pds-hr
            ></span>
          </pds-layout-container>
        </div>
      </div>
    </nav>`;
  }
}
