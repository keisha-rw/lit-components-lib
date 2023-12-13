import { assert, fixture } from '@open-wc/testing';
import { PdsIconCalculator } from './calculator';

describe('Calculator icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-calculator/>');
  });

  it('is an instance of PdsIconCalculator', () => {
    expect(element).toBeInstanceOf(PdsIconCalculator);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
