import { assert, fixture } from '@open-wc/testing';
import { PdsIconUser } from './user';

describe('User icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-user/>');
  });

  it('is an instance of PdsIconUser', () => {
    expect(element).toBeInstanceOf(PdsIconUser);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
