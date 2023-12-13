import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsFeatureBlock } from './feature-block';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Feature block/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('FeatureBlock unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-feature-block/>');
  });

  it('is an instance of PdsFeatureBlock', () => {
    expect(element).toBeInstanceOf(PdsFeatureBlock);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
