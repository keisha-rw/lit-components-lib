import { assert, fixture } from '@open-wc/testing';
import { PdsIconCheckCircle } from './check-circle';

describe('CheckCircle icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-check-circle/>');
  });

  it('is an instance of PdsIconCheckCircle', () => {
    expect(element).toBeInstanceOf(PdsIconCheckCircle);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
