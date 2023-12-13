import { html } from 'lit';
import { createElement, File } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-file')
export class PdsIconFile extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(File);
  }

  render() {
    return html`${this.icon}`;
  }
}
