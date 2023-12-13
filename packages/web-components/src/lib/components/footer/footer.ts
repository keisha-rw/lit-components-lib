import { html, nothing } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { msg, localized } from '@lit/localize';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './footer.scss?inline';
import '@keisha/design-system-icons-web/facebook';
import '@keisha/design-system-icons-web/twitter';
import '@keisha/design-system-icons-web/linkedin';
import '@keisha/design-system-icons-web/youtube';
import '@keisha/design-system-icons-web/instagram';
import '@keisha/design-system-icons-web/whatsapp';
import '../band/band';
import '../collapsible/collapsible';
import '../footer-nav/footer-nav';
import '../footer-nav-item/footer-nav-item';
import '../heading/heading';
import '../layout-container/layout-container';
import '../link/link';
import '../list/list';
import '../list-item/list-item';
import '../logo/logo';
import '../footer-contact-link/footer-contact-link';

export type SocialIconObject = {
  type:
    | 'facebook'
    | 'linkedin'
    | 'twitter'
    | 'youtube'
    | 'instagram'
    | 'whatsapp';
  url: string;
  ariaLabel: string;
};

/**
 * @summary The Company Co footer component
 *
 * @slot default A pds-footer-nav element containing one or more pds-footer-nav-item elements
 * @slot heading A slot for a heading for the footer
 * @slot additional-info Adds a additional info section into the superFooter
 * @slot legal-text Optional custom legal text
 * @slot logo Optional custom logo, restricted to pds-logo, img, and svg elements
 * @slot custom-contact Optional custom contact links, restricted to pds-list elements
 * @slot custom-legal-links Optional custom links appended to the end of the Legal links, restricted to pds-list-item elements
 * @slot social-icons Optional override of the default social icons, restricted to pds-list-item elements
 */
