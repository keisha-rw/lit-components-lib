import { assert, fixture } from '@open-wc/testing';
import { PdsIconLock } from './lock';

describe('Lock icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-lock/>');
  });

  it('is an instance of PdsIconLock', () => {
    expect(element).toBeInstanceOf(PdsIconLock);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
