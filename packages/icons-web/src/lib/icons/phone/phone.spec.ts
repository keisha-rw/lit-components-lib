import { assert, fixture } from '@open-wc/testing';
import { PdsIconPhone } from './phone';

describe('Phone icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-phone/>');
  });

  it('is an instance of PdsIconPhone', () => {
    expect(element).toBeInstanceOf(PdsIconPhone);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
