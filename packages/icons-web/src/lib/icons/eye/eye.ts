import { html } from 'lit';
import { createElement, Eye } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-eye')
export class PdsIconEye extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Eye);
  }

  render() {
    return html`${this.icon}`;
  }
}
