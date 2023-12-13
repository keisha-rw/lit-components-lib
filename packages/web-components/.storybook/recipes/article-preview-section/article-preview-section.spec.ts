import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { ArticlePreviewSection } from './article-preview-section';
import createSnapshots from '../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Article preview section/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('ArticlePreviewSection unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<article-preview-section />');
  });

  it('is an instance of ArticlePreviewSection', () => {
    expect(element).toBeInstanceOf(ArticlePreviewSection);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
