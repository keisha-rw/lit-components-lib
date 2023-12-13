import { html } from 'lit';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsCustomIcon } from '../PdsCustomIcon';

@customElement('pds-icon-youtube')
export class PdsIconYoutube extends PdsCustomIcon {
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
        d="M37.5689 11.1853C37.3583 10.407 36.9466 9.69781 36.3752 9.12899C35.8037 8.56017 35.0927 8.15174 34.3135 7.94471C31.4522 7.17825 19.992 7.17825 19.992 7.17825C19.992 7.17825 8.52797 7.17825 5.67461 7.94471C4.89802 8.15362 4.18997 8.56295 3.62141 9.1317C3.05284 9.70044 2.64372 10.4086 2.43505 11.1853C1.90643 14.0935 1.64951 17.0446 1.6676 20.0005C1.64914 22.9583 1.90606 25.9115 2.43505 28.8217C2.64388 29.5982 3.05306 30.3061 3.62162 30.8747C4.19017 31.4432 4.89814 31.8524 5.67461 32.0613C8.53195 32.8218 19.992 32.8218 19.992 32.8218C19.992 32.8218 31.4561 32.8218 34.3135 32.0553C35.0912 31.8494 35.8012 31.4429 36.3725 30.8765C36.9438 30.3101 37.3563 29.6036 37.5689 28.8276C38.0955 25.9172 38.3511 22.9641 38.3324 20.0065C38.3431 17.0491 38.0876 14.0968 37.5689 11.1853ZM16.3216 25.5027V14.5053L25.8467 20.0005L16.3216 25.5027Z"
        fill="${this.color}"
      />
    </svg>`;
  }
}
