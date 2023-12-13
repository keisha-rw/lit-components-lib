import { html } from 'lit';
import { createElement, ArrowLeft } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-arrow-left')
export class PdsIconArrowLeft extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ArrowLeft);
  }

  render() {
    return html`${this.icon}`;
  }
}
