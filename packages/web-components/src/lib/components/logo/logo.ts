import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { required } from '../../decorators/required';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './logo.scss?inline';

/**
 * @summary This component handles all variants of the Company Co logo
 */
@customElement('pds-logo', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsLogo extends PdsElement {
  /**
   * Style variant
   * - **default** logo as it should display on light backgrounds
   * - **white** default logo with white fill
   * - **p** "P" logo as it should display on light backgrounds
   * - **p-gradient** "P" gradient logo as it should display on light backgrounds
   * - **p-white** "P" logo with a white fill, for darker backgrounds
   */
  @required
  @property()
  variant:
    | 'default'
    | 'white'
    | 'default-p-white-font'
    | 'p-gradient'
    | 'p'
    | 'p-white' = 'default';

  /**
   * @internal
   */
  @property()
  fullLogoVariants: (typeof this.variant)[] = [
    'default',
    'white',
    'default-p-white-font',
  ];

  /**
   * @internal
   */
  @property()
  pLogoVariants: (typeof this.variant)[] = ['p-gradient', 'p', 'p-white'];

  /**
   * @internal
   */
  @property()
  pLogoFills: { name: string; fill: string }[] = [
    { name: 'p-gradient', fill: 'url(#SVG_ID_GRADIENT_P_SYMBOL_1_)' },
    { name: 'p', fill: '#0091da' },
    { name: 'p-white', fill: '#ffffff' },
  ];

  /**
   * @internal
   */
  fullLogoColorMarkup() {
    switch (this.variant) {
      case 'default-p-white-font':
        return html`<style xmlns="http://www.w3.org/2000/svg" type="text/css">
          .st0 {
            fill: #ffffff;
          }
          .st1 {
            fill: url(#SVGID_1_);
          }
        </style>`;
      case 'white':
        return html`<style type="text/css">
          .st0 {
            fill: #ffffff;
          }
          .st1 {
            fill: #ffffff;
          }
        </style>`;
      default:
        return html`<style xmlns="http://www.w3.org/2000/svg" type="text/css">
          .st0 {
            fill: #4e4f53;
          }
          .st1 {
            fill: url(#SVGID_1_);
          }
        </style>`;
    }
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      /* This is equivalent to doing
       * 'primary': this.variant === 'primary',
       * 'secondary': this.variant === 'secondary',
       */
      [this.variant]: !!this.variant,
    };
  }

  render() {
    return this.fullLogoVariants.includes(this.variant)
      ? html`<span class="${this.getClass()}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="132"
            height="39"
            viewBox="0 0 132 39"
            fill="none"
          >
            ${this.fullLogoColorMarkup()}
            <g>
              <path
                class="st0"
                d="M129.51 7.55273C130.962 7.55273 132 8.57663 132 10.0101C132 11.4436 130.962 12.4675 129.51 12.4675C128.057 12.4675 127.019 11.4436 127.019 10.0101C127.019 8.57663 128.057 7.55273 129.51 7.55273ZM129.51 12.0579C130.755 12.0579 131.585 11.2388 131.585 10.0101C131.585 8.78141 130.755 7.96229 129.51 7.96229C128.264 7.96229 127.434 8.78141 127.434 10.0101C127.434 11.2388 128.264 12.0579 129.51 12.0579ZM128.472 8.67902H129.717C130.34 8.67902 130.755 9.08859 130.755 9.60054C130.755 10.0101 130.547 10.3173 130.132 10.4197L130.859 11.4436H130.028L129.406 10.4197H128.991V11.4436H128.368V8.67902H128.472ZM129.095 10.0101H129.613C129.925 10.0101 130.028 9.80532 130.028 9.60054C130.028 9.39576 129.821 9.19097 129.613 9.19097H129.095V10.0101Z"
              />
              <path
                class="st0"
                d="M101.802 12.4678C100.245 12.4678 98.7926 13.0821 97.8586 14.3108L97.6511 12.7749H95.5756V29.6693H98.0662V23.9354C98.7926 24.6522 100.245 25.1641 101.387 25.1641C104.708 25.1641 106.991 22.502 106.991 18.6112C106.991 14.9251 104.915 12.4678 101.802 12.4678ZM101.076 22.9115C99.9341 22.9115 98.7926 22.3996 98.1699 21.5805V17.9968C98.1699 15.949 99.4152 14.7203 101.283 14.7203C103.255 14.7203 104.5 16.2562 104.5 18.6112C104.5 21.2733 103.255 22.9115 101.076 22.9115ZM36.3208 8.47454V24.857H38.9151V19.1231H42.3397C45.868 19.1231 48.151 16.9729 48.151 13.7988C48.151 10.6247 45.7642 8.47454 42.3397 8.47454H36.3208ZM38.9151 10.6247H41.9246C44.2076 10.6247 45.5567 11.751 45.5567 13.7988C45.5567 15.8466 44.2076 16.9729 41.9246 16.9729H38.9151V10.6247ZM55.5189 12.5701C54.0661 12.5701 52.8208 13.1845 52.0944 14.3108L51.8869 12.7749H49.8114V24.7546H52.302V18.304C52.302 15.949 53.4435 14.7203 55.5189 14.7203C55.8303 14.7203 56.3491 14.8227 56.868 14.9251L57.1793 12.8773C56.6605 12.6725 56.1416 12.5701 55.5189 12.5701ZM60.3963 11.0343C61.3303 11.0343 61.9529 10.42 61.9529 9.49844C61.9529 8.57693 61.3303 7.96259 60.3963 7.96259C59.4623 7.96259 58.8397 8.57693 58.8397 9.49844C58.7359 10.42 59.4623 11.0343 60.3963 11.0343ZM61.5378 24.857V21.4781V12.8773H59.0472V24.857H61.5378ZM70.8775 12.4678C69.3208 12.4678 67.868 13.1845 66.934 14.3108L66.7265 12.7749H64.651V24.7546H67.1416V17.9968C67.1416 15.949 68.4907 14.6179 70.2548 14.6179C71.9152 14.6179 72.9529 15.6418 72.9529 17.2801V24.7546H75.4435V16.9729C75.5473 14.3108 73.6793 12.4678 70.8775 12.4678ZM83.6416 14.7203C84.6794 14.7203 85.8209 15.1299 86.7548 15.8466L87.8963 14.106C86.7548 13.1845 85.0945 12.5701 83.5378 12.5701C80.0095 12.5701 77.4152 15.2323 77.4152 18.8159C77.4152 22.6044 79.802 25.0617 83.4341 25.0617C85.0945 25.0617 86.8586 24.4474 87.8963 23.5259L86.7548 21.7853C85.8209 22.502 84.8869 22.9115 83.7454 22.9115C81.3586 22.9115 79.9058 21.3757 79.9058 18.8159C79.9058 16.3586 81.4624 14.7203 83.6416 14.7203ZM125.462 23.0139C124.632 23.0139 124.321 22.7068 124.321 21.6829V7.75781H121.83V22.0924C121.83 24.0378 122.972 25.0617 124.944 25.0617C125.462 25.0617 125.981 24.9593 126.396 24.857L126.189 22.9115C125.981 22.9115 125.67 23.0139 125.462 23.0139ZM91.3209 11.0343C92.2548 11.0343 92.8775 10.42 92.8775 9.49844C92.8775 8.57693 92.2548 7.96259 91.3209 7.96259C90.3869 7.96259 89.7643 8.57693 89.7643 9.49844C89.6605 10.42 90.3869 11.0343 91.3209 11.0343ZM92.4624 24.857V21.5805V12.8773H89.9718V24.857H92.4624ZM116.227 17.5873C115.5 17.3825 114.462 17.2801 113.528 17.2801C110.311 17.2801 108.444 18.8159 108.444 21.3757C108.444 23.6283 110.208 25.0617 112.906 25.0617C114.462 25.0617 115.708 24.4474 116.538 23.4235C116.849 24.4474 117.783 25.0617 119.028 25.0617C119.547 25.0617 120.066 24.9593 120.481 24.857L120.274 23.0139C120.066 23.0139 119.859 23.1163 119.651 23.1163C119.028 23.1163 118.821 22.8092 118.821 22.1948V16.9729C118.821 14.2084 116.953 12.5701 113.944 12.5701C112.491 12.5701 110.727 12.9797 109.274 13.6964L110 15.6418C111.038 15.0275 112.283 14.7203 113.528 14.7203C115.396 14.7203 116.434 15.5395 116.434 17.1777V17.5873H116.227ZM116.227 20.0446C116.227 21.99 115.085 23.1163 113.217 23.1163C111.764 23.1163 110.934 22.3996 110.934 21.1709C110.934 19.8398 112.076 19.0207 113.84 19.0207C114.774 19.0207 115.396 19.1231 116.227 19.2255V20.0446Z"
              />
              <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="5.11822"
                y1="32.3979"
                x2="22.565"
                y2="1.77081"
              >
                <stop stop-color="#0072BC" />
                <stop offset="0.5" stop-color="#238FCF" />
                <stop offset="1" stop-color="#00BED3" />
              </linearGradient>
              <path
                class="st1"
                d="M30.5095 13.4916C30.5095 6.2219 24.8019 1 16.9151 1C7.26416 1 0 8.47448 0 18.2015C0 28.4405 7.8868 36.9389 18.2642 37.8604V24.8569C13.4906 24.4473 10.1698 20.8637 10.1698 16.2561C10.1698 11.751 13.283 8.47448 17.434 8.47448C21.2736 8.47448 23.868 10.8294 23.868 14.4131C23.868 17.4848 21.8963 19.5326 18.2642 20.1469V24.9593C25.7359 24.6521 30.5095 20.1469 30.5095 13.4916Z"
              />
            </g></svg
        ></span>`
      : html`<svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 154 187"
          style="enable-background:new 0 0 154 187;"
          xml:space="preserve"
        >
          <style type="text/css">
            .logoPSymbol {
              fill: ${this.pLogoFills.find((fill) => fill.name === this.variant)
                ?.fill};
            }
          </style>
          <linearGradient
            id="SVG_ID_GRADIENT_P_SYMBOL_1_"
            gradientUnits="userSpaceOnUse"
            x1="28.6564"
            y1="157.3228"
            x2="114.4336"
            y2="8.7523"
          >
            <stop offset="0" style="stop-color:#0068A6" />
            <stop offset="0.5" style="stop-color:#0091DA" />
            <stop offset="1" style="stop-color:#00C4D9" />
          </linearGradient>
          <path
            class="logoPSymbol"
            d="M151.1,64.9c0-35.3-27.6-61.2-65.3-61.2C39.3,3.7,4.2,40,4.2,87.6c0,49.8,38.2,91.4,87.8,96v-63.4    c-23.2-2.2-39.2-19.3-39.2-42.1c0-22,14.8-38,35.1-38c18.6,0,31.2,11.6,31.2,28.8c0,15.2-9.7,25.2-27.1,27.8v23.5    C127.9,119.3,151.1,97.6,151.1,64.9z"
          />
        </svg>`;
  }
}
