import { assert, elementUpdated, fixture } from '@open-wc/testing';
import initStoryshots from '@storybook/addon-storyshots';
import userEvent from '@testing-library/user-event';
import * as path from 'path';
import createSnapshots from '../../../../test/utils/snapshots';
import { PdsTextArea } from './text-area';

initStoryshots({
  storyKindRegex: /Text area/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('TextArea unit tests', () => {
  let element: PdsTextArea;
  let textareaEl: HTMLTextAreaElement;

  beforeEach(async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="label text" />',
    );

    textareaEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;
  });

  it('is an instance of PdsTextArea', () => {
    expect(element).toBeInstanceOf(PdsTextArea);
  });

  it('should render the appropriate markup when a label is provided', async () => {
    const textAreaDiv = element.shadowRoot?.querySelector('.pds-c-text-area');
    const labelEl = element.shadowRoot?.querySelector('label');

    expect(textAreaDiv).toBeTruthy();
    expect(textareaEl).toBeTruthy();
    expect(labelEl).toBeTruthy();
    expect(textareaEl?.getAttribute('name')).toBe('testTextArea');
    expect(textareaEl?.getAttribute('class')).toBe('pds-c-text-area__textarea');
  });

  it('should render nothing when a label is not provided', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    element = await fixture('<pds-text-area name="testTextArea" />');

    const textAreaDiv = element.shadowRoot?.querySelector('.pds-c-text-area');

    expect(textAreaDiv).toBeFalsy();

    consoleError.mockRestore();
  });

  it('should render the appropriate markup when help text is provided', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" helpText="Help text" />',
    );

    const helpTextDiv = element.shadowRoot?.querySelector(
      '.pds-c-text-area__help-text',
    );

    expect(helpTextDiv).toBeTruthy();
    expect(helpTextDiv?.textContent?.trim()).toBe('Help text');
  });

  it('should render the appropriate markup when error message is provided', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" errorMessage="Error text" />',
    );

    const textareaErrorMessageEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    const errorMessageDiv = element.shadowRoot?.querySelector(
      '.pds-c-text-area__error-message',
    );

    expect(errorMessageDiv).toBeTruthy();
    expect(errorMessageDiv?.textContent?.trim()).toBe('Error text');
    expect(errorMessageDiv?.getAttribute('id')).toBe(
      'testTextArea-error-message',
    );
    expect(textareaErrorMessageEl?.getAttribute('aria-invalid')).toBeTruthy();
    expect(textareaErrorMessageEl?.getAttribute('aria-describedby')).toBe(
      'testTextArea-error-message',
    );
  });

  it('should render the appropriate markup when fieldId is provided', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" fieldId="unique-id" />',
    );

    const textareaFieldIdEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(textareaFieldIdEl).toBeTruthy();
    expect(textareaFieldIdEl?.getAttribute('id')).toBe('unique-id');
  });

  it('should render the appropriate markup when fieldId is not provided', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" />',
    );

    const textareaNoFieldIdEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(textareaNoFieldIdEl).toBeTruthy();
    expect(textareaNoFieldIdEl?.getAttribute('id')).toBe('testTextArea-field');
  });

  it('should render the appropriate markup when default value is provided', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" value="Default value text." />',
    );

    const textareaDefaultValueEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(textareaDefaultValueEl).toBeTruthy();
    expect(textareaDefaultValueEl?.value).toBe('Default value text.');
  });

  it('should render the appropriate markup when minLength is provided', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" minLength="30" />',
    );

    const textareaMinlengthEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(textareaMinlengthEl).toBeTruthy();
    expect(textareaMinlengthEl?.getAttribute('minlength')).toBe('30');
  });

  it('should render the appropriate markup when maxLength is provided', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" maxLength="300" />',
    );

    const textareaMaxlengthEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(textareaMaxlengthEl).toBeTruthy();
    expect(textareaMaxlengthEl?.getAttribute('maxlength')).toBe('300');
  });

  it('should render the appropriate markup when size is small', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" size="sm" />',
    );

    const textAreaSmallDiv =
      element.shadowRoot?.querySelector('.pds-c-text-area');

    expect(textAreaSmallDiv).toBeTruthy();
    expect(textAreaSmallDiv?.getAttribute('class')?.trim()).toBe(
      'pds-c-text-area pds-c-text-area--sm',
    );
  });

  it('should render the appropriate markup when resize is smart', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" resize="smart" />',
    );

    const textareaResizeSmartEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(textareaResizeSmartEl).toBeTruthy();
    expect(textareaResizeSmartEl?.getAttribute('resize')).toBe('smart');
  });

  it('should render the appropriate markup when resize is manual', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" resize="manual" />',
    );

    const textareaResizeOnEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(textareaResizeOnEl).toBeTruthy();
    expect(textareaResizeOnEl?.getAttribute('resize')).toBe('manual');
  });

  it('should render the appropriate markup when resize is horizontal', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" resize="horizontal" />',
    );

    const textareaResizeHorizontalEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(textareaResizeHorizontalEl).toBeTruthy();
    expect(textareaResizeHorizontalEl?.getAttribute('resize')).toBe(
      'horizontal',
    );
  });

  it('should render the appropriate markup when resize is vertical', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" resize="vertical" />',
    );

    const textareaResizeVerticalEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(textareaResizeVerticalEl).toBeTruthy();
    expect(textareaResizeVerticalEl?.getAttribute('resize')).toBe('vertical');
  });

  it('should render the appropriate markup when resize is none', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" resize="none" />',
    );

    const textareaResizeNoneEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(textareaResizeNoneEl).toBeTruthy();
    expect(textareaResizeNoneEl?.getAttribute('resize')).toBe('none');
  });

  it('should render the appropriate markup when required is true', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" required />',
    );

    const requiredSpan = element.shadowRoot?.querySelector(
      '.pds-c-text-area__required-indicator',
    );

    expect(requiredSpan).toBeTruthy();
    expect(requiredSpan?.textContent?.trim()).toBe('*');
  });

  it('should render the appropriate markup when disabled is true', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" disabled />',
    );

    const textareaDisabledEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(textareaDisabledEl).toBeTruthy();
    expect(textareaDisabledEl?.getAttribute('disabled')).toBe('');
  });

  it('should render the appropriate markup when readonly is true', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" readonly />',
    );

    const textareaReadonlyEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(textareaReadonlyEl).toBeTruthy();
    expect(textareaReadonlyEl?.getAttribute('readonly')).toBe('');
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  describe('event handling', () => {
    it('should dispatch a pds-text-area-change event and update the value on change', () => {
      const changeHandler = jest.fn();

      element.addEventListener('pds-text-area-change', changeHandler);

      textareaEl.value = 'test change event';

      textareaEl.dispatchEvent(new Event('change'));

      expect(changeHandler).toBeCalled();
      expect(element.value).toBe('test change event');
    });

    it('should dispatch a pds-text-area-input event and update the value on textarea', () => {
      const inputHandler = jest.fn();

      element.addEventListener('pds-text-area-input', inputHandler);

      textareaEl.value = 'test textarea event';

      textareaEl.dispatchEvent(new Event('input'));

      expect(inputHandler).toBeCalled();
      expect(element.value).toBe('test textarea event');
    });

    it('should dispatch a pds-text-area-blur event on blur', () => {
      const blurHandler = jest.fn();

      element.addEventListener('pds-text-area-blur', blurHandler);

      textareaEl.dispatchEvent(new Event('blur'));

      expect(blurHandler).toBeCalled();
    });

    it('should dispatch a pds-text-area-focus event on focus', () => {
      const focusHandler = jest.fn();

      element.addEventListener('pds-text-area-focus', focusHandler);

      textareaEl.dispatchEvent(new Event('focus'));

      expect(focusHandler).toBeCalled();
    });
  });

  it('should set the value to a new value when user enters input into textarea', async () => {
    const originalValue = 'original value';
    const newValue = 'original value123456789';
    const form: HTMLFormElement = await fixture(
      `<form><pds-text-area name="test" helpText="helpful info" label="label" value="${originalValue}"></pds-text-area></form>`,
    );

    element = form.querySelector('pds-text-area') as PdsTextArea;
    textareaEl = element?.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    const event = new Event('change');

    await userEventWithoutDelay.type(textareaEl, '123456789');
    textareaEl.dispatchEvent(event);

    await elementUpdated(element);
    expect(element.value).toStrictEqual(newValue);
    expect(textareaEl.value).toStrictEqual(newValue);

    form.reset();
    await elementUpdated(element);
    expect(element.value).toStrictEqual(originalValue);
    expect(textareaEl.value).toStrictEqual(originalValue);
  });

  it('should update the field if we have the proper values', async () => {
    element.field.value = 'I haz a value';
    element.internalValue = 'I haz an internal value';

    element.updateField();

    expect(element.field.value).toStrictEqual('I haz an internal value');
  });

  it('should set internalValue when value is first set', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" value="first value" />',
    );

    const textareaInternalValueFirstEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    expect(element.internalValue).toBe('first value');
    expect(textareaInternalValueFirstEl).toBeTruthy();
    expect(textareaInternalValueFirstEl?.value).toBe(element.internalValue);
  });

  it('should set internalValue when value is updated', async () => {
    element = await fixture(
      '<pds-text-area name="testTextArea" label="Label text" />',
    );

    const textareaInternalValueUpdatedEl = element.shadowRoot?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    // Set new value on element and check internalValue matches.
    element.value = 'new value';

    expect(element.internalValue).toBe('new value');
    expect(textareaInternalValueUpdatedEl).toBeTruthy();
    expect(textareaInternalValueUpdatedEl?.value).toBe('new value');
  });
});
