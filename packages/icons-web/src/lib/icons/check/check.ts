import { html } from 'lit';
import { createElement, Check } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-check')
export class PdsIconCheck extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Check);
  }

  render() {
    return html`${this.icon}`;
  }
}
