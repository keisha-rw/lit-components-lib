import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { localized, msg } from '@lit/localize';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './skeleton-loader.scss?inline';

const areaChartSvg = html`<svg
  viewBox="0 0 40 40"
  aria-hidden="true"
  display="block"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16602 2.66602C4.99444 2.66602 5.66602 3.33759 5.66602 4.16602V34.332H35.832C36.6604 34.332 37.332 35.0036 37.332 35.832C37.332 36.6604 36.6604 37.332 35.832 37.332H4.16602C3.33759 37.332 2.66602 36.6604 2.66602 35.832V4.16602C2.66602 3.33759 3.33759 2.66602 4.16602 2.66602Z"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M34.7337 7.77757C35.2976 8.00813 35.666 8.55681 35.666 9.166V27.5C35.666 28.3284 34.9945 29 34.166 29H10.832C10.0036 29 9.33203 28.3284 9.33203 27.5V22.166C9.33203 21.787 9.47549 21.4221 9.73357 21.1445L18.5676 11.6445C18.8475 11.3435 19.2388 11.1705 19.6499 11.1661C20.0611 11.1617 20.456 11.3262 20.7423 11.6212L25.1722 16.1848L33.0957 8.11508C33.5225 7.6804 34.1698 7.54702 34.7337 7.77757ZM32.666 12.8346L26.2363 19.3829C25.9532 19.6712 25.5658 19.8332 25.1617 19.832C24.7577 19.8308 24.3712 19.6667 24.0897 19.3768L19.6894 14.8436L12.332 22.7557V26H32.666V12.8346Z"
  />
</svg>`;

const imageSvg = html`<svg
  viewBox="0 0 40 40"
  aria-hidden="true"
  display="block"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.54175 12.8333C9.54175 10.5552 11.3886 8.70833 13.6667 8.70833C15.9449 8.70833 17.7917 10.5552 17.7917 12.8333C17.7917 15.1115 15.9449 16.9583 13.6667 16.9583C11.3886 16.9583 9.54175 15.1115 9.54175 12.8333ZM13.6667 11.9583C13.1835 11.9583 12.7917 12.3501 12.7917 12.8333C12.7917 13.3166 13.1835 13.7083 13.6667 13.7083C14.15 13.7083 14.5417 13.3166 14.5417 12.8333C14.5417 12.3501 14.15 11.9583 13.6667 11.9583Z"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.6295 14.2922C25.3659 13.7474 24.8212 13.3942 24.2162 13.3758C23.6112 13.3573 23.0461 13.6767 22.7498 14.2045L18.6862 21.4428L17.5007 19.7387C17.1987 19.3046 16.7044 19.0446 16.1756 19.0417C15.6467 19.0388 15.1496 19.2935 14.8429 19.7243L7.84292 29.5576C7.49019 30.0531 7.4437 30.7041 7.72245 31.2447C8.0012 31.7853 8.55852 32.125 9.16675 32.125H31.6668C32.2262 32.125 32.7463 31.8372 33.0435 31.3633C33.3407 30.8893 33.3732 30.2958 33.1295 29.7922L25.6295 14.2922ZM20.2504 25.2955L24.0599 18.5099L29.0752 28.875H12.3182L16.1514 23.4902L17.4994 25.428C17.8191 25.8874 18.3526 26.15 18.9116 26.1231C19.4706 26.0962 19.9764 25.7835 20.2504 25.2955Z"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3.70825 8.33333C3.70825 5.60254 5.93579 3.375 8.66658 3.375H31.9999C34.7307 3.375 36.9583 5.60254 36.9583 8.33333V31.6667C36.9583 34.3975 34.7307 36.625 31.9999 36.625H8.66658C5.93579 36.625 3.70825 34.3975 3.70825 31.6667V8.33333ZM8.66658 6.625C7.73071 6.625 6.95825 7.39746 6.95825 8.33333V31.6667C6.95825 32.6025 7.73071 33.375 8.66658 33.375H31.9999C32.9358 33.375 33.7083 32.6025 33.7083 31.6667V8.33333C33.7083 7.39746 32.9358 6.625 31.9999 6.625H8.66658Z"
  />
</svg>`;

/**
 * @summary This component renders a loader
 */
@localized()
@customElement('pds-skeleton-loader', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsSkeletonLoader extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  /**
   * - **default** loading animation to replace text elements
   * - **heading** loading animation to replace heading elements
   * - **image** loading animation to replace image elements
   * - **area-chart** loading animation to replace charts and graphs
   */
  @property()
  variant: 'default' | 'heading' | 'image' | 'area-chart' = 'default';

  /**
   * Inverted loader for placement over a dark background.
   */
  @property({ type: Boolean })
  inverted: boolean = false;

  /**
   * Visually hidden, descriptive text for screen readers, describes content being loaded
   */
  @property()
  loadingText: string;

  /**
   * @internal
   */
  handleSvg(variant: string) {
    if (variant === 'area-chart') {
      return areaChartSvg;
    }
    if (variant === 'image') {
      return imageSvg;
    }

    return nothing;
  }

  /**
>   * @internal
>   * If the user passes in custom custom loading text, that will be populated.
>   * If not, the text will be automated and language localized.
>   */
  getLoadingText() {
    if (!this.loadingText) {
      const localizedLoadingText = msg('loading...');
      return localizedLoadingText;
    }
    return this.loadingText;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
      inverted: this.inverted,
    };
  }

  render() {
    return html`<div class=${this.getClass()} aria-busy="true">
      ${this.handleSvg(this.variant)}
      <span class=${this.classEl('loading-text')}
        >${this.getLoadingText()}</span
      >
    </div>`;
  }
}
