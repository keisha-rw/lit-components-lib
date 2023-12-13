import { assert, fixture } from '@open-wc/testing';
import { PdsIconSettings } from './settings';

describe('Settings icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-settings/>');
  });

  it('is an instance of PdsIconSettings', () => {
    expect(element).toBeInstanceOf(PdsIconSettings);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
