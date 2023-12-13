import { assert, fixture } from '@open-wc/testing';
import { PdsIconStarHalf } from './star-half';

describe('StarHalf icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-star-half/>');
  });

  it('is an instance of PdsIconStarHalf', () => {
    expect(element).toBeInstanceOf(PdsIconStarHalf);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
