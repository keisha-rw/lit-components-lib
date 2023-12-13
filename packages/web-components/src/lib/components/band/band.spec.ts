import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsBand } from './band';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Band/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Band unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-band/>');
  });

  it('is an instance of PdsBand', () => {
    expect(element).toBeInstanceOf(PdsBand);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
