import { html } from 'lit';
import { createElement, MoreHorizontal } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-more-horizontal')
export class PdsIconMoreHorizontal extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(MoreHorizontal);
  }

  render() {
    return html`${this.icon}`;
  }
}
