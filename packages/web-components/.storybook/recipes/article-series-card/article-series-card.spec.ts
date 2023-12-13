import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { ArticleSeriesCard } from './article-series-card';
import createSnapshots from '../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Article series card/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('ArticleSeriesCard unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<article-series-card />');
  });

  it('is an instance of ArticleSeriesCard', () => {
    expect(element).toBeInstanceOf(ArticleSeriesCard);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
