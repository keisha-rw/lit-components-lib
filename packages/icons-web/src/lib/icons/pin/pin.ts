import { html } from 'lit';
import { createElement, Pin } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-pin')
export class PdsIconPin extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Pin);
  }

  render() {
    return html`${this.icon}`;
  }
}
