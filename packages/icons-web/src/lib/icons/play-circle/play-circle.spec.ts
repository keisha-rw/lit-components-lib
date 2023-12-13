import { assert, fixture } from '@open-wc/testing';
import { PdsIconPlayCircle } from './play-circle';

describe('PlayCircle icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-play-circle/>');
  });

  it('is an instance of PdsIconPlayCircle', () => {
    expect(element).toBeInstanceOf(PdsIconPlayCircle);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
