import { TemplateResult, html } from 'lit';
import { localized, msg } from '@lit/localize';
import { property, state } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './error-page.scss?inline';
import '../layout-container/layout-container';
import '../heading/heading';
import '../text-passage/text-passage';
import '../link/link';

/**
 * @summary This component renders an error page used in simple full-page error scenarios
 */
@customElement('pds-error-page', {
  category: 'component',
  type: 'component',
  styles,
})
@localized()
export class PdsErrorPage extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  firstUpdated() {
    this.setWindowResizeHandler();
    this.getLinkSize();
  }

  /**
   * Style errorCode
   * - **403** renders the error-page used to indicate the authentication failure
   * - **404** renders the error-page used to indicate the broken link or if the page is moved
   * - **500** renders the error-page used to indicate the server is unavailable due to internal configuration issue or a temporary glitch
   * - **503** renders the error-page used to indicate if the site is unreachable, usually due to planned maintenance
   */
  @property()
  errorCode: '403' | '404' | '500' | '503' = '500';

  /**
   * Text can be passed to the link
   */
  @property()
  linkText: String;

  /**
   * A href can be passed to the link
   */
  @property()
  linkHref: String;

  /**
   * variant for layout container
   * - **narrow** renders the layout-container narrower than the default
   */
  @property({ type: String })
  layoutContainerVariant?: 'default' | 'narrow' = 'default';

  /**
   * The content that goes in the text passage within the error page
   * @internal
   */
  @state()
  textPassageContent: String;

  /**
   * The heading for the error page
   * @internal
   */
  @state()
  heading: TemplateResult;

  /**
   * The size of the link in the error page
   * @internal
   */
  @state()
  linkSize: String;

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.errorCode]: !!this.errorCode,
    };
  }

  loadErrorPageContent() {
    if (this.errorCode === '404') {
      this.heading = msg(
        html`Well, that’s
          <span class="${this.classEl('styled-text')}">puzzling.</span>`,
      );
      this.textPassageContent = msg(
        'We’re sorry. It looks like the link you followed may be broken or the page may have been moved. ',
      );
    } else if (this.errorCode === '403') {
      this.heading = msg(
        html`<span class="${this.classEl('styled-text')}">Well, shoot.</span>
          Our system doesn’t recognize you.`,
      );
      this.textPassageContent = msg(
        'Sorry! It looks like you don’t have permission to access this page.',
      );
    } else if (this.errorCode === '500') {
      this.heading = msg(
        html`<span class="${this.classEl('styled-text')}">Uh-oh.</span> We’re
          experiencing a small glitch.`,
      );
      this.textPassageContent = msg(
        'Please refresh your browser or try again in a few minutes.',
      );
    } else if (this.errorCode === '503') {
      this.heading = msg(
        html`Looks like there’s a
          <span class="${this.classEl('styled-text')}">bump</span> in the road.`,
      );
      this.textPassageContent = msg(
        'Sorry! This part of our site is currently unavailable, we’re working on resolving the issue as quickly as possible.',
      );
    }
  }

  getLinkSize() {
    if (
      this.responsiveViewportSize === 'xs' ||
      this.responsiveViewportSize === 'sm'
    ) {
      this.linkSize = 'lg';
    } else {
      this.linkSize = 'xl';
    }
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
              ${this.loadErrorPageContent()}
              <pds-text-passage>
                <span class="${this.classEl('status-code')}"
                  >${msg('ERROR')} ${this.errorCode}</span
                >
                <pds-heading
                  headingTag="h1"
                  variant="display-default"
                  class="${this.classEl('heading')}"
                >
                  ${this.heading}
                </pds-heading>
                <div class="${this.classEl('text-passage')}">
                  ${this.textPassageContent}
                </div>
              </pds-text-passage>
            </div>
            <div>
              <pds-link
                variant="emphasis-inverted"
                href=${this.linkHref}
                size=${this.linkSize}
                ><span>${this.linkText}</span></pds-link
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
