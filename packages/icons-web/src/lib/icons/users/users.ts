import { html } from 'lit';
import { createElement, Users } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-users')
export class PdsIconUsers extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Users);
  }

  render() {
    return html`${this.icon}`;
  }
}
