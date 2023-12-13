import { assert, fixture } from '@open-wc/testing';
import { PdsIconArrowDown } from './arrow-down';

describe('ArrowDown icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-arrow-down/>');
  });

  it('is an instance of PdsIconArrowDown', () => {
    expect(element).toBeInstanceOf(PdsIconArrowDown);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
