import { html, isServer, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { localized, msg } from '@lit/localize';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './alert.scss?inline';
import '../button/button';
import '../layout-container/layout-container';
import '@keisha/design-system-icons-web/check';
import '@keisha/design-system-icons-web/alert-circle';
import '@keisha/design-system-icons-web/alert-triangle';
import '@keisha/design-system-icons-web/x';
import '@keisha/design-system-icons-web/info';
import { PdsLink } from '../link/link';

/**
 * @summary This component provides feedback to the user about the state of their interaction with in a page or application.
 *
 * @slot default The contents of the alert
 *
 * @fires pds-button-click A custom event dispatched on a click on the alert dismiss button
 */
@customElement('pds-alert', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
@localized()
export class PdsAlert extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  /**
   * Style variant
   * - **information** default, renders the alert used for informational alerts
   * - **success** renders the alert used for success alerts
   * - **error** renders the alert used for error alerts, is not dismissible
   * - **warning** renders the alert used for warning alerts
   * - **banner** renders the alert used for banner alerts, by default includes a layout-container
   */
  @property()
  variant: 'information' | 'success' | 'error' | 'warning' | 'banner' =
    'information';

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
   * Hide dismiss button
   */
  @property({ type: Boolean })
  hideDismissButton: boolean = false;

  /**
   * Show or hide alert
   @internal
   */
  @state()
  hidden: boolean = false;

  /**
   * Show or hide alert on page load
   */
  @property()
  hiddenOnPageLoad: boolean = false;

  /**
   * @internal
   *
   * Checks markup for errors and adds browser console warnings for misconfigurations
   */
  preflight() {
    if (this.variant === 'error' && this.hideDismissButton) {
      console.warn(
        'Error alert cannot be dismissible and will always render without a close button. Please remove the hideDismissButton property to remove this warning.',
        this.outerHTML,
      );
    }

    const links = !isServer ? this.querySelectorAll('pds-link') : [];
    links.forEach((link) => {
      // link must be handled as a PdsLink in order to appease Typescript
      const pdsLink = link as PdsLink;
      if (
        this.variant === 'banner' &&
        pdsLink.variant !== 'emphasis-inverted'
      ) {
        console.warn(
          `Links in a banner alert must use the 'emphasis-inverted' variant, '${pdsLink.variant}' was supplied. Link variant has been modified on the page. Update this link with the correct variant to remove this warning.`,
          link,
        );
      } else if (this.variant !== 'banner' && pdsLink.variant !== 'emphasis') {
        console.warn(
          `Links in a non-banner alert must use the 'emphasis' variant, '${pdsLink.variant}' was supplied. Link variant has been modified on the page. Update this link with the correct variant to remove this warning.`,
          link,
        );
      }
    });
  }

  /**
   * @internal
   *
   * @returns icon for the alert
   */
  getIcon() {
    switch (this.variant) {
      case 'success':
        return html`<pds-icon-check size="lg"></pds-icon-check>`;
      case 'information':
        return html`<pds-icon-info size="lg"></pds-icon-info>`;
      case 'warning':
        return html`<pds-icon-alert-triangle
          size="lg"
        ></pds-icon-alert-triangle>`;
      default:
        return html`<pds-icon-alert-circle size="lg"></pds-icon-alert-circle>`;
    }
  }

  showAlert() {
    this.hidden = false;
  }

  hideAlert() {
    this.hidden = true;
  }

  /**
   * @internal
   *
   * @returns close button markup for dismissable alerts
   */
  getCloseButtonMarkup() {
    return html`
      <div class=${this.classEl('close-button-wrapper')}>
        <pds-button
          class=${this.classEl('close-button')}
          variant="${this.variant === 'banner' ? 'icon-inverted' : 'icon'}"
          size="sm"
          ariaLabel="${msg('close')}"
          @click=${this.hideAlert}
          ><pds-icon-x class=${this.classEl('close-button-x-icon')}></pds-icon-x
        ></pds-button>
      </div>
    `;
  }

  firstUpdated() {
    if (this.hiddenOnPageLoad) {
      this.hideAlert();
    }
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
      'is-hidden': this.hidden,
    };
  }

  render() {
    this.preflight();

    // update link variants if they do not match expected design
    const links = !isServer ? this.querySelectorAll('pds-link') : [];
    links.forEach((link) => {
      if (
        this.variant === 'banner' &&
        link.getAttribute('variant') !== 'emphasis-inverted'
      ) {
        link.setAttribute('variant', 'emphasis-inverted');
      } else if (
        this.variant !== 'banner' &&
        link.getAttribute('variant') !== 'emphasis'
      ) {
        link.setAttribute('variant', 'emphasis');
      }
    });

    if (this.layoutContainerVariant && this.variant !== 'banner') {
      return html`<pds-layout-container
        variant=${this.layoutContainerVariant}
        removePadding=${ifDefined(this.layoutContainerRemovePadding)}
        ><div
          class=${this.getClass()}
          role=${this.variant === 'error' ? 'alert' : 'status'}
        >
          <div class="${this.classEl('card')}">
            <div class="${this.classEl('alert-body')}">
              <div class="${this.classEl('icon')}">${this.getIcon()}</div>
              <div class="${this.classEl('alert-content')}">
                <slot></slot>
              </div>
              ${this.variant === 'error' || this.hideDismissButton
                ? nothing
                : this.getCloseButtonMarkup()}
            </div>
          </div>
        </div></pds-layout-container
      >`;
    }
    if (this.layoutContainerVariant && this.variant === 'banner') {
      return html`<div class=${this.getClass()} role="status">
        <pds-layout-container
          variant=${this.layoutContainerVariant}
          removePadding=${ifDefined(this.layoutContainerRemovePadding)}
        >
          <div class="${this.classEl('card')}">
            <div class="${this.classEl('alert-body')}">
              <div class="${this.classEl('icon')}">${this.getIcon()}</div>
              <div class="${this.classEl('alert-content')}">
                <slot></slot>
              </div>
              ${this.hideDismissButton ? nothing : this.getCloseButtonMarkup()}
            </div>
          </div>
        </pds-layout-container>
      </div>`;
    }
    return html`<div
      class=${this.getClass()}
      role=${this.variant === 'error' ? 'alert' : 'status'}
    >
      <div class="${this.classEl('card')}">
        <div class="${this.classEl('alert-body')}">
          <div class="${this.classEl('icon')}">${this.getIcon()}</div>
          <div class="${this.classEl('alert-content')}">
            <slot></slot>
          </div>
          ${this.variant === 'error' || this.hideDismissButton
            ? nothing
            : this.getCloseButtonMarkup()}
        </div>
      </div>
    </div>`;
  }
}
