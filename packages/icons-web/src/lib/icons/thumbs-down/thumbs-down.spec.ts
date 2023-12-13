import { assert, fixture } from '@open-wc/testing';
import { PdsIconThumbsDown } from './thumbs-down';

describe('ThumbsDown icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-thumbs-down/>');
  });

  it('is an instance of PdsIconThumbsDown', () => {
    expect(element).toBeInstanceOf(PdsIconThumbsDown);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
