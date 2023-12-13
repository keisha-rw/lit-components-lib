import { html } from 'lit';
import { createElement, Pen } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-edit')
export class PdsIconEdit extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Pen);
  }

  render() {
    return html`${this.icon}`;
  }
}
