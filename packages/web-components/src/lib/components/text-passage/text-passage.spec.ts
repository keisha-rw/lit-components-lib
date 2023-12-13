import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsTextPassage } from './text-passage';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Text passage/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('TextPassage unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-text-passage/>');
  });

  it('is an instance of PdsTextPassage', () => {
    expect(element).toBeInstanceOf(PdsTextPassage);
  });

  it('respects the lineLength propery', async () => {
    expect(
      element.shadowRoot
        ?.querySelector('pds-linelength-container')
        ?.getAttribute('size'),
    ).toBe('default');

    const removeLineLength = await fixture(
      '<pds-text-passage linelength="none" />',
    );
    expect(
      removeLineLength.shadowRoot?.querySelector('pds-linelength-container'),
    ).toBeFalsy();

    const smallLineLength = await fixture(
      '<pds-text-passage linelength="sm" />',
    );
    expect(
      smallLineLength.shadowRoot
        ?.querySelector('pds-linelength-container')
        ?.getAttribute('size'),
    ).toBe('sm');
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
