import { html } from 'lit';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsCustomIcon } from '../PdsCustomIcon';

@customElement('pds-icon-facebook')
export class PdsIconFacebook extends PdsCustomIcon {
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
        d="M38.3333 20.1093C38.3327 16.6058 37.3282 13.176 35.4389 10.2256C33.5495 7.27534 30.8543 4.92817 27.6725 3.46199C24.4906 1.99581 20.9552 1.47202 17.4849 1.95264C14.0146 2.43326 10.7547 3.89815 8.09107 6.1739C5.42743 8.44965 3.47163 11.441 2.4552 14.7937C1.43877 18.1464 1.40428 21.7202 2.3558 25.092C3.30733 28.4637 5.20503 31.4922 7.82425 33.8189C10.4435 36.1457 13.6745 37.6732 17.1349 38.2207V25.4086H12.4771V20.1093H17.1349V16.07C17.1349 11.4751 19.8696 8.93731 24.0596 8.93731C25.4348 8.95637 26.8067 9.07595 28.1645 9.2951V13.8077H25.8532C25.4591 13.7556 25.0583 13.7929 24.6805 13.9166C24.3028 14.0404 23.9577 14.2476 23.6708 14.5228C23.384 14.7981 23.1627 15.1343 23.0234 15.5066C22.8841 15.8789 22.8303 16.2778 22.866 16.6737V20.1093H27.9509L27.1373 25.4086H22.8642V38.2207C27.1764 37.5371 31.1032 35.3377 33.9388 32.0178C36.7744 28.6979 38.3326 24.4753 38.3333 20.1093Z"
        fill="${this.color}"
      />
    </svg>`;
  }
}
