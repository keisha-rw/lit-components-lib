import { html } from 'lit';
import { createElement, PauseCircle } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-pause-circle')
export class PdsIconPauseCircle extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(PauseCircle);
  }

  render() {
    return html`${this.icon}`;
  }
}
