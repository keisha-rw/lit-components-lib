import { assert, fixture } from '@open-wc/testing';
import { PdsIconCheck } from './check';

describe('Check icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-check/>');
  });

  it('is an instance of PdsIconCheck', () => {
    expect(element).toBeInstanceOf(PdsIconCheck);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
