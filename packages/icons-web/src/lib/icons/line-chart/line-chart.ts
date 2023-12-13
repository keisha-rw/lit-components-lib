import { html } from 'lit';
import { createElement, LineChart } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-line-chart')
export class PdsIconLineChart extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(LineChart);
  }

  render() {
    return html`${this.icon}`;
  }
}
