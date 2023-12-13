import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsLinelengthContainer } from './linelength-container';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Linelength container/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('LinelengthContainer unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-linelength-container/>');
  });

  it('is an instance of PdsLinelengthContainer', () => {
    expect(element).toBeInstanceOf(PdsLinelengthContainer);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
