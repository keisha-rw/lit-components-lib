import { assert, fixture } from '@open-wc/testing';
import { PdsIconSun } from './sun';

describe('Sun icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-sun/>');
  });

  it('is an instance of PdsIconSun', () => {
    expect(element).toBeInstanceOf(PdsIconSun);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
