import { html } from 'lit';
import {
  property,
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import {
  computePosition,
  autoUpdate,
  shift,
  arrow,
  offset,
  size,
} from '@floating-ui/dom';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './tooltip.scss?inline';

/**
 * @summary This component provides a tooltip when a user hovers or focuses on an icon
 *
 * @slot default Provides the inner contents of the tooltip
 * @slot trigger This slot contains the element from which the tooltip is triggered
 */
@customElement('pds-tooltip', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsTooltip extends PdsElement {
  /**
   * Style variant
   * - **default** renders the standard variant, with dark-colored tooltips.
   * - **subtle** renders the subtle variant, with light-colored tooltips.
   */
  @property()
  variant: 'default' | 'subtle' = 'default';

  /**
   * Position for tooltip
   * - **top** renders the tooltip at top.
   * - **right** renders the tooltip at right.
   * - **bottom** renders the tooltip at bottom.
   * - **left** renders the tooltip at left.
   */
  @property()
  placement: 'top' | 'right' | 'bottom' | 'left' = 'top';

  /**
   * This grabs the span element of the tooltip container
   * @internal
   */
  @query('.pds-c-tooltip__tooltip')
  tooltip: HTMLDivElement;

  /**
   * This grabs the div element of the tooltip arrow
   * @internal
   */
  @query('.pds-c-tooltip__arrow')
  tooltipArrow: HTMLElement;

  /**
   * This grabs the tooltip trigger element
   * @internal
   */
  @queryAssignedElements({ slot: 'trigger' })
  trigger: HTMLElement[];

  /**
   * @internal
   */
  @state()
  contentHasFocus: boolean = false;

  createInstance() {
    const button = this.trigger[0];
    if (button) {
      const arrowLen = this.tooltipArrow.offsetWidth;

      // Get double the arrow box's diagonal length
      const floatingOffset = Math.round(Math.sqrt(2 * arrowLen ** 2) * 2);
      const tooltipEl = this.tooltip;
      autoUpdate(button, this.tooltip, () => {
        computePosition(button, this.tooltip, {
          placement: this.placement,
          middleware: [
            offset(floatingOffset),
            shift(),
            arrow({ element: this.tooltipArrow }),
            size({
              apply({ availableWidth }) {
                Object.assign(tooltipEl.style, {
                  maxWidth: `${availableWidth}px`,
                });
              },
            }),
          ],
        }).then(({ x, y, middlewareData }) => {
          Object.assign(this.tooltip.style, {
            left: `${x}px`,
            top: `${y}px`,
          });

          const staticSide: any = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
          }[this.placement];

          const borderName: any = `border${
            staticSide.charAt(0).toUpperCase() + staticSide.slice(1)
          }Width`;

          let borderWidth: any = parseFloat(
            getComputedStyle(this.tooltipArrow)[borderName].slice(0, -2),
          );

          if (
            this.variant === 'subtle' &&
            (this.placement === 'bottom' || this.placement === 'left')
          ) {
            borderWidth -= 0.2;
          }

          if (middlewareData.arrow) {
            const { x: arrowX, y: arrowY } = middlewareData.arrow;
            Object.assign(this.tooltipArrow.style, {
              left: arrowX != null ? `${arrowX}px` : '',
              top: arrowY != null ? `${arrowY - 4}px` : '',
              right: '',
              bottom: '',
              [staticSide]:
                this.variant === 'subtle'
                  ? `${-arrowLen / 2 - borderWidth}px`
                  : `${-arrowLen / 2}px`,
            });
          }
        });
      });
    }
  }

  show() {
    // Make the tooltip visible
    this.tooltip.setAttribute('data-show', '');
    this.tooltipArrow.setAttribute('aria-expanded', 'true');
    this.createInstance();
  }

  hide() {
    // Hide the tooltip
    this.tooltip.removeAttribute('data-show');
    this.tooltipArrow.setAttribute('aria-expanded', 'false');
  }

  firstUpdated() {
    const trigger = this.trigger[0];
    const showEvents = ['mouseenter', 'focus'];
    const toggleEvents = ['touchstart'];
    const leaveEvents = ['mouseleave', 'blur'];

    showEvents.forEach((event) => {
      trigger.addEventListener(event, () => {
        this.show();
      });
      this.tooltip.addEventListener(event, () => {
        this.contentHasFocus = true;
      });
    });

    leaveEvents.forEach((event) => {
      this.tooltip.addEventListener(event, () => {
        this.contentHasFocus = false;
        this.hide();
        trigger.blur();
      });
      trigger.addEventListener(event, () => {
        setTimeout(() => {
          if (!this.contentHasFocus) {
            this.hide();
            trigger.blur();
          }
        }, 200);
      });
    });

    toggleEvents.forEach((event) => {
      trigger.addEventListener(event, () => {
        this.handleToggle();
      });
    });

    // keybord nav, hide tooltip if esc is pressed
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hide();
        trigger.blur();
      }
    });
  }

  handleToggle() {
    if (this.tooltip.hasAttribute('data-show')) {
      this.hide();
    } else {
      this.show();
    }
  }

  handleTriggerSlotChange() {
    this.trigger[0].setAttribute('ariaDescribedby', 'tooltip-content');
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
    };
  }

  render() {
    return html`<div class=${this.getClass()} role="tooltip">
      <slot
        name="trigger"
        @slotchange=${this.handleTriggerSlotChange}
        class=${this.classEl('trigger')}
      ></slot>
      <div id="tooltip-content" class="${this.classEl('tooltip')}">
        <slot></slot>
        <div
          class="${this.classEl('arrow')} ${this.classEl('arrow')}--${this
            .placement}"
        ></div>
      </div>
    </div> `;
  }
}
