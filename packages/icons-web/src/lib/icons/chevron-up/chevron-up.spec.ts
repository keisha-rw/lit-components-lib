import { assert, fixture } from '@open-wc/testing';
import { PdsIconChevronUp } from './chevron-up';

describe('ChevronUp icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-chevron-up/>');
  });

  it('is an instance of PdsIconChevronUp', () => {
    expect(element).toBeInstanceOf(PdsIconChevronUp);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
