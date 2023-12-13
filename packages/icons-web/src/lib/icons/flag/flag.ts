import { html } from 'lit';
import { createElement, Flag } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-flag')
export class PdsIconFlag extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Flag);
  }

  render() {
    return html`${this.icon}`;
  }
}
