import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './system-docs.scss?inline';

@customElement('system-docs')
export class ColorTokens extends LitElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  firstUpdated() {
    // Prism.highlightAll();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`<div class="system-docs"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'system-docs': ColorTokens;
  }
}
