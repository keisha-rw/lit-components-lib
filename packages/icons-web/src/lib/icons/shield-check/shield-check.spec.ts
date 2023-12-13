import { assert, fixture } from '@open-wc/testing';
import { PdsIconShieldCheck } from './shield-check';

describe('ShieldCheck icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-shield-check/>');
  });

  it('is an instance of PdsIconShieldCheck', () => {
    expect(element).toBeInstanceOf(PdsIconShieldCheck);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
