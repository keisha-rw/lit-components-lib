import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './status-indicator.scss?inline';
import '@keisha/design-system-icons-web/check';
import '@keisha/design-system-icons-web/minus';
import '@keisha/design-system-icons-web/x';
import '@keisha/design-system-icons-web/more-horizontal';
import '@keisha/design-system-icons-web/alert-circle';
import '@keisha/design-system-icons-web/clock';

/**
 * @summary This component can be used for showing the status as positive, negative, neutral and warning
 *
 * @slot default The contents of the status-indicator
 */
@customElement('pds-status-indicator', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsStatusIndicator extends PdsElement {
  /**
   * Variant of status-indicator
   *
   * - **default** renders the status-indicator positive variant
   * - **negative** renders the status-indicator negative variant
   * - **neutral** renders the status-indicator neutral variant
   * - **warning** renders the status-indicator warning variant
   */
  @property()
  variant: 'default' | 'negative' | 'neutral' | 'warning' = 'default';

  /**
   * Icon to display in status-indicator
   *
   * Valid icons for default variant:
   * - **check**
   *
   * Valid icons for negative variant:
   * - **alert**
   * - **minus**
   * - **x**
   *
   * Valid icons for neutral variant:
   * - **clock**
   * - **minus**
   * - **moreHorizontal**
   *
   * Valid icons for warning variant:
   * - **alert**
   */
  @property({ type: String })
  icon?: 'alert' | 'check' | 'clock' | 'minus' | 'moreHorizontal' | 'x';

  /**
   * Adds a border to status-indicator
   */
  @property({ type: Boolean })
  border: boolean = false;

  /**
   * @internal
   *
   * contains svg markup for minus-icon
   */
  minusVariant() {
    return html`<svg
      class="${this.classEl('minus')}"
      width="16"
      height="16"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.5 6.26459C2.5 5.98845 2.72386 5.76459 3 5.76459H10C10.2761 5.76459 10.5 5.98845 10.5 6.26459C10.5 6.54073 10.2761 6.76459 10 6.76459H3C2.72386 6.76459 2.5 6.54073 2.5 6.26459Z"
        fill="#FFFFFF"
      />
    </svg>`;
  }

  /**
   * @internal
   *
   * contains svg markup for alert-icon
   */
  alertVariant() {
    return html`<svg
      class="${this.classEl('alert')}"
      width="16"
      height="16"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 3.33594C7 3.0598 6.77614 2.83594 6.5 2.83594C6.22386 2.83594 6 3.0598 6 3.33594V6.33594C6 6.61208 6.22386 6.83594 6.5 6.83594C6.77614 6.83594 7 6.61208 7 6.33594L7 3.33594ZM6.49721 8.16846C6.22261 8.16846 6 8.39107 6 8.66567C6 8.94027 6.22261 9.16287 6.49721 9.16287H6.50218C6.77678 9.16287 6.99939 8.94027 6.99939 8.66567C6.99939 8.39107 6.77678 8.16846 6.50218 8.16846H6.49721Z"
        fill="#FFFFFF"
      />
    </svg>`;
  }

  /**
   * @internal
   *
   * contains svg markup for clock-icon
   */
  clockVariant() {
    return html`<svg
      class="${this.classEl('clock')}"
      width="16"
      height="16"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.01373 3.00781C7.01373 2.73167 6.78988 2.50781 6.51373 2.50781C6.23759 2.50781 6.01373 2.73167 6.01373 3.00781V5.64179C6.01373 5.10385 6.01373 6.58919 6.01373 6.79649C6.19733 6.89859 6.68951 7.17593 7.01373 7.37384L8.52297 8.23986C8.76212 8.37793 9.06791 8.296 9.20599 8.05685C9.34406 7.8177 9.26212 7.51191 9.02297 7.37384L7.01373 6.21914V3.00781Z"
        fill="#FFFFFF"
      />
    </svg>`;
  }

  /**
   * @internal
   *
   * contains svg markup for moreHorizontal-icon
   */
  moreHorizontal() {
    return html`<svg
      class="${this.classEl('more-horizontal')}"
      width="16"
      height="16"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 5.26459C2.44772 5.26459 2 5.7123 2 6.26459C2 6.81687 2.44772 7.26459 3 7.26459C3.55228 7.26459 4 6.81687 4 6.26459C4 5.7123 3.55228 5.26459 3 5.26459Z"
        fill="#FFFFFF"
      />
      <path
        d="M5.50001 6.26459C5.50001 5.7123 5.94772 5.26459 6.50001 5.26459C7.05229 5.26459 7.50001 5.7123 7.50001 6.26459C7.50001 6.81687 7.05229 7.26459 6.50001 7.26459C5.94772 7.26459 5.50001 6.81687 5.50001 6.26459Z"
        fill="#FFFFFF"
      />
      <path
        d="M8.99999 6.26459C8.99999 5.7123 9.44771 5.26459 9.99999 5.26459C10.5523 5.26459 11 5.7123 11 6.26459C11 6.81687 10.5523 7.26459 9.99999 7.26459C9.44771 7.26459 8.99999 6.81687 8.99999 6.26459Z"
        fill="#FFFFFF"
      />
    </svg>`;
  }

  /**
   * @internal
   *
   * contains svg markup for x-icon
   */
  xVariant() {
    return html`<svg
      class="${this.classEl('x')}"
      width="16"
      height="16"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.85355 3.61814C10.0488 3.42288 10.0488 3.1063 9.85355 2.91103C9.65829 2.71577 9.34171 2.71577 9.14645 2.91103L6.5 5.55748L3.85355 2.91103C3.65829 2.71577 3.34171 2.71577 3.14645 2.91103C2.95118 3.1063 2.95118 3.42288 3.14645 3.61814L5.79289 6.26459L3.14645 8.91103C2.95118 9.1063 2.95118 9.42288 3.14645 9.61814C3.34171 9.8134 3.65829 9.8134 3.85355 9.61814L6.5 6.97169L9.14645 9.61814C9.34171 9.8134 9.65829 9.8134 9.85355 9.61814C10.0488 9.42288 10.0488 9.1063 9.85355 8.91103L7.20711 6.26459L9.85355 3.61814Z"
        fill="#FFFFFF"
      />
    </svg>`;
  }

  /**
   * @internal
   *
   * contains svg markup for check-icon
   */
  checkVariant() {
    return html`<svg
      class="${this.classEl('check')}"
      width="16"
      height="16"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.8536 2.91103C11.0488 3.1063 11.0488 3.42288 10.8536 3.61814L5.35355 9.11814C5.15829 9.3134 4.84171 9.3134 4.64645 9.11814L2.14645 6.61814C1.95118 6.42288 1.95118 6.1063 2.14645 5.91103C2.34171 5.71577 2.65829 5.71577 2.85355 5.91103L5 8.05748L10.1464 2.91103C10.3417 2.71577 10.6583 2.71577 10.8536 2.91103Z"
        fill="#FFFFFF"
      />
    </svg>`;
  }

  /**
   * @internal
   *
   * Checks if the variant is neutral and adds markup accordingly
   */
  iconHandler() {
    if (this.icon) {
      if (
        this.icon === 'minus' &&
        (this.variant === 'negative' || this.variant === 'neutral')
      ) {
        return this.minusVariant();
        // eslint-disable-next-line no-else-return
      } else if (
        this.icon === 'alert' &&
        (this.variant === 'warning' || this.variant === 'negative')
      ) {
        return this.alertVariant();
      } else if (this.icon === 'clock' && this.variant === 'neutral') {
        return this.clockVariant();
      } else if (this.icon === 'x' && this.variant === 'negative') {
        return this.xVariant();
      } else if (this.icon === 'moreHorizontal' && this.variant === 'neutral') {
        return this.moreHorizontal();
      } else if (this.icon === 'check' && this.variant === 'default') {
        return this.checkVariant();
      } else {
        console.error(
          'The combination of icon and variant passed is not valid ',
          this,
        );
      }
    }
    return nothing;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      border: !!this.border,
      [this.variant]: !!this.variant,
    };
  }

  render() {
    return html`<div class=${this.getClass()}>
      <div class="${this.classEl('wrapper')}">${this.iconHandler()}</div>
      <slot></slot>
    </div>`;
  }
}
