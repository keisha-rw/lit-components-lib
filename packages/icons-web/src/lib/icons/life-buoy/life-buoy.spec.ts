import { assert, fixture } from '@open-wc/testing';
import { PdsIconLifeBuoy } from './life-buoy';

describe('LifeBuoy icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-life-buoy/>');
  });

  it('is an instance of PdsIconLifeBuoy', () => {
    expect(element).toBeInstanceOf(PdsIconLifeBuoy);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
