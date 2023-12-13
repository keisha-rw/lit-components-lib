import { assert, fixture } from '@open-wc/testing';
import { PdsGridItem } from './grid-item';

describe('GridItem unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-grid-item/>');
  });

  it('is an instance of PdsGridItem', () => {
    expect(element).toBeInstanceOf(PdsGridItem);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
