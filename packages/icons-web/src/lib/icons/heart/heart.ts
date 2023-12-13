import { html } from 'lit';
import { createElement, Heart } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-heart')
export class PdsIconHeart extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Heart);
  }

  render() {
    return html`${this.icon}`;
  }
}
