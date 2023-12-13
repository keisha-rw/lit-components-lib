import { html } from 'lit';
import { createElement, Bell } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-bell')
export class PdsIconBell extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Bell);
  }

  render() {
    return html`${this.icon}`;
  }
}
