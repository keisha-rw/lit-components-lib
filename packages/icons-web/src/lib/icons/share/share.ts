import { html } from 'lit';
import { createElement, Share } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-share')
export class PdsIconShare extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Share);
  }

  render() {
    return html`${this.icon}`;
  }
}
