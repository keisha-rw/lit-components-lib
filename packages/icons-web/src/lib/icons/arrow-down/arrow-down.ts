import { html } from 'lit';
import { createElement, ArrowDown } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-arrow-down')
export class PdsIconArrowDown extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ArrowDown);
  }

  render() {
    return html`${this.icon}`;
  }
}
