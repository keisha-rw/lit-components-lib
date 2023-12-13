import { html } from 'lit';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsCustomIcon } from '../PdsCustomIcon';

@customElement('pds-icon-star-half')
export class PdsIconStarHalf extends PdsCustomIcon {
  render() {
    return html`<svg
      width=${this.getSize(this.size)}
      height=${this.getSize(this.size)}
      viewBox="0 0 40 40"
      fill="none"
      strokeWidth="2"
      aria-hidden="true"
      display="block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.4945 2.599C21.2137 2.03016 20.6344 1.67004 20 1.67004C19.3656 1.67004 18.7863 2.03016 18.5055 2.599L13.7429 12.2475L3.09229 13.8042C2.46469 13.896 1.94356 14.336 1.74793 14.9393C1.5523 15.5427 1.71609 16.2048 2.17045 16.6473L9.8758 24.1523L8.05733 34.755C7.95008 35.3803 8.20715 36.0123 8.72045 36.3851C9.23375 36.758 9.91423 36.8071 10.4758 36.5118L20 31.5031L29.5243 36.5118C30.0858 36.8071 30.7663 36.758 31.2796 36.3851C31.7929 36.0123 32.0499 35.3803 31.9427 34.755L30.1242 24.1523L37.8296 16.6473C38.2839 16.2048 38.4477 15.5427 38.2521 14.9393C38.0565 14.336 37.5353 13.896 36.9077 13.8042L26.2571 12.2475L21.4945 2.599ZM20 7.10213V27.9534C20.2665 27.9534 20.5329 28.0172 20.7758 28.1449L28.0864 31.9895L26.6907 23.8518C26.5979 23.3109 26.7773 22.759 27.1705 22.3761L33.086 16.6144L24.909 15.4192C24.3667 15.3399 23.8981 14.9992 23.6555 14.5078L20 7.10213Z"
        fill="${this.color}"
      />
    </svg>`;
  }
}
