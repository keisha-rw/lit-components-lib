import { html } from 'lit';
import { createElement, Filter } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-filter')
export class PdsIconFilter extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Filter);
  }

  render() {
    return html`${this.icon}`;
  }
}
