import { html } from 'lit';
import { createElement, Info } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-info')
export class PdsIconInfo extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Info);
  }

  render() {
    return html`${this.icon}`;
  }
}
