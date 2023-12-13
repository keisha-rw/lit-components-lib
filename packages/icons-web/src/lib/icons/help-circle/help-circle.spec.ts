import { assert, fixture } from '@open-wc/testing';
import { PdsIconHelpCircle } from './help-circle';

describe('HelpCircle icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-help-circle/>');
  });

  it('is an instance of PdsIconHelpCircle', () => {
    expect(element).toBeInstanceOf(PdsIconHelpCircle);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
