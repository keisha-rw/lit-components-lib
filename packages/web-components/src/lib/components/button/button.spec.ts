import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { fireEvent } from '@testing-library/dom';
import { PdsButton } from './button';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Button/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Button unit tests', () => {
  let element: PdsButton;

  beforeEach(async () => {
    element = await fixture(`<pds-button><span>Label</span></pds-button>`);
  });

  it('is an instance of PdsButton class', () => {
    expect(element).toBeInstanceOf(PdsButton);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('should associate the parent form to the button', async () => {
    const form: HTMLFormElement = await fixture(
      '<form><pds-button type="submit">Submit</button></form>',
    );
    const button = form.querySelector('pds-button') as PdsButton;

    expect(button?.internals.form).toBe(form);
  });

  describe('submitOrResetAssociatedForm', () => {
    it('should call requestSubmit on the associated form if the button is type submit and that method exists', async () => {
      const form = await fixture(
        '<form><pds-button type="submit">Submit</pds-button></form>',
      );

      const button = form.querySelector('pds-button') as PdsButton;

      const requestSubmit = jest
        .spyOn(HTMLFormElement.prototype, 'requestSubmit')
        .mockImplementation(() => {});

      // @ts-ignore
      button.submitOrResetAssociatedForm();

      expect(requestSubmit).toBeCalled();

      requestSubmit.mockRestore();
    });

    it('should call submit on the associated form if the button is type submit and the requestSubmit method does not exist', async () => {
      const form = await fixture(
        '<form><pds-button type="submit">Submit</pds-button></form>',
      );

      const button = form.querySelector('pds-button') as PdsButton;

      const requestSubmitFromPrototype =
        HTMLFormElement.prototype.requestSubmit;

      // @ts-ignore
      delete HTMLFormElement.prototype.requestSubmit;

      const submit = jest
        .spyOn(HTMLFormElement.prototype, 'submit')
        .mockImplementation(() => {});

      // @ts-ignore
      button.submitOrResetAssociatedForm();

      expect(submit).toBeCalled();

      submit.mockRestore();

      // Restore the requestSubmit method on the prototype
      HTMLFormElement.prototype.requestSubmit = requestSubmitFromPrototype;
    });

    it('should not call requestSubmit if the button is not type submit', async () => {
      const form = await fixture(
        '<form><pds-button type="button">Button</pds-button></form>',
      );

      const button = form.querySelector('pds-button') as PdsButton;

      const requestSubmit = jest
        .spyOn(HTMLFormElement.prototype, 'requestSubmit')
        .mockImplementation(() => {});

      // @ts-ignore
      button.submitOrResetAssociatedForm();

      expect(requestSubmit).toBeCalledTimes(0);

      requestSubmit.mockRestore();
    });

    it('should not call reset on the associated form if the button is type reset', async () => {
      const form = await fixture(
        '<form><pds-button type="reset">Reset</pds-button></form>',
      );

      const button = form.querySelector('pds-button') as PdsButton;

      const reset = jest
        .spyOn(HTMLFormElement.prototype, 'reset')
        .mockImplementation(() => {});

      // @ts-ignore
      button.submitOrResetAssociatedForm();

      expect(reset).toBeCalled();

      reset.mockRestore();
    });
  });

  describe('Event handler methods', () => {
    it('should dispatch a custom event on click and gets correct summary', async () => {
      const buttonEl = element.shadowRoot?.querySelector(
        'button',
      ) as HTMLElement;

      const handler = jest.fn();
      element.addEventListener('pds-button-click', handler);

      fireEvent(
        buttonEl,
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          composed: true,
        }),
      );

      expect(handler.mock.calls[0][0].detail.summary).toEqual('Label');

      const buttonAriaLabelEl = await fixture(
        `<pds-button variant='icon' ariaLabel='icon label'></pds-button>`,
      );

      buttonAriaLabelEl.addEventListener('pds-button-click', handler);

      const iconButtonEl = buttonAriaLabelEl.shadowRoot?.querySelector(
        'button',
      ) as HTMLElement;

      fireEvent(
        iconButtonEl,
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          composed: true,
        }),
      );

      expect(handler.mock.calls[1][0].detail.summary).toEqual('icon label');
    });

    it('should call the private submitOrResetAssociatedForm method on the Enter keydown event', async () => {
      const buttonEl = element.shadowRoot?.querySelector('button');

      const submitOrResetAssociatedForm = jest
        // @ts-ignore
        .spyOn(element, 'submitOrResetAssociatedForm')
        // @ts-ignore
        .mockImplementation(() => {});

      buttonEl?.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: 'Enter',
          key: 'Enter',
          charCode: 13,
          keyCode: 13,
          view: window,
          bubbles: true,
        }),
      );

      expect(submitOrResetAssociatedForm).toBeCalled();

      submitOrResetAssociatedForm.mockRestore();
    });

    it('should call the private submitOrResetAssociatedForm method on the spacebar keydown event', async () => {
      const buttonEl = element.shadowRoot?.querySelector('button');

      const submitOrResetAssociatedForm = jest
        // @ts-ignore
        .spyOn(element, 'submitOrResetAssociatedForm')
        // @ts-ignore
        .mockImplementation(() => {});

      buttonEl?.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: ' ',
          key: ' ',
          charCode: 32,
          keyCode: 32,
          view: window,
          bubbles: true,
        }),
      );

      expect(submitOrResetAssociatedForm).toBeCalled();

      submitOrResetAssociatedForm.mockRestore();
    });

    it('should preventDefault on the original event if the dispatched event is cancelled', async () => {
      const mockEvent = {
        preventDefault: jest.fn(),
      };
      element.addEventListener('pds-button-click', (e) => e.preventDefault());
      // @ts-ignore testing private method
      element.handleClick(mockEvent);

      expect(mockEvent.preventDefault).toBeCalled();
    });
  });

  it('should verifyAria if button text is provided', async () => {
    const verifyAriaElement = (await fixture(
      `<pds-button><span>Label</span></pds-button>`,
    )) as PdsButton;

    expect(verifyAriaElement.verifyAria()).toBe(true);
  });

  it('should return true if an aria label is provided', async () => {
    const verifyAriaElement = (await fixture(
      `<pds-button
      variant="icon"
      ariaLabel="More"
      ><pds-icon-more-horizontal></pds-icon-more-horizontal
    ></pds-button>`,
    )) as PdsButton;

    expect(verifyAriaElement.verifyAria()).toBe(true);
  });

  it('should not render component and console log an error if neither a label property nor a label slot is provided', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const verifyAriaElement = (await fixture(
      `<pds-button
        variant="icon"
        ><pds-icon-more-horizontal></pds-icon-more-horizontal
      ></pds-button>`,
    )) as PdsButton;

    expect(consoleError).toBeCalledTimes(1);
    expect(
      element.shadowRoot?.innerHTML.replaceAll(
        /(\s*\n)?\s*<!--\?lit\$\d+\$-->/g,
        '',
      ),
    )
      .toBe(`<!----><button part="button" class=" pds-c-button pds-c-button--default " type="submit">
      <slot></slot>
    </button><style>default</style>`);
    expect(verifyAriaElement.shadowRoot?.innerHTML).toBe(
      `<!----><style>default</style>`,
    );

    consoleError.mockRestore();
  });

  it('adds the appropriate class when hasFocus is true', async () => {
    const element1 = (await fixture(`<pds-button variant="icon"
      ariaLabel="More" isActive="true"
      ><pds-icon-more-horizontal></pds-icon-more-horizontal></pds-button>`)) as PdsButton;
    const button = element1.shadowRoot?.querySelector('button');
    expect(button?.classList.contains('pds-is-active')).toBe(true);
  });

  it('Passes size down to the icon', async () => {
    element = await fixture(
      '<pds-button variant="icon-left"><pds-icon-check slot="icon-left"></pds-icon-check>Button</pds-button>',
    );

    const iconSlot = element.querySelector('pds-icon-check') as HTMLElement;
    expect(iconSlot.getAttribute('size')).toEqual('default');

    element = await fixture(
      '<pds-button size="sm" variant="icon-left"><pds-icon-check slot="icon-left"></pds-icon-check>Button</pds-button>',
    );

    const smIconSlot = element.querySelector('pds-icon-check') as HTMLElement;
    expect(smIconSlot.getAttribute('size')).toEqual('sm');
  });

  it('does not pass size down when outside of expected size range to the icon', async () => {
    element = await fixture(
      '<pds-button size="sm" variant="icon-left"><pds-icon-check slot="icon-left"></pds-icon-check>Button</pds-button>',
    );

    const iconSlot = element.querySelector('pds-icon-check') as HTMLElement;
    expect(iconSlot.getAttribute('size')).toEqual('sm');

    element = await fixture(
      '<pds-button size="xl" variant="icon-left"><pds-icon-check></pds-icon-check>Button</pds-button>',
    );

    const xlIconSlot = element.querySelector('pds-icon-check') as HTMLElement;
    expect(xlIconSlot.getAttribute('size')).toStrictEqual('default');
  });
});
