import { html } from 'lit';
import { createElement, Upload } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-upload')
export class PdsIconUpload extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Upload);
  }

  render() {
    return html`${this.icon}`;
  }
}
