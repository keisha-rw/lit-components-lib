import { assert, fixture } from '@open-wc/testing';
import { PdsIconSprout } from './sprout';

describe('Sprout icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-sprout/>');
  });

  it('is an instance of PdsIconSprout', () => {
    expect(element).toBeInstanceOf(PdsIconSprout);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
