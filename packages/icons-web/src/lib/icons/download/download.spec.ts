import { assert, fixture } from '@open-wc/testing';
import { PdsIconDownload } from './download';

describe('Download icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-download/>');
  });

  it('is an instance of PdsIconDownload', () => {
    expect(element).toBeInstanceOf(PdsIconDownload);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
