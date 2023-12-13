import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsDataTableColumns } from './data-table-columns';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Data table columns/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('DataTableColumns unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-data-table-columns/>');
  });

  it('is an instance of PdsDataTableColumns', () => {
    expect(element).toBeInstanceOf(PdsDataTableColumns);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
