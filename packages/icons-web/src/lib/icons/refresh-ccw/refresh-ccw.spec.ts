import { assert, fixture } from '@open-wc/testing';
import { PdsIconRefreshCcw } from './refresh-ccw';

describe('RefreshCcw icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-refresh-ccw/>');
  });

  it('is an instance of PdsIconRefreshCcw', () => {
    expect(element).toBeInstanceOf(PdsIconRefreshCcw);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
