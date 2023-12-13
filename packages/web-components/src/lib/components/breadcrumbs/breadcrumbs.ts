import { localized, msg } from '@lit/localize';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import '../breadcrumbs-item/breadcrumbs-item';
import styles from './breadcrumbs.scss?inline';

/**
 * @summary Site breadcrumb
 *
 * @slot default One or more pds-breadcrumb-item elements
 */

@customElement('pds-breadcrumbs', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
@localized()
export class PdsBreadcrumbs extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  /**
   * ariaLabel
   */
  @property()
  ariaLabel: string;

  /**
   * @internal
   * If the user passes in a custom aria-label, that will be populated.
   * If not, the label will be automated and language localized.
   */
  getAriaLabel() {
    if (!this.ariaLabel) {
      const localizedAriaLabel = msg('breadcrumbs');
      return localizedAriaLabel;
    }
    return this.ariaLabel;
  }

  render() {
    return html`<nav
      class=${this.getClass()}
      aria-label="${this.getAriaLabel()}"
    >
      <ol class="${this.classEl('list')}" role="list">
        <slot></slot>
      </ol>
    </nav>`;
  }
}
