import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsLayoutContainer } from './layout-container';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Layout container/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('LayoutContainer unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-layout-container/>');
  });

  it('is an instance of PdsLayoutContainer', () => {
    expect(element).toBeInstanceOf(PdsLayoutContainer);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
