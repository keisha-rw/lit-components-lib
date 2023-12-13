import { html } from 'lit';
import { createElement, EyeOff } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-eye-off')
export class PdsIconEyeOff extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(EyeOff);
  }

  render() {
    return html`${this.icon}`;
  }
}
