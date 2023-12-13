import { html } from 'lit';
import { createElement, ChevronLeft } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-chevron-left')
export class PdsIconChevronLeft extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ChevronLeft);
  }

  render() {
    return html`${this.icon}`;
  }
}
