import { assert, fixture } from '@open-wc/testing';
import { PdsIconChevronsLeft } from './chevrons-left';

describe('ChevronsLeft icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-chevrons-left/>');
  });

  it('is an instance of PdsIconChevronsLeft', () => {
    expect(element).toBeInstanceOf(PdsIconChevronsLeft);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
