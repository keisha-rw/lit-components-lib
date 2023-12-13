import { assert, fixture } from '@open-wc/testing';
import { PdsIconLinkedin } from './linkedin';

describe('LinkedIn icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-linkedin/>');
  });

  it('is an instance of PdsIconLinkedin', () => {
    expect(element).toBeInstanceOf(PdsIconLinkedin);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
