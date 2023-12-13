import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { render } from 'lit';
import { assert, fixture } from '@open-wc/testing';
import { PdsSwitch } from './switch';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Switch/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Switch unit tests', () => {
  let element: PdsSwitch;
  let inputEl: HTMLInputElement;

  beforeEach(async () => {
    element = await fixture(
      '<pds-switch name="test" label="This is a switch"/>',
    );
    inputEl = element.shadowRoot?.querySelector('input') as HTMLInputElement;
  });

  it('is an instance of PdsSwitch', () => {
    expect(element).toBeInstanceOf(PdsSwitch);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('should set and get the switch value', async () => {
    expect(element.value).toBeUndefined();

    element.value = 'new value';

    expect(element.value).toBe('new value');
  });

  it('should set the ariaChecked internal to true when the checked property is provided', async () => {
    element = await fixture('<pds-switch name="test" checked></pds-switch>');

    expect(element.internals.ariaChecked).toBe('true');
  });

  it('should produce the appropriate label markup when rendered', async () => {
    element = await fixture(
      '<pds-switch name="test" label="label test"></pds-switch>',
    );

    const element1: PdsSwitch = await fixture(
      '<pds-switch name="test" label="label test" labelRight></pds-switch>',
    );
    render(element.labelTemplate(), element);
    render(element1.labelTemplate(), element1);

    const label = element.querySelector('label');
    const label1 = element1.querySelector('label');

    expect(label).toBeTruthy();
    expect(label?.htmlFor).toEqual('test-field');
    expect(label?.className).toEqual('pds-c-switch__label');
    expect(label?.textContent).toContain('label test');
    expect(label1?.querySelectorAll('span')[1]?.className).toEqual(
      'pds-c-switch__label-right',
    );
  });

  describe('event handling', () => {
    it('should dispatch a pds-switch-toggle-on event and update the checked property', async () => {
      const changeHandler = jest.fn();

      element.addEventListener('pds-switch-toggle-on', changeHandler);

      inputEl.checked = true;

      await element.updateComplete;

      inputEl.dispatchEvent(new Event('change'));

      expect(changeHandler).toBeCalled();

      expect(element.checked).toBe(true);
    });

    it('should dispatch a pds-switch-toggle-off event', async () => {
      const changeHandler = jest.fn();

      element.addEventListener('pds-switch-toggle-off', changeHandler);

      inputEl.checked = false;

      inputEl.dispatchEvent(new Event('change'));

      expect(changeHandler).toBeCalledTimes(1);
    });

    it('should dispatch a pds-switch-blur event on blur and set the isFocused property to false', () => {
      const blurHandler = jest.fn();

      element.addEventListener('pds-switch-blur', blurHandler);

      inputEl.dispatchEvent(new Event('blur'));

      expect(blurHandler).toBeCalled();

      // @ts-ignore isFocused is a private member of pdsSwitch
      expect(element.isFocused).toBe(false);
    });

    it('should dispatch a pds-switch-focus event on focus and set the isFocused property to true', () => {
      const focusHandler = jest.fn();

      element.addEventListener('pds-switch-focus', focusHandler);

      inputEl.dispatchEvent(new Event('focus'));

      expect(focusHandler).toBeCalled();

      // @ts-ignore isFocused is a private member of pdsSwitch
      expect(element.isFocused).toBe(true);
    });
  });
});
