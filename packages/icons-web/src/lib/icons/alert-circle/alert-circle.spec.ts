import { assert, fixture } from '@open-wc/testing';
import { PdsIconAlertCircle } from './alert-circle';

describe('AlertCircle icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-alert-circle/>');
  });

  it('is an instance of PdsIconAlertCircle', () => {
    expect(element).toBeInstanceOf(PdsIconAlertCircle);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
