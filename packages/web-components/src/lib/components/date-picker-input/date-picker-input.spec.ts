import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture, html } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/dom';
import { PdsDatePickerInput } from './date-picker-input';
import '../date-picker/date-picker';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Date picker input/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

// mocking the library because focus traps hate jest
jest.mock('focus-trap', () => ({
  createFocusTrap: () => ({ activate: jest.fn(), deactivate: jest.fn() }),
  initializeTrap: jest.fn(),
}));

describe('DatePickerInput unit tests', () => {
  let element: PdsDatePickerInput;

  beforeEach(async () => {
    element = await fixture(
      html` <pds-date-picker-input
        name="datePickerInput"
        dateformat="MM/DD/YYYY"
        label="Select a date"
        ><pds-date-picker slot="datepicker"></pds-date-picker
      ></pds-date-picker-input>`,
    );
  });

  it('is an instance of PdsDatePickerInput', () => {
    expect(element).toBeInstanceOf(PdsDatePickerInput);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('by default datePickerState is false', () => {
    expect(element.datePickerState).toBe(false);
  });

  it('if user clicks on input, the datePickerState should be true', async () => {
    const inputEl = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });

    await userEventWithoutDelay.click(inputEl);

    expect(element.datePickerState).toBe(true);
  });

  it('if user presses the down arrow when focused on input, the datePickerState should be true, then pressing escape when inside datepicker sets the datePicker to false', async () => {
    const inputEl = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    inputEl.focus();

    const userEventWithoutDelay = userEvent.setup({ delay: null });

    await userEventWithoutDelay.keyboard('[ArrowDown]');

    expect(element.datePickerState).toBe(true);

    await userEventWithoutDelay.keyboard('[Escape]');

    expect(element.datePickerState).toBe(false);
  });

  it('if user tabs on input, the datePickerState should be false', () => {
    const inputEl = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    inputEl.focus();

    expect(element.datePickerState).toBe(false);
  });

  it('if user escapes on input, the datePickerState should be false', async () => {
    const inputEl = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    inputEl.focus();

    const userEventWithoutDelay = userEvent.setup({ delay: null });

    await userEventWithoutDelay.keyboard('[Escape]');

    expect(element.datePickerState).toBe(false);
  });

  it('if user clicks on calendar icon, datepicker state should be true', async () => {
    const calendarIconButton = element.shadowRoot?.querySelector(
      'pds-icon-calendar',
    ) as HTMLElement;

    calendarIconButton.click();

    await waitFor(
      () => {
        expect(element.datePickerState).toBe(true);
      },
      {
        timeout: 100,
      },
    );
  });

  it('if text is entered into the input, the error message should display', async () => {
    const inputEl = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    await userEvent.type(inputEl, 'Text here');
    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.keyboard('[Tab][Escape]');
    const validityAttribute = inputEl.getAttribute('aria-invalid');

    await waitFor(
      () => {
        expect(validityAttribute).toBe('true');
      },
      {
        timeout: 1000,
      },
    );
  });

  it('if an invalid date is entered, the error message should display', async () => {
    const inputEl = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    await userEvent.type(inputEl, '02/29/2023');
    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.keyboard('[Tab][Escape]');
    const validityAttribute = inputEl.getAttribute('aria-invalid');

    await waitFor(
      () => {
        expect(validityAttribute).toBe('true');
      },
      {
        timeout: 1000,
      },
    );
  });

  it('if a valid date is entered, the error message should not display', async () => {
    const inputEl = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    await userEvent.type(inputEl, '02/29/2020');
    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.keyboard('[Tab][Escape]');
    const validityAttribute = inputEl.getAttribute('aria-invalid');

    await waitFor(
      () => {
        expect(validityAttribute).toBe(null);
      },
      {
        timeout: 1000,
      },
    );
  });

  it('if a valid date is entered, then changed, the value should be set to the new value', async () => {
    const inputEl = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    await userEvent.type(inputEl, 'a');
    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.keyboard('[Tab][Escape]');
    inputEl.focus();
    await userEventWithoutDelay.keyboard('[Backspace]');

    await userEvent.type(inputEl, '12/12/2012');
    await userEventWithoutDelay.keyboard('[Tab][Escape]');

    await waitFor(
      () => {
        expect(inputEl.value).toBe('12/12/2012');
      },
      {
        timeout: 1000,
      },
    );
  });

  it('should dispatch a pds-text-input-change event and update the value on change', () => {
    const inputEl = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const changeHandler = jest.fn();

    element.addEventListener('pds-date-picker-input-change', changeHandler);

    inputEl.value = 'testing';

    inputEl.dispatchEvent(new Event('change'));

    expect(changeHandler).toBeCalled();
    expect(element.value).toBe('testing');
  });

  it('should dispatch a pds-date-picker-select-date event and generates the proper date format for en-US', async () => {
    const configuredElement = (await fixture(
      html`<pds-date-picker-input
        name="datePickerInput"
        dateformat="MM/DD/YYYY"
        label="Select a date"
        ><pds-date-picker initialDisplayedMonth="2022-01-01"></pds-date-picker
      ></pds-date-picker-input>`,
    )) as PdsDatePickerInput;
    const inputEl = configuredElement.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    const clickableDate = configuredElement
      .querySelector('pds-date-picker')
      ?.shadowRoot?.querySelector('.pds-c-date-picker__date') as HTMLElement;

    clickableDate.click();

    const customEvent = new CustomEvent('pds-date-picker-select-date', {
      detail: { date: '2021-12-26' },
    });

    configuredElement.datePickerSelectDate(customEvent);

    return Promise.resolve().then(() => {
      expect(inputEl.value).toBe('12/26/2021');
    });
  });

  it('should dispatch a pds-date-picker-select-date event and generates the proper date format for en-GB', async () => {
    const configuredElement = (await fixture(
      html`<pds-date-picker-input
        name="datePickerInput"
        dateformat="DD/MM/YYYY"
        label="Select a date"
        ><pds-date-picker initialDisplayedMonth="2022-01-01"></pds-date-picker
      ></pds-date-picker-input>`,
    )) as PdsDatePickerInput;
    const inputEl = configuredElement.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    const clickableDate = configuredElement
      .querySelector('pds-date-picker')
      ?.shadowRoot?.querySelector('.pds-c-date-picker__date') as HTMLElement;

    clickableDate.click();

    const customEvent = new CustomEvent('pds-date-picker-select-date', {
      detail: { date: '2021-12-26' },
    });

    configuredElement.datePickerSelectDate(customEvent);

    return Promise.resolve().then(() => {
      expect(inputEl.value).toBe('26/12/2021');
    });
  });

  it('should dispatch a change event on date picker select date if input already has a value', async () => {
    const configuredElement = (await fixture(
      html`<pds-date-picker-input
        name="datePickerInput"
        dateformat="DD/MM/YYYY"
        label="Select a date"
        ><pds-date-picker initialDisplayedMonth="2022-01-01"></pds-date-picker
      ></pds-date-picker-input>`,
    )) as PdsDatePickerInput;
    const inputEl = configuredElement.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    await userEvent.type(inputEl, '12/12/2012');

    const clickableDate = configuredElement
      .querySelector('pds-date-picker')
      ?.shadowRoot?.querySelector('.pds-c-date-picker__date') as HTMLElement;

    clickableDate.click();

    const customEvent = new CustomEvent('pds-date-picker-select-date', {
      detail: { date: '2021-12-26' },
    });

    configuredElement.datePickerSelectDate(customEvent);

    return Promise.resolve().then(() => {
      expect(inputEl.value).toBe('26/12/2021');
    });
  });

  it('if the dateformat is GB-en, the date should validate accordingly', async () => {
    element = await fixture(
      html` <pds-date-picker-input
        name="datePickerInput"
        dateformat="DD/MM/YYYY"
        label="Select a date"
        ><pds-date-picker slot="datepicker"></pds-date-picker
      ></pds-date-picker-input>`,
    );
    const inputEl = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    await userEvent.type(inputEl, '29/02/2020');
    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.keyboard('[Tab][Escape]');
    const validityAttribute = inputEl.getAttribute('aria-invalid');

    await waitFor(
      () => {
        expect(validityAttribute).toBe(null);
      },
      {
        timeout: 1000,
      },
    );
  });

  it('if datepicker has no label, throw an error', async () => {
    element = await fixture(
      html` <pds-date-picker-input
        name="datePickerInput"
        dateformat="MM/DD/YYYY"
        ><pds-date-picker slot="datepicker"></pds-date-picker
      ></pds-date-picker-input>`,
    );
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const verifyLabel = element.verifyLabel();
    expect(consoleError).toBeCalledTimes(1);
    expect(verifyLabel).toBe(false);
    consoleError.mockRestore();
  });

  it('if weekends are disabled user should see an error if they type in a weekend date', async () => {
    function customValidation(date: Date) {
      if (date.getDay() === 6 || date.getDay() === 0) {
        return false;
      }

      return true;
    }

    const customEl = (await fixture(
      html` <pds-date-picker-input
        name="datePickerInput"
        label="datePicker"
        dateformat="MM/DD/YYYY"
        .customInvalidDates=${customValidation}
        ><pds-date-picker
          slot="datepicker"
          disabledate="disable-weekends"
        ></pds-date-picker
      ></pds-date-picker-input>`,
    )) as PdsDatePickerInput;
    const inputEl = customEl.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    await userEvent.type(inputEl, '07/08/2023');
    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.keyboard('[Tab][Escape]');
    const validityAttribute = inputEl.getAttribute('aria-invalid');

    await waitFor(
      () => {
        expect(validityAttribute).toBe('true');
      },
      {
        timeout: 1000,
      },
    );
  });
  it('asserts that multiple datepickers can be accessed', async () => {
    const elements = await fixture(
      html` <div>
        <pds-date-picker-input
          label="datePicker"
          name="datePickerInput1"
          dateformat="MM/DD/YYYY"
          ><pds-date-picker
            slot="datepicker"
          ></pds-date-picker></pds-date-picker-input
        ><pds-date-picker-input
          name="datePickerInput2"
          label="datePicker"
          dateformat="MM/DD/YYYY"
          ><pds-date-picker
            slot="datepicker"
            name="datePicker2"
          ></pds-date-picker
        ></pds-date-picker-input>
      </div>`,
    );

    const datePickerInputElems = elements.querySelectorAll(
      'pds-date-picker-input',
    );
    const datePickerInputElemsArr = Array.from(datePickerInputElems);
    const datePicker1 = datePickerInputElemsArr[0] as PdsDatePickerInput;
    const datePicker2 = datePickerInputElemsArr[1] as PdsDatePickerInput;

    const inputElem1 = datePicker1.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const inputElem2 = datePicker2.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    inputElem1.focus();
    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.keyboard('[ArrowDown]');
    expect(datePicker1.datePickerState).toBe(true);
    await userEventWithoutDelay.keyboard('[Escape]');
    expect(datePicker1.datePickerState).toBe(false);

    inputElem2.focus();
    await userEventWithoutDelay.keyboard('[ArrowDown]');
    expect(datePicker2.datePickerState).toBe(true);
    await userEventWithoutDelay.keyboard('[Escape]');
    expect(datePicker2.datePickerState).toBe(false);
  });
});
