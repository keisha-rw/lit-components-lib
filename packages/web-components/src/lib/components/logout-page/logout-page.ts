import { html } from 'lit';
import { localized, msg } from '@lit/localize';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './logout-page.scss?inline';
import '../layout-container/layout-container';
import '../heading/heading';
import '../text-passage/text-passage';
import '../link/link';

/**
 * @summary This component renders a logout page
 */
@customElement('pds-logout-page', {
  category: 'component',
  type: 'component',
  styles,
})
@localized()
export class PdsLogoutPage extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  /**
   * Style variant
   * - **primary** renders the logout-page used for default logout
   * - **expired** renders the logout-page used for session expired logout
   */
  @property({ type: String })
  variant: 'default' | 'expired' = 'default';

  /**
   * Login link
   * - Login link for login button
   */
  @property({ type: String })
  loginLink = 'https://login.google.com/login';

  /**
   * variant for layout container
   * - **narrow** renders the layout-container narrower than the default
   */
  @property({ type: String })
  layoutContainerVariant?: 'default' | 'narrow' = 'default';

  /**
   * @internal
   */
  getLogoutHeadline() {
    if (this.variant === 'expired') {
      return msg('Your session has expired.');
    }

    return msg("You've logged out.");
  }

  /**
   * @internal
   */
  getLogoutText() {
    if (this.variant === 'expired') {
      return msg("To keep your account secure, we've logged you out.");
    }

    return msg('Not what you wanted to do?');
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
    return html`<div class=${this.getClass()}>
      <pds-layout-container
        variant="${this.layoutContainerVariant}"
        removePadding="all"
        class="${this.classEl('layout-container')}"
      >
        <div class="${this.classEl('container')}">
          <div class="${this.classEl('content-container')}">
            <div>
              <pds-text-passage>
                <pds-heading
                  headingTag="h1"
                  variant="display-default"
                  class="${this.classEl('heading')}"
                >
                  ${this.getLogoutHeadline()}
                </pds-heading>
                <p class="${this.classEl('text')}">${this.getLogoutText()}</p>
              </pds-text-passage>
            </div>
            <div>
              <pds-link href=${this.loginLink} button="default"
                ><span>${msg('Log back in')}</span></pds-link
              >
            </div>
          </div>
          <div class="${this.classEl('svg-container')}">
            <div class="${this.classEl('svg')}"></div>
          </div>
        </div>
      </pds-layout-container>
    </div>`;
  }
}
