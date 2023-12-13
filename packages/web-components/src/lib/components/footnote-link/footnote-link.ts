import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsLink } from '../link/link';
import styles from './footnote-link.scss?inline';
import { required } from '../../decorators/required';

/**
 * @summary This component is meant to handle the superscript links that are used as a tie to a footnote.
 *
 * @slot default This gets auto-populated with the appropriate number for the footnote-link's position on the page.
 */
@customElement('pds-footnote-link', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsFootnoteLink extends PdsLink {
  /**
   * The ID used to link together the footnote-item and the footnote-link on the page. This has to match the ID of the footnote-item for it to work properly.
   * The text will be replaced with the index of the footnote
   */
  @required
  @property({ type: String })
  footnoteId: string;

  /**
   * - **default** renders link for basic action
   * - **inverted** used on a darker background
   */
  @property({ type: String })
  variant: 'default' | 'inverted' = 'default';

  /*
   * The number of the footnote.
   */
  @property({ type: String })
  footnoteNumber: string = '';

  updated() {
    this.handleFootnoteNumbering();
  }

  /**
   * Handle the footnote numbering by checking for a corresponding footnote-item
   * element and then assigning the index of the footnote-item to the link text
   *  @internal
   */
  handleFootnoteNumbering() {
    let footnote: Element | undefined;
    const footnotes = document.querySelectorAll('pds-footnote-item');
    // Bail early if we have no footnote items
    if (footnotes.length === 0) {
      return;
    }
    // Loop through each footnote item to see if there's one with a matching id
    footnotes.forEach((footnoteItem) => {
      if (footnoteItem.id === this.footnoteId) {
        footnote = footnoteItem;
      }
    });

    // Bail if we didn't find a matching footnote
    if (!footnote) {
      return;
    }
    // Get its parent to validate that it is a footnote element
    const parent = footnote.parentElement as HTMLElement;
    if (parent.tagName !== 'PDS-FOOTNOTE') {
      return;
    }
    // Get the index of the footnote
    const index = Array.prototype.indexOf.call(parent.children, footnote);
    // change the text to the index of the footnote
    if (this.footnoteNumber === '') {
      this.footnoteNumber = (index + 1).toString();
    }
  }

  render() {
    return html`<sup
      ><a
        class="${this.getClass()}"
        href=${ifDefined(this.href)}
        aria-label=${ifDefined(this.ariaLabel)}
        >${this.footnoteNumber}</a
      ></sup
    >`;
  }
}
