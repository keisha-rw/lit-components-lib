import { html } from 'lit';
import { createElement, ThumbsUp } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-thumbs-up')
export class PdsIconThumbsUp extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ThumbsUp);
  }

  render() {
    return html`${this.icon}`;
  }
}
