import { html } from 'lit';
import { createElement, Loader } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-loader')
export class PdsIconLoader extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Loader);
  }

  render() {
    return html`${this.icon}`;
  }
}
