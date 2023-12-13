import { assert, fixture } from '@open-wc/testing';
import { PdsIconBell } from './bell';

describe('Bell icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-bell/>');
  });

  it('is an instance of PdsIconBell', () => {
    expect(element).toBeInstanceOf(PdsIconBell);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
