import { html } from 'lit';
import { createElement, ZoomOut } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-zoom-out')
export class PdsIconZoomOut extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ZoomOut);
  }

  render() {
    return html`${this.icon}`;
  }
}
