import { html } from 'lit';
import { createElement, LifeBuoy } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-life-buoy')
export class PdsIconLifeBuoy extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(LifeBuoy);
  }

  render() {
    return html`${this.icon}`;
  }
}
