import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { msg } from '@lit/localize';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './footer-contact-link.scss?inline';
import { required } from '../../decorators/required';
import '../link/link';
import '@keisha/design-system-icons-web/phone';
import '@keisha/design-system-icons-web/help-circle';
import '@keisha/design-system-icons-web/mail';
import '@keisha/design-system-icons-web/printer';

/**
 * @summary This component contains default or customizable contact links to be used within the PdsFooter
 *
 * @slot default Contains the display text of custom links
 */
@customElement('pds-footer-contact-link', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsFooterContactLink extends PdsElement {
  /**
   * Style variant
   * - **default** renders a default pds-link for use on lighter backgrounds
   * - **inverted** renders an inverted pds-link for use on darker backgrounds
   */
  @property()
  variant: 'default' | 'inverted' = 'default';

  /**
   * Link category
   * - **phone** renders a footer-contact-link with a phone icon
   * - **email** renders a footer-contact-link with a mail icon
   * - **help** renders a footer-contact-link with a help-circle icon
   * - **fax** renders a footer-contact-link with a print icon
   */
  @required
  @property()
  linkCategory: 'phone' | 'email' | 'help' | 'fax';

  /**
   * Href prop for phone/fax # or contact URL
   */
  @property({ type: String })
  href: string;

  /**
   * aria label to ensure a11y (esp. for phone number links)
   */
  @property({ type: String })
  ariaLabel: string;

  attachIcon() {
    if (this.linkCategory === 'phone') {
      return html`<pds-icon-phone slot="icon-left"></pds-icon-phone>`;
    }
    if (this.linkCategory === 'fax') {
      return html`<pds-icon-printer slot="icon-left"></pds-icon-printer>`;
    }
    if (this.linkCategory === 'email') {
      return html`<pds-icon-mail slot="icon-left"></pds-icon-mail>`;
    }
    if (this.linkCategory === 'help') {
      return html`<pds-icon-help-circle
        slot="icon-left"
      ></pds-icon-help-circle>`;
    }
    return nothing;
  }

  getDefaultHref() {
    if (this.linkCategory === 'phone') {
      return 'tel:800-986-3343';
    }
    if (this.linkCategory === 'fax') {
      console.error(
        'For fax variants, please add the `href` and `ariaLabel` attributes, as well as label text.',
      );
    }
    if (this.linkCategory === 'email') {
      return 'https://www.google.com/contact-us';
    }
    if (this.linkCategory === 'help') {
      return 'https://www.google.com/help';
    }
    return '';
  }

  getDefaultAriaLabel() {
    if (this.linkCategory === 'phone') {
      return `${msg('Call us at')} ${this.href}`;
    }
    if (this.linkCategory === 'fax') {
      console.error(
        'For fax variants, please add the `href` and `ariaLabel` attributes, as well as label text.',
      );
    }
    if (this.linkCategory === 'email') {
      return `${msg('Contact us')}`;
    }
    if (this.linkCategory === 'help') {
      return `${msg('Help topics')}`;
    }
    return '';
  }

  getDefaultLabelText() {
    if (this.linkCategory === 'phone') {
      return `800-986-3343`;
    }
    if (this.linkCategory === 'email') {
      return `${msg('Contact us')}`;
    }
    if (this.linkCategory === 'help') {
      return `${msg('Help topics')}`;
    }
    return nothing;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
    };
  }

  render() {
    return html`<pds-link
      class=${this.getClass()}
      variant=${this.variant}
      href=${this.href || this.getDefaultHref()}
      ariaLabel="${this.ariaLabel || this.getDefaultAriaLabel()}"
      >${this.attachIcon()}<slot>${this.getDefaultLabelText()}</slot></pds-link
    >`;
  }
}
