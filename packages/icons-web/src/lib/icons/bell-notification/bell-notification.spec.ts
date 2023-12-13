import { assert, fixture } from '@open-wc/testing';
import { PdsIconBellNotification } from './bell-notification';

describe('BellNotification icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-bell-notification/>');
  });

  it('is an instance of PdsIconBellNotification', () => {
    expect(element).toBeInstanceOf(PdsIconBellNotification);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
