import { assert, fixture } from '@open-wc/testing';
import { PdsIconFilter } from './filter';

describe('Filter icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-filter/>');
  });

  it('is an instance of PdsIconFilter', () => {
    expect(element).toBeInstanceOf(PdsIconFilter);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
