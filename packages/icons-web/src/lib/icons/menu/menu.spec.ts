import { assert, fixture } from '@open-wc/testing';
import { PdsIconMenu } from './menu';

describe('Menu icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-menu/>');
  });

  it('is an instance of PdsIconMenu', () => {
    expect(element).toBeInstanceOf(PdsIconMenu);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
