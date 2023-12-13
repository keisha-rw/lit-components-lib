import { assert, fixture } from '@open-wc/testing';
import { PdsIconEye } from './eye';

describe('Eye icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-eye/>');
  });

  it('is an instance of PdsIconEye', () => {
    expect(element).toBeInstanceOf(PdsIconEye);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
