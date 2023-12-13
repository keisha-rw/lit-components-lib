import { assert, fixture } from '@open-wc/testing';
import { PdsIconArrowUp } from './arrow-up';

describe('ArrowUp icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-arrow-up/>');
  });

  it('is an instance of PdsIconArrowUp', () => {
    expect(element).toBeInstanceOf(PdsIconArrowUp);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
