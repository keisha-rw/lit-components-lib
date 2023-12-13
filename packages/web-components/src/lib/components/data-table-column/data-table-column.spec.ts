import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsDataTableColumn } from './data-table-column';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Data table column/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('DataTableColumn unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(
      '<pds-data-table-column columnId="test">Test<div>Testing</div></pds-data-table-column>',
    );
  });

  it('is an instance of PdsDataTableColumn', () => {
    expect(element).toBeInstanceOf(PdsDataTableColumn);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
