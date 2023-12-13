import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture, html } from '@open-wc/testing';
import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { PdsModal } from './modal';
import createSnapshots from '../../../../test/utils/snapshots';

beforeAll(() => {
  // The native HTML dialog is not yet supported by jest. See:
  // https://github.com/jsdom/jsdom/issues/3294
  HTMLDialogElement.prototype.show = jest.fn(function mock(
    this: HTMLDialogElement,
  ) {
    this.open = true;
  });

  HTMLDialogElement.prototype.showModal = jest.fn(function mock(
    this: HTMLDialogElement,
  ) {
    this.open = true;
  });

  HTMLDialogElement.prototype.close = jest.fn(function mock(
    this: HTMLDialogElement,
  ) {
    this.open = false;
  });
});

initStoryshots({
  storyKindRegex: /Modal/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Modal unit tests', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await fixture(
      html`<pds-modal openOnLoad modalTitle="Modal heading">
        <pds-text-passage> Lorem ipsum </pds-text-passage>
        <pds-button variant="primary" slot="footer">Submit</pds-button>
      </pds-modal>`,
    );
  });

  it('is an instance of PdsModal', () => {
    expect(element).toBeInstanceOf(PdsModal);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('if language is Spanish, the aria-label on the close button should be in Spanish', async () => {
    const spanishModal = await fixture(
      html`<pds-modal modalTitle="Modal heading" lang="es">
        <pds-text-passage> Lorem ipsum </pds-text-passage>
        <pds-button variant="primary" slot="footer">Submit</pds-button>
      </pds-modal>`,
    );
    const closeButton = spanishModal.shadowRoot?.querySelector(
      '.pds-c-modal__close-button',
    ) as HTMLElement;
    const label = closeButton.getAttribute('ariaLabel');
    expect(label).toBe('cerrar');
  });

  it('has "openOnLoad" prop that makes the modal open on render', async () => {
    element = await fixture(
      html`<pds-modal openOnLoad modalTitle="Modal heading">
        <pds-text-passage> Lorem ipsum </pds-text-passage>
        <pds-button variant="primary" slot="footer">Submit</pds-button>
      </pds-modal>`,
    );
    const dialogEl = element.shadowRoot?.querySelector(
      'dialog',
    ) as HTMLDialogElement;
    const isOpen = dialogEl.getAttribute('open');
    expect(isOpen).toBe('');
  });

  it('should not contain class "close" after modal is closed', async () => {
    element = await fixture(
      html`<pds-modal openOnLoad modalTitle="Modal heading">
        <pds-text-passage> Lorem ipsum </pds-text-passage>
        <pds-button variant="primary" slot="footer">Submit</pds-button>
      </pds-modal>`,
    );
    const dialogEl = element.shadowRoot?.querySelector(
      'dialog',
    ) as HTMLDialogElement;
    const closeButton = element.shadowRoot?.querySelector(
      '.pds-c-modal__close-button',
    ) as HTMLElement;
    closeButton.click();
    // We need to manually fire animationend here because JSDOM has no concept of it
    const animationEndEvent = new Event('animationend');
    dialogEl.dispatchEvent(animationEndEvent);

    await waitFor(
      () => {
        expect(dialogEl.classList.contains('close')).toBe(false);
      },
      {
        timeout: 1000,
      },
    );
  });

  it('if hideCloseButton is true, there should be no close button present', async () => {
    const elementNoClose = await fixture(
      html`<pds-modal hideCloseButton modalTitle="Modal heading">
        <pds-text-passage>Lorem ipsum</pds-text-passage>
        <pds-button variant="primary" slot="footer">Submit</pds-button>
      </pds-modal>`,
    );
    const closeButton = elementNoClose.shadowRoot?.querySelector(
      '.pds-c-modal__close-button',
    ) as HTMLElement;
    expect(closeButton).toBeNull();
  });

  it('backdrop is clicked but there is no close button, modal will not close', async () => {
    const elementNoClose = (await fixture(
      html`<pds-modal hideCloseButton openOnLoad modalTitle="Modal heading">
        <pds-text-passage> Lorem ipsum </pds-text-passage>
        <pds-button variant="primary" slot="footer">Submit</pds-button>
      </pds-modal>`,
    )) as HTMLDialogElement;
    const modal = elementNoClose.shadowRoot?.querySelector(
      'dialog',
    ) as HTMLDialogElement;
    const isOpen = modal.getAttribute('open');

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.click(modal);
    await waitFor(
      () => {
        expect(isOpen).toBe('');
      },
      {
        timeout: 1000,
      },
    );
  });

  it('backdrop is clicked & modal can be closed', async () => {
    const modal = element.shadowRoot?.querySelector(
      'dialog',
    ) as HTMLDialogElement;
    const isOpen = modal.getAttribute('open');
    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.click(modal);
    await waitFor(
      () => {
        expect(isOpen).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('inside the modal dialog is clicked & modal can be closed, but it should not close', async () => {
    const modal = element.shadowRoot?.querySelector(
      'dialog',
    ) as HTMLDialogElement;
    const isOpen = modal.getAttribute('open');
    const insideModalArea = modal.shadowRoot?.querySelector(
      'pds-heading',
    ) as HTMLElement;
    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.click(insideModalArea);
    await waitFor(
      () => {
        expect(isOpen).toBe('');
      },
      {
        timeout: 1000,
      },
    );
  });
  it('Should be closed on escape keypress', async () => {
    const modal = element.shadowRoot?.querySelector(
      'dialog',
    ) as HTMLDialogElement;
    const isOpen = modal.getAttribute('open');
    modal.dispatchEvent(
      new KeyboardEvent('keydown', {
        code: 'Escape',
        key: 'Escape',
      }),
    );

    await waitFor(
      () => {
        expect(isOpen).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });
});
