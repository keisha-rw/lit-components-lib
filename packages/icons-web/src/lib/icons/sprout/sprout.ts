import { html } from 'lit';
import { createElement, Sprout } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-sprout')
export class PdsIconSprout extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Sprout);
  }

  render() {
    return html`${this.icon}`;
  }
}
