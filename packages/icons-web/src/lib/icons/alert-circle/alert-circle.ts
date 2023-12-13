import { html, isServer } from 'lit';
import { createElement, AlertCircle } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-alert-circle')
export class PdsIconAlertCircle extends PdsIcon {
  createIconElement(): SVGElement {
    console.log('CALLING CREATE ELEMENT');
    console.log(isServer);
    console.log(typeof document);
    return createElement(AlertCircle);
  }

  render() {
    return html`${this.icon}`;
  }
}
