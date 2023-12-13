import { html } from 'lit';
import { createElement, AlertTriangle } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-alert-triangle')
export class PdsIconAlertTriangle extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(AlertTriangle);
  }

  render() {
    return html`${this.icon}`;
  }
}
