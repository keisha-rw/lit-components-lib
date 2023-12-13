import { assert, fixture } from '@open-wc/testing';
import { PdsIconZoomOut } from './zoom-out';

describe('ZoomOut icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-zoom-out/>');
  });

  it('is an instance of PdsIconZoomOut', () => {
    expect(element).toBeInstanceOf(PdsIconZoomOut);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
