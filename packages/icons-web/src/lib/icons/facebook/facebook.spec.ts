import { assert, fixture } from '@open-wc/testing';
import { PdsIconFacebook } from './facebook';

describe('Facebook icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-facebook/>');
  });

  it('is an instance of PdsIconFacebook', () => {
    expect(element).toBeInstanceOf(PdsIconFacebook);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
