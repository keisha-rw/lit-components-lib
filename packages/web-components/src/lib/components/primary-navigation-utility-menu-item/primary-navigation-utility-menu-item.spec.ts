import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsPrimaryNavigationUtilityMenuItem } from './primary-navigation-utility-menu-item';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Primary navigation utility menu item/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('PrimaryNavigationUtilityMenuItem unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(
      '<pds-primary-navigation-utility-menu-item href="#">I have a value</pds-primary-navigation-utility-menu-item>',
    );
  });

  it('is an instance of PdsPrimaryNavigationUtilityMenuItem', () => {
    expect(element).toBeInstanceOf(PdsPrimaryNavigationUtilityMenuItem);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      ignoredRules: ['aria-required-parent'],
    });
  });

  it('dispatches a custom event on click and gets correct summary', async () => {
    const linkEl = element.shadowRoot?.querySelector('a');

    const handler = jest.fn();
    element.addEventListener(
      'pds-primary-navigation-utility-menu-item-click',
      handler,
    );

    linkEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('I have a value');
    });
  });
});
