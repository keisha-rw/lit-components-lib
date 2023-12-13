import { html } from 'lit';
import { createElement, ChevronRight } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-chevron-right')
export class PdsIconChevronRight extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ChevronRight);
  }

  render() {
    return html`${this.icon}`;
  }
}
