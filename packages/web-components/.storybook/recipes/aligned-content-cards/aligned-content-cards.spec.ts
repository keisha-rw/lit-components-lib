import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { AlignedContentCards } from './aligned-content-cards';
import createSnapshots from '../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Cards with aligned content/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('AlignedContentCards unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<aligned-content-cards/>');
  });

  it('is an instance of AlignedContentCards', () => {
    expect(element).toBeInstanceOf(AlignedContentCards);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
