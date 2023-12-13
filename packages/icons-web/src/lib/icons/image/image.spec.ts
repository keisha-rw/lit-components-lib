import { assert, fixture } from '@open-wc/testing';
import { PdsIconImage } from './image';

describe('Image icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-image/>');
  });

  it('is an instance of PdsIconImage', () => {
    expect(element).toBeInstanceOf(PdsIconImage);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
