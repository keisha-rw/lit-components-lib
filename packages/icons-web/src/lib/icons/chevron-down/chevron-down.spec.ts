import { assert, fixture } from '@open-wc/testing';
import { PdsIconChevronDown } from './chevron-down';

describe('ChevronDown icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-chevron-down/>');
  });

  it('is an instance of PdsIconChevronDown', () => {
    expect(element).toBeInstanceOf(PdsIconChevronDown);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
