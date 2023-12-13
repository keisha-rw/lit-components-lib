import { assert, fixture } from '@open-wc/testing';
import { PdsIconPenSquare } from './pen-square';

describe('PenSquare icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-pen-square/>');
  });

  it('is an instance of PdsIconPenSquare', () => {
    expect(element).toBeInstanceOf(PdsIconPenSquare);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
