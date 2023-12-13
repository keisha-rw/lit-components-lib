import { customElement } from 'lit/decorators.js';
import type { PdsIcon } from '../lib/icons/PdsIcon';
import type { PdsCustomIcon } from '../lib/icons/PdsCustomIcon';

/**
 * The `pdsCustomIconElement` decorator is a wrapper around Lit's `customElement` decorator.
 * @param tagName
 *   The tagName of the custom element.
 *   The tagName should prefixed with `pds-`.
 */
export function pdsCustomIconElement(tagName: string) {
  return function pdsIconDecorator(
    constructor: typeof PdsIcon | typeof PdsCustomIcon,
  ) {
    if (customElements.get(tagName) === undefined) {
      customElement(tagName)(constructor);
    }
  };
}
