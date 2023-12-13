import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, elementUpdated, fixture } from '@open-wc/testing';
import { PdsPhoneNumberInput } from './phone-number-input';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Phone number input/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('PhoneNumberInput unit tests', () => {
  let element: PdsPhoneNumberInput;
  let inputEl: HTMLInputElement;

  beforeEach(async () => {
    element = await fixture(
      '<pds-phone-number-input name="phoneNumberInput" label="label text" />',
    );
    inputEl = element.shadowRoot?.querySelector('input') as HTMLInputElement;
  });

  it('is an instance of PdsPhoneNumberInput', () => {
    expect(element).toBeInstanceOf(PdsPhoneNumberInput);
  });

  it('render the appropriate markup when label is provided', () => {
    const phoneNumberInputDiv = element.shadowRoot?.querySelector(
      '.pds-c-phone-number-input',
    );
    const labelEl = element.shadowRoot?.querySelector('label');

    expect(phoneNumberInputDiv).toBeTruthy();
    expect(inputEl).toBeTruthy();
    expect(labelEl).toBeTruthy();
  });

  it('renders nothing when a label is not provided', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    element = await fixture(
      '<pds-phone-number-input name="testPhoneNumberInput" />',
    );

    const phoneNumberinputDiv = element.shadowRoot?.querySelector(
      '.pds-c-phone-number-input',
    );

    expect(phoneNumberinputDiv).toBeFalsy();
    consoleError.mockRestore();
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  describe('handleKeydown', () => {
    it('should call requestSubmit on the associated form on enter, if there is only one input and no submit button in the form', async () => {
      const form = await fixture(
        `<form><pds-phone-number-input name="phoneNumberTestInput" label="label text" /></form>`,
      );

      element = form.querySelector(
        'pds-phone-number-input',
      ) as PdsPhoneNumberInput;
      inputEl = element?.shadowRoot?.querySelector('input') as HTMLInputElement;

      const requestSubmit = jest
        .spyOn(HTMLFormElement.prototype, 'requestSubmit')
        .mockImplementation(() => {});

      inputEl?.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: 'Enter',
          key: 'Enter',
          charCode: 13,
          keyCode: 13,
          view: window,
          bubbles: true,
        }),
      );

      expect(requestSubmit).toBeCalled();

      requestSubmit.mockRestore();
    });

    it('should call submit on the associated form on enter, if there is only one input, no submit button, and the requestSubmit method does not exist', async () => {
      const form = await fixture(
        `<form><pds-phone-number-input name="phoneNumberTestInput" label="Phone number input" /></form>`,
      );

      element = form.querySelector(
        'pds-phone-number-input',
      ) as PdsPhoneNumberInput;
      inputEl = element?.shadowRoot?.querySelector('input') as HTMLInputElement;

      const requestSubmitFromPrototype =
        HTMLFormElement.prototype.requestSubmit;

      // @ts-ignore
      delete HTMLFormElement.prototype.requestSubmit;

      const submit = jest
        .spyOn(HTMLFormElement.prototype, 'submit')
        .mockImplementation(() => {});

      inputEl?.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: 'Enter',
          key: 'Enter',
          charCode: 13,
          keyCode: 13,
          view: window,
          bubbles: true,
        }),
      );

      expect(submit).toBeCalled();

      submit.mockRestore();

      // Restore the requestSubmit method on the prototype
      HTMLFormElement.prototype.requestSubmit = requestSubmitFromPrototype;
    });

    it('should not call requestSubmit on the associated form on enter, if there are multiple inputs but no submit button', async () => {
      const form = await fixture(
        `<form><pds-phone-number-input name="phoneNumberTestInput" label="label text" ></pds-phone-number-input><pds-phone-number-input name="phoneNumberTestInput2" label="label text 2" ></pds-phone-number-input></form>`,
      );

      element = form.querySelector(
        'pds-phone-number-input',
      ) as PdsPhoneNumberInput;
      inputEl = element?.shadowRoot?.querySelector('input') as HTMLInputElement;

      const requestSubmit = jest
        .spyOn(HTMLFormElement.prototype, 'requestSubmit')
        .mockImplementation(() => {});

      inputEl?.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: 'Enter',
          key: 'Enter',
          charCode: 13,
          keyCode: 13,
          view: window,
          bubbles: true,
        }),
      );

      expect(requestSubmit).toBeCalledTimes(0);

      requestSubmit.mockRestore();
    });
  });

  describe('event handling', () => {
    it('should dispatch a pds-phone-number-input-change event and update the value on change', () => {
      const changeHandler = jest.fn();

      element.addEventListener('pds-phone-number-input-change', changeHandler);

      inputEl.value = 'test change event';

      inputEl.dispatchEvent(new Event('change'));

      expect(changeHandler).toBeCalled();
      expect(element.value).toBe('test change event');
    });

    it('should dispatch a pds-phone-number-input-input event and update the value on input', () => {
      const inputHandler = jest.fn();

      element.addEventListener('pds-phone-number-input-input', inputHandler);

      inputEl.value = 'test input event';

      inputEl.dispatchEvent(new Event('input'));

      expect(inputHandler).toBeCalled();
      expect(element.value).toBe('test input event');
    });

    it('should dispatch a pds-phone-number-input-blur event on blur', () => {
      const blurHandler = jest.fn();

      element.addEventListener('pds-phone-number-input-blur', blurHandler);

      inputEl.dispatchEvent(new Event('blur'));

      expect(blurHandler).toBeCalled();
    });

    it('should dispatch a pds-phone-number-input-focus event on focus', () => {
      const focusHandler = jest.fn();

      element.addEventListener('pds-phone-number-input-focus', focusHandler);

      inputEl.dispatchEvent(new Event('focus'));

      expect(focusHandler).toBeCalled();
    });
  });

  it('should reset the text input value on form reset', async () => {
    const originalValue = '123-456-7890';
    const newValue = '404-323-1458';
    const form: HTMLFormElement = await fixture(
      `<form><pds-phone-number-input name="phoneNumber" label="label" value="${originalValue}"></pds-phone-number-input></form>`,
    );

    element = form.querySelector(
      'pds-phone-number-input',
    ) as PdsPhoneNumberInput;
    inputEl = element?.shadowRoot?.querySelector('input') as HTMLInputElement;

    element.value = newValue;

    expect(element.value).toBe(newValue);
    await elementUpdated(element);
    expect(inputEl.value).toBe(newValue);

    form.reset();

    expect(element.value).toBe(originalValue);
    await elementUpdated(element);
    expect(inputEl.value).toBe(originalValue);
  });
});
