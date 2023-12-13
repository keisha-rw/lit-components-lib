import { assert, fixture } from '@open-wc/testing';
import { PdsIconArrowLeft } from './arrow-left';

describe('ArrowLeft icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-arrow-left/>');
  });

  it('is an instance of PdsIconArrowLeft', () => {
    expect(element).toBeInstanceOf(PdsIconArrowLeft);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
