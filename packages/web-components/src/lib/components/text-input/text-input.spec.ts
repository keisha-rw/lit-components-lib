import * as path from 'path';
import { assert, elementUpdated, fixture } from '@open-wc/testing';
import initStoryshots from '@storybook/addon-storyshots';
import userEvent from '@testing-library/user-event';
import createSnapshots from '../../../../test/utils/snapshots';
import { PdsTextInput } from './text-input';

initStoryshots({
  storyKindRegex: /Text input/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('TextInput unit tests', () => {
  let element: PdsTextInput;
  let inputEl: HTMLInputElement;

  beforeEach(async () => {
    element = await fixture(
      '<pds-text-input name="testInput" label="label text" />',
    );

    inputEl = element.shadowRoot?.querySelector('input') as HTMLInputElement;
  });

  it('is an instance of PdsTextInput', () => {
    expect(element).toBeInstanceOf(PdsTextInput);
  });

  it('should render the appropriate markup when a label is provided', async () => {
    const textInputDiv = element.shadowRoot?.querySelector('.pds-c-text-input');
    const labelEl = element.shadowRoot?.querySelector('label');

    expect(textInputDiv).toBeTruthy();
    expect(inputEl).toBeTruthy();
    expect(labelEl).toBeTruthy();
  });

  it('should render nothing when a label is not provided', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    element = await fixture('<pds-text-input name="testInput" />');

    const textInputDiv = element.shadowRoot?.querySelector('.pds-c-text-input');

    expect(textInputDiv).toBeFalsy();

    consoleError.mockRestore();
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  describe('handleKeydown', () => {
    it('should call requestSubmit on the associated form on enter, if there is only one input and no submit button in the form', async () => {
      const form = await fixture(
        `<form><pds-text-input name="testInput" label="label text" /></form>`,
      );

      element = form.querySelector('pds-text-input') as PdsTextInput;
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
        `<form><pds-text-input name="testInput" label="label text" /></form>`,
      );

      element = form.querySelector('pds-text-input') as PdsTextInput;
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
        `<form><pds-text-input name="testInput" label="label text" ></pds-text-input><pds-text-input name="testInput2" label="label text 2" ></pds-text-input></form>`,
      );

      element = form.querySelector('pds-text-input') as PdsTextInput;
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
    it('should dispatch a pds-text-input-change event and update the value on change', () => {
      const changeHandler = jest.fn();

      element.addEventListener('pds-text-input-change', changeHandler);

      inputEl.value = 'test change event';

      inputEl.dispatchEvent(new Event('change'));

      expect(changeHandler).toBeCalled();
      expect(element.value).toBe('test change event');
    });

    it('should dispatch a pds-text-input-input event and update the value on input', () => {
      const inputHandler = jest.fn();

      element.addEventListener('pds-text-input-input', inputHandler);

      inputEl.value = 'test input event';

      inputEl.dispatchEvent(new Event('input'));

      expect(inputHandler).toBeCalled();
      expect(element.value).toBe('test input event');
    });

    it('should dispatch a pds-text-input-blur event on blur', () => {
      const blurHandler = jest.fn();

      element.addEventListener('pds-text-input-blur', blurHandler);

      inputEl.dispatchEvent(new Event('blur'));

      expect(blurHandler).toBeCalled();
    });

    it('should dispatch a pds-text-input-focus event on focus', () => {
      const focusHandler = jest.fn();

      element.addEventListener('pds-text-input-focus', focusHandler);

      inputEl.dispatchEvent(new Event('focus'));

      expect(focusHandler).toBeCalled();
    });
  });

  describe('symbol prefix and suffix', () => {
    it('should render a prefix if the prefix slot is provided', async () => {
      element = await fixture(
        `<pds-text-input name="prefixInput" label="label"><span slot="prefix">$</span></pds-text-input>`,
      );

      const prefixEl = element.shadowRoot?.querySelector(
        '.pds-c-text-input__symbol-prefix',
      );

      expect(prefixEl).not.toBeNull();
    });

    it('should render a suffix if the suffix slot is provided', async () => {
      element = await fixture(
        `<pds-text-input name="suffixInput" label="label"><div slot="suffix">%</div></pds-text-input>`,
      );

      const suffixEl = element.shadowRoot?.querySelector(
        '.pds-c-text-input__symbol-suffix',
      );

      expect(suffixEl).not.toBeNull();
    });
  });

  describe('input masking', () => {
    it('should render an input with an ssn mask', async () => {
      element = await fixture(
        `<pds-text-input name="ssnMask" maskType="ssn" label="label"></pds-text-input>`,
      );

      const userEventWithoutDelay = userEvent.setup({ delay: null });
      const event = new Event('change');

      inputEl = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      await userEventWithoutDelay.type(inputEl, '123456789');
      inputEl.dispatchEvent(event);

      expect(element.value).toBe('123-45-6789');
      await elementUpdated(element);
      expect(inputEl.value).toBe('123-45-6789');
    });

    it('should render an input with a tax-id mask', async () => {
      element = await fixture(
        `<pds-text-input name="taxIdMask" maskType="tax-id" label="label"></pds-text-input>`,
      );

      const userEventWithoutDelay = userEvent.setup({ delay: null });
      const event = new Event('change');

      inputEl = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      await userEventWithoutDelay.type(inputEl, '123456789');
      inputEl.dispatchEvent(event);

      expect(element.value).toBe('12-3456789');
      await elementUpdated(element);
      expect(inputEl.value).toBe('12-3456789');
    });
  });

  it('should reset the text input value on form reset', async () => {
    const originalValue = 'original value';
    const newValue = 'new value';
    const form: HTMLFormElement = await fixture(
      `<form><pds-text-input name="test" label="label" value="${originalValue}"></pds-text-input></form>`,
    );

    element = form.querySelector('pds-text-input') as PdsTextInput;
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
