import { html } from 'lit';
import { createElement, Calculator } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-calculator')
export class PdsIconCalculator extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Calculator);
  }

  render() {
    return html`${this.icon}`;
  }
}
