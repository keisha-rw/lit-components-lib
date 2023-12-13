import { assert, fixture } from '@open-wc/testing';
import { PdsIconPin } from './pin';

describe('Pin icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-pin/>');
  });

  it('is an instance of PdsIconPin', () => {
    expect(element).toBeInstanceOf(PdsIconPin);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
