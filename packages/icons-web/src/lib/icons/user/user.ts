import { html } from 'lit';
import { createElement, User } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-user')
export class PdsIconUser extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(User);
  }

  render() {
    return html`${this.icon}`;
  }
}
