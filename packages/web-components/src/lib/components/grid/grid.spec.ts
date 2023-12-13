import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsGrid } from './grid';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Grid/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Grid unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-grid/>');
  });

  it('is an instance of PdsGrid', () => {
    expect(element).toBeInstanceOf(PdsGrid);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('populates the default slot correctly with pds-grid-item', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    element = await fixture(
      '<pds-grid><pds-grid-item><placeholder-element>Item 1</placeholder-element></pds-grid-item></pds-grid>',
    );
    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it('does not populate the default slot correctly when the provided element is not a pds-grid-item', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    element = await fixture(
      '<pds-grid><div><placeholder-element>Item 1</placeholder-element></div></pds-grid>',
    );
    expect(element).toMatchSnapshot();
    expect(consoleError).toHaveBeenCalledTimes(1);
    consoleError.mockRestore();
  });
});
