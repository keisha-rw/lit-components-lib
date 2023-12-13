import { assert, fixture } from '@open-wc/testing';
import { PdsIconChevronRight } from './chevron-right';

describe('ChevronRight icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-chevron-right/>');
  });

  it('is an instance of PdsIconChevronRight', () => {
    expect(element).toBeInstanceOf(PdsIconChevronRight);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
