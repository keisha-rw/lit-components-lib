import { html } from 'lit';
import { createElement, CheckCircle } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-check-circle')
export class PdsIconCheckCircle extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(CheckCircle);
  }

  render() {
    return html`${this.icon}`;
  }
}
