import { html } from 'lit';
import { createElement, Trash2 } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-trash')
export class PdsIconTrash extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Trash2);
  }

  render() {
    return html`${this.icon}`;
  }
}
