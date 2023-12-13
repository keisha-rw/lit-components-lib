import { html } from 'lit';
import { createElement, DollarSign } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-dollar-sign')
export class PdsIconDollarSign extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(DollarSign);
  }

  render() {
    return html`${this.icon}`;
  }
}
