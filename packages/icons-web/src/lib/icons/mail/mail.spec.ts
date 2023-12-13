import { assert, fixture } from '@open-wc/testing';
import { PdsIconMail } from './mail';

describe('Mail icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-mail/>');
  });

  it('is an instance of PdsIconMail', () => {
    expect(element).toBeInstanceOf(PdsIconMail);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
