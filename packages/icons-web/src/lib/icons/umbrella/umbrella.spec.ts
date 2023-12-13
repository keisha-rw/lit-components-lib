import { assert, fixture } from '@open-wc/testing';
import { PdsIconUmbrella } from './umbrella';

describe('Umbrella icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-umbrella/>');
  });

  it('is an instance of PdsIconUmbrella', () => {
    expect(element).toBeInstanceOf(PdsIconUmbrella);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
