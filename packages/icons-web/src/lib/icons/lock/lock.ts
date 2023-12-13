import { html } from 'lit';
import { createElement, Lock } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-lock')
export class PdsIconLock extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(Lock);
  }

  render() {
    return html`${this.icon}`;
  }
}
