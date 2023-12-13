import { html } from 'lit';
import { createElement, ShieldCheck } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-shield-check')
export class PdsIconShieldCheck extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ShieldCheck);
  }

  render() {
    return html`${this.icon}`;
  }
}
