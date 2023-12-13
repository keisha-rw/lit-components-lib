import { html } from 'lit';
import { createElement, ChevronsRight } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-chevrons-right')
export class PdsIconChevronsRight extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ChevronsRight);
  }

  render() {
    return html`${this.icon}`;
  }
}
