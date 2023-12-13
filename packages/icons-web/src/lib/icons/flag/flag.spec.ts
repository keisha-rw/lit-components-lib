import { assert, fixture } from '@open-wc/testing';
import { PdsIconFlag } from './flag';

describe('Flag icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-flag/>');
  });

  it('is an instance of PdsIconFlag', () => {
    expect(element).toBeInstanceOf(PdsIconFlag);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
