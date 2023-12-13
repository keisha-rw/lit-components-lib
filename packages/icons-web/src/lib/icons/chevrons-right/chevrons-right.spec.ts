import { assert, fixture } from '@open-wc/testing';
import { PdsIconChevronsRight } from './chevrons-right';

describe('ChevronsRight icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-chevrons-right/>');
  });

  it('is an instance of PdsIconChevronsRight', () => {
    expect(element).toBeInstanceOf(PdsIconChevronsRight);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
