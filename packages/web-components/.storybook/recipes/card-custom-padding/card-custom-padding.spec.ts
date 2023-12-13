import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { CardCustomPadding } from './card-custom-padding';
import createSnapshots from '../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Card with custom padding/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('CardCustomPadding unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<card-custom-padding/>');
  });

  it('is an instance of CardCustomPadding', () => {
    expect(element).toBeInstanceOf(CardCustomPadding);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
