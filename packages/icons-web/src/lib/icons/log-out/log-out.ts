import { html } from 'lit';
import { createElement, LogOut } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-log-out')
export class PdsIconLogOut extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(LogOut);
  }

  render() {
    return html`${this.icon}`;
  }
}
