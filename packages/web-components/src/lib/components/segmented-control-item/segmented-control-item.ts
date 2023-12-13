import '@keisha/design-system-icons-web/check';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './segmented-control-item.scss?inline';

/**
 * @summary A segmented-control-item which is a children component of pds-segmented-control
 *
 * @slot default Use this slot to pass label for segment
 *
 * @fires pds-segmented-control-item-click A custom event dispatched on click
 */
@customElement('pds-segmented-control-item', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsSegmentedControlItem extends PdsElement {
  /**
   * aria-label for segment.
   */
  @property()
  ariaLabel: string;

  /**
   * active segment
   */
  @property({ type: Boolean })
  isSegmentActive?: boolean;

  /**
   * @internal
   * - Renders the segmented-control-item as disabled
   */
  @property({
    type: Boolean,
  })
  disabled: boolean;

  /**
   * @internal
   */
  @property({ type: Boolean })
  isNarrowContainer?: boolean = false;

  /**
   * renders small segment
   * @internal
   */
  @property()
  size: 'sm' | 'default' = 'default';

  private handleClick() {
    const customEvent = new CustomEvent('pds-segmented-control-item-click', {
      bubbles: true,
      composed: true,
      detail: {
        summary: this.textContent,
      },
    });

    this.dispatchEvent(customEvent);
  }

  /** @internal */
  get classNames() {
    return {
      'is-disabled': this.disabled,
      'is-active': !!this.isSegmentActive,
      'narrow-container': !!this.isNarrowContainer,
      [this.size]: !!this.size,
    };
  }

  render() {
    return html`
      <button
        type="button"
        class="${this.getClass()}"
        aria-pressed=${this.isSegmentActive ? 'true' : false}
        aria-label=${this.ariaLabel || nothing}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `;
  }
}
