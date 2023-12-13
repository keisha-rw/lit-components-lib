import { html } from 'lit';
import { createElement, Copy } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-copy')
export class PdsIconCopy extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Copy);
  }

  render() {
    return html`${this.icon}`;
  }
}
