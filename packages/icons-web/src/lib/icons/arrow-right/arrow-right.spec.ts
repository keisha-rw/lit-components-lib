import { assert, fixture } from '@open-wc/testing';
import { PdsIconArrowRight } from './arrow-right';

describe('ArrowRight icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-arrow-right/>');
  });

  it('is an instance of PdsIconArrowRight', () => {
    expect(element).toBeInstanceOf(PdsIconArrowRight);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
