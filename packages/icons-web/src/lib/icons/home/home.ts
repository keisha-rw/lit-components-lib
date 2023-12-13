import { html } from 'lit';
import { createElement, Home } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-home')
export class PdsIconHome extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Home);
  }

  render() {
    return html`${this.icon}`;
  }
}
