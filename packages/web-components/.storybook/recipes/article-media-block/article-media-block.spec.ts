import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { ArticleMediaBlock } from './article-media-block';
import createSnapshots from '../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Article media block/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('ArticleMediaBlock unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<article-media-block />');
  });

  it('is an instance of ArticleMediaBlock', () => {
    expect(element).toBeInstanceOf(ArticleMediaBlock);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
