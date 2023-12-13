import { html } from 'lit';
import { createElement, PenSquare } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-pen-square')
export class PdsIconPenSquare extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(PenSquare);
  }

  render() {
    return html`${this.icon}`;
  }
}
