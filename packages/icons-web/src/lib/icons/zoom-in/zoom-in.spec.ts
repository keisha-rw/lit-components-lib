import { assert, fixture } from '@open-wc/testing';
import { PdsIconZoomIn } from './zoom-in';

describe('ZoomIn icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-zoom-in/>');
  });

  it('is an instance of PdsIconZoomIn', () => {
    expect(element).toBeInstanceOf(PdsIconZoomIn);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
