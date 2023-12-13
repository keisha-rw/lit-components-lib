import { assert, fixture } from '@open-wc/testing';
import { PdsIconWhatsapp } from './whatsapp';

describe('Whatsapp icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-whatsapp/>');
  });

  it('is an instance of PdsIconWhatsapp', () => {
    expect(element).toBeInstanceOf(PdsIconWhatsapp);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
