import { assert, fixture } from '@open-wc/testing';
import { PdsIconHeart } from './heart';

describe('Heart icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-heart/>');
  });

  it('is an instance of PdsIconHeart', () => {
    expect(element).toBeInstanceOf(PdsIconHeart);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
