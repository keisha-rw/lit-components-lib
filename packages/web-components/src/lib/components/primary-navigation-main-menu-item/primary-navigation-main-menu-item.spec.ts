import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/dom';
import { PdsPrimaryNavigationMainMenuItem } from './primary-navigation-main-menu-item';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Primary navigation main menu item/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('PdsPrimaryNavigationMainMenuItem unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element =
      await fixture(`<pds-primary-navigation-main-menu-item dropdown text="Dropdown">
    <pds-list size="sm" spacing="sm">
      <pds-list-item
        ><pds-primary-navigation-dropdown-link arrow href="#"
          >This is a link</pds-primary-navigation-dropdown-link
        ></pds-list-item
      >
      <pds-list-item
        ><pds-primary-navigation-dropdown-link arrow href="#"
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
    </pds-list></pds-primary-navigation-main-menu-item>`);
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
            ?.querySelector('li')
            ?.classList.contains('pds-is-active'),
        ).toBeTruthy();
      },
      {
        timeout: 1000,
      },
    );
    // Change responsiveViewportSize to take different code branch
    (element as PdsPrimaryNavigationMainMenuItem).responsiveViewportSize = 'xl';
    await (element as PdsPrimaryNavigationMainMenuItem).updateComplete;

    // Click somewhere else on the page, expect the panel to close
    await userEventWithoutDelay.click(outsideElement);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('li')
            ?.classList.contains('pds-is-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('closes when you click on the dropdown twice ', async () => {
    const linkEl = element.shadowRoot?.querySelector('button') as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the dropdown, expect the panel to be open
    await userEventWithoutDelay.click(linkEl);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('li')
            ?.classList.contains('pds-is-active'),
        ).toBeTruthy();
      },
      {
        timeout: 1000,
      },
    );
    // Click the dropdown again, expect the panel to close
    await userEventWithoutDelay.click(linkEl);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('li')
            ?.classList.contains('pds-is-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('closes the open dropdown when you click on another dropdown ', async () => {
    const twoDropdownEl = await fixture(
      `<span><pds-primary-navigation-main-menu-item dropdown class="test-one" text="Dropdown">
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
      </pds-list></pds-primary-navigation-main-menu-item><pds-primary-navigation-main-menu-item dropdown class="test-two" text="Dropdown 2">
      <pds-list size="sm" spacing="sm">
        <pds-list-item
          ><pds-primary-navigation-dropdown-link arrow href="#"
            >This is a link 2</pds-primary-navigation-dropdown-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-primary-navigation-dropdown-link arrow href="#"
            >This is a link 2</pds-primary-navigation-dropdown-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-primary-navigation-dropdown-link href="#"
            >This is a link 2</pds-primary-navigation-dropdown-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-primary-navigation-dropdown-link href="#"
            >This is a link 2</pds-primary-navigation-dropdown-link
          ></pds-list-item
        >
      </pds-list></pds-primary-navigation-main-menu-item></span>`,
    );

    const dropdownOneEl = twoDropdownEl
      .querySelector('.test-one')
      ?.shadowRoot?.querySelector('button') as HTMLElement;

    const dropdownTwoEl = twoDropdownEl
      .querySelector('.test-two')
      ?.shadowRoot?.querySelector('button') as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the first dropdown, expect the panel to be open
    await userEventWithoutDelay.click(dropdownOneEl);
    await waitFor(
      () => {
        expect(
          twoDropdownEl
            .querySelector('.test-one')
            ?.shadowRoot?.querySelector('li')
            ?.classList.contains('pds-is-active'),
        ).toBeTruthy();
        expect(
          twoDropdownEl
            .querySelector('.test-two')
            ?.shadowRoot?.querySelector('li')
            ?.classList.contains('pds-is-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
    // Click the second dropdown, expect the first dropdown to close and second to open
    await userEventWithoutDelay.click(dropdownTwoEl);
    await waitFor(
      () => {
        expect(
          twoDropdownEl
            .querySelector('.test-two')
            ?.shadowRoot?.querySelector('li')
            ?.classList.contains('pds-is-active'),
        ).toBeTruthy();
        expect(
          twoDropdownEl
            .querySelector('.test-one')
            ?.shadowRoot?.querySelector('li')
            ?.classList.contains('pds-is-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('dispatches a custom event on dropdown click and gets correct summary', async () => {
    const linkEl = element.shadowRoot?.querySelector('button');

    const handler = jest.fn();
    element.addEventListener(
      'pds-primary-navigation-main-menu-dropdown-open',
      handler,
    );

    linkEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('Dropdown');
    });
  });

  it('dispatches a custom event on link click and gets correct summary', async () => {
    element = await fixture(`<pds-primary-navigation-main-menu-item
      href="#"
      class="pds-c-primary-navigation__primary-navigation-main-menu-item"
      text="Link"
      arrow
      divider
    ></pds-primary-navigation-main-menu-item>`);
    const linkEl = element.shadowRoot?.querySelector('a');

    const iconMatch = linkEl?.innerHTML.match(
      /<pds-icon-arrow-right size="sm"><\/pds-icon-arrow-right>/,
    );
    expect(iconMatch?.length ? iconMatch[0] : '').toEqual(
      '<pds-icon-arrow-right size="sm"></pds-icon-arrow-right>',
    );

    const handler = jest.fn();
    element.addEventListener(
      'pds-primary-navigation-main-menu-link-click',
      handler,
    );

    linkEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('Link');
    });
  });

  it('returns an empty string if it is a link with no arrow on desktop', async () => {
    element = await fixture(`<pds-primary-navigation-main-menu-item
      href="#"
      class="pds-c-primary-navigation__primary-navigation-main-menu-item"
      text="Link"
      divider
    ></pds-primary-navigation-main-menu-item>`);
    const arrowIcon = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation-main-menu-item__arrow',
    );
    expect(arrowIcon).toBeNull();
  });

  it('checks to see the mobile arrow is hidden for link on desktop ', async () => {
    element = await fixture(`<pds-primary-navigation-main-menu-item
      href="#"
      class="pds-c-primary-navigation__primary-navigation-main-menu-item"
      text="Link"
      divider
    ></pds-primary-navigation-main-menu-item>`);
    const mobileArrowIcon = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation-main-menu-item__arrow--mobile',
    ) as HTMLElement;
    const mobileArrowIconStyles = getComputedStyle(mobileArrowIcon);
    expect(mobileArrowIconStyles.display).toBe('');
  });

  it('is an instance of PdsPrimaryNavigationMainMenuItem', () => {
    expect(element).toBeInstanceOf(PdsPrimaryNavigationMainMenuItem);
  });

  it('is an instance of PdsPrimaryNavigationMainMenuItem with megamenu passed in', async () => {
    element = await fixture(`<pds-primary-navigation-main-menu-item
      class="pds-c-primary-navigation__primary-navigation-main-menu-item"
      text="Megamenu"
      megamenu
    >
      <placeholder-element>Megamenu content</placeholder-element>
    </pds-primary-navigation-main-menu-item>`);

    expect(element).toBeInstanceOf(PdsPrimaryNavigationMainMenuItem);
  });

  it('is an instance of PdsPrimaryNavigationMainMenuItem with nothing passed in', async () => {
    element = await fixture(`<pds-primary-navigation-main-menu-item />`);

    expect(element).toBeInstanceOf(PdsPrimaryNavigationMainMenuItem);
  });

  it('handleKeydown function with Escape key', async () => {
    const component = document.createElement(
      'pds-primary-navigation-main-menu-item',
    ) as any;
    component.isActive = true;
    const dispatchSpy = jest.spyOn(component, 'dispatchEvent');
    const mockEvent = new KeyboardEvent('keyup', { key: 'Escape' });
    component.handleKeydown(mockEvent);
    expect(component.isActive).toBeFalsy();
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });

  it('handleKeydown function with Esc key', async () => {
    const component = document.createElement(
      'pds-primary-navigation-main-menu-item',
    ) as any;
    component.isActive = true;
    const dispatchSpy = jest.spyOn(component, 'dispatchEvent');
    const mockEvent = new KeyboardEvent('keyup', { key: 'Esc' });
    component.handleKeydown(mockEvent);
    expect(component.isActive).toBeFalsy();
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      ignoredRules: ['aria-required-parent'],
    });
  });
});
