import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './link.scss?inline';

const size = ['default', 'sm', 'lg', 'xl'] as const;
export type LinkSize = (typeof size)[number];

/**
 * @summary This component renders a styled anchor tag
 *
 * @slot icon-left This slot holds an icon to the left of the link. Icons are restricted to the PDS icon sets only
 * @slot default This slot holds the link contents
 * @slot icon-right This slot holds an icon to the right of the link. Icons are restricted to the PDS icon sets only
 *
 * @fires pds-link-click A custom event dispatched on click
 */
@customElement('pds-link', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsLink extends PdsElement {
  /**
   * - **default** renders link for basic action
   * - **emphasis** provide more affordance
   * - **inverted** used on a darker background
   * - **emphasis-inverted** more affordance on a darker background
   */
  @property()
  variant: 'default' | 'emphasis' | 'inverted' | 'emphasis-inverted' =
    'default';

  /**
   * - **default** renders default size
   * - **sm** smaller size
   * - **lg** larger size (not valid for link button)
   * - **xl** extra large size (not valid for link button)
   */
  @property()
  size: LinkSize = 'default';

  /**
   * Redirect url
   */
  @property({ reflect: true })
  href: string;

  /**
   * Indicates that the link references a file to download, see https://www.w3schools.com/tags/att_a_download.asp
   */
  @property()
  download?: string | boolean;

  /**
   * Specifies information about a linked document
   * Automatically set to 'noopener noreferrer' when target is '_blank'
   */
  @property()
  rel?: string;

  /**
   * Specifies the two-character language code of the document in the link
   */
  @property()
  hreflang?: string;

  /**
   * Specifes target to open the linked document
   */
  @property()
  target?: '_self' | '_blank' | '_parent' | '_top';

  /**
   * Specifies an aria-label for the link
   */
  @property()
  ariaLabel: string;

  /**
   * Specifies an aria-current for the link
   */
  @property()
  ariaCurrent: 'page' | 'step' | 'location' | 'date' | 'time' | 'true';

  /**
   * Specifies a role for the link
   */
  @property()
  role: string;

  /**
   * Specifies the Internet media type (formerly known as MIME type)
   * of the linked document for links, or the type of button if button
   * property is true
   */
  @property()
  type?: string | 'button' | 'reset' | 'submit';

  /**
   * Render the link as a button variant
   *
   * - **default** renders the button used for the most common calls to action that don't require as much visual attention.
   * - **default-inverted** renders a default button for use on darker backgrounds.
   * - **primary** renders the button used for the most important calls to action.
   * - **primary-inverted** renders a primary button for use on darker backgrounds.
   * - **icon** renders the button used for icon.
   * - **icon-inverted** renders the button for icons used on darker backgrounds.
   */
  @property()
  button:
    | 'default'
    | 'default-inverted'
    | 'primary'
    | 'primary-inverted'
    | 'icon'
    | 'icon-inverted'
    | '' = '';

  /**
   * Programatically indicate a link should display as hover state
   */
  @property({ type: Boolean })
  hover: boolean = false;

  handleClick(e: MouseEvent) {
    const customEvent = new CustomEvent('pds-link-click', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        summary: this.textContent,
      },
    });

    this.dispatchEvent(customEvent);

    if (customEvent.defaultPrevented) {
      e.preventDefault();
    }
  }

  handleSlotChange(e: Event) {
    this.handleSlotValidation(e);
    this.addSizeToLinkIcon();
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
      'icon-left': !!this.slotNotEmpty('icon-left'),
      'icon-right': !!this.slotNotEmpty('icon-right'),
      [this.size]: !!this.size,
      [`button-${this.button}`]: !!this.button,
      button: !!this.button,
      hover: !!this.hover,
    };
  }

  /**
   * This grabs the iconLeft slot
   * @internal
   */
  @queryAssignedElements({ slot: 'icon-left' })
  iconLeftList: HTMLElement[];

  /**
   * This grabs the iconRight slot
   * @internal
   */
  @queryAssignedElements({ slot: 'icon-right' })
  iconRightList: HTMLElement[];

  addSizeToLinkIcon() {
    const icons = [...this.iconLeftList, ...this.iconRightList];
    if (icons && icons.length && size.includes(this.size)) {
      icons.forEach((icon) =>
        icon.setAttribute(
          'size',
          this.size && this.size === 'xl' ? 'lg' : this.size,
        ),
      );
    }
  }

  updated() {
    this.addSizeToLinkIcon();
  }

  render() {
    if (this.target === '_blank') {
      this.rel = 'noopener noreferrer';
    }

    return html`<a
      class="${this.getClass()}"
      href=${ifDefined(this.href)}
      rel=${ifDefined(this.rel)}
      target="${ifDefined(this.target)}"
      part="link"
      download=${ifDefined(this.download)}
      aria-label=${ifDefined(this.ariaLabel)}
      aria-current=${ifDefined(this.ariaCurrent)}
      role=${ifDefined(this.role)}
      type=${ifDefined(this.type)}
      hreflang=${ifDefined(this.hreflang)}
      @click=${this.handleClick}
      >${this.slotNotEmpty('icon-left')
        ? html`<span class="pds-c-link__icon-left-wrapper">
            <slot
              allowed-elements="pds-icon, span"
              name="icon-left"
              @slotchange=${this.handleSlotChange}
            ></slot>
          </span>`
        : ''}
      <span class="pds-c-link__text" part="link-text"><slot></slot></span
      >${this.slotNotEmpty('icon-right')
        ? html`<span class="pds-c-link__icon-right-wrapper">
            <slot
              allowed-elements="pds-icon, span"
              name="icon-right"
              @slotchange=${this.handleSlotChange}
            ></slot>
          </span>`
        : ''}</a
    >`;
  }
}
