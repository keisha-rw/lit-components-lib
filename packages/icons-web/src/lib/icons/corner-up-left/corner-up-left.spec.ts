import { assert, fixture } from '@open-wc/testing';
import { PdsIconCornerUpLeft } from './corner-up-left';

describe('CornerUpLeft icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-corner-up-left/>');
  });

  it('is an instance of PdsIconCornerUpLeft', () => {
    expect(element).toBeInstanceOf(PdsIconCornerUpLeft);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
