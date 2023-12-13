import { html } from 'lit';
import { localized, msg } from '@lit/localize';
import { query } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './loading-page.scss?inline';
import '../heading/heading';

/**
 * @summary This component renders a loading page
 */
@customElement('pds-loading-page', {
  category: 'component',
  type: 'component',
  styles,
})
@localized()
export class PdsLoadingPage extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  protected firstUpdated() {
    setTimeout(() => {
      this.content.setAttribute('data-show', 'true');
    }, 4000);
  }

  /**
   * This grabs the content div element
   * @internal
   */
  @query('.pds-c-loading-page__content')
  content: HTMLElement;

  /**
   * @internal
   */
  get classNames() {
    return {};
  }

  render() {
    return html`<div class=${this.getClass()}>
      <div class="${this.classEl('icon')}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          stroke="#0076CF"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44 7.33333C44 5.49238 42.5076 4 40.6667 4C38.8257 4 37.3333 5.49238 37.3333 7.33333V20.6667C37.3333 22.5076 38.8257 24 40.6667 24C42.5076 24 44 22.5076 44 20.6667V7.33333ZM44 60.6667C44 58.8257 42.5076 57.3333 40.6667 57.3333C38.8257 57.3333 37.3333 58.8257 37.3333 60.6667V74C37.3333 75.841 38.8257 77.3333 40.6667 77.3333C42.5076 77.3333 44 75.841 44 74V60.6667ZM14.743 14.743C16.0447 13.4412 18.1553 13.4412 19.457 14.743L28.8904 24.1763C30.1921 25.4781 30.1921 27.5886 28.8904 28.8904C27.5886 30.1921 25.4781 30.1921 24.1763 28.8904L14.743 19.457C13.4412 18.1553 13.4412 16.0447 14.743 14.743ZM57.157 52.443C55.8553 51.1412 53.7447 51.1412 52.443 52.443C51.1413 53.7447 51.1413 55.8553 52.443 57.157L61.8763 66.5904C63.1781 67.8921 65.2886 67.8921 66.5904 66.5904C67.8921 65.2886 67.8921 63.1781 66.5904 61.8763L57.157 52.443ZM4 40.6667C4 38.8257 5.49238 37.3333 7.33333 37.3333H20.6667C22.5076 37.3333 24 38.8257 24 40.6667C24 42.5076 22.5076 44 20.6667 44H7.33333C5.49238 44 4 42.5076 4 40.6667ZM60.6667 37.3333C58.8257 37.3333 57.3334 38.8257 57.3334 40.6667C57.3334 42.5076 58.8257 44 60.6667 44H74C75.841 44 77.3334 42.5076 77.3334 40.6667C77.3334 38.8257 75.841 37.3333 74 37.3333H60.6667ZM28.8904 52.443C30.1921 53.7447 30.1921 55.8553 28.8904 57.157L19.457 66.5904C18.1553 67.8921 16.0447 67.8921 14.743 66.5904C13.4412 65.2886 13.4412 63.1781 14.743 61.8763L24.1763 52.443C25.4781 51.1412 27.5886 51.1412 28.8904 52.443ZM66.5904 19.457C67.8921 18.1553 67.8921 16.0447 66.5904 14.743C65.2886 13.4412 63.1781 13.4412 61.8763 14.743L52.443 24.1763C51.1413 25.4781 51.1413 27.5886 52.443 28.8904C53.7447 30.1921 55.8553 30.1921 57.157 28.8904L66.5904 19.457Z"
            fill="#0076CF"
          />
        </svg>
      </div>
      <pds-heading
        headingTag="h1"
        variant="display-default"
        class="${this.classEl('heading')}"
      >
        ${msg('Hang on a moment...')}
      </pds-heading>
      <div class="${this.classEl('content')}">
        ${msg('Just a few more seconds!')}
      </div>
    </div>`;
  }
}
