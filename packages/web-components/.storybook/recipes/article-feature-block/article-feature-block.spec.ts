import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { ArticleFeatureBlock } from './article-feature-block';
import createSnapshots from '../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Article feature block/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('ArticleFeatureBlock unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<article-feature-block />');
  });

  it('is an instance of ArticleFeatureBlock', () => {
    expect(element).toBeInstanceOf(ArticleFeatureBlock);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
