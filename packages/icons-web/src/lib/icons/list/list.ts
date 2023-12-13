import { html } from 'lit';
import { createElement, List } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-list')
export class PdsIconList extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(List);
  }

  render() {
    return html`${this.icon}`;
  }
}
