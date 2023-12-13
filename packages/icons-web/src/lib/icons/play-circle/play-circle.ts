import { html } from 'lit';
import { createElement, PlayCircle } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-play-circle')
export class PdsIconPlayCircle extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(PlayCircle);
  }

  render() {
    return html`${this.icon}`;
  }
}
