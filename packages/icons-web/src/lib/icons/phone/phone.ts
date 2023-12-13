import { html } from 'lit';
import { createElement, Phone } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-phone')
export class PdsIconPhone extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Phone);
  }

  render() {
    return html`${this.icon}`;
  }
}
