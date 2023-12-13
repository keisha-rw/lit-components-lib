import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsSegmentedControlItem } from './segmented-control-item';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Segmented control item/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('SegmentedControlItem unit tests', () => {
  let element: PdsSegmentedControlItem;

  beforeEach(async () => {
    element = await fixture(
      '<pds-segmented-control-item>Label</pds-segmented-control-item>',
    );
  });

  it('is an instance of PdsSegmentedControlItem', () => {
    expect(element).toBeInstanceOf(PdsSegmentedControlItem);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('should dispatch a pds-segmented-control-item-click', () => {
    const segmentEl = element.shadowRoot?.querySelector(
      'button',
    ) as HTMLButtonElement;
    const clickHandler = jest.fn();

    element.addEventListener('pds-segmented-control-item-click', clickHandler);

    segmentEl.dispatchEvent(new Event('click'));

    expect(clickHandler).toBeCalled();
  });
});
