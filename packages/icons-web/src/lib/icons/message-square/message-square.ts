import { html } from 'lit';
import { createElement, MessageSquare } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-message-square')
export class PdsIconMessageSquare extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(MessageSquare);
  }

  render() {
    return html`${this.icon}`;
  }
}
