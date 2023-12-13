import { assert, fixture } from '@open-wc/testing';
import { PdsIconSearch } from './search';

describe('Search icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-search/>');
  });

  it('is an instance of PdsIconSearch', () => {
    expect(element).toBeInstanceOf(PdsIconSearch);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
