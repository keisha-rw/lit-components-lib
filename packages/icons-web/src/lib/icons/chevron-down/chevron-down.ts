import { html } from 'lit';
import { createElement, ChevronDown } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-chevron-down')
export class PdsIconChevronDown extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ChevronDown);
  }

  render() {
    return html`${this.icon}`;
  }
}
