import { html } from 'lit';
import { createElement, Sun } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-sun')
export class PdsIconSun extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Sun);
  }

  render() {
    return html`${this.icon}`;
  }
}
