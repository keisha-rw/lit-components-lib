import { assert, fixture } from '@open-wc/testing';
import { PdsIconAlertTriangle } from './alert-triangle';

describe('AlertTriangle icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-alert-triangle/>');
  });

  it('is an instance of PdsIconAlertTriangle', () => {
    expect(element).toBeInstanceOf(PdsIconAlertTriangle);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
