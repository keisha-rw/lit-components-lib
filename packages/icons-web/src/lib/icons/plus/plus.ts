import { html } from 'lit';
import { createElement, Plus } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-plus')
export class PdsIconPlus extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Plus);
  }

  render() {
    return html`${this.icon}`;
  }
}
