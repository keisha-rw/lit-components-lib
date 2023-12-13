import { assert, fixture } from '@open-wc/testing';
import { PdsIconShield } from './shield';

describe('Shield icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-shield/>');
  });

  it('is an instance of PdsIconShield', () => {
    expect(element).toBeInstanceOf(PdsIconShield);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
