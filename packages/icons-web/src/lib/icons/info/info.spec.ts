import { assert, fixture } from '@open-wc/testing';
import { PdsIconInfo } from './info';

describe('Info icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-info/>');
  });

  it('is an instance of PdsIconInfo', () => {
    expect(element).toBeInstanceOf(PdsIconInfo);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