@customElement('pds-footer', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
// This is important to place below the @customElement decorator (https://github.com/lit/lit/issues/3264)
@localized()
export class PdsFooter extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }
  /**
   * - **default** renders the footer-nav used for primary actions on a dark background
   * - **subtle** renders the footer-nav-item used for primary actions on a subtle background
   */

  @property({ type: String })
  variant: 'default' | 'subtle' = 'default';

  /**
   * Hide default contact phone link
   */
  @property({ type: Boolean })
  hideContactPhone: boolean = false;

  /**
   * Hide default help link
   */
  @property({ type: Boolean })
  hideHelpLink: boolean = false;

  /**
   * Hide default contact link
   */
  @property({ type: String })
  hideContactLink: boolean = false;

  /**
   * Link for 'Trouble logging in?' prompt
   */
  @property({ type: String })
  loginSupportLink: 'https://www.google.com/help';

  /**
   * Web link for terms of use guidelines
   */
  @property({ type: String })
  termsOfUseLink: string = 'https://www.google.com/terms-of-use';

  /**
   * Web link for disclosures
   */
  @property({ type: String })
  disclosuresLink: String =
    'https://www.google.com/products-services-disclosures';

  /**
   * Web link for privacy policy
   */
  @property({ type: String })
  privacyLink: string = 'https://www.google.com/privacy-policies';

  /**
   * Web link for security policy
   */
  @property({ type: String })
  securityLink: string = 'https://www.google.com/security-policies';

  /**
   * Web link for reporting fraud
   */
  @property({ type: String })
  reportFraudLink: String =
    'https://www.google.com/about-us/our-company/policies/report-fraud-or-unethical-conduct';

  /**
   * Context-specific footer behavior
   * - **login** provides a link for login assistance
   * - **super** provides logo above an optional footer nav populated with footer nav items
   */
  @property({ type: String })
  behavior: 'login' | 'super' | 'default' = 'default';

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
   * Set to true to hide the logo in a super footer. This is NOT recommended unless you have a sticky header that will cause incorrect vertical alignment on the page.
   */
  @property({ type: Boolean })
  hideLogo: boolean = false;

  /**
   * Hide the social icons
   */
  @property({ type: Boolean })
  hideSocialIcons: boolean = false;

  /**
   * Deactivates the legal links
   */
  @property({ type: Boolean })
  hideLegalLinks: boolean = false;

  /**
   * Aria label for legal-nav
   */
  @property()
  legalNavAriaLabel: String;

  /**
   * variant for layout container
   * - **narrow** renders the layout-container narrower than the default
   */
  @property({ type: String })
  layoutContainerVariant: 'default' | 'narrow' = 'default';

  /**
   * Remove layout container padding
   * - **md** removes padding from the layout container below md breakpoint
   * - **all** removes padding from the layout container at all screens (used for nested layout containers)
   */
  @property({ type: String })
  layoutContainerRemovePadding?: 'md' | 'all';

  /**
   * @internal
   */
  @queryAssignedElements({ slot: undefined, selector: 'pds-footer-nav' })
  footerNavs: HTMLElement[];

  /**
   * @internal
   */
  @queryAssignedElements({ slot: 'custom-contact' })
  customContactLinks: HTMLElement[];

  /**
   * @internal
   */
  @queryAssignedElements({ slot: 'custom-legal-links' })
  customLegalLinks: HTMLElement[];

  /**
   * @internal
   */
  @queryAssignedElements({ slot: 'social-icons' })
  customSocialIcons: HTMLElement[];

  /**
   * @internal
   */
  addVariantToFooterNavs() {
    const collapsibleVariant =
      this.variant === 'default' ? 'inverted' : 'strong';

    if (this.footerNavs && this.footerNavs.length !== 0) {
      this.footerNavs.forEach((footerNavItem) => {
        footerNavItem.setAttribute('variant', collapsibleVariant);
      });
    }

    return '';
  }

  /**
   * @internal
   * Add styling class to slotted custom social links list
   */
  addClassToCustomSocialIcons() {
    this.customSocialIcons[0].classList.add(this.classEl('social-icons'));
  }

  firstUpdated() {
    this.setWindowResizeHandler();
    this.addVariantToFooterNavs();
    if (this.customLegalLinks.length > 0) {
      // Review this approach when SSR is fully supported, but this is needed for now to avoid hydration errors.
      setTimeout(() => {
        this.appendCustomLegalLinks();
      }, 500);
    }

    if (this.customSocialIcons.length > 0) {
      this.addClassToCustomSocialIcons();
    }
  }

  updated() {
    this.setCustomContactStyles();
  }

  /**
   * @internal
   */
  getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }

  /**
   * @internal
   */
  setLinkVariant() {
    // this assignment looks counterintuitive, but the "default" footer color scheme is inverted, not default
    return this.variant === 'default' ? 'inverted' : 'default';
  }

  /**
   * @internal
   */
  setBandVariant() {
    return this.variant === 'default' ? 'strong' : 'subtle';
  }

  /**
   * @internal
   */
  setEmphasisLinkVariant() {
    return this.variant === 'default' ? 'emphasis-inverted' : 'emphasis';
  }

  /**
   * @internal
   */
  setCollapsibleVariant() {
    return this.variant === 'default' ? 'inverted' : 'strong';
  }

  /**
   * @internal
   */
  loginSupport() {
    return html`<div class="${this.classEl('login-support')}">
      ${msg('Trouble logging in?')}
      <pds-link
        variant="${this.setEmphasisLinkVariant()}"
        href="${this.loginSupportLink}"
        >${msg('Get help')}</pds-link
      >
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
  getLegalNavAriaLabel() {
    if (this.legalNavAriaLabel) {
      return this.legalNavAriaLabel;
    }

    return msg('Select an option for more information about Company Co');
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
  isSmallScreen() {
    return (
      this.responsiveViewportSize === 'xs' ||
      this.responsiveViewportSize === 'sm'
    );
  }

  /**
   * @internal
   */
  showContactRow() {
    return (
      this.hideContactPhone === false ||
      this.hideHelpLink === false ||
      this.hideContactLink === false
    );
  }

  /**
   * @internal
   */
  getContactListMarkup() {
    return html` <slot
      allowed-elements="pds-list"
      name="custom-contact"
      @slotchange=${(e: Event) => this.handleSlotValidation(e)}
    >
      <pds-list
        orientation="${!this.isSmallScreen() ? 'horizontal' : 'default'}"
        class="${!this.isSmallScreen() && this.showContactRow()
          ? this.classEl('contact-row')
          : nothing}"
        title="Contact"
      >
        ${this.hideContactPhone
          ? nothing
          : html` <pds-list-item>
              <pds-footer-contact-link
                variant="${this.setLinkVariant()}"
                linkCategory="phone"
              ></pds-footer-contact-link>
            </pds-list-item>`}
        ${this.hideHelpLink
          ? nothing
          : html` <pds-list-item>
              <pds-footer-contact-link
                variant="${this.setLinkVariant()}"
                linkCategory="help"
              ></pds-footer-contact-link>
            </pds-list-item>`}
        ${this.hideContactLink
          ? nothing
          : html` <pds-list-item>
              <pds-footer-contact-link
                variant="${this.setLinkVariant()}"
                linkCategory="email"
              ></pds-footer-contact-link>
            </pds-list-item>`}
      </pds-list></slot
    >`;
  }

  /**
   * @internal
   */
  getContactMarkup() {
    return this.isSmallScreen()
      ? html` <pds-collapsible
          class="${this.classEl('collapsible')}"
          variant=${this.setCollapsibleVariant()}
        >
          <pds-heading
            variant="label-default"
            headingTag="h2"
            slot="summary-title"
            >${msg('Contact')}</pds-heading
          >
          <span slot="collapsible-content">
            ${this.getContactListMarkup()}
          </span>
        </pds-collapsible>`
      : html`${this.getContactListMarkup()}`;
  }

  /**
   * @internal
   * Sets proper styling for slotted custom links so adopter doesn't need to add these
   */
  setCustomContactStyles() {
    if (this.slotNotEmpty('custom-contact')) {
      if (!this.isSmallScreen()) {
        this.customContactLinks[0].setAttribute('orientation', 'horizontal');
        this.customContactLinks[0].classList.add(this.classEl('contact-row'));
      } else {
        this.customContactLinks[0].removeAttribute('orientation');
        this.customContactLinks[0].classList.remove(
          this.classEl('contact-row'),
        );
      }
    }
  }

  /**
   * @internal
   * Extracts custom legal links from slotted list and appends to the default legal links list
   */
  appendCustomLegalLinks() {
    const customLegalLinks =
      this.customLegalLinks[0].querySelectorAll('pds-list-item');

    customLegalLinks.forEach((link) => {
      this.renderRoot
        .querySelector(`.${this.classEl('extra-links')}`)
        ?.append(link);
    });
  }

  render() {
    return html`<pds-band
      variant=${this.setBandVariant()}
      spacing="default"
      class=${this.getClass()}
    >
      <pds-layout-container
        variant=${this.layoutContainerVariant}
        removePadding=${ifDefined(this.layoutContainerRemovePadding)}
        class="${this.behavior === 'super' || this.behavior === 'login'
          ? this.classMod(this.behavior)
          : nothing}"
      >
        ${this.behavior === 'super' && !this.hideLogo
          ? html`<div class="${this.classEl('logo')}">
              <a
                class="${this.classEl('logo-link')}"
                href="${this.logoHref}"
                aria-label="${this.getLogoAriaLabel()}"
              >
                <slot name="logo" allowed-elements="pds-logo, img, svg">
                  <pds-logo
                    style="position: relative; left: -8px;"
                    variant="${this.variant === 'default'
                      ? 'default-p-white-font'
                      : 'default'}"
                  ></pds-logo>
                </slot>
              </a>
            </div>`
          : nothing}
        <slot @slotchange=${this.addVariantToFooterNavs}></slot>
        <slot name="heading"></slot>
        <slot name="additional-info"></slot>
        <nav
          class=${this.classEl('navigation-area')}
          aria-label="${msg('Footer navigation')}"
        >
          ${this.behavior === 'login' ? this.loginSupport() : ''}
          ${this.showContactRow()
            ? html`<nav
                class=${this.classEl('contact-navigation')}
                aria-label="${msg('Contact us navigation')}"
              >
                ${this.getContactMarkup()}
              </nav>`
            : nothing}
          ${!this.hideLegalLinks
            ? html`<nav
                class="${this.classEl('legal-nav')}"
                aria-label="${this.getLegalNavAriaLabel()}"
              >
                <pds-list
                  class="${this.classEl('extra-links')}"
                  orientation="horizontal"
                >
                  <pds-list-item>
                    <pds-link
                      variant=${this.setLinkVariant()}
                      href="${this.termsOfUseLink}"
                      >${msg('Terms of use')}</pds-link
                    >
                  </pds-list-item>
                  <pds-list-item>
                    <pds-link
                      variant=${this.setLinkVariant()}
                      href="${this.disclosuresLink}"
                      >${msg('Disclosures')}</pds-link
                    ></pds-list-item
                  >
                  <pds-list-item>
                    <pds-link
                      variant=${this.setLinkVariant()}
                      href="${this.privacyLink}"
                      >${msg('Privacy')}</pds-link
                    >
                  </pds-list-item>
                  <pds-list-item>
                    <pds-link
                      variant=${this.setLinkVariant()}
                      href="${this.securityLink}"
                      >${msg('Security')}</pds-link
                    >
                  </pds-list-item>
                  <pds-list-item>
                    <pds-link
                      variant=${this.setLinkVariant()}
                      href="${this.reportFraudLink}"
                      >${msg('Report fraud')}</pds-link
                    >
                  </pds-list-item> </pds-list
                ><slot
                  hidden
                  allowed-elements="pds-list"
                  name="custom-legal-links"
                  @slotchange="${(e: Event) => this.handleSlotValidation(e)}"
                ></slot>
              </nav>`
            : nothing}
          <div class="${this.classEl('copyright-and-social')}">
            <div class="${this.classEl('legal')}">
              <slot
                name="legal-text"
                class="${this.classEl('legal-text-container')}"
              >
                <p class="${this.classEl('legal-text')}">
                  ©${this.getCurrentYear()} Company Co Financial Services, Inc.
                </p>
                <p class="${this.classEl('legal-text')}">
                  ${msg(
                    'Securities offered through Company Co Securities, Inc.,',
                  )}
                  <pds-link
                    variant="${this.setEmphasisLinkVariant()}"
                    size="sm"
                    href="https://www.sipc.org"
                    target="_blank"
                    >${msg('member SIPC')}</pds-link
                  >
                </p>
              </slot>
            </div>
            ${!this.hideSocialIcons
              ? html`<nav
                  class=${this.classEl('social-navigation')}
                  aria-label="${msg('Social media navigation')}"
                >
                  <slot
                    allowed-elements="pds-list"
                    name="social-icons"
                    @slotchange="${(e: Event) => this.handleSlotValidation(e)}"
                    ><pds-list
                      class="${this.classEl('social-icons')}"
                      orientation="horizontal"
                    >
                      <pds-list-item
                        ><pds-link
                          variant="${this.setLinkVariant()}"
                          href="https://facebook.com/Company CoFinancial"
                          ariaLabel="${msg('Company Co on Facebook')}"
                          target="_blank"
                          ><pds-icon-facebook
                            size="xl"
                            color="currentColor"
                          ></pds-icon-facebook> </pds-link
                      ></pds-list-item>
                      <pds-list-item
                        ><pds-link
                          variant="${this.setLinkVariant()}"
                          href="https://twitter.com/Company Co"
                          ariaLabel="${msg('Company Co on Twitter')}"
                          target="_blank"
                          ><pds-icon-twitter
                            size="xl"
                            color="currentColor"
                          ></pds-icon-twitter> </pds-link
                      ></pds-list-item>
                      <pds-list-item
                        ><pds-link
                          variant="${this.setLinkVariant()}"
                          href="https://youtube.com/"
                          ariaLabel="${msg('Company Co on YouTube')}"
                          target="_blank"
                          ><pds-icon-youtube
                            size="xl"
                            color="currentColor"
                          ></pds-icon-youtube> </pds-link
                      ></pds-list-item>
                      <pds-list-item
                        ><pds-link
                          variant="${this.setLinkVariant()}"
                          href="https://linkedin.com"
                          ariaLabel="${msg('Company Co on LinkedIn')}"
                          target="_blank"
                          ><pds-icon-linkedin
                            size="xl"
                            color="currentColor"
                          ></pds-icon-linkedin> </pds-link
                      ></pds-list-item>
                    </pds-list>
                  </slot>
                </nav>`
              : nothing}
          </div>
        </nav>
      </pds-layout-container>
    </pds-band>`;
  }
}
