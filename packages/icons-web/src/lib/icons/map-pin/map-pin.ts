import { html } from 'lit';
import { createElement, MapPin } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-map-pin')
export class PdsIconMapPin extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(MapPin);
  }

  render() {
    return html`${this.icon}`;
  }
}
