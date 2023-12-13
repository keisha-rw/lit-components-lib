import { html } from 'lit';
import { createElement, Settings } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-settings')
export class PdsIconSettings extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Settings);
  }

  render() {
    return html`${this.icon}`;
  }
}
