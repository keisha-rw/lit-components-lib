import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { fireEvent } from '@testing-library/dom';
import { PdsAlert } from './alert';
import createSnapshots from '../../../../test/utils/snapshots';

jest.spyOn(console, 'warn').mockImplementation(() => {});

initStoryshots({
  storyKindRegex: /Alert/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Alert unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(
      `<pds-alert layoutContainerVariant='default' layoutContainerRemovePadding='all'/>`,
    );
  });

  it('is an instance of PdsAlert', () => {
    expect(element).toBeInstanceOf(PdsAlert);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('hides the dismissable alert if button is clicked', async () => {
    const configuredElement = (await fixture(
      '<pds-alert variant="dismissable-banner">This is the alert text</pds-alert>',
    )) as PdsAlert;

    const closeButton = configuredElement.shadowRoot?.querySelector(
      'pds-button',
    ) as HTMLElement;

    fireEvent(
      closeButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        composed: true,
      }),
    );

    expect(configuredElement.hidden).toBeTruthy();
  });

  it('warns if you use the hideDismissButton prop with an error alert', async () => {
    const originalConsoleWarn = console.warn;
    console.warn = jest.fn();
    await fixture(
      '<pds-alert variant="error" hideDismissButton>This is the alert text</pds-alert>',
    );

    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenCalledWith(
      'Error alert cannot be dismissible and will always render without a close button. Please remove the hideDismissButton property to remove this warning.',
      '<pds-alert variant="error" hidedismissbutton="">This is the alert text</pds-alert>',
    );

    console.warn = originalConsoleWarn;
  });

  it('returns correct icon', async () => {
    expect(element.shadowRoot?.querySelector('pds-icon-info')).toBeTruthy();

    const successElement = await fixture('<pds-alert variant="success" />');
    expect(
      successElement.shadowRoot?.querySelector('pds-icon-check'),
    ).toBeTruthy();

    const errorElement = await fixture('<pds-alert variant="error" />');
    expect(
      errorElement.shadowRoot?.querySelector('pds-icon-alert-circle'),
    ).toBeTruthy();

    const bannerElement = await fixture('<pds-alert variant="banner" />');
    expect(
      bannerElement.shadowRoot?.querySelector('pds-icon-alert-circle'),
    ).toBeTruthy();

    const dismissableBannerElement = await fixture(
      '<pds-alert variant="dismissable-banner" />',
    );
    expect(
      dismissableBannerElement.shadowRoot?.querySelector(
        'pds-icon-alert-circle',
      ),
    ).toBeTruthy();

    const warningElement = await fixture('<pds-alert variant="warning" />');
    expect(
      warningElement.shadowRoot?.querySelector('pds-icon-alert-triangle'),
    ).toBeTruthy();
  });

  it('returns the correct markup for banner with layout container', async () => {
    const configuredElement = await fixture(
      `<pds-alert layoutContainerVariant='default' layoutContainerRemovePadding: 'all' variant="banner">This is the alert text</pds-alert>`,
    );

    expect(
      configuredElement.shadowRoot?.querySelector(
        '.pds-c-alert--banner pds-layout-container',
      ),
    ).toBeTruthy();

    expect(
      configuredElement.shadowRoot?.querySelector('pds-button'),
    ).toBeTruthy();
  });

  it('returns the correct markup for an error alert with layout container', async () => {
    const configuredElement = await fixture(
      `<pds-alert layoutContainerVariant='default' layoutContainerRemovePadding='all' variant="error">This is the alert text</pds-alert>`,
    );

    expect(
      configuredElement.shadowRoot?.querySelector(
        'pds-layout-container .pds-c-alert--error',
      ),
    ).toBeTruthy();

    expect(
      configuredElement.shadowRoot?.querySelector('pds-button'),
    ).toBeFalsy();
  });

  it('returns the correct markup for a banner alert with layout container when the dismiss button is hidden', async () => {
    const configuredElement = await fixture(
      `<pds-alert hideDismissButton layoutContainerVariant='default' layoutContainerRemovePadding='all' variant="banner">This is the alert text</pds-alert>`,
    );

    expect(
      configuredElement.shadowRoot?.querySelector(
        '.pds-c-alert--banner pds-layout-container',
      ),
    ).toBeTruthy();

    expect(
      configuredElement.shadowRoot?.querySelector('pds-button'),
    ).toBeFalsy();
  });

  it('if language is Spanish, the aria-label should be in Spanish', async () => {
    const spanishBannerAlert = await fixture(
      `<pds-alert variant="dismissable-banner" lang="es"
        >This is the alert text</pds-alert
      >`,
    );
    const closeButton = spanishBannerAlert.shadowRoot?.querySelector(
      '.pds-c-alert__close-button',
    ) as HTMLElement;
    const label = closeButton.getAttribute('ariaLabel');
    expect(label).toBe('cerrar');
  });

  it('sets links in the alert to the correct attribute', async () => {
    const configuredBannerElement = await fixture(
      `<pds-alert variant="banner">This is the alert text. <pds-link>This is a link.</pds-link></pds-alert>`,
    );
    expect(
      configuredBannerElement
        .querySelector('pds-link')
        ?.getAttribute('variant'),
    ).toBe('emphasis-inverted');

    const configuredNonBannerElement = await fixture(
      `<pds-alert variant="success">This is the alert text. <pds-link>This is a link.</pds-link></pds-alert>`,
    );
    expect(
      configuredNonBannerElement
        .querySelector('pds-link')
        ?.getAttribute('variant'),
    ).toBe('emphasis');
  });
});
