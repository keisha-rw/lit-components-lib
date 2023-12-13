import { html } from 'lit';
import { createElement, HelpCircle } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-help-circle')
export class PdsIconHelpCircle extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(HelpCircle);
  }

  render() {
    return html`${this.icon}`;
  }
}
