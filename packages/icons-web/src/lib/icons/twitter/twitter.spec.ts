import { assert, fixture } from '@open-wc/testing';
import { PdsIconTwitter } from './twitter';

describe('Twitter icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-twitter/>');
  });

  it('is an instance of PdsIconTwitter', () => {
    expect(element).toBeInstanceOf(PdsIconTwitter);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
