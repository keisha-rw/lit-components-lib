import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsHr } from './hr';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Hr/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Hr unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-hr/>');
  });

  it('is an instance of PdsHr', () => {
    expect(element).toBeInstanceOf(PdsHr);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
