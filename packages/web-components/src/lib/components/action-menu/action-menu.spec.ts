import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/dom';
import { PdsActionMenu } from './action-menu';
import createSnapshots from '../../../../test/utils/snapshots';
import '@testing-library/jest-dom';
// eslint-disable-next-line import/no-duplicates
import { PdsButton } from '../button/button';
// eslint-disable-next-line import/no-duplicates
import '../button/button';

initStoryshots({
  storyKindRegex: /Action menu/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('ActionMenu unit tests', () => {
  let element: PdsActionMenu;

  beforeEach(async () => {
    element = await fixture(`<pds-action-menu
    label="I want to..."
  >
    <pds-action-menu-item>Action 1</pds-action-menu-item>
    <pds-action-menu-item>Action 2</pds-action-menu-item>
    <pds-action-menu-item>Action 3</pds-action-menu-item>
    <pds-action-menu-item slot="footer">Action 4</pds-action-menu-item>
  </pds-action-menu>`);
  });

  it('is an instance of PdsActionMenu', () => {
    expect(element).toBeInstanceOf(PdsActionMenu);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      ignoredRules: ['list', 'listitem'],
    });
  });

  it('opens and closes the action menu list as expected when clicking the button', async () => {
    const buttonEl = element.shadowRoot?.querySelector(
      '.pds-c-action-menu__button',
    ) as PdsButton;

    // Verify that the menu list isn't visible before clicking the button
    const menu = element.shadowRoot?.querySelector('.pds-c-action-menu__list');
    expect(menu).not.toHaveAttribute('show-menu');
    expect(buttonEl).not.toHaveAttribute('isActive');

    buttonEl?.click();

    // Verify that the menu list is visible after clicking the button
    expect(menu).toHaveAttribute('show-menu');
    expect(buttonEl).toHaveAttribute('isActive');
    // Click the button again, expect the menu list to close
    buttonEl?.click();
    expect(menu).not.toHaveAttribute('show-menu');
    expect(buttonEl).not.toHaveAttribute('isActive');
  });

  it('closes the menu list on button click after the list is open', async () => {
    const menuButton = element.shadowRoot?.querySelector(
      '.pds-c-action-menu__button',
    ) as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the button to open action menu list
    await userEventWithoutDelay.click(menuButton);
    await waitFor(() => {}, {
      timeout: 1000,
    });
    // Click on button again to close the menu list

    await userEventWithoutDelay.click(menuButton);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-action-menu__button')
            ?.classList.contains('show-menu'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('closes the menu list as expected when clicking outside of the button after list is open', async () => {
    const menuButton = element.shadowRoot?.querySelector(
      '.pds-c-action-menu__button',
    ) as HTMLElement;

    const notMenuButton = element.shadowRoot?.querySelector(
      '.pds-c-action-menu',
    ) as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the button to open action menu list
    await userEventWithoutDelay.click(menuButton);
    await waitFor(() => {}, {
      timeout: 1000,
    });
    // Click somewhere else on the page, expect the list to close
    await userEventWithoutDelay.click(notMenuButton);
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('.pds-c-action-menu__button')
            ?.classList.contains('show-menu'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('hides the separator when hideSeparator is set to true and vice versa', async () => {
    // verify separator exists as hideSeparator is set to false by default
    const separator = element.shadowRoot?.querySelector(
      '.pds-c-action-menu__separator',
    ) as HTMLElement;

    expect(separator).toBeTruthy();

    // verify separator doesn't exist when hideSeparator is set to true
    const element1 = await fixture(
      `<pds-action-menu hideSeparator="true"
      ><pds-action-menu-item>Action 1</pds-action-menu-item>
      <pds-action-menu-item>Action 2</pds-action-menu-item>
      <pds-action-menu-item>Action 3</pds-action-menu-item>
      <pds-action-menu-item slot="footer">Action 4</pds-action-menu-item>
    </pds-action-menu>`,
    );
    const separator1 = element1.shadowRoot?.querySelector(
      '.pds-c-action-menu__separator',
    ) as HTMLElement;

    expect(separator1).toBeNull();
  });

  it('renders the correct variant if passed other than default', async () => {
    const buttonEl = element.shadowRoot?.querySelector(
      '.pds-c-action-menu__button',
    ) as PdsButton;

    expect(
      element.shadowRoot?.querySelector('pds-icon-more-horizontal'),
    ).toBeDefined();
    expect(buttonEl.variant).toEqual('icon');
    expect(buttonEl.size).toBe('sm');

    element.buttonVariant = 'default';
    element.size = 'default';
    element.buttonLabel = 'default button';

    await element.updateComplete;
    const iconSlot = element.shadowRoot?.querySelector(
      'slot[name=icon]',
    ) as HTMLElement;

    expect(iconSlot).toBeTruthy();
    expect(
      element.shadowRoot?.querySelector('pds-icon-more-horizontal'),
    ).toBeNull();
    expect(buttonEl.variant).toEqual('default');
    expect(buttonEl.size).toBe('default');
  });
});
