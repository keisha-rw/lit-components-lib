import { html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { localized, msg } from '@lit/localize';
import * as focusTrap from 'focus-trap'; // ESM
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import { required } from '../../decorators/required';
import styles from './modal.scss?inline';
import '../heading/heading';
import '../button/button';
import '@keisha/design-system-icons-web/x';

/**
 * @summary The modal component provides the user with a focused way of acknowledging, confirming, or viewing information without leaving a screen or page.
 *
 * @slot default This holds the main text contents within the modal
 * @slot footer This holds the optional call to action element within the bottom of the modal
 */
@customElement('pds-modal', {
  category: 'component',
  type: 'component',
  styles,
})
@localized()
export class PdsModal extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  /**
   * If true, modal appears open on page load.
   * Otherwise, modal should be triggered from another element.
   */
  @property({ type: Boolean })
  openOnLoad: boolean = false;

  /**
   * - **default** renders a default size modal
   * - **lg** renders a wider modal
   * If no size is passed in, it will be set as `default`
   */
  @property()
  size: 'default' | 'lg' = 'default';

  /**
   * Removes the close button so a user has to agree to something in the modal
   * This should only be used on rare occasions
   * Setting this to true will also restrict the modal from closing with the keyboard
   */
  @property({ type: Boolean })
  hideCloseButton = false;

  /**
   * @internal
   */
  @state()
  trap: any;

  /**
   * Title of the modal to be displayed
   */
  @required
  @property()
  modalTitle: string;

  /**
   * Label for modal accesibility
   */
  @property()
  ariaLabelledBy: string = 'modal';

  @query('dialog')
  dialog: HTMLDialogElement;

  /**
   * @internal
   * Fallback focus element
   */
  @query('pds-heading')
  headingForFallbackFocus: HTMLElement;

  firstUpdated() {
    if (this.openOnLoad) {
      this.openModal();
    }
  }

  /**
   * @internal
   * Initialize the focus trap
   */
  initializeTrap() {
    this.trap = focusTrap.createFocusTrap(this.dialog, {
      initialFocus: this.dialog,
      fallbackFocus: this.headingForFallbackFocus,
      allowOutsideClick: true,
      tabbableOptions: {
        getShadowRoot: true,
      },
    });
  }

  openModal() {
    this.dialog.showModal();
    this.initializeTrap();
    this.trap.activate();

    const event = new Event('pds-modal-open', {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);

    // if there is a close button, modal can be closed on backdrop click
    if (!this.hideCloseButton) {
      this.dialog.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target?.nodeName === 'DIALOG') {
          this.closeModal(e);
        }
      });
    }
  }

  closeModal(e: KeyboardEvent | MouseEvent) {
    // Add class to run the modal-fade-out animation on close
    this.dialog.classList.add('close');

    this.dialog.addEventListener(
      'animationend',
      () => {
        this.dialog.classList.remove('close');
        this.dialog.close();
        this.trap.deactivate();
      },
      { once: true },
    );

    e.preventDefault();

    const event = new Event('pds-modal-close', {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }

  handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.closeModal(e);
    }
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      [`${this.size}`]: !!this.size,
    };
  }

  render() {
    return html`<dialog
      class=${this.getClass()}
      role="dialog"
      aria-modal="true"
      aria-labelledby=${this.ariaLabelledBy}
      @keydown=${this.handleKeydown}
    >
      <div class="pds-c-modal__wrapper">
        ${
          !this.hideCloseButton
            ? html`<pds-button
                class="pds-c-modal__close-button"
                variant="icon"
                ariaLabel="${msg('close')}"
                @click=${this.closeModal}
              >
                <pds-icon-x></pds-icon-x>
              </pds-button>`
            : nothing
        }
        <div class="pds-c-modal__content">
        <div class="pds-c-modal__header" id="${this.ariaLabelledBy}">
          <pds-heading class="pds-c-modal__heading" headingTag="h2" tabindex="-1" variant="title-xs"
            >${this.modalTitle}</pds-heading
          >
        </div>
        <div class="pds-c-modal__body">
          <slot></slot>
        </div>
        ${
          this.slotNotEmpty('footer') &&
          html`<div class="pds-c-modal__footer">
            <slot name="footer"></slot></div>
          </div>`
        }
      </div>
    </dialog>`;
  }
}
