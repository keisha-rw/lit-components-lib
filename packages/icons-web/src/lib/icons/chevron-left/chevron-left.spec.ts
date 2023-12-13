import { assert, fixture } from '@open-wc/testing';
import { PdsIconChevronLeft } from './chevron-left';

describe('ChevronLeft icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-chevron-left/>');
  });

  it('is an instance of PdsIconChevronLeft', () => {
    expect(element).toBeInstanceOf(PdsIconChevronLeft);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
