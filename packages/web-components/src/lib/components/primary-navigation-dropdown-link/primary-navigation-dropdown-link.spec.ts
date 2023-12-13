import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsPrimaryNavigationDropdownLink } from './primary-navigation-dropdown-link';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Primary navigation dropdown link/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('PrimaryNavigationDropdownLink unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(
      '<pds-primary-navigation-dropdown-link target="_blank" href="https://www.google.com"><span>This is a link</span></pds-primary-navigation-dropdown-link>',
    );
  });

  it('is an instance of PdsPrimaryNavigationDropdownLink', () => {
    expect(element).toBeInstanceOf(PdsPrimaryNavigationDropdownLink);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('dispatches a custom event on click and gets correct summary', async () => {
    const linkEl = element.shadowRoot?.querySelector('a');

    const handler = jest.fn();
    element.addEventListener(
      'pds-primary-navigation-dropdown-link-click',
      handler,
    );

    linkEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('This is a link');
    });
  });

  it('populates the arrow icon when provided', async () => {
    element = await fixture(
      '<pds-primary-navigation-dropdown-link arrow>This is a link</pds-primary-navigation-dropdown-link>',
    );
    expect(element).toMatchSnapshot('This is a link');
  });
});
