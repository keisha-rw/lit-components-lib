import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsDataTableRows } from './data-table-rows';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Data table rows/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('DataTableRows unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-data-table-rows/>');
  });

  it('is an instance of PdsDataTableRows', () => {
    expect(element).toBeInstanceOf(PdsDataTableRows);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
