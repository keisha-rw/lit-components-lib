import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsLink } from '../link/link';
import styles from './secondary-navigation-link.scss?inline';

/**
 * @summary This component is a link that is meant to only reside within secondary navigation
 * It should have all the same functionality as a normal link but is styled differently
 *
 * @see PdsLink
 */
@customElement('pds-secondary-navigation-link', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsSecondaryNavigationLink extends PdsLink {
  @property()
  variant: 'default';

  /**
   * Set to true for visual representation of the user's current page
   * If not set, logic in the secondary-navigation-level-two component
   * will determine if this is the active page by matching the href
   * to window.location.href
   */
  @property()
  activePage: boolean = false;

  /**
   * @internal
   */
  get classNames() {
    return {
      // @ts-ignore Lit is perfectly fine with this, but for some reason TS whines about it
      ...super.classNames,
      'active-page': !!this.activePage,
    };
  }

  firstUpdated(): void {
    // Catch the pds-link-click event on the link and dispatch a new event
    this.addEventListener('pds-link-click', (e: Event) => {
      e.stopPropagation();
      const customEvent = e as CustomEvent;

      this.dispatchEvent(
        new CustomEvent('pds-secondary-navigation-link-click', {
          bubbles: true,
          composed: true,
          detail: customEvent.detail,
        }),
      );
    });
  }
}
