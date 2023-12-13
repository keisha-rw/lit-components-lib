/* eslint-disable import/no-duplicates */
import { PropertyValueMap, html, isServer, nothing } from 'lit';
import {
  property,
  queryAssignedElements,
  state,
  query,
} from 'lit/decorators.js';
import { computePosition, offset, arrow } from '@floating-ui/dom';
import '@keisha/design-system-icons-web/chevron-down';
import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import { PdsSegmentedControlItem } from '../segmented-control-item/segmented-control-item';
import '../segmented-control-item/segmented-control-item';
import '../button/button';
import styles from './segmented-control.scss?inline';

/**
 * @summary pds-segmented-control component, allow users to select a single option from a list of exclusive options.
 *
 * @slot default Use this slot to pass the actual segments. Restricted to have <pds-segmented-control-item> elements.
 */
@customElement('pds-segmented-control', {
  category: 'component',
  type: 'component',
  styles,
})
export class PdsSegmentedControl extends PdsElement {
  /**
   * The size of the component.
   *
   * - **default**
   * - **sm** renders a the small version of the segmented-control
   */
  @property()
  size: 'sm' | 'default' = 'default';

  /** disabled segmented control */
  @property({ type: Boolean })
  disabled: boolean = false;

  /** aria-label for segmented control */
  @property()
  ariaLabel: string = 'segmented control';

  /** @internal */
  @state()
  activeSegment: PdsSegmentedControlItem;

  /** We need Segmented-control width for narrowContainer comparison
   * @internal
   */
  @property()
  controlWidth: number;

  /**
   * handles active state for trigger button
   * @internal
   */
  @state()
  isActive: boolean = false;

  /** @internal */
  @state()
  ResizeObserver =
    !isServer && window && window.ResizeObserver
      ? window.ResizeObserver
      : ResizeObserverPolyfill;

  /**
   * Listen for resize events on parent and checks if the parent is narrow in width
   *
   * @internal
   */
  // We can't actually call the observer, because Jest has no concept of element width
  /* istanbul ignore next */
  resizeObserver = new this.ResizeObserver((entries: any[]) => {
    entries.forEach(async () => this.getContainerSize());
  });

  /**
   * Indicates if the parent container in narrowr than segment-control width
   * @internal
   */
  @property()
  isNarrowContainer: boolean = false;

  /** @internal */
  @queryAssignedElements({
    slot: undefined,
    selector: 'pds-segmented-control-item',
  })
  segments: PdsSegmentedControlItem[];

  /**
   * The trigger button for narrow segmented-control
   * @internal
   */
  @query('pds-button')
  triggerButton: HTMLElement;

  /**
   * @internal
   * set the name and disabled property of the children segments
   * */
  setsegments() {
    this.segments.forEach((segment) => {
      // eslint-disable-next-line no-param-reassign
      segment.disabled = this.disabled;
      segment.setAttribute('size', this.size);
      // eslint-disable-next-line no-param-reassign
      segment.isNarrowContainer = this.isNarrowContainer;
    });
  }

  updateSegments() {
    this.segments.forEach((segment) => {
      // eslint-disable-next-line no-param-reassign
      segment.disabled = this.disabled;
      segment.setAttribute('size', this.size);
      // eslint-disable-next-line no-param-reassign
      segment.isNarrowContainer = this.isNarrowContainer;

      if (segment.isSegmentActive) {
        this.activeSegment = segment;
      }
    });

    const activeSegment = this.segments.find(
      (element) => element.isSegmentActive,
    );
    if (this.segments && !activeSegment) {
      this.segments[0].isSegmentActive = true;
    }
  }

  updateActiveSegment(e: Event) {
    const slot = this.shadowRoot?.querySelector('slot');
    if (e.target === e.currentTarget || e.target === slot) {
      return;
    }

    this.segments.forEach((segment) => {
      if (segment === e.target) {
        // eslint-disable-next-line no-param-reassign
        segment.isSegmentActive = true;
        this.activeSegment = segment;
      } else {
        // eslint-disable-next-line no-param-reassign
        segment.isSegmentActive = false;
      }
    });
  }

  /** Equates the width of children segments irrespective of uneven label sizes
   * @internal
   * */
  setCssCustomProps() {
    const segmentWidths = this.segments.map(
      (i: { offsetWidth: any }) => i.offsetWidth,
    );
    const maxWidth = Math.max(...segmentWidths);
    const { length } = this.segments;

    // Calculates the segmented control width including gaps and paddings
    this.controlWidth = maxWidth * length + 4 * (length + 1);

    this.style.setProperty('--pds-segments-width', `${maxWidth}px`);
  }

