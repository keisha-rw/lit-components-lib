import { html } from 'lit';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsCustomIcon } from '../PdsCustomIcon';

@customElement('pds-icon-area-chart')
export class PdsIconAreaChart extends PdsCustomIcon {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.16602 2.66602C4.99444 2.66602 5.66602 3.33759 5.66602 4.16602V34.332H35.832C36.6604 34.332 37.332 35.0036 37.332 35.832C37.332 36.6604 36.6604 37.332 35.832 37.332H4.16602C3.33759 37.332 2.66602 36.6604 2.66602 35.832V4.16602C2.66602 3.33759 3.33759 2.66602 4.16602 2.66602Z"
        fill="${this.color}"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34.7337 7.77757C35.2976 8.00813 35.666 8.55681 35.666 9.166V27.5C35.666 28.3284 34.9945 29 34.166 29H10.832C10.0036 29 9.33203 28.3284 9.33203 27.5V22.166C9.33203 21.787 9.47549 21.4221 9.73357 21.1445L18.5676 11.6445C18.8475 11.3435 19.2388 11.1705 19.6499 11.1661C20.0611 11.1617 20.456 11.3262 20.7423 11.6212L25.1722 16.1848L33.0957 8.11508C33.5225 7.6804 34.1698 7.54702 34.7337 7.77757ZM32.666 12.8346L26.2363 19.3829C25.9532 19.6712 25.5658 19.8332 25.1617 19.832C24.7577 19.8308 24.3712 19.6667 24.0897 19.3768L19.6894 14.8436L12.332 22.7557V26H32.666V12.8346Z"
        fill="${this.color}"
      />
    </svg>`;
  }
}
