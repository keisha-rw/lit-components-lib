import { assert, fixture } from '@open-wc/testing';
import { PdsIconStar } from './star';

describe('Star icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-star/>');
  });

  it('is an instance of PdsIconStar', () => {
    expect(element).toBeInstanceOf(PdsIconStar);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
