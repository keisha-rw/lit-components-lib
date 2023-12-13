import { html } from 'lit';
import { createElement, ArrowUp } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-arrow-up')
export class PdsIconArrowUp extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ArrowUp);
  }

  render() {
    return html`${this.icon}`;
  }
}
