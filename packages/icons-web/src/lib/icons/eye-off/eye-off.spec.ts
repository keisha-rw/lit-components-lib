import { assert, fixture } from '@open-wc/testing';
import { PdsIconEyeOff } from './eye-off';

describe('EyeOff icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-eye-off/>');
  });

  it('is an instance of PdsIconEyeOff', () => {
    expect(element).toBeInstanceOf(PdsIconEyeOff);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
