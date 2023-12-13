import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { SkeletonLoaderTable } from './skeleton-loader-table';
import createSnapshots from '../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Skeleton loader table/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('SkeletonLoaderTable unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<skeleton-loader-table/>');
  });

  it('is an instance of SkeletonLoaderTable', () => {
    expect(element).toBeInstanceOf(SkeletonLoaderTable);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
