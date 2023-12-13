import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { ArticleCard } from './article-card';
import createSnapshots from '../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Article card/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('ArticleCard unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<article-card />');
  });

  it('is an instance of ArticleCard', () => {
    expect(element).toBeInstanceOf(ArticleCard);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
