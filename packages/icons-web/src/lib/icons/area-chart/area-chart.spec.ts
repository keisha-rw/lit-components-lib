import { assert, fixture } from '@open-wc/testing';
import { PdsIconAreaChart } from './area-chart';

describe('AreaChart icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-area-chart/>');
  });

  it('is an instance of PdsIconAreaChart', () => {
    expect(element).toBeInstanceOf(PdsIconAreaChart);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
