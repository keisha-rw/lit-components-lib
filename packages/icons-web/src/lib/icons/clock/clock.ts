import { html } from 'lit';
import { createElement, Clock } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-clock')
export class PdsIconClock extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Clock);
  }

  render() {
    return html`${this.icon}`;
  }
}
