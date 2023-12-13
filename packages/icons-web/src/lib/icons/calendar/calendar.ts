import { html } from 'lit';
import { createElement, Calendar } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-calendar')
export class PdsIconCalendar extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Calendar);
  }

  render() {
    return html`${this.icon}`;
  }
}
