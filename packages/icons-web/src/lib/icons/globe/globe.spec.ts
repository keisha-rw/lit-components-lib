import { assert, fixture } from '@open-wc/testing';
import { PdsIconGlobe } from './globe';

describe('Globe icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-globe/>');
  });

  it('is an instance of PdsIconGlobe', () => {
    expect(element).toBeInstanceOf(PdsIconGlobe);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
