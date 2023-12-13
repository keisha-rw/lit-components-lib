import { html } from 'lit';
import { createElement, X } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-x')
export class PdsIconX extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(X);
  }

  render() {
    return html`${this.icon}`;
  }
}
