import { html } from 'lit';
import { createElement, Wrench } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-wrench')
export class PdsIconWrench extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Wrench);
  }

  render() {
    return html`${this.icon}`;
  }
}
