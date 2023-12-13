import { html } from 'lit';
import { createElement, Download } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-download')
export class PdsIconDownload extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Download);
  }

  render() {
    return html`${this.icon}`;
  }
}
