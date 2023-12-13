import { html } from 'lit';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsCustomIcon } from '../PdsCustomIcon';

@customElement('pds-icon-search')
export class PdsIconSearch extends PdsCustomIcon {
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
        d="M17.87 1.8333C9.47345 1.8333 2.66669 8.64006 2.66669 17.0366C2.66669 25.4332 9.47345 32.24 17.87 32.24C21.0404 32.24 23.9841 31.2696 26.4203 29.6096L34.4514 37.6883C35.1003 38.3411 36.1556 38.3442 36.8084 37.6953C37.4612 37.0463 37.4643 35.9911 36.8154 35.3383L28.9601 27.4363C31.511 24.7171 33.0734 21.0593 33.0734 17.0366C33.0734 8.64006 26.2666 1.8333 17.87 1.8333ZM6.00002 17.0366C6.00002 10.481 11.3144 5.16663 17.87 5.16663C24.4256 5.16663 29.74 10.481 29.74 17.0366C29.74 23.5922 24.4256 28.9066 17.87 28.9066C11.3144 28.9066 6.00002 23.5922 6.00002 17.0366Z"
        fill="${this.color}"
      />
    </svg>`;
  }
}
