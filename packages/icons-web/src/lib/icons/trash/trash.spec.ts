import { assert, fixture } from '@open-wc/testing';
import { PdsIconTrash } from './trash';

describe('Trash icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-trash/>');
  });

  it('is an instance of PdsIconTrash', () => {
    expect(element).toBeInstanceOf(PdsIconTrash);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
