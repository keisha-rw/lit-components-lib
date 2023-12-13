import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import '../linelength-container/linelength-container';
import lightDomStyles from './text-passage-light-dom.scss?inline';

/**
 * @summary A wrapping element to help apply text styles
 *
 * @slot default The content of the text passage
 */
@customElement('pds-text-passage', {
  category: 'component',
  type: 'component',
  styles: {},
})
export class PdsTextPassage extends PdsElement {
  /**
   * Add the light dom styles when this component is connected to a page
   */
  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    const lightDomExists = document.head.querySelector(
      '#pds-text-passage-styles',
    );

    if (!lightDomExists) {
      const lightDomStyle = document.createElement('style');
      lightDomStyle.id = 'pds-text-passage-styles';
      lightDomStyle.innerHTML = lightDomStyles.toString();
      document.head.appendChild(lightDomStyle);
    }
  }

  /**
   * - **default** default linelength cap
   * - **sm** small linelength cap
   * - **none** no linelength cap
   */
  @property()
  lineLength: 'sm' | 'none' | 'default' = 'default';

  /**
   * - **default** renders the text-passage with default body text size
   * - **sm** renders the text-passage with body text smaller than the default
   * - **lg** renders the text-passage with body text larger than the default
   */
  @property()
  size: 'sm' | 'lg' | 'default' = 'default';

  render() {
    const classes = {
      'pds-c-text-passage': true,
      [`pds-c-text-passage--${this.size}`]: !!this.size,
    };

    return html`<div class=${classMap(classes)} part="text-passage">
      ${this.lineLength === 'none'
        ? html`<slot></slot>`
        : html`<pds-linelength-container size="${this.lineLength}">
            <slot></slot>
          </pds-linelength-container>`}
    </div>`;
  }
}
