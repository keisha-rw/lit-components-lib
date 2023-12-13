import { html } from 'lit';
import { createElement, ChevronUp } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-chevron-up')
export class PdsIconChevronUp extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ChevronUp);
  }

  render() {
    return html`${this.icon}`;
  }
}
