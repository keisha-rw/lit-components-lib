import { assert, fixture } from '@open-wc/testing';
import { PdsIconExternalLink } from './external-link';

describe('ExternalLink icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-external-link/>');
  });

  it('is an instance of PdsIconExternalLink', () => {
    expect(element).toBeInstanceOf(PdsIconExternalLink);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
