import { assert, fixture } from '@open-wc/testing';
import { PdsIconMessageSquare } from './message-square';

describe('MessageSquare icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-message-square/>');
  });

  it('is an instance of PdsIconMessageSquare', () => {
    expect(element).toBeInstanceOf(PdsIconMessageSquare);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
