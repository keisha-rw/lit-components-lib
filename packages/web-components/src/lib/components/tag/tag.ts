import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './tag.scss?inline';

/**
 * @summary This component renders a tag component which is an anchor element
 *
 * @slot default This slot holds the tag contents
 *
 * @fires pds-tag-click A custom event dispatched on click
 */
@customElement('pds-tag', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsTag extends PdsElement {
  @property({ type: String })
  href: string = '#';

  handleClick() {
    const customEvent = new CustomEvent('pds-tag-click', {
      bubbles: true,
      composed: true,
      detail: {
        summary: this.textContent,
      },
    });

    this.dispatchEvent(customEvent);
  }

  render() {
    return html`<a
      href=${this.href}
      class="pds-c-tag"
      @click=${this.handleClick}
      ><slot>Tag name</slot></a
    >`;
  }
}
