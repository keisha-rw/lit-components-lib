import { assert, fixture } from '@open-wc/testing';
import { PdsIconInstagram } from './instagram';

describe('Instagram icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-instagram/>');
  });

  it('is an instance of PdsIconInstagram', () => {
    expect(element).toBeInstanceOf(PdsIconInstagram);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
