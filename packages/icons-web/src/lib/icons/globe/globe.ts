import { html } from 'lit';
import { createElement, Globe } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-globe')
export class PdsIconGlobe extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Globe);
  }

  render() {
    return html`${this.icon}`;
  }
}
