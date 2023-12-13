import { assert, fixture } from '@open-wc/testing';
import { PdsIconMapPin } from './map-pin';

describe('MapPin icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-map-pin/>');
  });

  it('is an instance of PdsIconMapPin', () => {
    expect(element).toBeInstanceOf(PdsIconMapPin);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
