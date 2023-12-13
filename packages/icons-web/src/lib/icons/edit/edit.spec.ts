import { assert, fixture } from '@open-wc/testing';
import { PdsIconEdit } from './edit';

describe('Edit icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-edit/>');
  });

  it('is an instance of PdsIconEdit', () => {
    expect(element).toBeInstanceOf(PdsIconEdit);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
