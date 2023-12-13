import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/dom';
import { PdsSecondaryNavigationLevelOne } from './secondary-navigation-level-one';
import createSnapshots from '../../../../test/utils/snapshots';

jest.mock('lit', () => ({
  ...jest.requireActual('lit'),
  isServer: false,
}));

initStoryshots({
  storyKindRegex: /Secondary navigation level one/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('SecondaryNavigationLevelOne unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(`<pds-secondary-navigation-level-one
    title="Account"
    columns=${2}
  >
    <pds-secondary-navigation-level-two title="Account stuff">
      <pds-list spacing="none">
        <pds-list-item><pds-link href="#">Account information</pds-link></pds-list-item>
        <pds-list-item><pds-link href="#">Account status</pds-link></pds-list-item>
      </pds-list>
    </pds-secondary-navigation-level-two>
    <pds-secondary-navigation-level-two
      title="Account information"
    >
      <pds-list spacing="none">
        <pds-list-item><pds-link href="#">Account profile</pds-link></pds-list-item>
        <pds-list-item><pds-link href="#">See account</pds-link></pds-list-item>
      </pds-list> </pds-secondary-navigation-level-two
    ><pds-secondary-navigation-level-two
      title="Plan details"
      href="http://localhost:4200"
    ></pds-secondary-navigation-level-two
  ></pds-secondary-navigation-level-one>`);
  });

  it('is an instance of PdsSecondaryNavigationLevelOne when child slots are passed in', () => {
    expect(element).toBeInstanceOf(PdsSecondaryNavigationLevelOne);
  });

  it('is an instance of PdsSecondaryNavigationLevelOne when no child slots are passed in', async () => {
    element = await fixture(`<pds-secondary-navigation-level-one
      title="Account"
      href="http://localhost:4200"
    ></pds-secondary-navigation-level-one>`);

    expect(element).toBeInstanceOf(PdsSecondaryNavigationLevelOne);
  });

  it('opens when you click the dropdown and closes when you click outside the dropdown', async () => {
    const outsideElement = await fixture(
      `<span class="somewhere-else"></span>`,
    );
    const linkEl = element.shadowRoot?.querySelector('button') as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the dropdown, expect the panel to be open
    await userEventWithoutDelay.click(linkEl);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-secondary-navigation-level-one')
            ?.classList.contains('pds-is-open'),
        ).toBeTruthy();
      },
      {
        timeout: 1000,
      },
    );
    // Change responsiveViewportSize to take different code branch
    (element as PdsSecondaryNavigationLevelOne).responsiveViewportSize = 'xl';
    await (element as PdsSecondaryNavigationLevelOne).updateComplete;

    // Click somewhere else on the page, expect the panel to close
    await userEventWithoutDelay.click(outsideElement);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('li')
            ?.classList.contains('pds-is-open'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('opens when you click the dropdown and closes press the escape key', async () => {
    const linkEl = element.shadowRoot?.querySelector('button') as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the dropdown, expect the panel to be open
    await userEventWithoutDelay.click(linkEl);

    // Press "Escape", expect the panel to close
    await userEventWithoutDelay.keyboard('{escape}');
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('li')
            ?.classList.contains('pds-is-open'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      ignoredRules: ['aria-required-children', 'aria-required-parent'],
    });
  });

  it('renders the mobile view in smaller viewports', async () => {
    global.innerWidth = 600;
    element = await fixture(`<pds-secondary-navigation-level-one
      title="Account"
      href="http://localhost:4200"
    ></pds-secondary-navigation-level-one>`);

    expect(
      element.shadowRoot?.querySelector(
        '.pds-c-secondary-navigation-level-one--mobile > pds-link[ariacurrent]',
      ),
    ).not.toBeNull();
  });

  it('renders the mobile view in smaller viewports, not an active section', async () => {
    global.innerWidth = 600;
    element = await fixture(`<pds-secondary-navigation-level-one
      title="Account"
      href="www.notactivesection.com"
      .activeSectionCallback="${() => {}}"
    ></pds-secondary-navigation-level-one>`);

    expect(
      element.shadowRoot?.querySelector(
        '.pds-c-secondary-navigation-level-one--mobile > pds-link[ariacurrent]',
      ),
    ).toBeNull();

    expect(
      element.shadowRoot?.querySelector(
        '.pds-c-secondary-navigation-level-one--mobile > pds-link',
      ),
    ).not.toBeNull();
  });

  it('renders the mobile view in smaller viewports without an href', async () => {
    global.innerWidth = 600;
    element = await fixture(`<pds-secondary-navigation-level-one
      title="Account"
    ></pds-secondary-navigation-level-one>`);

    expect(
      element.shadowRoot?.querySelector(
        '.pds-c-secondary-navigation-level-one--mobile',
      ),
    ).not.toBeNull();
  });
});
