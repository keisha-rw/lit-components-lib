import * as path from 'path';
import { assert, elementUpdated, fixture } from '@open-wc/testing';
import initStoryshots from '@storybook/addon-storyshots';
import { render } from 'lit';
import createSnapshots from '../../../../test/utils/snapshots';
import { PdsCheckbox } from './checkbox';

initStoryshots({
  storyKindRegex: /Checkbox/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Checkbox unit tests', () => {
  let element: PdsCheckbox;
  let inputEl: HTMLInputElement;

  beforeEach(async () => {
    element = await fixture(
      '<pds-checkbox name="test" label="This is a checkbox"></pds-checkbox>',
    );

    inputEl = element.shadowRoot?.querySelector('input') as HTMLInputElement;
  });

  it('is an instance of PdsCheckbox', () => {
    expect(element).toBeInstanceOf(PdsCheckbox);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('should render nothing when a label is not provided', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    element = await fixture('<pds-checkbox name="testInput" />');

    const checkboxDiv = element.shadowRoot?.querySelector('.pds-c-checkbox');

    expect(checkboxDiv).toBeFalsy();

    consoleError.mockRestore();
  });

  it('should set and get the checkbox value', async () => {
    expect(element.value).toBeUndefined();

    element.value = 'new value';

    expect(element.value).toBe('new value');
  });

  it('should set the ariaChecked internal to true when the checked property is provided', async () => {
    element = await fixture(
      '<pds-checkbox name="test" checked label="This is a checkbox"></pds-checkbox>',
    );

    expect(element.internals.ariaChecked).toBe('true');
  });

  it('should set form value appropriately', async () => {
    let formData;
    const form: HTMLFormElement = await fixture(
      '<form><pds-checkbox name="test" checked label="This is a checkbox"></pds-checkbox></form>',
    );

    element = form.querySelector('pds-checkbox') as PdsCheckbox;

    formData = new FormData(form);

    expect(formData.get('test')).toBe('on');

    element.checked = false;

    formData = new FormData(form);

    expect(formData.get('test')).toBe(null);

    element.value = 'new value';

    element.checked = true;

    formData = new FormData(form);

    expect(formData.get('test')).toBe('new value');
  });

  describe('event handling', () => {
    it('should dispatch a pds-checkbox-change event and update the checked property', () => {
      const changeHandler = jest.fn();

      element.addEventListener('pds-checkbox-change', changeHandler);

      inputEl.checked = true;

      inputEl.dispatchEvent(new Event('change'));

      expect(changeHandler).toBeCalled();
      expect(element.checked).toBe(true);
    });

    it('should dispatch a pds-checkbox-blur event on blur and set the isFocused property to false', () => {
      const blurHandler = jest.fn();

      element.addEventListener('pds-checkbox-blur', blurHandler);

      inputEl.dispatchEvent(new Event('blur'));

      expect(blurHandler).toBeCalled();

      // @ts-ignore
      expect(element.isFocused).toBe(false);
    });

    it('should dispatch a pds-checkbox-focus event on focus and set the isFocused property to true', () => {
      const focusHandler = jest.fn();

      element.addEventListener('pds-checkbox-focus', focusHandler);

      inputEl.dispatchEvent(new Event('focus'));

      expect(focusHandler).toBeCalled();

      // @ts-ignore
      expect(element.isFocused).toBe(true);
    });
  });

  describe('labelTemplate', () => {
    it('should produce the appropriate label markup when rendered', async () => {
      element = await fixture(
        '<pds-checkbox name="test" label="label test"></pds-checkbox>',
      );

      // @ts-ignore
      render(element.labelTemplate(), element);

      const label = element.querySelector('label');

      expect(label).toBeTruthy();
      expect(label?.htmlFor).toEqual('test-field');
      expect(label?.className).toEqual('pds-c-checkbox__label');
      expect(label?.textContent).toContain('label test');
    });

    it('should include the required indicator if the required property is provided', async () => {
      element = await fixture(
        '<pds-checkbox name="test" required="true" label="label test"></pds-checkbox>',
      );

      // @ts-ignore
      render(element.labelTemplate(), element);

      const requiredIndicator = element?.querySelector(
        '.pds-c-checkbox__required-indicator',
      );

      expect(requiredIndicator).toBeTruthy();
      expect(requiredIndicator?.textContent).toContain('*');
    });
  });

  it('should reset the checkbox state on form reset', async () => {
    const originalChecked = true;
    const newChecked = false;
    const form: HTMLFormElement = await fixture(
      `<form><pds-checkbox name="test" label="label test" checked=${originalChecked}></pds-checkbox></form>`,
    );

    element = form.querySelector('pds-checkbox') as PdsCheckbox;

    const checkboxEl = element?.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    element.checked = newChecked;

    expect(element.checked).toBe(newChecked);
    await elementUpdated(element);
    expect(checkboxEl.checked).toBe(newChecked);

    form.reset();

    expect(element.checked).toBe(originalChecked);
    await elementUpdated(element);
    expect(checkboxEl.checked).toBe(originalChecked);
  });
});
