import { html } from 'lit';
import { createElement, ThumbsDown } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-thumbs-down')
export class PdsIconThumbsDown extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ThumbsDown);
  }

  render() {
    return html`${this.icon}`;
  }
}
