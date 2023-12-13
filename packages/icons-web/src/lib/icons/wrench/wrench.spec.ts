import { assert, fixture } from '@open-wc/testing';
import { PdsIconWrench } from './wrench';

describe('Wrench icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-wrench/>');
  });

  it('is an instance of PdsIconWrench', () => {
    expect(element).toBeInstanceOf(PdsIconWrench);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
