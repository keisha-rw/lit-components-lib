import { html } from 'lit';
import { createElement, ArrowRight } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-arrow-right')
export class PdsIconArrowRight extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ArrowRight);
  }

  render() {
    return html`${this.icon}`;
  }
}
