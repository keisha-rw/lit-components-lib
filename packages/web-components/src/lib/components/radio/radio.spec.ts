import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { render } from 'lit';
import { PdsRadio } from './radio';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Radio/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Radio unit tests', () => {
  let element: PdsRadio;
  let inputEl: HTMLInputElement;

  beforeEach(async () => {
    element = await fixture(
      '<pds-radio name="test" label="This is a radio" value="test"></pds-radio>',
    );

    inputEl = element.shadowRoot?.querySelector('input') as HTMLInputElement;
  });

  it('is an instance of PdsRadio', () => {
    expect(element).toBeInstanceOf(PdsRadio);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('has name attribute', () => {
    expect(inputEl).toBeTruthy();
    expect(inputEl?.getAttribute('name')).toEqual('test');
  });

  it('has value attribute', () => {
    expect(inputEl).toBeTruthy();
    expect(inputEl?.getAttribute('value')).toEqual('test');
  });

  it('should render nothing when a label is not provided', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    element = await fixture('<pds-radio name="testInput" value="testInput" />');

    const radioDiv = element.shadowRoot?.querySelector('.pds-c-radio');

    expect(radioDiv).toBeFalsy();

    consoleError.mockRestore();
  });

  describe('event handling', () => {
    it('should dispatch a pds-radio-change event and update the checked property', () => {
      const changeHandler = jest.fn();

      element.addEventListener('pds-radio-change', changeHandler);

      inputEl.checked = true;

      inputEl.dispatchEvent(new Event('change'));

      expect(changeHandler).toBeCalled();
      expect(element.checked).toBe(true);
    });

    it('should dispatch a pds-radio-blur event on blur and set the isFocused property to false', () => {
      const blurHandler = jest.fn();

      element.addEventListener('pds-radio-blur', blurHandler);

      inputEl.dispatchEvent(new Event('blur'));

      expect(blurHandler).toBeCalled();

      // @ts-ignore
      expect(element.isFocused).toBe(false);
    });

    it('should dispatch a pds-radio-focus event on focus and set the isFocused property to true', () => {
      const focusHandler = jest.fn();

      element.addEventListener('pds-radio-focus', focusHandler);

      inputEl.dispatchEvent(new Event('focus'));

      expect(focusHandler).toBeCalled();

      // @ts-ignore
      expect(element.isFocused).toBe(true);
    });

    it('should check the radio when Space is pressed', () => {
      inputEl.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: 'Space',
        }),
      );

      element.checked = true;
    });
  });

  describe('labelTemplate', () => {
    it('should produce the appropriate label markup when rendered', async () => {
      element = await fixture(
        '<pds-radio name="test" label="label test" value="test"></pds-radio>',
      );

      // @ts-ignore
      render(element.labelTemplate(), element);

      const label = element.querySelector('label');

      expect(label).toBeTruthy();
      expect(label?.htmlFor).toEqual('test-field');
      expect(label?.className).toEqual('pds-c-radio__label');
      expect(label?.textContent).toContain('label test');
    });
  });
});
