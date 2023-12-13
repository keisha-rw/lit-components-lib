import { assert, fixture } from '@open-wc/testing';
import { PdsIconLoader } from './loader';

describe('Loader icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-loader/>');
  });

  it('is an instance of PdsIconLoader', () => {
    expect(element).toBeInstanceOf(PdsIconLoader);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
