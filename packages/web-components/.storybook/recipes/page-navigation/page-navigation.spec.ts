import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PageNavigation } from './page-navigation';
import createSnapshots from '../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Page navigation/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Page navigation unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<page-navigation />');
  });

  it('is an instance of Page navigation', () => {
    expect(element).toBeInstanceOf(PageNavigation);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
