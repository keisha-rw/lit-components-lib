import { assert, fixture } from '@open-wc/testing';
import { PdsIconDollarSign } from './dollar-sign';

describe('DollarSign icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-dollar-sign/>');
  });

  it('is an instance of PdsIconDollarSign', () => {
    expect(element).toBeInstanceOf(PdsIconDollarSign);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
