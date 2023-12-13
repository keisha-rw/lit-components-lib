import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsActionMenuItem } from './action-menu-item';
import createSnapshots from '../../../../test/utils/snapshots';
import '@testing-library/jest-dom';

initStoryshots({
  storyKindRegex: /Action menu item/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('ActionMenuItem unit tests', () => {
  let element: PdsActionMenuItem;

  beforeEach(async () => {
    element = await fixture(
      '<pds-action-menu-item target="_blank">This is a action menu item</pds-action-menu-item>',
    );
  });

  it('is an instance of PdsActionMenuItem', () => {
    expect(element).toBeInstanceOf(PdsActionMenuItem);
  });

  it('dispatches a custom event on click and gets correct summary', async () => {
    const buttonEl = element.shadowRoot?.querySelector(
      '.pds-c-action-menu-item',
    );

    const handler = jest.fn();
    element.addEventListener('pds-action-menu-item-click', handler);

    buttonEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual(
        'This is a action menu item',
      );
    });
  });

  it('dispatches a custom event on click of link and gets correct summary', async () => {
    const element1 = await fixture(
      `<pds-action-menu-item target="_blank"
      linkHref="https://www.google.com">This is a action menu item link</pds-action-menu-item>`,
    );
    const buttonEl = element1.shadowRoot?.querySelector(
      '.pds-c-action-menu-item__link',
    );

    const handler = jest.fn();
    element1.addEventListener('pds-action-menu-item-click', handler);

    buttonEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual(
        'This is a action menu item link',
      );
    });
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      ignoredRules: ['listitem'],
    });
  });
});
