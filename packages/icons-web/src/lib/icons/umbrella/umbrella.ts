import { html } from 'lit';
import { createElement, Umbrella } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-umbrella')
export class PdsIconUmbrella extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Umbrella);
  }

  render() {
    return html`${this.icon}`;
  }
}
