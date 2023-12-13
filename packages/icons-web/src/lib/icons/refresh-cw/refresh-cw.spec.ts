import { assert, fixture } from '@open-wc/testing';
import { PdsIconRefreshCw } from './refresh-cw';

describe('RefreshCw icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-refresh-cw/>');
  });

  it('is an instance of PdsIconRefreshCw', () => {
    expect(element).toBeInstanceOf(PdsIconRefreshCw);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
