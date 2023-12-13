import * as path from 'path';
import { assert, fixture, waitUntil } from '@open-wc/testing';
import initStoryshots from '@storybook/addon-storyshots';
import createSnapshots from '../../../../test/utils/snapshots';
import '../radio/radio';
import { PdsRadioGroup } from './radio-group';

initStoryshots({
  storyKindRegex: /Radio group/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('RadioGroup unit tests', () => {
  let element: PdsRadioGroup;
  const name = 'test';
  const label = 'Test';

  beforeEach(async () => {
    element = await fixture(`<pds-radio-group name="${name}" label="${label}">
      <pds-radio value="option-1" label="Option 1"></pds-radio>
      <pds-radio value="option-2" label="Option 2"></pds-radio>
      <pds-radio value="option-3" label="Option 3"></pds-radio>
    </pds-radio-group>`);
  });

  it('is an instance of PdsRadioGroup', () => {
    expect(element).toBeInstanceOf(PdsRadioGroup);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('should render nothing when a label is not provided', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    element = await fixture(`<pds-radio-group name="${name}">
      <pds-radio value="option-1" label="Option 1"></pds-radio>
      <pds-radio value="option-2" label="Option 2"></pds-radio>
      <pds-radio value="option-3" label="Option 3"></pds-radio>
    </pds-radio-group>`);

    const radioDiv = element.shadowRoot?.querySelector('.pds-c-radio-group');

    expect(radioDiv).toBeFalsy();

    consoleError.mockRestore();
  });

  it('should pass down the name and disabled property to the children radios', async () => {
    element.radios.forEach((radio) => {
      expect(radio.name).toBe(name);
      // @ts-ignore accessing a private property for testing
      expect(radio.isDisabled).toBe(false);
    });

    const newName = 'newName';

    element.name = newName;
    element.disabled = true;

    await waitUntil(() => element.hasUpdated);

    element.radios.forEach((radio) => {
      expect(radio.name).toBe(newName);
      // @ts-ignore accessing a private property for testing
      expect(radio.isDisabled).toBe(true);
    });
  });

  it('should check the correct radio when the value is updated', () => {
    element.value = 'option-3';

    expect(element.radios[2].checked).toBe(true);
  });

  it('should handle radio changes', () => {
    const changeHandler = jest.fn();

    element.addEventListener('pds-radio-group-change', changeHandler);

    element.radios[0].field.click();

    expect(changeHandler).toBeCalled();
    expect(element.value).toBe('option-1');
  });

  it('should handle required', async () => {
    element =
      await fixture(`<pds-radio-group name="${name}" label="${label}" required>
      <pds-radio value="option-1" label="Option 1"></pds-radio>
      <pds-radio value="option-2" label="Option 2"></pds-radio>
      <pds-radio value="option-3" label="Option 3"></pds-radio>
    </pds-radio-group>`);

    expect(element.getAttribute('aria-required')).toBe('true');
  });

  it('should handle an errorMessage', async () => {
    element =
      await fixture(`<pds-radio-group name="${name}" label="${label}" errorMessage="Oh no">
      <pds-radio value="option-1" label="Option 1"></pds-radio>
      <pds-radio value="option-2" label="Option 2"></pds-radio>
      <pds-radio value="option-3" label="Option 3"></pds-radio>
    </pds-radio-group>`);

    expect(element.getAttribute('aria-invalid')).toBe('true');
  });

  describe('focus management', () => {
    it('should focus on the first radio when none are checked', () => {
      element.radioContainer.focus();

      expect(element.isFocused).toBe(true);
      expect(element.radios[0].isFocused).toBe(true);
    });

    it('should focus on checked radio', () => {
      element.radios[1].checked = true;
      element.radioContainer.focus();

      expect(element.isFocused).toBe(true);
      expect(element.radios[1].isFocused).toBe(true);
    });

    it('should move focus and check the next radio on arrow right and down', () => {
      element.radioContainer.focus();

      expect(element.isFocused).toBe(true);
      expect(element.radios[0].isFocused).toBe(true);

      element.shadowRoot?.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: 'ArrowRight',
        }),
      );

      expect(element.radios[1].isFocused).toBe(true);
      expect(element.radios[1].checked).toBe(true);

      element.shadowRoot?.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: 'ArrowDown',
        }),
      );

      expect(element.radios[2].isFocused).toBe(true);
      expect(element.radios[2].checked).toBe(true);

      // loop back to the beginning
      element.shadowRoot?.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: 'ArrowDown',
        }),
      );

      expect(element.radios[0].isFocused).toBe(true);
      expect(element.radios[0].checked).toBe(true);
    });

    it('should move focus and check the previous radio on arrow left and up', () => {
      element.radioContainer.focus();

      expect(element.isFocused).toBe(true);
      expect(element.radios[0].isFocused).toBe(true);

      // loop around to the end
      element.shadowRoot?.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: 'ArrowLeft',
        }),
      );

      expect(element.radios[2].isFocused).toBe(true);
      expect(element.radios[2].checked).toBe(true);

      element.shadowRoot?.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: 'ArrowUp',
        }),
      );

      expect(element.radios[1].isFocused).toBe(true);
      expect(element.radios[1].checked).toBe(true);
    });

    it('should trigger a blur event when focus completely leaves the component', () => {
      const blurHandler = jest.fn();

      element.radioContainer.focus();

      element.addEventListener('pds-radio-group-blur', blurHandler);

      // set all radios to no longer be focused
      element.radios.forEach((radio) => {
        // eslint-disable-next-line no-param-reassign
        radio.isFocused = false;
      });

      // @ts-ignore (calling private method for test)
      element.triggerBlur();

      expect(element.isFocused).toBe(false);
      expect(blurHandler).toBeCalled();
    });

    it('should not trigger a blur event when focus is on a child radio', () => {
      const blurHandler = jest.fn();

      // this sets focus to the first radio
      element.radioContainer.focus();

      element.addEventListener('pds-radio-group-blur', blurHandler);

      // @ts-ignore (calling private method for test)
      element.triggerBlur();

      expect(element.isFocused).toBe(true);
      expect(blurHandler).toBeCalledTimes(0);
    });
  });

  it('should reset the radio group value on form reset', async () => {
    const originalValue = 'option-2';
    const newValue = 'option-3';
    const form: HTMLFormElement = await fixture(
      `<form><pds-radio-group name="test" label="test" value="${originalValue}">
      <pds-radio value="option-1" label="Option 1"></pds-radio>
      <pds-radio value="option-2" label="Option 2"></pds-radio>
      <pds-radio value="option-3" label="Option 3"></pds-radio>
    </pds-radio-group></form>`,
    );

    element = form.querySelector('pds-radio-group') as PdsRadioGroup;

    element.value = newValue;

    expect(element.value).toBe(newValue);

    form.reset();

    expect(element.value).toBe(originalValue);
  });
});
