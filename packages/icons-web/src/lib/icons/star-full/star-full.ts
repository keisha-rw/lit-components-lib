import { html } from 'lit';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsCustomIcon } from '../PdsCustomIcon';

@customElement('pds-icon-star-full')
export class PdsIconStarFull extends PdsCustomIcon {
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
        d="M21.4945 2.59546C21.2137 2.02662 20.6344 1.6665 20 1.6665C19.3656 1.6665 18.7863 2.02662 18.5055 2.59546L13.7429 12.2439L3.09229 13.8007C2.46469 13.8924 1.94356 14.3324 1.74793 14.9358C1.5523 15.5391 1.71609 16.2012 2.17045 16.6438L9.8758 24.1488L8.05733 34.7514C7.95008 35.3767 8.20715 36.0087 8.72045 36.3816C9.23375 36.7545 9.91423 36.8036 10.4758 36.5083L20 31.4996L29.5243 36.5083C30.0858 36.8036 30.7663 36.7545 31.2796 36.3816C31.7929 36.0087 32.0499 35.3767 31.9427 34.7514L30.1242 24.1488L37.8296 16.6438C38.2839 16.2012 38.4477 15.5391 38.2521 14.9358C38.0565 14.3324 37.5353 13.8924 36.9077 13.8007L26.2571 12.2439L21.4945 2.59546Z"
        fill="${this.color}"
      />
    </svg>`;
  }
}