  /** slot validation
   * @internal
   * */
  handleSlotChange(e: Event) {
    this.handleSlotValidation(e);
    if (!this.isNarrowContainer) {
      this.setCssCustomProps();
    }
  }

  /**
   * if the parent container is not wide enough to accomodate segmented control
   * isNarrowContainer prop helps with the responsive design
   * @internal
   * */
  getContainerSize() {
    const hostElement = this;
    const { parentElement } = hostElement;
    if (parentElement) {
      this.isNarrowContainer =
        parentElement.clientWidth <= hostElement.controlWidth;
    }
  }

  /** handles active state for narrow containers to show and hide segment-panel
   * @internal
   * */
  handleTriggerActiveState() {
    this.isActive = !this.isActive;

    if (this.isNarrowContainer && this.isActive) {
      this.handlePanelPopUp();
    }
  }

  /** floating-UI changes for narrow containers
   * @internal
   * */
  handlePanelPopUp() {
    if (this.shadowRoot) {
      const floatingEl = this.shadowRoot.querySelector(
        `.${this.classEl('segments-panel')}`,
      ) as HTMLElement;

      const arrowEl = this.shadowRoot.querySelector(
        '.pds-c-segmented-control__arrow',
      ) as HTMLElement;

      if (this.triggerButton && floatingEl && arrowEl) {
        computePosition(this.triggerButton, floatingEl, {
          placement: 'bottom-start',
          middleware: [offset(38), arrow({ element: arrowEl })],
        }).then(({ x, y, middlewareData }) => {
          Object.assign(floatingEl.style, {
            left: `${x}px`,
            top: `${y}px`,
          });

          if (middlewareData.arrow) {
            const { x: arrowX } = middlewareData.arrow;

            Object.assign(arrowEl.style, {
              left: `${arrowX}px`,
              top: `${-arrowEl.offsetHeight / 2}px`,
            });
          }
        });
      }
    }
  }

  /**
   * Handle click outside the segment-panel
   * @internal
   */
  handleOnClickOutside(e: Event) {
    if (!this.isActive) {
      return;
    }

    if (this.triggerButton && e.composedPath().includes(this.triggerButton)) {
      return;
    }

    this.isActive = false;
  }

  firstUpdated() {
    this.setsegments();
    this.setWindowResizeHandler();
  }

  private handleClick(e: Event) {
    this.updateActiveSegment(e);
  }

  updated(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ) {
    if (
      changedProperties.has('isNarrowContainer') ||
      changedProperties.has('disabled') ||
      changedProperties.has('size')
    ) {
      this.updateSegments();
    }
    this.resizeObserver.observe(this.parentElement || this);
  }

  /**
   * Attach functions
   */
  connectedCallback() {
    super.connectedCallback();
    this.handleOnClickOutside = this.handleOnClickOutside.bind(this);

    document.addEventListener('mouseup', this.handleOnClickOutside, false);
  }

  /**
   * closes the segment-panel on escape
   * @internal
   */
  handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.isActive = false;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('mouseup', this.handleOnClickOutside, false);
  }

  /**
   * @internal
   * returns grouped segment-items markup
   */
  getGroupedSegmentsMarkup() {
    const segmentPanelClass = !this.isNarrowContainer
      ? this.getClass()
      : nothing;
    return html`<section
      role="region"
      class="${segmentPanelClass}"
      ?disabled=${this.disabled}
      @click=${this.handleClick}
      aria-label=${this.ariaLabel}
    >
      <slot
        class="${!this.isNarrowContainer ? this.classEl('segments') : nothing}"
        allowed-elements="pds-segmented-control-item"
        @slotchange=${this.handleSlotChange}
      ></slot>
    </section>`;
  }

  /**  @internal */
  get classNames() {
    return {
      'is-active': this.isActive,
      [this.size]: !!this.size,
      'is-disabled': this.disabled,
    };
  }

  render() {
    return this.isNarrowContainer
      ? html`<div class="${this.isActive ? 'pds-is-active' : nothing}">
          <pds-button
            role="button"
            isActive=${this.isActive ? true : nothing}
            ariaExpanded=${this.isActive}
            @click=${this.handleTriggerActiveState}
            ?disabled=${this.disabled}
            size=${this.size}
            ariaLabel=${this.ariaLabel}
            @keydown=${this.handleKeydown}
            >${this.activeSegment && this.activeSegment.textContent}
            <pds-icon-chevron-down size="sm" class="${this.classEl('icon')}">
            </pds-icon-chevron-down
          ></pds-button>
          <div
            class="${this.classEl('segments-panel')}"
            @keydown=${this.handleKeydown}
          >
            <div class="${this.classEl('arrow')}"></div>
            ${this.getGroupedSegmentsMarkup()}
          </div>
        </div>`
      : this.getGroupedSegmentsMarkup();
  }
}
