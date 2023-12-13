import { assert, fixture } from '@open-wc/testing';
import { PdsIconUpload } from './upload';

describe('Upload icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-upload/>');
  });

  it('is an instance of PdsIconUpload', () => {
    expect(element).toBeInstanceOf(PdsIconUpload);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
