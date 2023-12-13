import { html } from 'lit';
import { createElement, ZoomIn } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-zoom-in')
export class PdsIconZoomIn extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ZoomIn);
  }

  render() {
    return html`${this.icon}`;
  }
}
