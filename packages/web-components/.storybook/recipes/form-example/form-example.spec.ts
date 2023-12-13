import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { FormExample } from './form-example';
import createSnapshots from '../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Form example/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('FormExample unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<form-example />');
  });

  it('is an instance of FormExample', () => {
    expect(element).toBeInstanceOf(FormExample);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
