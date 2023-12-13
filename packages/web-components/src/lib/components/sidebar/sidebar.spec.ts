import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsSidebar } from './sidebar';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Sidebar/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Sidebar unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-sidebar/>');
  });

  it('is an instance of PdsSidebar', () => {
    expect(element).toBeInstanceOf(PdsSidebar);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
