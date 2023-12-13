import { assert, fixture } from '@open-wc/testing';
import { PdsIconMoreHorizontal } from './more-horizontal';

describe('MoreHorizontal icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-more-horizontal/>');
  });

  it('is an instance of PdsIconMoreHorizontal', () => {
    expect(element).toBeInstanceOf(PdsIconMoreHorizontal);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
