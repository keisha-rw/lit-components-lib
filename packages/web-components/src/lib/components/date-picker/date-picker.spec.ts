import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsDatePicker } from './date-picker';
import { getWeekDays, removeTimezoneOffset } from './utils';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Date picker/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Date picker unit tests', () => {
  let element: PdsDatePicker;

  beforeEach(async () => {
    element = await fixture('<pds-date-picker/>');
  });

  it('is an instance of PdsDatePicker', () => {
    expect(element).toBeInstanceOf(PdsDatePicker);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('initially shows the current month', async () => {
    expect(element.currentDate.getMonth()).toBe(new Date().getMonth());
    expect(
      element.shadowRoot
        ?.querySelector('.pds-c-date-picker__current-month')
        ?.textContent?.trim(),
    ).toBe(new Date().toLocaleString('default', { month: 'long' }));
  });

  it('shows configured start date', async () => {
    const configuredElement = await fixture(
      '<pds-date-picker initialDisplayedMonth="1989-05-16"/>',
    );

    expect(
      configuredElement.shadowRoot
        ?.querySelector('.pds-c-date-picker__current-month')
        ?.textContent?.trim(),
    ).toBe('May');
    expect(
      configuredElement.shadowRoot
        ?.querySelector('.pds-c-date-picker__year-display')
        ?.textContent?.trim(),
    ).toBe('1989');
  });

  it('shows weekday header', async () => {
    const weekDayArr1: any[] = [];
    element.shadowRoot
      ?.querySelectorAll('.pds-c-date-picker__weekday')
      .forEach((el) => {
        weekDayArr1.push(
          (el as HTMLElement).textContent?.trim().substring(0, 1),
        );
      });

    expect(weekDayArr1).toEqual(
      getWeekDays(0, 'en-US').map((weekday) => weekday[0].substring(0, 1)),
    );

    const configuredElement = await fixture(
      '<pds-date-picker firstdayofweek="1"/>',
    );

    const weekDayArr2: any[] = [];
    configuredElement.shadowRoot
      ?.querySelectorAll('.pds-c-date-picker__weekday')
      .forEach((el) => {
        weekDayArr2.push(
          (el as HTMLElement).textContent?.trim().substring(0, 1),
        );
      });

    expect(weekDayArr2).toEqual(
      getWeekDays(1, 'en-US').map((weekday) => weekday[0].substring(0, 1)),
    );

    const configuredElement2 = await fixture(
      '<pds-date-picker locale="es-US"/>',
    );

    const weekDayArr3: any[] = [];
    configuredElement2.shadowRoot
      ?.querySelectorAll('.pds-c-date-picker__weekday')
      .forEach((el) => {
        weekDayArr3.push(
          (el as HTMLElement).textContent?.trim().substring(0, 1),
        );
      });

    expect(weekDayArr3).toEqual(
      getWeekDays(0, 'es-US').map((weekday) => weekday[0].substring(0, 1)),
    );
  });

  it('fires selectDate events', async () => {
    const configuredElement = await fixture(
      '<pds-date-picker initialDisplayedMonth="2022-01-01"/>',
    );

    const handler = jest.fn();
    configuredElement.addEventListener('pds-date-picker-select-date', handler);

    const clickableDate = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__date',
    ) as HTMLElement;

    clickableDate.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail).toEqual({ date: '2021-12-26' });
    });
  });

  it('fires selectDate events via keyboard', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2022-01-01"/>',
    )) as PdsDatePicker;
    const handler = jest.fn();
    configuredElement.addEventListener('pds-date-picker-select-date', handler);

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'ArrowRight', key: 'ArrowRight' }),
    );
    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'Space', key: 'Space' }),
    );
    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'ArrowDown', key: 'ArrowDown' }),
    );
    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'Enter', key: 'Enter' }),
    );
    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'ArrowUp', key: 'ArrowUp' }),
    );
    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'Enter', key: 'Enter' }),
    );
    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'ArrowLeft', key: 'ArrowLeft' }),
    );
    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'Enter', key: 'Enter' }),
    );

    expect(handler.mock.calls[0][0].detail).toEqual({ date: '2022-01-02' });
    expect(handler.mock.calls[1][0].detail).toEqual({ date: '2022-01-09' });
    expect(handler.mock.calls[2][0].detail).toEqual({ date: '2022-01-02' });
    expect(handler.mock.calls[3][0].detail).toEqual({ date: '2022-01-01' });
  });

  it('sets current date with keyboard selection', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2017-01-01"/>',
    )) as PdsDatePicker;

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'ArrowRight', key: 'ArrowRight' }),
    );

    expect(configuredElement.currentDate).toEqual(
      removeTimezoneOffset(new Date('2017-01-02')),
    );

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'ArrowRight', key: 'ArrowRight' }),
    );

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'Enter', key: 'Enter' }),
    );

    expect(configuredElement.currentDate).toEqual(
      removeTimezoneOffset(new Date('2017-01-03')),
    );

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'ArrowDown', key: 'ArrowDown' }),
    );

    expect(configuredElement.currentDate).toEqual(
      removeTimezoneOffset(new Date('2017-01-10')),
    );

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'ArrowLeft', key: 'ArrowLeft' }),
    );

    expect(configuredElement.currentDate).toEqual(
      removeTimezoneOffset(new Date('2017-01-09')),
    );

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'ArrowUp', key: 'ArrowUp' }),
    );

    expect(configuredElement.currentDate).toEqual(
      removeTimezoneOffset(new Date('2017-01-02')),
    );

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'End', key: 'End' }),
    );

    expect(configuredElement.currentDate).toEqual(
      removeTimezoneOffset(new Date('2017-01-31')),
    );

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'Home', key: 'Home' }),
    );

    expect(configuredElement.currentDate).toEqual(
      removeTimezoneOffset(new Date('2017-01-01')),
    );

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'PageDown', key: 'PageDown' }),
    );

    expect(configuredElement.currentDate).toEqual(
      removeTimezoneOffset(new Date('2017-02-01')),
    );

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'PageUp', key: 'PageUp' }),
    );

    expect(configuredElement.currentDate).toEqual(
      removeTimezoneOffset(new Date('2017-01-01')),
    );

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', {
        code: 'PageDown',
        key: 'PageDown',
        shiftKey: true,
      }),
    );

    expect(configuredElement.currentDate).toEqual(
      removeTimezoneOffset(new Date('2018-01-01')),
    );

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', {
        code: 'PageUp',
        key: 'PageUp',
        shiftKey: true,
      }),
    );

    expect(configuredElement.currentDate).toEqual(
      removeTimezoneOffset(new Date('2017-01-01')),
    );
  });

  it('disables dates', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2017-01-01" disableDate="2017-01-01"/>',
    )) as PdsDatePicker;
    const handler = jest.fn();

    configuredElement.addEventListener('pds-date-picker-select-date', handler);

    const dateCell = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__date--disabled',
    ) as HTMLElement;

    dateCell.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(dateCell.getAttribute('aria-disabled')).toBe('true');
      expect(handler).not.toHaveBeenCalled();
    });
  });

  it('disables weekends', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2017-01-01" disableDate="disable-weekends"/>',
    )) as PdsDatePicker;

    const disabledDateCells = configuredElement.shadowRoot?.querySelectorAll(
      '.pds-c-date-picker__date--disabled:not(.pds-c-date-picker__date--overflowing)',
    );

    expect(disabledDateCells?.length).toBe(9);
  });

  it('returns error for invalid disable date string', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const configuredElement = (await fixture(
      '<pds-date-picker  initialDisplayedMonth="2017-01-01" disableDate="12/31/2020"/>',
    )) as PdsDatePicker;

    // will be called twice due to the two calls to this.init that are required to resolve the react bug
    expect(consoleError).toBeCalledTimes(2);

    consoleError.mockRestore();
  });

  it('changes months', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2022-01-01" disableDate="2022-01-01"/>',
    )) as PdsDatePicker;

    const handler = jest.fn();
    configuredElement.addEventListener('pds-date-picker-change-view', handler);

    const header = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__header',
    ) as HTMLElement;

    const previousMonthButton = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__previous-month-button',
    ) as HTMLElement;

    const nextMonthButton =
      configuredElement.shadowRoot?.querySelector<HTMLButtonElement>(
        '.pds-c-date-picker__next-month-button',
      ) as HTMLElement;

    expect(header.textContent?.trim().startsWith('January')).toBeTruthy();

    expect(header.textContent?.trim().startsWith('May')).toBeFalsy();

    previousMonthButton.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(header.textContent?.trim().startsWith('December')).toBeTruthy();
      expect(handler.mock.calls[0][0].detail).toEqual({
        month: 'December',
        year: 2021,
      });

      nextMonthButton.dispatchEvent(new Event('click'));

      return Promise.resolve().then(() => {
        expect(header.textContent?.trim().startsWith('January')).toBeTruthy();
        expect(handler.mock.calls[1][0].detail).toEqual({
          month: 'January',
          year: 2022,
        });
      });
    });
  });

  it('changes year', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2022-01-01"/>',
    )) as PdsDatePicker;

    const handler = jest.fn();
    configuredElement.addEventListener('pds-date-picker-change-view', handler);

    const header = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__header',
    ) as HTMLElement;

    const previousYearButton = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__previous-year-button',
    ) as HTMLElement;

    const nextYearButton = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__next-year-button',
    ) as HTMLElement;

    expect(header.textContent?.trim().includes('2022')).toBeTruthy();

    expect(header.textContent?.trim().includes('1989')).toBeFalsy();

    previousYearButton.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(header.textContent?.trim().includes('2021')).toBeTruthy();
      expect(handler.mock.calls[0][0].detail).toEqual({
        month: 'January',
        year: 2021,
      });

      nextYearButton.dispatchEvent(new Event('click'));

      return Promise.resolve().then(() => {
        expect(header.textContent?.trim().includes('2022')).toBeTruthy();
        expect(handler.mock.calls[1][0].detail).toEqual({
          month: 'January',
          year: 2022,
        });
      });
    });
  });

  it('jumps to current month', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2022-01-01" showTodayButton="true"/>',
    )) as PdsDatePicker;

    const todayButton = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__today-button',
    ) as HTMLElement;

    const header = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__header',
    ) as HTMLElement;

    const today = new Date();

    expect(header.textContent?.includes('January 1, 2022')).toBeTruthy();

    todayButton.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(
        header.textContent?.includes(
          Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }).format(today),
        ),
      ).toBeTruthy();
    });
  });

  it('clears its value', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2022-01-01" showClearButton="true"/>',
    )) as PdsDatePicker;

    const handler = jest.fn();

    const clearButton = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__clear-button',
    ) as HTMLElement;

    configuredElement.addEventListener('pds-date-picker-select-date', handler);

    const clickableDate = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__date',
    ) as HTMLElement;

    clickableDate.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail).toEqual({ date: '2021-12-26' });

      clearButton.dispatchEvent(new Event('click'));

      return Promise.resolve().then(() => {
        expect(handler.mock.calls[1][0].detail).toEqual({ date: undefined });
      });
    });
  });

  it('can be disabled', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2022-01-01" disabled="true"/>',
    )) as PdsDatePicker;

    const handler = jest.fn();

    configuredElement.addEventListener('pds-date-picker-select-date', handler);
    configuredElement.addEventListener('pds-date-picker-change-view', handler);

    const clickableDate = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__date',
    );

    clickableDate?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(
        configuredElement.shadowRoot?.children[0].classList.contains(
          'pds-c-date-picker--disabled',
        ),
      ).toBeTruthy();

      expect(handler).not.toHaveBeenCalled();
    });
  });

  it('defaults to navigator.language if a blank locale string is passed', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker locale=""/>',
    )) as PdsDatePicker;

    expect(configuredElement.locale).toBe('en-US');
  });

  it('sets locale when lang attribute is "es"', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker lang="es"/>',
    )) as PdsDatePicker;

    expect(configuredElement.locale).toBe('es-US');
  });

  it('overrides locale when lang attribute is "es"', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker lang="es" locale="en-US"/>',
    )) as PdsDatePicker;

    expect(configuredElement.locale).toBe('es-US');
  });

  it('handles range dates', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker isRange initialDisplayedMonth="2017-01-01" />',
    )) as PdsDatePicker;

    const clickableDateArr =
      configuredElement.shadowRoot?.querySelectorAll<HTMLElement>(
        '.pds-c-date-picker__date',
      );

    if (clickableDateArr) {
      const clickableDateOne = clickableDateArr[0];
      const clickableDateTwo = clickableDateArr[1];

      clickableDateOne?.dispatchEvent(new Event('click'));

      return Promise.resolve().then(() => {
        clickableDateTwo?.dispatchEvent(new Event('click'));

        return Promise.resolve().then(() => {
          expect(configuredElement.value).toEqual([
            removeTimezoneOffset(new Date('2017-01-01')),
            removeTimezoneOffset(new Date('2017-01-02')),
          ]);
        });
      });
    }

    return false;
  });

  it('handles reversed range dates', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker isRange initialDisplayedMonth="2017-01-01" />',
    )) as PdsDatePicker;

    const clickableDateArr =
      configuredElement.shadowRoot?.querySelectorAll<HTMLElement>(
        '.pds-c-date-picker__date',
      );

    if (clickableDateArr) {
      const clickableDateOne = clickableDateArr[1];
      const clickableDateTwo = clickableDateArr[0];

      clickableDateOne?.dispatchEvent(new Event('click'));

      return Promise.resolve().then(() => {
        clickableDateTwo?.dispatchEvent(new Event('click'));

        return Promise.resolve().then(() => {
          expect(configuredElement.value).toEqual([
            removeTimezoneOffset(new Date('2017-01-01')),
            removeTimezoneOffset(new Date('2017-01-02')),
          ]);
        });
      });
    }

    return false;
  });

  it('handles key down event on disabled date picker', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2017-01-01" disabled/>',
    )) as PdsDatePicker;

    configuredElement.handleKeyDown(
      new KeyboardEvent('keypress', { code: 'PageDown', key: 'PageDown' }),
    );

    expect(configuredElement.hoveredDate).toEqual(undefined);
  });

  it('handles mouse enter event on disabled date picker', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2017-01-01" disabled/>',
    )) as PdsDatePicker;

    const clickableDate = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__date',
    ) as HTMLElement;

    const newMouseEvent = new MouseEvent('mouseEnter');
    clickableDate.dispatchEvent(newMouseEvent);

    expect(configuredElement.hoveredDate).toEqual(undefined);
  });

  it('handles mouse leave event on disabled date picker', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2017-01-01"/>',
    )) as PdsDatePicker;

    const clickableDate = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__date',
    ) as HTMLElement;

    const newMouseEvent = new MouseEvent('mouseLeave');
    clickableDate.dispatchEvent(newMouseEvent);

    expect(configuredElement.hoveredDate).toEqual(undefined);
  });

  it('handles mouse enter event on date picker', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDisplayedMonth="2017-01-01"/>',
    )) as PdsDatePicker;

    const clickableDate = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__date',
    ) as HTMLElement;

    let comparisonDate;

    if (typeof clickableDate.dataset.date === 'string') {
      comparisonDate = removeTimezoneOffset(
        new Date(clickableDate.dataset.date),
      );
    }

    const newMouseEvent = new MouseEvent('mouseEnter');
    clickableDate.dispatchEvent(newMouseEvent);

    expect(configuredElement.hoveredDate).toEqual(comparisonDate);
  });

  it('inits with initial date', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDate="2017-01-01"/>',
    )) as PdsDatePicker;

    expect(configuredElement.value).toEqual(
      removeTimezoneOffset(new Date('2017-01-01')),
    );
  });

  it('inits with initial range date', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDate="2017-01-01, 2017-01-05"/>',
    )) as PdsDatePicker;

    expect(configuredElement.value).toEqual([
      removeTimezoneOffset(new Date('2017-01-01')),
      removeTimezoneOffset(new Date('2017-01-05')),
    ]);
  });

  it('accepts labels', async () => {
    const configuredElement = (await fixture(
      `<pds-date-picker showTodayButton showClearButton labels='{"clearButton": "Change it up","nextMonthButton": "Change it up","nextYearButton": "Change it up","picker": "Change it up","previousMonthButton": "Change it up","previousYearButton": "Change it up","todayButton": "Change it up"}'/>`,
    )) as PdsDatePicker;

    expect(
      configuredElement.shadowRoot
        ?.querySelector('.pds-c-date-picker__next-year-button')
        ?.getAttribute('aria-label'),
    ).toEqual('Change it up');
  });

  it('maintains current date when current date is selected', async () => {
    const configuredElement = (await fixture(
      '<pds-date-picker initialDate="2017-01-01" initialDisplayedMonth="2017-01-01"/>',
    )) as PdsDatePicker;

    const clickableDate = configuredElement.shadowRoot?.querySelector(
      '.pds-c-date-picker__date',
    );

    clickableDate?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(configuredElement.value).toEqual(
        removeTimezoneOffset(new Date('2017-01-01')),
      );
    });
  });
});
