import { assert, fixture } from '@open-wc/testing';
import { PdsIconCopy } from './copy';

describe('Copy icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-copy/>');
  });

  it('is an instance of PdsIconCopy', () => {
    expect(element).toBeInstanceOf(PdsIconCopy);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
