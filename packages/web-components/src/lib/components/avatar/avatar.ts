import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './avatar.scss?inline';
import '../decorator/decorator';

/**
 * @summary An avatar image with descriptive text
 *
 * @slot media This slot holds a div containing an avatar image or icon
 * @slot heading This slot holds the heading elements
 * @slot details This slot holds the details elements
 */
@customElement('pds-avatar', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsAvatar extends PdsElement {
  /**
   * Style variant
   * - **color-bar** not supported with inverted="true" and/or align="center"
   */
  @property()
  variant: 'color-bar' | 'default' = 'default';

  @property({ type: Boolean })
  inverted: boolean = false;

  @property()
  align: 'center' | 'default' = 'default';

  /**
   * @internal
   */
  preflight() {
    if (this.variant === 'color-bar' && this.align === 'center') {
      console.warn(
        'Avatar with the color-bar variant cannot be used with align=center. Please remove the align property to remove this warning.',
        this,
      );
    }
    if (this.variant === 'color-bar' && this.inverted) {
      console.warn(
        'Avatar with the color-bar variant cannot be used with the inverted property. Please remove the inverted property to remove this warning.',
        this,
      );
    }
  }

  /**
   * @internal
   *
   * @returns pds-decorator for color-bar variant
   */
  colorBarVariant() {
    if (
      this.variant === 'color-bar' &&
      this.align !== 'center' &&
      this.inverted === false
    ) {
      return html`<pds-decorator></pds-decorator>`;
    }
    return nothing;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
      'align-center': this.align === 'center' && this.variant !== 'color-bar',
      inverted: this.inverted === true && this.variant !== 'color-bar',
    };
  }

  firstUpdated() {
    if (!this.inverted) {
      return;
    }

    const nodeList = this.renderRoot.querySelectorAll(`slot`);

    /**
     * loop through all slot children
     * and set pds-link variant to inverted
     */
    Array.from(nodeList).forEach((slot) =>
      slot.assignedElements({ flatten: true }).forEach((element) => {
        const links = Array.from(element.querySelectorAll('pds-link'));
        if (element.tagName.toLowerCase() === 'pds-link') {
          links.push(element);
        }
        links.forEach((link) => {
          link.setAttribute('variant', 'inverted');
        });
      }),
    );
  }

  render() {
    this.preflight();
    return html` ${this.colorBarVariant()}
      <div class=${this.getClass()}>
        <div class="${this.classEl('media')}">
          <slot name="media"></slot>
        </div>
        <div class="${this.classEl('info')}">
          <div class="${this.classEl('name')}">
            <slot name="heading"></slot>
          </div>
          <div class="${this.classEl('details')}">
            <slot name="details"></slot>
          </div>
        </div>
      </div>`;
  }
}
