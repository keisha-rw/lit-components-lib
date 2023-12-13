import { assert, fixture } from '@open-wc/testing';
import { PdsIconCalendar } from './calendar';

describe('Calendar icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-calendar/>');
  });

  it('is an instance of PdsIconCalendar', () => {
    expect(element).toBeInstanceOf(PdsIconCalendar);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
