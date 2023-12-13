import { html } from 'lit';
import { createElement, RefreshCcw } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-refresh-ccw')
export class PdsIconRefreshCcw extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(RefreshCcw);
  }

  render() {
    return html`${this.icon}`;
  }
}
