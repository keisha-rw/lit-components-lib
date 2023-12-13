import { assert, fixture } from '@open-wc/testing';
import { PdsIconHome } from './home';

describe('Home icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-home/>');
  });

  it('is an instance of PdsIconHome', () => {
    expect(element).toBeInstanceOf(PdsIconHome);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
