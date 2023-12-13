import { assert, fixture } from '@open-wc/testing';
import { PdsIconUsers } from './users';

describe('Users icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-users/>');
  });

  it('is an instance of PdsIconUsers', () => {
    expect(element).toBeInstanceOf(PdsIconUsers);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
