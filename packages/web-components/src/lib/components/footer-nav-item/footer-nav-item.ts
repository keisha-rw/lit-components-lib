import { html, nothing } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './footer-nav-item.scss?inline';
import '../list/list';
import '../list-item/list-item';
import '../link/link';
import '../heading/heading';
import '../collapsible/collapsible';

/**
 * @summary A component that renders a single link list at desktop and a collapsible at mobile
 * @slot default A list of links to display in the footer nav section, restricted to pds-list elements
 */
@customElement('pds-footer-nav-item', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsFooterNavItem extends PdsElement {
  /**
   * - **default** renders the footer-nav-item used for primary actions on a dark background
   * - **subtle** renders the footer-nav-item used for primary actions on a subtle background
   */
  @property()
  variant: 'default' | 'subtle' = 'default';

  /**
   * Top level label for the nav item group
   */
  @property()
  label: string = '';

  /**
   * @internal
   */
  @queryAssignedElements({ slot: undefined, selector: 'pds-list' })
  footerNavItemLinks: HTMLElement[];

  /**
   * @internal
   * This turns the label prop to an alphanumeric value and replaces spaces with hyphens
   */
  getIdFromLabel() {
    return this.label
      .replace(/[^a-z0-9\s]/gi, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
  }

  /**
   * @internal
   * Duplicated from pds-footer until we refactor to utils
   */
  isSmallScreen() {
    return (
      this.responsiveViewportSize === 'xs' ||
      this.responsiveViewportSize === 'sm'
    );
  }

  /**
   * @internal
   */
  handleSlotChange(e: Event) {
    this.handleSlotValidation(e);

    this.footerNavItemLinks.forEach((list) => {
      list.setAttribute('spacing', 'sm');
    });
  }

  /**
   * @internal
   */
  getView() {
    return this.isSmallScreen() ? 'mobile' : 'desktop';
  }

  /**
   * @internal
   */
  getHeadingMarkup() {
    return html`
      <pds-heading
        id="${this.getIdFromLabel()}-${this.getView()}"
        headingTag="${this.isSmallScreen() ? 'h2' : 'h3'}"
        variant="label-default"
        slot="${this.isSmallScreen() ? 'summary-title' : nothing}"
        >${this.label}</pds-heading
      >
    `;
  }

  /**
   * @internal
   */
  getNavMarkup() {
    return html`
      <nav aria-labelledby="${this.getIdFromLabel()}-${this.getView()}">
        <slot
          allowed-elements="pds-list"
          @slotchange="${this.handleSlotChange}"
        ></slot>
      </nav>
    `;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
    };
  }

  /**
   * @internal
   */
  firstUpdated() {
    this.setWindowResizeHandler();
  }

  render() {
    return html`<div class=${this.getClass()}>
      <div class="${this.classMod(this.getView())}">
        ${this.isSmallScreen()
          ? html`
              <pds-collapsible variant=${this.variant}>
                ${this.getHeadingMarkup()}
                <div slot="collapsible-content">${this.getNavMarkup()}</div>
              </pds-collapsible>
            `
          : html` ${this.getHeadingMarkup()} ${this.getNavMarkup()} `}
      </div>
    </div>`;
  }
}
