import { html } from 'lit';
import { createElement, RefreshCw } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-refresh-cw')
export class PdsIconRefreshCw extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(RefreshCw);
  }

  render() {
    return html`${this.icon}`;
  }
}
