import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/dom';
import * as focusTrap from 'focus-trap';
import { PdsPrimaryNavigation } from './primary-navigation';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Primary navigation/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('primary-navigation unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(
      `<pds-primary-navigation
        variant="inverted"
        includeAction="notification"
        messagesCount=${0}
        otherAlertsCount=${0}
        >
        <pds-primary-navigation-main-menu slot="primary-navigation-main-menu" ariaLabel="Main navigation area">
        <pds-primary-navigation-main-menu-item
          dropdown
          text="Dropdown"
        >
          <pds-list size="sm" spacing="sm">
            <pds-list-item
              ><pds-primary-navigation-dropdown-link arrow="true" href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link arrow="true" href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
          </pds-list>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          megamenu
          text="Megamenu"
        >
          <pds-grid
            break="slower"
            class="pds-u-margin-bottom-16"
            variant="1-3up"
          >
            <pds-grid-item>
              <div
                class="pds-u-inline-block pds-u-margin-right-8 pds-u-margin-top-4"
                style="vertical-align: top;"
              >
                <pds-icon-alert-circle></pds-icon-alert-circle>
              </div>
              <div class="pds-u-inline-block">
                <pds-heading
                  headingTag="h2"
                  variant="label-lg"
                  >Some heading text goes here</pds-heading
                >
                <pds-list size="sm" spacing="sm">
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                </pds-list>
              </div>
            </pds-grid-item>
            <pds-grid-item>
              <pds-heading
                headingTag="h2"
                variant="label-lg"
                >Some heading text goes here</pds-heading
              >
              <pds-list size="sm" spacing="sm">
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
              </pds-list>
            </pds-grid-item>
            <pds-grid-item>
              <pds-heading
                headingTag="h2"
                variant="label-lg"
                >Some heading text goes here</pds-heading
              >
              <pds-list size="sm" spacing="sm">
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
              </pds-list>
            </pds-grid-item>
          </pds-grid>
          <div>
            <pds-heading
              headingTag="h2"
              variant="label-lg"
              >Some heading text goes here</pds-heading
            >
            <pds-text-passage>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
              ipsum dolor amet, consectetur adipiscing elit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Faucibus a
              pellentesque sit amet. Tristique
            </pds-text-passage>
          </div>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          text="Megamenu"
          megamenu
        >
          <placeholder-element>Megamenu content</placeholder-element>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          href="#"
          text="Link"
          arrow="true"
          divider="true"
        ></pds-primary-navigation-main-menu-item> </pds-primary-navigation-main-menu
      ><pds-primary-navigation-utility-menu slot="primary-navigation-utility-menu"
        ><pds-primary-navigation-utility-menu-item
          href="#"
        >Link</pds-primary-navigation-utility-menu-item></pds-primary-navigation-utility-menu
    ></pds-primary-navigation>`,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('opens and closes the notification panel as expected when clicking the notification bell', async () => {
    const notificationBell = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__bell-icon',
    ) as HTMLElement;

    const openHandler = jest.fn();
    const closeHandler = jest.fn();
    element.addEventListener('pds-primary-navigation-panel-open', openHandler);
    element.addEventListener(
      'pds-primary-navigation-panel-close',
      closeHandler,
    );

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the notification bell, expect the panel to be open
    await userEventWithoutDelay.click(notificationBell);
    await waitFor(
      () => {
        expect(openHandler).toBeCalledTimes(1);
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-primary-navigation__icons-nav')
            ?.classList.contains('pds-is-notification-active'),
        ).toBeTruthy();
      },
      {
        timeout: 1000,
      },
    );

    // Click the notification bell again, expect the panel to close
    await userEventWithoutDelay.click(notificationBell);
    await waitFor(
      () => {
        expect(closeHandler).toBeCalledTimes(1);
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-primary-navigation__icons-nav')
            ?.classList.contains('pds-is-notification-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('closes the navigation panel as expected when clicking outside of the notification bell after panel is open ', async () => {
    const notificationBell = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__bell-icon',
    ) as HTMLElement;

    const notNotificationBell = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation',
    ) as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the notification bell to open panel
    await userEventWithoutDelay.click(notificationBell);
    await waitFor(() => {}, {
      timeout: 1000,
    });
    // Click somewhere else on the page, expect the panel to close
    await userEventWithoutDelay.click(notNotificationBell);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-primary-navigation__icons-nav')
            ?.classList.contains('pds-is-notification-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('closes the navigation panel as expected at mobile after clicking the close panel link when panel is open', async () => {
    const notificationBell = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__bell-icon',
    ) as HTMLElement;

    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    const closeNavPanelLink = element.shadowRoot
      ?.querySelector(
        '.pds-c-primary-navigation__notification-panel--close-notifications',
      )
      ?.shadowRoot?.querySelector('a') as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the notification bell to open panel
    await userEventWithoutDelay.click(notificationBell);
    await waitFor(() => {}, {
      timeout: 1000,
    });
    // Click nav panel close link, expect the panel to close
    await userEventWithoutDelay.click(closeNavPanelLink);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-primary-navigation__icons-nav')
            ?.classList.contains('pds-is-notification-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('hitting the escape key when an item in the notification panel is focused closes the navigation panel as expected', async () => {
    element =
      await fixture(`<pds-primary-navigation variant="default" includeAction="notification" layoutContainerVariant="default">
    <pds-primary-navigation-main-menu slot="primary-navigation-main-menu"aria-label="Main navigation area"></pds-primary-navigation-main-menu
    ></pds-primary-navigation>`);

    const notificationBell = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__bell-icon',
    ) as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.click(notificationBell);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-primary-navigation__icons-nav')
            ?.classList.contains('pds-is-notification-active'),
        ).toBeTruthy();
      },
      {
        timeout: 1000,
      },
    );

    const navPanelElement = element.shadowRoot?.querySelector(
      '#pds-c-primary-nav-messages-link',
    ) as HTMLElement;

    navPanelElement.focus();

    await userEventWithoutDelay.keyboard('[Escape]');
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-primary-navigation__icons-nav')
            ?.classList.contains('pds-is-notification-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('closes the open notification panel and opens navigation panel, and active classes toggle properly, when clicking the menu button at mobile', async () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    const menuButton = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__menu-button',
    ) as HTMLElement;

    const notificationBell = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__bell-icon',
    ) as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click notification bell to open navigation panel
    await userEventWithoutDelay.click(notificationBell);
    await waitFor(() => {}, {
      timeout: 1000,
    });
    // Click menu button, navigation panel should go away
    await userEventWithoutDelay.click(menuButton);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-primary-navigation__icons-nav')
            ?.classList.contains('pds-is-notification-active'),
        ).toBeFalsy();
        const iconMatch = menuButton.innerHTML.match(
          /<pds-icon-x size="lg"><\/pds-icon-x>/,
        );
        expect(iconMatch?.length ? iconMatch[0] : '').toEqual(
          '<pds-icon-x size="lg"></pds-icon-x>',
        );
      },
      {
        timeout: 1000,
      },
    );
    await userEventWithoutDelay.click(notificationBell);
    await waitFor(
      () => {
        const iconMatch = menuButton.innerHTML.match(
          /<pds-icon-menu size="lg"><\/pds-icon-menu>/,
        );
        expect(iconMatch?.length ? iconMatch[0] : '').toEqual(
          '<pds-icon-menu size="lg"></pds-icon-menu>',
        );
      },
      {
        timeout: 1000,
      },
    );
  });

  it('dispatches a custom event when a notification link is clicked', async () => {
    const notificationBell = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__bell-icon',
    ) as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the notification bell to open panel
    await userEventWithoutDelay.click(notificationBell);
    await waitFor(() => {}, {
      timeout: 1000,
    });

    const notificationLink = element.shadowRoot?.querySelector(
      'pds-list > pds-list-item',
    );

    const handler = jest.fn();
    element.addEventListener(
      'pds-primary-navigation-notification-link-click',
      handler,
    );

    notificationLink?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('Messages');
    });
  });

  it('dispatches a custom event when log in link is clicked', async () => {
    const loginButton = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__buttons-nav--desktop-button',
    ) as HTMLElement;

    const handler = jest.fn();
    element.addEventListener('pds-primary-navigation-item-click', handler);

    loginButton?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('Log in');
    });
  });

  it('dispatches a custom event when a primary nav other notification link is clicked', async () => {
    const notificationBell = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__bell-icon',
    ) as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the notification bell to open panel
    await userEventWithoutDelay.click(notificationBell);
    await waitFor(() => {}, {
      timeout: 1000,
    });

    const notificationLink = element.shadowRoot
      ?.querySelector('pds-list')
      ?.getElementsByTagName('pds-list-item')[1];

    const handler = jest.fn();
    element.addEventListener(
      'pds-primary-navigation-notification-link-click',
      handler,
    );

    notificationLink?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('Other alerts');
    });
  });

  it('opening and closing the menu button dispatches a custom event', async () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    const menuButton = element.shadowRoot
      ?.querySelector('.pds-c-primary-navigation__menu-button')
      ?.shadowRoot?.querySelector('button') as HTMLElement;

    const openHandler = jest.fn();
    const closeHandler = jest.fn();
    element.addEventListener(
      'pds-primary-navigation-menu-button-open',
      openHandler,
    );
    element.addEventListener(
      'pds-primary-navigation-menu-button-close',
      closeHandler,
    );

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the menu button to open panel
    await userEventWithoutDelay.click(menuButton);
    await waitFor(
      () => {
        expect(openHandler).toBeCalledTimes(1);
      },
      {
        timeout: 1000,
      },
    );

    await userEventWithoutDelay.click(menuButton);
    return Promise.resolve().then(() => {
      expect(closeHandler).toBeCalledTimes(1);
    });
  });

  it('dispatching a custom event with invalid markup returns a null summary', async () => {
    element = await fixture(
      `<pds-primary-navigation includeAction="notification"><pds-primary-navigation/>`,
    );
    const handler = jest.fn();
    element.addEventListener(
      'pds-primary-navigation-notification-link-click',
      handler,
    );

    const primaryNav = element.querySelector(
      'pds-primary-navigation',
    ) as PdsPrimaryNavigation;

    primaryNav.clickNotificationLink('invalid-id');

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual(undefined);
    });
  });

  it('dispatching a custom event with no shadow returns a null summary', async () => {
    element = await fixture(
      `<pds-primary-navigation includeAction="notification"><pds-primary-navigation/>`,
    );
    const handler = jest.fn();
    element.addEventListener(
      'pds-primary-navigation-notification-link-click',
      handler,
    );

    const primaryNav = element.querySelector(
      'pds-primary-navigation',
    ) as PdsPrimaryNavigation;

    Object.defineProperty(primaryNav, 'shadowRoot', {
      writable: true,
      configurable: true,
      value: null,
    });

    primaryNav.clickNotificationLink('invalid-id');

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual(undefined);
    });
  });

  it('shows the bell with no notification icon if messages are all zero', async () => {
    element = await fixture(`<pds-primary-navigation
        variant="inverted"
        includeAction="notification"
        messagesCount=${0}
        otherAlertsCount=${0}
        >`);
    const notificationIcon = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__bell-icon',
    )?.innerHTML;

    expect(notificationIcon).toContain(
      '<pds-icon-bell size="lg"></pds-icon-bell>',
    );
  });

  it('shows the bell with notification icon if message count is greater than zero', async () => {
    element = await fixture(`<pds-primary-navigation
        variant="inverted"
        includeAction="notification"
        messagesCount=${5}
        otherAlertsCount=${0}
        >`);
    const notificationIcon = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__bell-icon',
    )?.innerHTML;

    expect(notificationIcon).toContain(
      '<pds-icon-bell-notification size="lg"></pds-icon-bell-notification>',
    );
  });

  it('shows the bell with notification icon if other alerts are greater than zero', async () => {
    element = await fixture(`<pds-primary-navigation
        variant="inverted"
        includeAction="notification"
        messagesCount=${0}
        otherAlertsCount=${5}
        >`);
    const notificationIcon = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__bell-icon',
    )?.innerHTML;

    expect(notificationIcon).toContain(
      '<pds-icon-bell-notification size="lg"></pds-icon-bell-notification>',
    );
  });

  it('does not show any icon if include notifications is false', async () => {
    element = await fixture(`<pds-primary-navigation
        variant="default"
        messagesCount=${5}
        otherAlertsCount=${5}
        >`);
    const notificationIcon = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__bell-icon',
    )?.innerHTML;

    expect(notificationIcon).toBe(undefined);
  });

  it('does not include other alerts if hideOtherAlerts is true', async () => {
    element = await fixture(`<pds-primary-navigation
        variant="default"
        messagesCount=${5}
        otherAlertsCount=${5}
        hideOtherAlerts
        includeAction="notification"
        >`);
    const otherAlertsLink = element.shadowRoot?.querySelector(
      '#pds-c-primary-nav-other-notifications-link',
    );

    expect(otherAlertsLink).toBeNull();
  });

  it('has default skip to content link', async () => {
    element = await fixture(`<pds-primary-navigation>`);
    const skipContentLink = element.shadowRoot?.querySelector(
      'a.pds-c-primary-navigation__skip-to-main',
    );

    expect(skipContentLink?.getAttribute('href')).toEqual('#main');
  });

  it('has customized skip to content link', async () => {
    element = await fixture(`<pds-primary-navigation
        skipToContentHref="#main-content"
        >`);
    const skipContentLink = element.shadowRoot?.querySelector(
      'a.pds-c-primary-navigation__skip-to-main',
    );

    expect(skipContentLink?.getAttribute('href')).toEqual('#main-content');
  });

  it('has disabled skip to content link', async () => {
    element = await fixture(`<pds-primary-navigation
        skipToContentHref="none"
        >`);
    const skipContentLink = element.shadowRoot?.querySelector(
      'a.pds-c-primary-navigation__skip-to-main',
    );

    expect(skipContentLink).toBeNull();
  });

  it('is an instance of PdsPrimaryNavigation with correct slot types', async () => {
    element = await fixture(`<pds-primary-navigation
    variant="default"
    messagesHref="https://www.google.com"
    otherNotificationsHref="https://www.google.com"
    loginLink="logout">
    <svg slot="logo" width="144" height="58">
      <rect
        width="144"
        height="58"
        style="fill:#000000;stroke-width:3;stroke:rgb(0,0,0)"
      />
    </svg>
    <pds-primary-navigation-main-menu slot="primary-navigation-main-menu" ariaLabel="Main navigation area">
    <pds-primary-navigation-main-menu-item
      dropdown
      text="Dropdown"
    >
      <pds-list size="sm" spacing="sm">
        <pds-list-item
          ><pds-primary-navigation-dropdown-link arrow="true" href="#"
            >This is a link</pds-primary-navigation-dropdown-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-primary-navigation-dropdown-link arrow="true" href="#"
            >This is a link</pds-primary-navigation-dropdown-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-primary-navigation-dropdown-link href="#"
            >This is a link</pds-primary-navigation-dropdown-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-primary-navigation-dropdown-link href="#"
            >This is a link</pds-primary-navigation-dropdown-link
          ></pds-list-item
        >
      </pds-list>
    </pds-primary-navigation-main-menu-item>
    <pds-primary-navigation-main-menu-item
      megamenu
      text="Megamenu"
    >
      <pds-grid
        break="slower"
        class="pds-u-margin-bottom-16"
        variant="1-3up"
      >
        <pds-grid-item>
          <div
            class="pds-u-inline-block pds-u-margin-right-8 pds-u-margin-top-4"
            style="vertical-align: top;"
          >
            <pds-icon-alert-circle></pds-icon-alert-circle>
          </div>
          <div class="pds-u-inline-block">
            <pds-heading
              headingTag="h2"
              variant="label-lg"
              >Some heading text goes here</pds-heading
            >
            <pds-list size="sm" spacing="sm">
              <pds-list-item
                ><pds-primary-navigation-dropdown-link href="#"
                  >This is a link</pds-primary-navigation-dropdown-link
                ></pds-list-item
              >
              <pds-list-item
                ><pds-primary-navigation-dropdown-link href="#"
                  >This is a link</pds-primary-navigation-dropdown-link
                ></pds-list-item
              >
              <pds-list-item
                ><pds-primary-navigation-dropdown-link href="#"
                  >This is a link</pds-primary-navigation-dropdown-link
                ></pds-list-item
              >
              <pds-list-item
                ><pds-primary-navigation-dropdown-link href="#"
                  >This is a link</pds-primary-navigation-dropdown-link
                ></pds-list-item
              >
              <pds-list-item
                ><pds-primary-navigation-dropdown-link href="#"
                  >This is a link</pds-primary-navigation-dropdown-link
                ></pds-list-item
              >
              <pds-list-item
                ><pds-primary-navigation-dropdown-link href="#"
                  >This is a link</pds-primary-navigation-dropdown-link
                ></pds-list-item
              >
            </pds-list>
          </div>
        </pds-grid-item>
        <pds-grid-item>
          <pds-heading
            headingTag="h2"
            variant="label-lg"
            >Some heading text goes here</pds-heading
          >
          <pds-list size="sm" spacing="sm">
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
          </pds-list>
        </pds-grid-item>
        <pds-grid-item>
          <pds-heading
            headingTag="h2"
            variant="label-lg"
            >Some heading text goes here</pds-heading
          >
          <pds-list size="sm" spacing="sm">
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
          </pds-list>
        </pds-grid-item>
      </pds-grid>
      <div>
        <pds-heading
          headingTag="h2"
          variant="label-lg"
          >Some heading text goes here</pds-heading
        >
        <pds-text-passage>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
          ipsum dolor amet, consectetur adipiscing elit.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Faucibus a
          pellentesque sit amet. Tristique
        </pds-text-passage>
      </div>
    </pds-primary-navigation-main-menu-item>
    <pds-primary-navigation-main-menu-item
      text="Megamenu"
      megamenu
    >
      <placeholder-element>Megamenu content</placeholder-element>
    </pds-primary-navigation-main-menu-item>
    <pds-primary-navigation-main-menu-item
      href="#"
      text="Link"
      arrow="true"
      divider="true"
    ></pds-primary-navigation-main-menu-item> </pds-primary-navigation-main-menu
  ><pds-primary-navigation-utility-menu slot="primary-navigation-utility-menu"
    ><pds-primary-navigation-utility-menu-item
      href="#"
    >Link</pds-primary-navigation-utility-menu-item></pds-primary-navigation-utility-menu
></pds-primary-navigation>`);
    expect(element).toBeInstanceOf(PdsPrimaryNavigation);
  });

  it('works as expected with alternate props passed in', async () => {
    element = await fixture(
      `<pds-primary-navigation
        variant="inverted"
        loginLink="none"
        includeAction="notification"
        logoAriaLabel="Custom logo aria label"
        messagesCount=${5}
        messagesHref="https://www.google.com"
        otherNotificationsHref="https://www.google.com">
        <pds-primary-navigation-main-menu slot="primary-navigation-main-menu" ariaLabel="Main navigation area">
        <pds-primary-navigation-main-menu-item
          dropdown
          text="Dropdown"
        >
          <pds-list size="sm" spacing="sm">
            <pds-list-item
              ><pds-primary-navigation-dropdown-link arrow="true" href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link arrow="true" href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
          </pds-list>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          megamenu
          text="Megamenu"
        >
          <pds-grid
            break="slower"
            class="pds-u-margin-bottom-16"
            variant="1-3up"
          >
            <pds-grid-item>
              <div
                class="pds-u-inline-block pds-u-margin-right-8 pds-u-margin-top-4"
                style="vertical-align: top;"
              >
                <pds-icon-alert-circle></pds-icon-alert-circle>
              </div>
              <div class="pds-u-inline-block">
                <pds-heading
                  headingTag="h2"
                  variant="label-lg"
                  >Some heading text goes here</pds-heading
                >
                <pds-list size="sm" spacing="sm">
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                </pds-list>
              </div>
            </pds-grid-item>
            <pds-grid-item>
              <pds-heading
                headingTag="h2"
                variant="label-lg"
                >Some heading text goes here</pds-heading
              >
              <pds-list size="sm" spacing="sm">
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
              </pds-list>
            </pds-grid-item>
            <pds-grid-item>
              <pds-heading
                headingTag="h2"
                variant="label-lg"
                >Some heading text goes here</pds-heading
              >
              <pds-list size="sm" spacing="sm">
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
              </pds-list>
            </pds-grid-item>
          </pds-grid>
          <div>
            <pds-heading
              headingTag="h2"
              variant="label-lg"
              >Some heading text goes here</pds-heading
            >
            <pds-text-passage>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
              ipsum dolor amet, consectetur adipiscing elit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Faucibus a
              pellentesque sit amet. Tristique
            </pds-text-passage>
          </div>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          text="Megamenu"
          megamenu
        >
          <placeholder-element>Megamenu content</placeholder-element>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          href="#"
          text="Link"
          arrow="true"
          divider="true"
        ></pds-primary-navigation-main-menu-item>
        </pds-primary-navigation-main-menu>
        <pds-primary-navigation-utility-menu slot="primary-navigation-utility-menu"
        ><pds-primary-navigation-utility-menu-item href="#"
          >Link</pds-primary-navigation-utility-menu-item
        ></pds-primary-navigation-utility-menu
      >
      </pds-primary-navigation>`,
    );
    expect(
      element.outerHTML.replaceAll(/<!--\?lit\$\d*\$-->/g, ''),
    ).toMatchSnapshot();
  });

  it('works as expected with a search slot passed in: clicking the icon opens and closes the panel', async () => {
    element = await fixture(
      `<pds-primary-navigation variant="inverted" includeAction="search">
        <span slot="search">Search slot</span>
      </pds-primary-navigation>`,
    );

    const searchIcon = element.shadowRoot
      ?.querySelector('.pds-c-primary-navigation__search-icon')
      ?.querySelector('pds-icon-search') as HTMLElement;

    const openHandler = jest.fn();
    element.addEventListener('pds-primary-navigation-panel-open', openHandler);
    const closeHandler = jest.fn();
    element.addEventListener('pds-primary-navigation-panel-open', closeHandler);

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the search icon, expect the panel to be open
    await userEventWithoutDelay.click(searchIcon);
    await waitFor(
      () => {
        expect(openHandler).toBeCalledTimes(1);
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-primary-navigation__icons-nav')
            ?.classList.contains('pds-is-notification-active'),
        ).toBeTruthy();
      },
      {
        timeout: 1000,
      },
    );
    // Change responsiveViewportSize to take different code branch
    (element as PdsPrimaryNavigation).responsiveViewportSize = 'xl';

    await (element as PdsPrimaryNavigation).updateComplete;

    // Search icon turns into an X on open, so click that & expect the panel to close
    const searchCloseIcon = element.shadowRoot
      ?.querySelector('.pds-c-primary-navigation__search-icon')
      ?.querySelector('pds-icon-x') as HTMLElement;
    await userEventWithoutDelay.click(searchCloseIcon);
    await waitFor(
      () => {
        expect(closeHandler).toBeCalledTimes(1);
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-primary-navigation__icons-nav')
            ?.classList.contains('pds-is-notification-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('works as expected with a search slot passed in: clicking somewhere else on the page closes the panel', async () => {
    element = await fixture(
      `<pds-primary-navigation variant="inverted">
        <span slot="search">Search slot</span>
      </pds-primary-navigation>`,
    );

    const searchIcon = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__search-icon',
    ) as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });

    // Click the search icon to open panel
    await userEventWithoutDelay.click(searchIcon);
    await waitFor(() => {}, {
      timeout: 1000,
    });

    const notSearchIcon = element.shadowRoot?.querySelector(
      '.test-not-search-click',
    ) as HTMLElement;

    // Click somewhere else on the page, expect the panel to close
    await userEventWithoutDelay.click(notSearchIcon);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-primary-navigation__icons-nav')
            ?.classList.contains('pds-is-notification-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('works as expected with a search slot passed in: clicking on slot contents does not close the panel', async () => {
    element = await fixture(
      `<pds-primary-navigation variant="inverted" includeAction="search">
        <span slot="search">Search slot</span>
      </pds-primary-navigation>`,
    );

    const searchIcon = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__search-icon',
    ) as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });

    // Click the search icon to open panel
    await userEventWithoutDelay.click(searchIcon);
    await waitFor(() => {}, {
      timeout: 1000,
    });

    const slotContents = element.querySelector(
      '[slot="search"]',
    ) as HTMLElement;

    // Click somewhere else on the page, expect the panel to close
    await userEventWithoutDelay.click(slotContents);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-primary-navigation__icons-nav')
            ?.classList.contains('pds-is-notification-active'),
        ).toBeTruthy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('works as expected with a search slot passed in: hitting escape when focused on slot contents closes the panel', async () => {
    element = await fixture(
      `<pds-primary-navigation variant="inverted" includeAction="search">
        <span slot="search"><pds-link href="#">Search slot</pds-link></span>
      </pds-primary-navigation>`,
    );

    const searchIcon = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__search-icon',
    ) as HTMLElement;

    const slotContents = element
      .querySelector('pds-link')
      ?.shadowRoot?.querySelector('a') as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });

    // Click the search icon to open panel
    await userEventWithoutDelay.click(searchIcon);
    await waitFor(() => {}, {
      timeout: 1000,
    });

    slotContents.focus();

    await userEventWithoutDelay.keyboard('[Escape]');

    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-primary-navigation__icons-nav')
            ?.classList.contains('pds-is-notification-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('is accessible', async () => {
    await waitFor(
      () => {
        assert.isAccessible(element, {
          ignoredRules: ['nested-interactive', 'landmark-no-duplicate-banner'],
        });
      },
      {
        timeout: 1000,
      },
    );
  });

  it('does not populate the logo slot if it is not the correct type', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    await fixture(`<pds-primary-navigation variant="default" logoAriaLabel="false">
    <div slot="logo">
      <svg width="144" height="58">
        <rect
          width="144"
          height="58"
          style="fill:#000000;stroke-width:3;stroke:rgb(0,0,0)"
        />
      </svg>
    </div>
    <pds-primary-navigation-main-menu slot="primary-navigation-main-menu" ariaLabel="main navigation area">
      <pds-primary-navigation-main-menu-item dropdown text="Dropdown">
        <pds-list size="sm" spacing="sm">
          <pds-list-item
            ><pds-primary-navigation-dropdown-link href="#"
              >This is a link</pds-primary-navigation-dropdown-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-primary-navigation-dropdown-link href="#"
              >This is a link</pds-primary-navigation-dropdown-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-primary-navigation-dropdown-link href="#"
              >This is a link</pds-primary-navigation-dropdown-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-primary-navigation-dropdown-link href="#"
              >This is a link</pds-primary-navigation-dropdown-link
            ></pds-list-item
          >
        </pds-list>
      </pds-primary-navigation-main-menu-item>
      <pds-primary-navigation-main-menu-item text="Megamenu" megamenu>
        <placeholder-element>Megamenu content</placeholder-element>
      </pds-primary-navigation-main-menu-item>
      <pds-primary-navigation-main-menu-item
        href="#"
        text="Link"
      ></pds-primary-navigation-main-menu-item> </pds-primary-navigation-main-menu
  ></pds-primary-navigation>`);

    expect(consoleError).toHaveBeenCalledTimes(1);
    consoleError.mockRestore();
  });

  it('does not populate the primary navigation main menu slot if it is not type of pds-primary-navigation-main-menu', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    await fixture(`<pds-primary-navigation variant="default">
    <pds-primary-navigation-utility-menu slot="primary-navigation-main-menu"></pds-primary-navigation-utility-menu></pds-primary-navigation>`);

    expect(consoleError).toHaveBeenCalledTimes(1);
    consoleError.mockRestore();
  });

  it('does not populate the utility menu slot if it is not type of pds-primary-navigation-utility-menu', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    await fixture(`<pds-primary-navigation variant="default">
      <pds-primary-navigation-main-menu slot="primary-navigation-utility-menu"></pds-primary-navigation-main-menu>
      </pds-primary-navigation>`);

    expect(consoleError).toHaveBeenCalledTimes(1);
    consoleError.mockRestore();
  });

  it('initializes the main menu focus trap properly when main menu, utility menu, and the login link are passed', async () => {
    // @ts-expect-error Element does have trap prop
    expect(element.trap).toBeUndefined();
    jest.spyOn(focusTrap, 'createFocusTrap');
    // @ts-expect-error This function does exist
    element.initializeMainMenuTrap();
    await waitFor(() => {
      // @ts-expect-error Element does have trap prop
      expect(element.trap).not.toBeUndefined();
    });
    expect(focusTrap.createFocusTrap).toHaveBeenCalledTimes(1);
    const menuButton = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation__menu-button',
    );
    expect(focusTrap.createFocusTrap).toHaveBeenCalledWith(
      [
        'pds-primary-navigation-main-menu',
        'pds-primary-navigation-utility-menu',
        menuButton,
      ],
      {
        initialFocus: false,
        allowOutsideClick: true,
        clickOutsideDeactivates: true,
        // @ts-expect-error Element does have menuIcon prop
        setReturnFocus: element.menuIcon,
        escapeDeactivates: true,
        tabbableOptions: {
          getShadowRoot: true,
        },
      },
    );
    jest.resetAllMocks();
  });

  it('initializes the main menu focus trap properly when main menu and utility menu exist, but not the login link are passed', async () => {
    element = await fixture(
      `<pds-primary-navigation
        variant="inverted"
        loginLink="none"
        >
        <pds-primary-navigation-main-menu slot="primary-navigation-main-menu" ariaLabel="Main navigation area">
        <pds-primary-navigation-main-menu-item
          dropdown
          text="Dropdown"
        >
          <pds-list size="sm" spacing="sm">
            <pds-list-item
              ><pds-primary-navigation-dropdown-link arrow="true" href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link arrow="true" href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
          </pds-list>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          megamenu
          text="Megamenu"
        >
          <pds-grid
            break="slower"
            class="pds-u-margin-bottom-16"
            variant="1-3up"
          >
            <pds-grid-item>
              <div
                class="pds-u-inline-block pds-u-margin-right-8 pds-u-margin-top-4"
                style="vertical-align: top;"
              >
                <pds-icon-alert-circle></pds-icon-alert-circle>
              </div>
              <div class="pds-u-inline-block">
                <pds-heading
                  headingTag="h2"
                  variant="label-lg"
                  >Some heading text goes here</pds-heading
                >
                <pds-list size="sm" spacing="sm">
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                </pds-list>
              </div>
            </pds-grid-item>
            <pds-grid-item>
              <pds-heading
                headingTag="h2"
                variant="label-lg"
                >Some heading text goes here</pds-heading
              >
              <pds-list size="sm" spacing="sm">
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
              </pds-list>
            </pds-grid-item>
            <pds-grid-item>
              <pds-heading
                headingTag="h2"
                variant="label-lg"
                >Some heading text goes here</pds-heading
              >
              <pds-list size="sm" spacing="sm">
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
              </pds-list>
            </pds-grid-item>
          </pds-grid>
          <div>
            <pds-heading
              headingTag="h2"
              variant="label-lg"
              >Some heading text goes here</pds-heading
            >
            <pds-text-passage>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
              ipsum dolor amet, consectetur adipiscing elit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Faucibus a
              pellentesque sit amet. Tristique
            </pds-text-passage>
          </div>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          text="Megamenu"
          megamenu
        >
          <placeholder-element>Megamenu content</placeholder-element>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          href="#"
          text="Link"
          arrow="true"
          divider="true"
        ></pds-primary-navigation-main-menu-item> </pds-primary-navigation-main-menu
      ><pds-primary-navigation-utility-menu slot="primary-navigation-utility-menu"
        ><pds-primary-navigation-utility-menu-item
          href="#"
        >Link</pds-primary-navigation-utility-menu-item></pds-primary-navigation-utility-menu
    ></pds-primary-navigation>`,
    );

    // @ts-expect-error Element does have trap prop
    expect(element.trap).toBeUndefined();
    jest.spyOn(focusTrap, 'createFocusTrap');
    // @ts-expect-error This function does exist
    element.initializeMainMenuTrap();
    expect(focusTrap.createFocusTrap).toHaveBeenCalledTimes(1);
    expect(focusTrap.createFocusTrap).toHaveBeenCalledWith(
      [
        'pds-primary-navigation-main-menu',
        'pds-primary-navigation-utility-menu',
      ],
      {
        initialFocus: false,
        allowOutsideClick: true,
        clickOutsideDeactivates: true,
        // @ts-expect-error Element does have menuIcon prop
        setReturnFocus: element.menuIcon,
        escapeDeactivates: true,
        tabbableOptions: {
          getShadowRoot: true,
        },
      },
    );
    jest.resetAllMocks();
  });

  it('initializes the main menu focus trap properly when main menu exists, but not utility menu or the login link are passed', async () => {
    element = await fixture(
      `<pds-primary-navigation
        variant="inverted"
        loginLink="none"
        >
        <pds-primary-navigation-main-menu slot="primary-navigation-main-menu" ariaLabel="Main navigation area">
        <pds-primary-navigation-main-menu-item
          dropdown
          text="Dropdown"
        >
          <pds-list size="sm" spacing="sm">
            <pds-list-item
              ><pds-primary-navigation-dropdown-link arrow="true" href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link arrow="true" href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
          </pds-list>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          megamenu
          text="Megamenu"
        >
          <pds-grid
            break="slower"
            class="pds-u-margin-bottom-16"
            variant="1-3up"
          >
            <pds-grid-item>
              <div
                class="pds-u-inline-block pds-u-margin-right-8 pds-u-margin-top-4"
                style="vertical-align: top;"
              >
                <pds-icon-alert-circle></pds-icon-alert-circle>
              </div>
              <div class="pds-u-inline-block">
                <pds-heading
                  headingTag="h2"
                  variant="label-lg"
                  >Some heading text goes here</pds-heading
                >
                <pds-list size="sm" spacing="sm">
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                  <pds-list-item
                    ><pds-primary-navigation-dropdown-link href="#"
                      >This is a link</pds-primary-navigation-dropdown-link
                    ></pds-list-item
                  >
                </pds-list>
              </div>
            </pds-grid-item>
            <pds-grid-item>
              <pds-heading
                headingTag="h2"
                variant="label-lg"
                >Some heading text goes here</pds-heading
              >
              <pds-list size="sm" spacing="sm">
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
              </pds-list>
            </pds-grid-item>
            <pds-grid-item>
              <pds-heading
                headingTag="h2"
                variant="label-lg"
                >Some heading text goes here</pds-heading
              >
              <pds-list size="sm" spacing="sm">
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
                <pds-list-item
                  ><pds-primary-navigation-dropdown-link href="#"
                    >This is a link</pds-primary-navigation-dropdown-link
                  ></pds-list-item
                >
              </pds-list>
            </pds-grid-item>
          </pds-grid>
          <div>
            <pds-heading
              headingTag="h2"
              variant="label-lg"
              >Some heading text goes here</pds-heading
            >
            <pds-text-passage>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
              ipsum dolor amet, consectetur adipiscing elit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Faucibus a
              pellentesque sit amet. Tristique
            </pds-text-passage>
          </div>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          text="Megamenu"
          megamenu
        >
          <placeholder-element>Megamenu content</placeholder-element>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          href="#"
          text="Link"
          arrow="true"
          divider="true"
        ></pds-primary-navigation-main-menu-item> </pds-primary-navigation-main-menu
      ></pds-primary-navigation>`,
    );

    // @ts-expect-error Element does have trap prop
    expect(element.trap).toBeUndefined();
    jest.spyOn(focusTrap, 'createFocusTrap');
    // @ts-expect-error This function does exist
    element.initializeMainMenuTrap();
    expect(focusTrap.createFocusTrap).toHaveBeenCalledTimes(1);
    expect(focusTrap.createFocusTrap).toHaveBeenCalledWith(
      ['pds-primary-navigation-main-menu'],
      {
        initialFocus: false,
        allowOutsideClick: true,
        clickOutsideDeactivates: true,
        // @ts-expect-error Element does have menuIcon prop
        setReturnFocus: element.menuIcon,
        escapeDeactivates: true,
        tabbableOptions: {
          getShadowRoot: true,
        },
      },
    );
    jest.resetAllMocks();
  });

  it('initializes the main menu focus trap properly the main/utility slots are not populated and loginLink is none', async () => {
    element = await fixture(
      `<pds-primary-navigation
        variant="inverted"
        loginLink="none"
        ></pds-primary-navigation>`,
    );

    jest.spyOn(focusTrap, 'createFocusTrap');
    // @ts-expect-error This function does exist
    element.initializeMainMenuTrap();
    expect(focusTrap.createFocusTrap).toHaveBeenCalledTimes(1);
    expect(focusTrap.createFocusTrap).toHaveBeenCalledWith([], {
      initialFocus: false,
      allowOutsideClick: true,
      clickOutsideDeactivates: true,
      // @ts-expect-error Element does have menuIcon prop
      setReturnFocus: element.menuIcon,
      escapeDeactivates: true,
      tabbableOptions: {
        getShadowRoot: true,
      },
    });
    jest.resetAllMocks();
  });

  it('initializes the notification focus trap properly', async () => {
    // @ts-expect-error Element does have trap prop
    expect(element.trap).toBeUndefined();
    jest.spyOn(focusTrap, 'createFocusTrap');
    // @ts-expect-error This function does exist
    element.initializeNotificationPanelTrap();
    expect(focusTrap.createFocusTrap).toHaveBeenCalledTimes(1);
    expect(focusTrap.createFocusTrap).toHaveBeenCalledWith(
      [
        // @ts-expect-error Element does have notificationsPanel prop
        element.notificationsPanel,
        // @ts-expect-error Element does have bellIcon prop
        element.bellIcon,
      ],
      {
        initialFocus: false,
        allowOutsideClick: true,
        clickOutsideDeactivates: true,
        // @ts-expect-error Element does have bellIcon prop
        setReturnFocus: element.bellIcon,
        escapeDeactivates: true,
        tabbableOptions: {
          getShadowRoot: true,
        },
      },
    );
    jest.resetAllMocks();
  });

  it('initializes the search panel focus trap properly', async () => {
    // @ts-expect-error Element does have trap prop
    expect(element.trap).toBeUndefined();
    jest.spyOn(focusTrap, 'createFocusTrap');
    // @ts-expect-error This function does exist
    element.initializeSearchPanelTrap();

    expect(focusTrap.createFocusTrap).toHaveBeenCalledTimes(1);
    expect(focusTrap.createFocusTrap).toHaveBeenCalledWith(
      [
        // @ts-expect-error Element does have searchPanel prop
        element.searchPanel,
        // @ts-expect-error Element does have searchIcon prop
        element.searchIcon,
      ],
      {
        initialFocus: false,
        allowOutsideClick: true,
        clickOutsideDeactivates: true,
        // @ts-expect-error Element does have searchIcon prop
        setReturnFocus: element.searchIcon,
        escapeDeactivates: true,
        tabbableOptions: {
          getShadowRoot: true,
        },
      },
    );
    jest.resetAllMocks();
  });
});
