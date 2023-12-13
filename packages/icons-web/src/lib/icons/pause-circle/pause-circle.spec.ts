import { assert, fixture } from '@open-wc/testing';
import { PdsIconPauseCircle } from './pause-circle';

describe('PauseCircle icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-pause-circle/>');
  });

  it('is an instance of PdsIconPauseCircle', () => {
    expect(element).toBeInstanceOf(PdsIconPauseCircle);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
