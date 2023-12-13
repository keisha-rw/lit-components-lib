import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { ArticleIntro } from './article-intro';
import createSnapshots from '../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Article intro/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('ArticleIntro unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<article-intro />');
  });

  it('is an instance of ArticleIntro', () => {
    expect(element).toBeInstanceOf(ArticleIntro);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
