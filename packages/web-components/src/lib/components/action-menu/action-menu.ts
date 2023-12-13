import { html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  computePosition,
  autoUpdate,
  shift,
  arrow,
  flip,
  offset,
} from '@floating-ui/dom';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import styles from './action-menu.scss?inline';
import '@keisha/design-system-icons-web/more-horizontal';
import '@keisha/design-system-icons-web/chevron-down';
import { PdsElement } from '../PdsElement';
// eslint-disable-next-line import/no-duplicates
import { PdsButton, ButtonVariant, ButtonSize } from '../button/button';
// eslint-disable-next-line import/no-duplicates
import '../button/button';
import '../action-menu-item/action-menu-item';

/**
 * @summary This component provides a set of menu items to the user when the action-menu button is clicked
 *
 * @slot default Accepts subcomponent menu-items to be displayed in the menulist, restricted to pds-action-menu-item
 * @slot footer Accepts subcomponent menu-items to be displayed in the footer of the menulist i.e. after the seperator, restricted to pds-action-menu-item
 * @slot icon Accepts icons to be displayed in button, restricted to pds-icon
 *
 * @fires pds-button-click A custom event dispatched on triggerButton click
 * @fires pds-action-menu-item-click A custom event dispatched on menu item click
 */
@customElement('pds-action-menu', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsActionMenu extends PdsElement {
  /**
   * Style buttonVariant
   * - **default** renders the button used for the most common calls to action that don't require as much visual attention.
   * - **default-inverted** renders a default button for use on darker backgrounds.
   * - **primary** renders the button used for the most important calls to action.
   * - **primary-inverted** renders a primary button for use on darker backgrounds.
   * - **icon** renders the button used for icon.
   * - **icon-inverted** renders the button for icons used on darker backgrounds.
   */
  @property()
  buttonVariant: ButtonVariant = 'icon';

  /**
   * Small button
   */
  @property()
  size: ButtonSize = 'sm';

  /**
   * Removes a separator in the action menu item list
   */
  @property({ type: Boolean })
  hideSeparator: boolean = false;

  /**
   * Adds a aria-label to the action menu item
   */
  @property()
  ariaLabel: string = 'action menu';

  /**
   * Adds a label to action menu list
   */
  @property()
  label: string;

  /**
   * Adds a label to trigger button
   */
  @property()
  buttonLabel: string = 'I want to...';

  /**
   * This is used to open and close the action menu list
   */
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  /**
   * Checks if the action-menu filp
   @internal
   */
  @state()
  flip: boolean = false;

  /**
   * This grabs the pds-button element
   * @internal
   */
  @query('.pds-c-action-menu__button')
  triggerButton: PdsButton;

  /**
   * This grabs the div element of action menu list
   * @internal
   */
  @query('.pds-c-action-menu__list')
  menuList: HTMLElement;

  /**
   * This grabs the div element of arrow
   * @internal
   */
  @query('.pds-c-action-menu__arrow')
  arrow: HTMLElement;

  constructor() {
    super();
    this.handleOnClickOutsideActionMenuList =
      this.handleOnClickOutsideActionMenuList.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener(
      'mouseup',
      this.handleOnClickOutsideActionMenuList,
      false,
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(
      'mouseup',
      this.handleOnClickOutsideActionMenuList,
      false,
    );
  }

  createInstance() {
    if (this.triggerButton) {
      const arrowLen = this.arrow.offsetWidth;
      autoUpdate(this.triggerButton, this.menuList, () => {
        computePosition(this.triggerButton, this.menuList, {
          placement: 'bottom',
          middleware: [
            // offset of 28px will set the distance between the arrow and the trigger element according to our design
            offset(28),
            shift(),
            flip({
              fallbackPlacements: ['bottom', 'top'],
            }),
            arrow({ element: this.arrow }),
          ],
        }).then(({ x, y, middlewareData, placement }) => {
          Object.assign(this.menuList.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
          const side = placement.split('-')[0];
          const staticSide: any = {
            top: 'bottom',
            bottom: 'top',
          }[side];

          this.flip = side === 'top';

          if (middlewareData.arrow) {
            const { x: arrowX, y: arrowY } = middlewareData.arrow;
            Object.assign(this.arrow.style, {
              left: `${arrowX}px`,
              top: `${arrowY}px`,
              [staticSide]: `${-arrowLen / 2 - 1}px`,
            });
          }
        });
      });
    }
  }

  showMenu() {
    this.open = true;
    this.triggerButton.setAttribute('isActive', 'true');
    this.menuList.setAttribute('show-menu', '');
    this.arrow.setAttribute('aria-expanded', 'true');
    this.createInstance();
    this.menuList.addEventListener(
      'pds-action-menu-item-click',
      this.hideMenu,
      false,
    );
  }

  hideMenu() {
    this.open = false;
    this.triggerButton.removeAttribute('isActive');
    this.menuList.removeAttribute('show-menu');
    this.arrow.setAttribute('aria-expanded', 'false');
    this.menuList.removeEventListener(
      'pds-action-menu-item-click',
      this.hideMenu,
      false,
    );
  }

  handleClick() {
    if (this.menuList.hasAttribute('show-menu')) {
      this.hideMenu();
    } else {
      this.showMenu();
    }
  }

  handleOnClickOutsideActionMenuList(e: MouseEvent) {
    // If the action menu list is already closed then we don't care about outside clicks and we
    // can bail early
    if (!this.menuList.hasAttribute('show-menu')) {
      return;
    }

    // If clicking the action menu button again, bail here and let the toggle function take over
    if (this.triggerButton && e.composedPath().includes(this.triggerButton)) {
      return;
    }

    let didClickInside = false;

    // Check to see if we clicked inside the active action menu item
    if (this.menuList) {
      didClickInside = e.composedPath().includes(this.menuList);
    }

    // If the action menu list is active and we've clicked outside of the list then it should be closed.
    if (this.menuList.hasAttribute('show-menu') && !didClickInside) {
      this.hideMenu();
    }
  }

  renderButton() {
    const iconButton =
      this.buttonVariant === 'icon' || this.buttonVariant === 'icon-inverted';

    return html`<pds-button
      type="button"
      variant="${this.buttonVariant}"
      size="${this.size}"
      class="${this.classEl('button')}"
      ariaExpanded="${this.open}"
      isActive="${this.open ? 'true' : nothing}"
      ariaLabel="This button opens a action menu list"
      @click=${this.handleClick}
      >${iconButton
        ? html`<slot
            name="icon"
            allowed-elements="pds-icon"
            @slotchange=${this.handleSlotValidation}
            ><pds-icon-more-horizontal></pds-icon-more-horizontal
          ></slot>`
        : html`<span>${this.buttonLabel}</span
            ><slot
              name="icon"
              allowed-elements="pds-icon"
              @slotchange=${this.handleSlotValidation}
              ><pds-icon-chevron-down size="sm" class="${this.classEl('icon')}">
              </pds-icon-chevron-down
            ></slot>`}</pds-button
    >`;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.buttonVariant]: !!this.buttonVariant,
      flip: !!this.flip,
    };
  }

  render() {
    return html`<div class="${this.getClass()}">
      <section class="${this.classEl('section')}">
        ${this.renderButton()}
      </section>
      <div
        class="${this.classEl('list')}"
        aria-label=${ifDefined(this.ariaLabel)}
      >
        ${this.label
          ? html`<span class="pds-actionMenu-header">${this.label}</span>`
          : nothing}
        <ul>
          <slot
            allowed-elements="pds-action-menu-item"
            @slotchange=${this.handleSlotValidation}
          ></slot>
          ${!this.hideSeparator
            ? html`<li
                class="${this.classEl('separator')}"
                role="separator"
              ></li>`
            : nothing}
          <slot
            name="footer"
            allowed-elements="pds-action-menu-item"
            @slotchange=${this.handleSlotValidation}
          ></slot>
        </ul>
        <div class="${this.classEl('arrow')}"></div>
      </div>
    </div>`;
  }
}
