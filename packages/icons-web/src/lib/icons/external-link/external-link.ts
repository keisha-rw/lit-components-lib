import { html } from 'lit';
import { createElement, ExternalLink } from 'lucide';
import { pdsCustomIconElement as customElement } from '../../../decorators/pds-icon';
import { PdsIcon } from '../PdsIcon';

@customElement('pds-icon-external-link')
export class PdsIconExternalLink extends PdsIcon {
  createIconElement(): SVGElement {
    return createElement(ExternalLink);
  }

  render() {
    return html`${this.icon}`;
  }
}
