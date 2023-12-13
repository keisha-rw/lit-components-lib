import { assert, fixture } from '@open-wc/testing';
import { PdsIconShare } from './share';

describe('Share icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-share/>');
  });

  it('is an instance of PdsIconShare', () => {
    expect(element).toBeInstanceOf(PdsIconShare);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
