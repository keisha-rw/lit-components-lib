import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, elementUpdated, fixture } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { PdsSelect } from './select';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Select/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Select unit tests', () => {
  let element: PdsSelect;
  beforeEach(async () => {
    element = await fixture(`<pds-select
    label="select label"
    variant="default"
    name="select name"
    placeholder="select placeholder"
  >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </pds-select>`);
  });

  it('is an instance of PdsSelect', () => {
    expect(element).toBeInstanceOf(PdsSelect);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('dispatches a pds-select-blur event on blur', async () => {
    jest.spyOn(element, 'dispatchEvent');
    const userEventWithoutDelay = userEvent.setup({ delay: null });

    const selectElement = element.shadowRoot?.querySelector('select');
    if (selectElement) {
      await userEventWithoutDelay.click(selectElement);
      await userEventWithoutDelay.tab();
    }
    const blurEvent = new Event('pds-select-blur', {
      bubbles: false,
      composed: true,
    });
    expect(element.dispatchEvent).toHaveBeenCalledWith(blurEvent);
  });

  it('dispatches a pds-select-change event on change', async () => {
    jest.spyOn(element, 'dispatchEvent');
    const userEventWithoutDelay = userEvent.setup({ delay: null });

    const selectElement = element.shadowRoot?.querySelector('select');
    if (selectElement) {
      await userEventWithoutDelay.selectOptions(selectElement, ['1']);
      // Change the value so we can verify that the onChange was fired
      await userEventWithoutDelay.selectOptions(selectElement, ['2']);
    }
    expect(element.value).toStrictEqual('2');
    const changeEvent = new Event('pds-select-change', {
      bubbles: false,
      composed: true,
    });
    expect(element.dispatchEvent).toHaveBeenCalledWith(changeEvent);
  });

  it('returns nothing and logs an error if there is no label', async () => {
    // Mock the console error so it doesn't muck up our testing logs
    jest.spyOn(console, 'error').mockImplementation(() => {});
    await fixture(`<pds-select
    variant="default"
    name="select name"
    placeholder="select placeholder"
  >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </pds-select>`);

    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      '"label" is required as a property or as a slot in <%s /> but is undefined',
      'pds-select',
    );
  });

  it('sets selected on the correct option when defaultValue is set', async () => {
    const elementWithDefaultValue = await fixture(`<pds-select
    variant="default"
    label="select label"
    name="select name"
    value="option2"
  >
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </pds-select>`);

    // Grab option 2
    const selectedOption = elementWithDefaultValue.shadowRoot?.querySelector(
      'option[value="option2"]',
    );

    // Make sure it's selected
    expect(selectedOption).toMatchSnapshot();
  });

  it('renders a placeholder when placeholder attribute is set', () => {
    // Query placeholder by ID
    const placeholder = element.shadowRoot?.querySelector(
      'option[id="placeholder"]',
    );

    // Make sure placeholder is set
    expect(placeholder?.textContent).toBe('select placeholder');
  });

  it('does not render a placeholder when placeholder attribute is not set', async () => {
    const elementWithoutPlaceholder = await fixture(`<pds-select
      variant="default"
      label="select label"
      name="select name"
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </pds-select>`);

    // Query placeholder by ID
    const emptyPlaceholder =
      elementWithoutPlaceholder.shadowRoot?.querySelector(
        'option[id="placeholder"]',
      );

    // Make sure placeholder is null
    expect(emptyPlaceholder).toBeNull();
  });

  it('should reset the select value on form reset', async () => {
    const originalValue = 'option2';
    const newValue = 'option3';
    const form: HTMLFormElement = await fixture(
      `<form><pds-select
      variant="default"
      label="select label"
      name="select name"
      value="${originalValue}"
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </pds-select></form>`,
    );

    element = form.querySelector('pds-select') as PdsSelect;

    const selectEl = element?.shadowRoot?.querySelector(
      'select',
    ) as HTMLSelectElement;

    element.value = newValue;

    expect(element.value).toBe(newValue);
    await elementUpdated(element);
    expect(selectEl.selectedOptions[0].value).toBe(newValue);

    form.reset();

    expect(element.value).toBe(originalValue);
    await elementUpdated(element);
    expect(selectEl.selectedOptions[0].value).toBe(originalValue);
  });

  it('selectContainsOption returns correct boolean for option existence in the select', async () => {
    expect(element.selectContainsOption(element.field, '1')).toBeTruthy();
    expect(element.selectContainsOption(element.field, '5')).toBeFalsy();
  });

  it('handles deletion of an option attribute', async () => {
    const elementWithDefaultValue = await fixture(`<pds-select
    variant="default"
    label="select label"
    name="select name"
    value="option1"
  >
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </pds-select>`);
    elementWithDefaultValue.querySelector('option')?.remove();

    await new Promise(process.nextTick);
    await (elementWithDefaultValue as PdsSelect).updateComplete;
    expect((elementWithDefaultValue as PdsSelect).value).toBe('option2');
    expect((elementWithDefaultValue as PdsSelect).field.options).toHaveLength(
      2,
    );
  });

  it('handles modification of an option attribute', async () => {
    const elementWithDefaultValue = await fixture(`<pds-select
    variant="default"
    label="select label"
    name="select name"
    value="option2"
  >
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </pds-select>`);

    elementWithDefaultValue.querySelector('option')?.setAttribute('value', '1');

    await new Promise(process.nextTick);
    await (elementWithDefaultValue as PdsSelect).updateComplete;
    expect((elementWithDefaultValue as PdsSelect).value).toBe('option2');
  });

  it('handles modification of an option text node', async () => {
    const elementWithDefaultValue = await fixture(`<pds-select
    variant="default"
    label="select label"
    name="select name"
    value="option2"
  >
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </pds-select>`);

    // @ts-expect-error ts thinks this could be null
    elementWithDefaultValue.querySelector('option').text = 'blast';

    await new Promise(process.nextTick);
    await (elementWithDefaultValue as PdsSelect).updateComplete;
    expect((elementWithDefaultValue as PdsSelect).value).toBe('option2');
  });

  it('handles addition of an option attribute', async () => {
    const elementWithDefaultValue = await fixture(`<pds-select
    variant="default"
    label="select label"
    name="select name"
    value="option2"
  >
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </pds-select>`);

    elementWithDefaultValue.insertAdjacentHTML(
      'beforeend',
      '<option value="option4">Option 4</option>',
    );

    await new Promise(process.nextTick);
    expect((elementWithDefaultValue as PdsSelect).value).toBe('option2');
    expect((elementWithDefaultValue as PdsSelect).field.options).toHaveLength(
      4,
    );
  });
});
