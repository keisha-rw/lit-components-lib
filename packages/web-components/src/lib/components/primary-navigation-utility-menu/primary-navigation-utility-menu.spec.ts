import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsPrimaryNavigationUtilityMenu } from './primary-navigation-utility-menu';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Primary navigation utility menu/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('PrimaryNavigationUtilityMenu unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(`<pds-primary-navigation-utility-menu>
      <pds-primary-navigation-utility-menu-item href="#">Link</pds-primary-navigation-utility-menu-item>
    <pds-primary-navigation-utility-menu/>`);
  });

  it('is an instance of PdsPrimaryNavigationUtilityMenu', () => {
    expect(element).toBeInstanceOf(PdsPrimaryNavigationUtilityMenu);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      ignoredRules: ['landmark-unique'],
    });
  });

  it('populates the slot correctly with type pds-primary-navigation-utility-menu-item', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    element = await fixture(
      '<pds-primary-navigation-utility-menu variant="default"><pds-primary-navigation-utility-menu-item href="#>Link</pds-primary-navigation-utility-menu-item></pds-primary-navigation-utility-menu>',
    );
    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it('does not populate the slot correctly with any element not type of pds-primary-navigation-utility-menu-item', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    element = await fixture(
      '<pds-primary-navigation-utility-menu variant="default"><span>Link</span></pds-primary-navigation-utility-menu>',
    );
    expect(element).toMatchSnapshot();
    expect(consoleError).toHaveBeenCalledTimes(1);
    consoleError.mockRestore();
  });
});
