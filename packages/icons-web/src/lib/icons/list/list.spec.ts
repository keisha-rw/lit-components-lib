import { assert, fixture } from '@open-wc/testing';
import { PdsIconList } from './list';

describe('List icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-list/>');
  });

  it('is an instance of PdsIconList', () => {
    expect(element).toBeInstanceOf(PdsIconList);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
