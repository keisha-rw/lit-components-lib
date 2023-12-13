import { html } from 'lit';
import { createElement, Star } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-star')
export class PdsIconStar extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Star);
  }

  render() {
    return html`${this.icon}`;
  }
}
