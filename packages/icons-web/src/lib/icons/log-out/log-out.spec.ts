import { assert, fixture } from '@open-wc/testing';
import { PdsIconLogOut } from './log-out';

describe('LogOut icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-log-out/>');
  });

  it('is an instance of PdsIconLogOut', () => {
    expect(element).toBeInstanceOf(PdsIconLogOut);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
