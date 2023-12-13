import { assert, fixture } from '@open-wc/testing';
import { PdsIconStarFull } from './star-full';

describe('StarFull icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-star-full/>');
  });

  it('is an instance of PdsIconStarFull', () => {
    expect(element).toBeInstanceOf(PdsIconStarFull);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
