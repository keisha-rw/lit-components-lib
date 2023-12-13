import { html } from 'lit';
import { createElement, Printer } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-printer')
export class PdsIconPrinter extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Printer);
  }

  render() {
    return html`${this.icon}`;
  }
}
