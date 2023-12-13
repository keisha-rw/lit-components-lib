import { html } from 'lit';
import { createElement, ChevronsLeft } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-chevrons-left')
export class PdsIconChevronsLeft extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ChevronsLeft);
  }

  render() {
    return html`${this.icon}`;
  }
}
