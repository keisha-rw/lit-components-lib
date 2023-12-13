import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsDataTableCell } from './data-table-cell';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Data table cell/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('DataTableCell unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-data-table-cell/>');
  });

  it('is an instance of PdsDataTableCell', () => {
    expect(element).toBeInstanceOf(PdsDataTableCell);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
