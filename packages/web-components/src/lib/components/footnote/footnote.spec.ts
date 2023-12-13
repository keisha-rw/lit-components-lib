import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsFootnote } from './footnote';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Footnote/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Footnote unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-footnote/>');
  });

  it('is an instance of PdsFootnote', () => {
    expect(element).toBeInstanceOf(PdsFootnote);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
