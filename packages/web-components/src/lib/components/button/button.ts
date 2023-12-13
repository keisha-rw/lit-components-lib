import { PropertyValueMap, html, isServer, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property, query, queryAssignedElements } from 'lit/decorators.js';
import '../../../element-internals-polyfill/element-internals-polyfill.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './button.scss?inline';

export type ButtonVariant =
  | 'default'
  | 'default-inverted'
  | 'primary'
  | 'primary-inverted'
  | 'icon'
  | 'icon-inverted';

const size = ['default', 'sm'] as const;
export type ButtonSize = (typeof size)[number];

/**
 * @summary A styled button element
 *
 * @slot default The contents of the button, restricted to pds-icon elements
 *
 * @fires pds-button-click A custom event dispatched on click
 */
@customElement('pds-button', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsButton extends PdsElement {
  /**
   * @internal
   */
  static formAssociated = true;

  /**
   * @internal
   */
  internals: ElementInternals;

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  /**
   * - **default** renders the button used for the most common calls to action that don't require as much visual attention.
   * - **default-inverted** renders a default button for use on darker backgrounds.
   * - **primary** renders the button used for the most important calls to action.
   * - **primary-inverted** renders a primary button for use on darker backgrounds.
   * - **icon** renders the button used for icon.
   * - **icon-inverted** renders the button for icons used on darker backgrounds.
   */
  @property()
  variant: ButtonVariant = 'default';

  /**
   * Small button
   */
  @property()
  size: ButtonSize = 'default';

  /**
   * Disabled button
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * FullWidth button
   */
  @property({ type: Boolean })
  fullWidth: boolean = false;

  /**
   * - **submit** specifies submit type button for form-data submit, default
   * - **reset** specifies reset type button for form-data reset
   * - **button** specifies clickable button type
   */
  @property({
    reflect: true,
  })
  type: 'submit' | 'reset' | 'button' = 'submit';

  /**
   * Render the button as a link variant
   *
   * - **default** renders link for basic action
   * - **emphasis** provide more affordance
   * - **inverted** used on a darker background
   * - **emphasis-inverted** more affordance on a darker background
   * - **icon-left** link with icon left
   * - **icon-right** link with icon right
   */
  @property()
  link:
    | 'default'
    | 'inverted'
    | 'emphasis'
    | 'emphasis-inverted'
    | 'icon-left'
    | 'icon-right'
    | '' = '';

  /**
   * Remove padding from link button. Default is false.
   */
  @property({ type: Boolean })
  removeLinkPadding: boolean = false;

  /**
   * Screen reader label for button
   */
  @property({ type: String })
  ariaLabel: string;

  /**
   * A space-separated list of element IDs that the button controls
   */
  @property({ type: String })
  ariaControls: string;

  /**
   * An element ID which identifies the element (or elements) that describes the element on which the attribute is set.
   */
  @property({ type: String })
  ariaDescribedby: string;

  /**
   * This is a faux focus effect to show the effect of being focused without
   * actually being focused.
   */
  @property({ type: Boolean })
  isActive: boolean = false;

  /**
   * @internal
   */
  @query('button')
  button: HTMLButtonElement;

  /**
   * This grabs the iconLeft slot
   * @internal
   */
  @queryAssignedElements({ slot: 'icon-left' })
  iconLeftList: HTMLElement[];

  /**
   * This grabs the iconRight slot
   * @internal
   */
  @queryAssignedElements({ slot: 'icon-right' })
  iconRightList: HTMLElement[];

  handleSlotChange(e: Event) {
    this.handleSlotValidation(e);
    this.addSizeToButtonIcon();
  }

  /**
   * This grabs the content from the default slot
   * @internal
   */
  @queryAssignedElements({ slot: undefined })
  defaultSlotElements: HTMLElement[];

  addSizeToButtonIcon() {
    const icons = [
      ...this.iconLeftList,
      ...this.iconRightList,
      ...this.defaultSlotElements,
    ];
    if (icons && icons.length) {
      icons.forEach((icon) => {
        if (icon.tagName.toLowerCase().includes('pds-icon')) {
          if (this.variant === 'icon' || this.variant === 'icon-inverted') {
            if (size.includes(this.size)) {
              icon.setAttribute('size', this.size === 'sm' ? 'default' : 'lg');
            } else {
              icon.setAttribute('size', 'lg');
            }
          } else if (size.includes(this.size)) {
            icon.setAttribute('size', this.size);
          } else {
            icon.setAttribute('size', 'default');
          }
        }
      });
    }
  }

  private handleClick(e: MouseEvent) {
    let eventMessage;

    if (this.textContent?.trim() === '') {
      eventMessage = this.ariaLabel;
    } else {
      eventMessage = this.textContent;
    }

    const customEvent = new CustomEvent('pds-button-click', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        summary: eventMessage,
      },
    });

    this.dispatchEvent(customEvent);

    if (customEvent.defaultPrevented) {
      e.preventDefault();
    } else {
      this.submitOrResetAssociatedForm();
    }
  }

  private handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.submitOrResetAssociatedForm();
    }
  }

  private submitOrResetAssociatedForm() {
    // Needed for submit and reset buttons
    if (this.type === 'submit') {
      // Older versions of Safari don't support the requestSubmit method
      if (this.internals.form?.requestSubmit) {
        this.internals.form.requestSubmit();
      } else {
        this.internals.form?.submit();
      }
    }

    if (this.type === 'reset') {
      this.internals.form?.reset();
    }
  }

  /**
   * @internal
   *
   * @returns boolean indicating whether or not button has valid screen readable text associated
   */
  verifyAria() {
    const hasLabel = !!this.ariaLabel || !!this.textContent?.trim();

    if (!isServer && !hasLabel) {
      console.error(
        'Button text is required as an ariaLabel property or as a slot in <%s /> but is undefined on: %o',
        this.tagName.toLowerCase(),
        this,
      );
    }

    return hasLabel;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
      sm: this.size === 'sm',
      'is-active': this.isActive,
      link: !!this.link,
      [`link-${this.link}`]: !!this.link,
      'remove-link-padding': this.removeLinkPadding,
      fullWidth: this.fullWidth === true,
    };
  }

  updated(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    this.addSizeToButtonIcon();

    if (changedProperties.has('disabled') && this.disabled) {
      this.isActive = false;
    }
  }

  render() {
    if (!this.verifyAria()) {
      return nothing;
    }

    return html`<button
      class=${this.getClass()}
      ?disabled=${this.disabled}
      part="button"
      aria-label=${ifDefined(this.ariaLabel)}
      aria-controls=${ifDefined(this.ariaControls)}
      aria-expanded=${ifDefined(this.ariaExpanded)}
      aria-describedby=${ifDefined(this.ariaDescribedby)}
      type=${this.type}
      @click=${this.handleClick}
      @keydown=${this.handleKeydown}
    >
      ${this.slotNotEmpty('icon-left')
        ? html`<slot
            allowed-elements="pds-icon"
            name="icon-left"
            @slotchange=${this.handleSlotChange}
          ></slot>`
        : ''}
      <slot @slotchange=${this.handleSlotChange}></slot>
      ${this.slotNotEmpty('icon-right')
        ? html`<slot
            allowed-elements="pds-icon"
            name="icon-right"
            @slotchange=${this.handleSlotChange}
          ></slot>`
        : ''}
    </button>`;
  }
}
