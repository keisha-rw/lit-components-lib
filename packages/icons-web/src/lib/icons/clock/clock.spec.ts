import { assert, fixture } from '@open-wc/testing';
import { PdsIconClock } from './clock';

describe('Clock icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-clock/>');
  });

  it('is an instance of PdsIconClock', () => {
    expect(element).toBeInstanceOf(PdsIconClock);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
