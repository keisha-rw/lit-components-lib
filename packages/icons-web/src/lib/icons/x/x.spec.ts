import { assert, fixture } from '@open-wc/testing';
import { PdsIconX } from './x';

describe('X icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-x/>');
  });

  it('is an instance of PdsIconX', () => {
    expect(element).toBeInstanceOf(PdsIconX);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
