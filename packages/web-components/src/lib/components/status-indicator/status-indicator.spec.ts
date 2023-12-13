import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsStatusIndicator } from './status-indicator';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Status indicator/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('StatusIndicator unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-status-indicator/>');
  });

  it('is an instance of PdsStatusIndicator', () => {
    expect(element).toBeInstanceOf(PdsStatusIndicator);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('Check if the variant has minus-icon when passed', async () => {
    const elementEl = await fixture(
      `<pds-status-indicator variant="negative" icon="minus"><span>Status</span></pds-status-indicator>`,
    );
    const statusIndicatorEl = elementEl.shadowRoot?.querySelector(
      '.pds-c-status-indicator__minus',
    ) as HTMLElement;

    expect(statusIndicatorEl).toBeTruthy();
  });

  it('Check if the variant has alert-icon when passed', async () => {
    const elementEl = await fixture(
      `<pds-status-indicator variant="negative" icon="alert"><span>Status</span></pds-status-indicator>`,
    );
    const statusIndicatorEl = elementEl.shadowRoot?.querySelector(
      '.pds-c-status-indicator__alert',
    ) as HTMLElement;

    expect(statusIndicatorEl).toBeTruthy();
  });

  it('Check if the variant has more-horizontal-icon when passed', async () => {
    const elementEl = await fixture(
      `<pds-status-indicator variant="neutral" icon="moreHorizontal"><span>Status</span></pds-status-indicator>`,
    );
    const statusIndicatorEl = elementEl.shadowRoot?.querySelector(
      '.pds-c-status-indicator__more-horizontal',
    ) as HTMLElement;

    expect(statusIndicatorEl).toBeTruthy();
  });

  it('Check if the variant has clock-icon when passed', async () => {
    const elementEl = await fixture(
      `<pds-status-indicator variant="neutral" icon="clock"><span>Status</span></pds-status-indicator>`,
    );
    const statusIndicatorEl = elementEl.shadowRoot?.querySelector(
      '.pds-c-status-indicator__clock',
    ) as HTMLElement;

    expect(statusIndicatorEl).toBeTruthy();
  });

  it('Check if the variant has x-icon when passed', async () => {
    const elementEl = await fixture(
      `<pds-status-indicator variant="negative" icon="x"><span>Status</span></pds-status-indicator>`,
    );
    const statusIndicatorEl = elementEl.shadowRoot?.querySelector(
      '.pds-c-status-indicator__x',
    ) as HTMLElement;

    expect(statusIndicatorEl).toBeTruthy();
  });

  it('Check if the variant has check-icon when passed', async () => {
    const elementEl = await fixture(
      `<pds-status-indicator variant="default" icon="check"><span>Status</span></pds-status-indicator>`,
    );
    const statusIndicatorEl = elementEl.shadowRoot?.querySelector(
      '.pds-c-status-indicator__check',
    ) as HTMLElement;

    expect(statusIndicatorEl).toBeTruthy();
  });
});
