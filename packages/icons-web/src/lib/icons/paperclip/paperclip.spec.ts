import { assert, fixture } from '@open-wc/testing';
import { PdsIconPaperclip } from './paperclip';

describe('Paperclip icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-paperclip/>');
  });

  it('is an instance of PdsIconPaperclip', () => {
    expect(element).toBeInstanceOf(PdsIconPaperclip);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
