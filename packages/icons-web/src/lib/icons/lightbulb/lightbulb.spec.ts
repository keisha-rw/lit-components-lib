import { assert, fixture } from '@open-wc/testing';
import { PdsIconLightbulb } from './lightbulb';

describe('Lightbulb icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-lightbulb/>');
  });

  it('is an instance of PdsIconLightbulb', () => {
    expect(element).toBeInstanceOf(PdsIconLightbulb);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
