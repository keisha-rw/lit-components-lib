import { html } from 'lit';
import { createElement, Mail } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-mail')
export class PdsIconMail extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Mail);
  }

  render() {
    return html`${this.icon}`;
  }
}
