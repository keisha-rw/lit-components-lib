import { assert, fixture } from '@open-wc/testing';
import { PdsIconFile } from './file';

describe('File icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-file/>');
  });

  it('is an instance of PdsIconFile', () => {
    expect(element).toBeInstanceOf(PdsIconFile);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
