import { html } from 'lit';
import { createElement, Menu } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-menu')
export class PdsIconMenu extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Menu);
  }

  render() {
    return html`${this.icon}`;
  }
}
