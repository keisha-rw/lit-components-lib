import { html } from 'lit';
import { createElement, Lightbulb } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-lightbulb')
export class PdsIconLightbulb extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Lightbulb);
  }

  render() {
    return html`${this.icon}`;
  }
}
