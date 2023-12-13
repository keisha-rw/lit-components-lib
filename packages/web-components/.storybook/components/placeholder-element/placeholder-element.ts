import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './placeholder-element.scss?inline';

@customElement('placeholder-element')
export class PLACEHOLDERELEMENT extends LitElement {
  static get styles() {
    return unsafeCSS(styles.toString().replace(':root', ':host'));
  }

  @property()
  styleModifier?: string;

  @property()
  inlineStyle?: string;

  @property()
  tight?: boolean;

  render() {
    return html`
      <div
        class="placeholder-element ${this.styleModifier}${this.tight
          ? ' placeholder-element--tight'
          : ''}"
        style="${this.inlineStyle}"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'placeholder-element': PLACEHOLDERELEMENT;
  }
}
