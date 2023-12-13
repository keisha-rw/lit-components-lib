import { assert, fixture } from '@open-wc/testing';
import { PdsIconPrinter } from './printer';

describe('Printer icon unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-icon-printer/>');
  });

  it('is an instance of PdsIconPrinter', () => {
    expect(element).toBeInstanceOf(PdsIconPrinter);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
