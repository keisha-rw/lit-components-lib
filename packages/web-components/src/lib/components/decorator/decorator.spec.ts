import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsDecorator } from './decorator';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Decorator/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Decorator unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-decorator/>');
  });

  it('is an instance of PdsDecorator', () => {
    expect(element).toBeInstanceOf(PdsDecorator);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
