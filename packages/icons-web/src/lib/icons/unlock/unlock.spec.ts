import { assert, fixture } from '@open-wc/testing';
import { PdsIconUnlock } from './unlock';

describe('Unlock icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-unlock/>');
  });

  it('is an instance of PdsIconUnlock', () => {
    expect(element).toBeInstanceOf(PdsIconUnlock);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
