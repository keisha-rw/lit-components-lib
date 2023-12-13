import { html } from 'lit';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsCustomIcon } from '../PdsCustomIcon';

@customElement('pds-icon-image')
export class PdsIconImage extends PdsCustomIcon {
  render() {
    return html`<svg
      width="${this.getSize(this.size)}"
      height="${this.getSize(this.size)}"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      display="block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.54175 12.8333C9.54175 10.5552 11.3886 8.70833 13.6667 8.70833C15.9449 8.70833 17.7917 10.5552 17.7917 12.8333C17.7917 15.1115 15.9449 16.9583 13.6667 16.9583C11.3886 16.9583 9.54175 15.1115 9.54175 12.8333ZM13.6667 11.9583C13.1835 11.9583 12.7917 12.3501 12.7917 12.8333C12.7917 13.3166 13.1835 13.7083 13.6667 13.7083C14.15 13.7083 14.5417 13.3166 14.5417 12.8333C14.5417 12.3501 14.15 11.9583 13.6667 11.9583Z"
        fill="${this.color}"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.6295 14.2922C25.3659 13.7474 24.8212 13.3942 24.2162 13.3758C23.6112 13.3573 23.0461 13.6767 22.7498 14.2045L18.6862 21.4428L17.5007 19.7387C17.1987 19.3046 16.7044 19.0446 16.1756 19.0417C15.6467 19.0388 15.1496 19.2935 14.8429 19.7243L7.84292 29.5576C7.49019 30.0531 7.4437 30.7041 7.72245 31.2447C8.0012 31.7853 8.55852 32.125 9.16675 32.125H31.6668C32.2262 32.125 32.7463 31.8372 33.0435 31.3633C33.3407 30.8893 33.3732 30.2958 33.1295 29.7922L25.6295 14.2922ZM20.2504 25.2955L24.0599 18.5099L29.0752 28.875H12.3182L16.1514 23.4902L17.4994 25.428C17.8191 25.8874 18.3526 26.15 18.9116 26.1231C19.4706 26.0962 19.9764 25.7835 20.2504 25.2955Z"
        fill="${this.color}"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.70825 8.33333C3.70825 5.60254 5.93579 3.375 8.66658 3.375H31.9999C34.7307 3.375 36.9583 5.60254 36.9583 8.33333V31.6667C36.9583 34.3975 34.7307 36.625 31.9999 36.625H8.66658C5.93579 36.625 3.70825 34.3975 3.70825 31.6667V8.33333ZM8.66658 6.625C7.73071 6.625 6.95825 7.39746 6.95825 8.33333V31.6667C6.95825 32.6025 7.73071 33.375 8.66658 33.375H31.9999C32.9358 33.375 33.7083 32.6025 33.7083 31.6667V8.33333C33.7083 7.39746 32.9358 6.625 31.9999 6.625H8.66658Z"
        fill="${this.color}"
      />
    </svg> `;
  }
}