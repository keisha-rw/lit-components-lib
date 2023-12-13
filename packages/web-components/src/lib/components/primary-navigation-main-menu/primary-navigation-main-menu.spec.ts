import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsPrimaryNavigationMainMenu } from './primary-navigation-main-menu';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Primary navigation main menu/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('PdsPrimaryNavigationMainMenu unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-primary-navigation-main-menu/>');
  });

  it('is an instance of PdsPrimaryNavigationMainMenu', () => {
    expect(element).toBeInstanceOf(PdsPrimaryNavigationMainMenu);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('populates the slot correctly with type pds-primary-navigation-main-menu-item', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    element = await fixture(
      '<pds-primary-navigation-main-menu variant="default"><pds-primary-navigation-main-menu-item/></pds-primary-navigation-main-menu>',
    );
    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it('does not popluate the slot correctly with any element not type of pds-primary-navigation-main-menu-item', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    element = await fixture(
      '<pds-primary-navigation-main-menu variant="default"><div> <pds-list size="sm" spacing="sm"><pds-list-item><pds-primary-navigation-dropdown-link href="#">This is a link</pds-primary-navigation-dropdown-link></pds-list-item></pds-list>/div></pds-primary-navigation-main-menu>',
    );
    expect(element).toMatchSnapshot();
    expect(consoleError).toHaveBeenCalledTimes(1);
    consoleError.mockRestore();
  });
});
