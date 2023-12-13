import { assert, fixture } from '@open-wc/testing';
import { PdsIconYoutube } from './youtube';

describe('Youtube icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-youtube/>');
  });

  it('is an instance of PdsIconYoutube', () => {
    expect(element).toBeInstanceOf(PdsIconYoutube);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
