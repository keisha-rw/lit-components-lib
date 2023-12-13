import {
  addDays,
  getDaysOfMonth,
  getFirstOfMonth,
  getISODateString,
  getLastOfMonth,
  getMonth,
  getMonths,
  getNextDay,
  getNextMonth,
  getNextYear,
  getPreviousDay,
  getPreviousMonth,
  getPreviousYear,
  getWeekDays,
  getYear,
  isDateInRange,
  isSameDay,
  removeTimezoneOffset,
  subDays,
} from './utils';

describe('Date picker util unit tests', () => {
  it('adds days to date', () => {
    expect(addDays(new Date('2022-01-01'), 1)).toEqual(new Date('2022-01-02'));
    expect(addDays(new Date('2022-01-01'), 10)).toEqual(new Date('2022-01-11'));
    expect(addDays(new Date('2022-01-01'), 60)).toEqual(new Date('2022-03-02'));
    expect(addDays(new Date('2022-01-01'), 365)).toEqual(
      new Date('2023-01-01'),
    );
    expect(addDays(new Date('2022-01-01'), -1)).toEqual(new Date('2021-12-31'));
  });

  it('returns (padded) days of month', () => {
    const expected = new Array(31)
      .fill(undefined)
      .map((_, index) =>
        removeTimezoneOffset(
          new Date(`2022-01-${String(index + 1).padStart(2, '0')}`),
        ),
      );

    expect(
      getDaysOfMonth(removeTimezoneOffset(new Date('2022-01-01')), 0),
    ).toEqual(expected);

    expect(
      getDaysOfMonth(removeTimezoneOffset(new Date('2022-01-01')), 3, true),
    ).toEqual([
      removeTimezoneOffset(new Date('2021-12-29')),
      removeTimezoneOffset(new Date('2021-12-30')),
      removeTimezoneOffset(new Date('2021-12-31')),
      ...expected,
      removeTimezoneOffset(new Date('2022-02-01')),
    ]);
  });

  it('returns first of month', () => {
    const expected = removeTimezoneOffset(new Date('2022-01-01'));

    expect(
      getFirstOfMonth(removeTimezoneOffset(new Date('2022-01-01'))),
    ).toEqual(expected);
    expect(
      getFirstOfMonth(removeTimezoneOffset(new Date('2022-01-20'))),
    ).toEqual(expected);
  });

  it('returns ISO date string', () => {
    expect(
      getISODateString(removeTimezoneOffset(new Date('2022-01-01'))),
    ).toEqual('2022-01-01');
    expect(
      getISODateString(removeTimezoneOffset(new Date('2022-01-20'))),
    ).toEqual('2022-01-20');
  });

  it('returns last of month', () => {
    const expected = removeTimezoneOffset(new Date('2022-01-31'));

    expect(
      getLastOfMonth(removeTimezoneOffset(new Date('2022-01-01'))),
    ).toEqual(expected);
    expect(
      getLastOfMonth(removeTimezoneOffset(new Date('2022-01-20'))),
    ).toEqual(expected);
    expect(
      getLastOfMonth(removeTimezoneOffset(new Date('2022-01-31'))),
    ).toEqual(expected);
  });

  it('returns month', () => {
    expect(getMonth(removeTimezoneOffset(new Date('2022-01-01')))).toEqual(1);
    expect(getMonth(removeTimezoneOffset(new Date('2022-01-31')))).toEqual(1);
    expect(getMonth(removeTimezoneOffset(new Date('2022-02-31')))).toEqual(3);
  });

  it('returns months labels', () => {
    const expected = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    expect(getMonths('en-US')).toEqual(expected);
  });

  it('returns next day', () => {
    expect(getNextDay(removeTimezoneOffset(new Date('2022-01-01')))).toEqual(
      removeTimezoneOffset(new Date('2022-01-02')),
    );
    expect(getNextDay(removeTimezoneOffset(new Date('2022-01-31')))).toEqual(
      removeTimezoneOffset(new Date('2022-02-01')),
    );
    expect(getNextDay(removeTimezoneOffset(new Date('2022-12-31')))).toEqual(
      removeTimezoneOffset(new Date('2023-01-01')),
    );
  });

  it('returns next month', () => {
    expect(getNextMonth(removeTimezoneOffset(new Date('2022-01-01')))).toEqual(
      removeTimezoneOffset(new Date('2022-02-01')),
    );

    expect(getNextMonth(removeTimezoneOffset(new Date('2022-12-20')))).toEqual(
      removeTimezoneOffset(new Date('2023-01-20')),
    );
  });

  it('returns next year', () => {
    expect(getNextYear(removeTimezoneOffset(new Date('2022-01-01')))).toEqual(
      removeTimezoneOffset(new Date('2023-01-01')),
    );
    expect(getNextYear(removeTimezoneOffset(new Date('2022-12-31')))).toEqual(
      removeTimezoneOffset(new Date('2023-12-31')),
    );
  });

  it('returns previous day', () => {
    expect(
      getPreviousDay(removeTimezoneOffset(new Date('2022-01-01'))),
    ).toEqual(removeTimezoneOffset(new Date('2021-12-31')));

    expect(
      getPreviousDay(removeTimezoneOffset(new Date('2022-01-31'))),
    ).toEqual(removeTimezoneOffset(new Date('2022-01-30')));
  });

  it('returns previous month', () => {
    expect(
      getPreviousMonth(removeTimezoneOffset(new Date('2022-01-01'))),
    ).toEqual(removeTimezoneOffset(new Date('2021-12-01')));

    expect(
      getPreviousMonth(removeTimezoneOffset(new Date('2022-12-20'))),
    ).toEqual(removeTimezoneOffset(new Date('2022-11-20')));
  });

  it('returns previous year', () => {
    expect(
      getPreviousYear(removeTimezoneOffset(new Date('2022-01-01'))),
    ).toEqual(removeTimezoneOffset(new Date('2021-01-01')));
    expect(
      getPreviousYear(removeTimezoneOffset(new Date('2022-12-31'))),
    ).toEqual(removeTimezoneOffset(new Date('2021-12-31')));
  });

  it('returns week day labels', () => {
    expect(getWeekDays(0, 'en-US')).toEqual([
      ['Sun', 'Sunday'],
      ['Mon', 'Monday'],
      ['Tue', 'Tuesday'],
      ['Wed', 'Wednesday'],
      ['Thu', 'Thursday'],
      ['Fri', 'Friday'],
      ['Sat', 'Saturday'],
    ]);

    expect(getWeekDays(1, 'en-US')).toEqual([
      ['Mon', 'Monday'],
      ['Tue', 'Tuesday'],
      ['Wed', 'Wednesday'],
      ['Thu', 'Thursday'],
      ['Fri', 'Friday'],
      ['Sat', 'Saturday'],
      ['Sun', 'Sunday'],
    ]);
  });

  it('returns year', () => {
    expect(getYear(removeTimezoneOffset(new Date('2022-01-01')))).toEqual(2022);
  });

  it('returns whether date is in range', () => {
    expect(
      isDateInRange(removeTimezoneOffset(new Date('2022-01-01')), {
        from: removeTimezoneOffset(new Date('2022-01-01')),
        to: removeTimezoneOffset(new Date('2022-01-01')),
      }),
    ).toEqual(true);

    expect(
      isDateInRange(removeTimezoneOffset(new Date('2022-01-01')), {
        from: removeTimezoneOffset(new Date('2021-01-01')),
        to: removeTimezoneOffset(new Date('2022-02-01')),
      }),
    ).toEqual(true);

    expect(
      isDateInRange(removeTimezoneOffset(new Date('2022-01-01')), {
        from: removeTimezoneOffset(new Date('2022-02-01')),
        to: removeTimezoneOffset(new Date('2021-01-01')),
      }),
    ).toEqual(true);

    expect(
      isDateInRange(removeTimezoneOffset(new Date('2022-01-01')), {
        from: removeTimezoneOffset(new Date('2022-01-02')),
        to: removeTimezoneOffset(new Date('2022-02-01')),
      }),
    ).toEqual(false);
  });

  it('returns whether dates are same day', () => {
    expect(
      isSameDay(
        removeTimezoneOffset(new Date('2022-01-01')),
        removeTimezoneOffset(new Date('2022-01-01')),
      ),
    ).toEqual(true);

    expect(
      isSameDay(
        removeTimezoneOffset(new Date('2022-01-01')),
        removeTimezoneOffset(new Date('2021-01-01')),
      ),
    ).toEqual(false);

    expect(
      isSameDay(
        removeTimezoneOffset(new Date('2022-01-02')),
        removeTimezoneOffset(new Date('2022-01-01')),
      ),
    ).toEqual(false);
  });

  it('subs days of date', () => {
    expect(subDays(removeTimezoneOffset(new Date('2022-01-01')), 1)).toEqual(
      removeTimezoneOffset(new Date('2021-12-31')),
    );
    expect(subDays(removeTimezoneOffset(new Date('2022-01-11')), 10)).toEqual(
      removeTimezoneOffset(new Date('2022-01-01')),
    );
    expect(subDays(removeTimezoneOffset(new Date('2022-03-02')), 60)).toEqual(
      removeTimezoneOffset(new Date('2022-01-01')),
    );
    expect(subDays(removeTimezoneOffset(new Date('2023-01-01')), 365)).toEqual(
      removeTimezoneOffset(new Date('2022-01-01')),
    );
    expect(subDays(removeTimezoneOffset(new Date('2022-01-01')), -1)).toEqual(
      removeTimezoneOffset(new Date('2022-01-02')),
    );
  });
});
