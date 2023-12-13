import { html } from 'lit';
import { createElement, CornerUpLeft } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-corner-up-left')
export class PdsIconCornerUpLeft extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(CornerUpLeft);
  }

  render() {
    return html`${this.icon}`;
  }
}
