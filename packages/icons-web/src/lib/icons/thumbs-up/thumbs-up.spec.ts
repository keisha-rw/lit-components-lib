import { assert, fixture } from '@open-wc/testing';
import { PdsIconThumbsUp } from './thumbs-up';

describe('ThumbsUp icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-thumbs-up/>');
  });

  it('is an instance of PdsIconThumbsUp', () => {
    expect(element).toBeInstanceOf(PdsIconThumbsUp);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
