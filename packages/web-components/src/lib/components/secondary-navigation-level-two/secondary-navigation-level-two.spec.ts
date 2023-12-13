import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsSecondaryNavigationLevelTwo } from './secondary-navigation-level-two';
import createSnapshots from '../../../../test/utils/snapshots';

jest.mock('lit', () => ({
  ...jest.requireActual('lit'),
  isServer: false,
}));

initStoryshots({
  storyKindRegex: /Secondary navigation level two/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('SecondaryNavigationLevelTwo unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(`<pds-secondary-navigation-level-two
      title="Account"
    >
      <pds-list spacing="none">
        <pds-list-item><pds-secondary-navigation-link href="http://localhost:4200">Account information</pds-secondary-navigation-link></pds-list-item>
        <pds-list-item><pds-secondary-navigation-link href="#">Account status</pds-secondary-navigation-link></pds-list-item>
      </pds-list>
    </pds-secondary-navigation-level-two>`);
  });

  it('is an instance of PdsSecondaryNavigationLevelTwo when child slots are passed in', () => {
    expect(element).toBeInstanceOf(PdsSecondaryNavigationLevelTwo);
  });

  it('is an instance of PdsSecondaryNavigationLevelTwo when no child slots are passed in', async () => {
    element = await fixture(`<pds-secondary-navigation-level-two
      title="Account"
      href="http://localhost:4200"
    ></pds-secondary-navigation-level-two>`);

    expect(
      element.shadowRoot?.querySelector(
        '.pds-c-secondary-navigation-level-two--mobile > .pds-c-secondary-navigation-level-two--active-page',
      ),
    ).toBeNull();

    expect(element).toBeInstanceOf(PdsSecondaryNavigationLevelTwo);
  });

  it('has the active page class added if that property is applied to a non-parent', async () => {
    element = await fixture(`<pds-secondary-navigation-level-two
      title="Account"
      href="#"
    ><pds-list spacing="sm">
    <pds-list-item><pds-secondary-navigation-link href="http://localhost:4200">Link one</pds-secondary-navigation-link></pds-list-item>
    <pds-list-item><pds-secondary-navigation-link href="#">Link two</pds-secondary-navigation-link></pds-list-item>
  </pds-list></pds-secondary-navigation-level-two>`);

    expect(element).toBeInstanceOf(PdsSecondaryNavigationLevelTwo);
  });

  it('renders the mobile view in smaller viewports, not an active page', async () => {
    global.innerWidth = 600;
    element = await fixture(`<pds-secondary-navigation-level-two
      title="Account"
      href="#"
    ><pds-list spacing="sm">
    <pds-list-item><pds-secondary-navigation-link href="http://localhost:4200">Link one</pds-secondary-navigation-link></pds-list-item>
    <pds-list-item><pds-secondary-navigation-link href="#">Link two</pds-secondary-navigation-link></pds-list-item>
  </pds-list></pds-secondary-navigation-level-two>`);

    expect(
      element.shadowRoot?.querySelector(
        '.pds-c-secondary-navigation-level-two--mobile > pds-secondary-navigation-link[ariacurrent="page"]',
      ),
    ).toBeNull();

    expect(
      element.shadowRoot?.querySelector(
        '.pds-c-secondary-navigation-level-two--mobile > pds-secondary-navigation-link',
      ),
    ).not.toBeNull();
  });

  it('renders the mobile view in smaller viewports, active page', async () => {
    global.innerWidth = 600;
    element = await fixture(`<pds-secondary-navigation-level-two
      title="Account"
      href="#"
      activePage="true"
      .activePageCallback="${() => {}}"
    ><pds-list spacing="sm">
    <pds-list-item><pds-secondary-navigation-link href="http://localhost:4200">Link one</pds-secondary-navigation-link></pds-list-item>
    <pds-list-item><pds-secondary-navigation-link href="#">Link two</pds-secondary-navigation-link></pds-list-item>
  </pds-list></pds-secondary-navigation-level-two>`);

    expect(
      element.shadowRoot?.querySelector(
        '.pds-c-secondary-navigation-level-two--mobile > pds-secondary-navigation-link[ariacurrent="page"]',
      ),
    ).not.toBeNull();
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      ignoredRules: ['aria-required-children'],
    });
  });
});
