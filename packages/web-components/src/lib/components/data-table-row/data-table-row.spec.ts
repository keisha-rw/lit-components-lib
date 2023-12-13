import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsDataTableRow } from './data-table-row';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Data table row/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('DataTableRow unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(
      '<pds-data-table-row><pds-data-table-row></pds-data-table-row></pds-data-table-row>',
    );
  });

  it('is an instance of PdsDataTableRow', () => {
    expect(element).toBeInstanceOf(PdsDataTableRow);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
