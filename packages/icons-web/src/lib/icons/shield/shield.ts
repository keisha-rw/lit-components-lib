import { html } from 'lit';
import { createElement, Shield } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-shield')
export class PdsIconShield extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Shield);
  }

  render() {
    return html`${this.icon}`;
  }
}
