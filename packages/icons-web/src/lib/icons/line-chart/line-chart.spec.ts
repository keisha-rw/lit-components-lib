import { assert, fixture } from '@open-wc/testing';
import { PdsIconLineChart } from './line-chart';

describe('LineChart icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-line-chart/>');
  });

  it('is an instance of PdsIconLineChart', () => {
    expect(element).toBeInstanceOf(PdsIconLineChart);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
