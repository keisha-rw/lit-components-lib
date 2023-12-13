import { assert, fixture } from '@open-wc/testing';
import { PdsIconPlus } from './plus';

describe('Plus icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-plus/>');
  });

  it('is an instance of PdsIconPlus', () => {
    expect(element).toBeInstanceOf(PdsIconPlus);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
