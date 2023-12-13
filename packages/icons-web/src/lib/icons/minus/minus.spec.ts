import { assert, fixture } from '@open-wc/testing';
import { PdsIconMinus } from './minus';

describe('Minus icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-minus/>');
  });

  it('is an instance of PdsIconMinus', () => {
    expect(element).toBeInstanceOf(PdsIconMinus);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
