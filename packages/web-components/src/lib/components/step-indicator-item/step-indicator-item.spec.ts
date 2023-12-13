import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import '@testing-library/jest-dom';
import { assert, fixture } from '@open-wc/testing';
import { PdsStepIndicatorItem } from './step-indicator-item';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Step indicator item/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('StepIndicatorItem unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-step-indicator-item />');
  });

  it('is an instance of PdsStepIndicatorItem', () => {
    expect(element).toBeInstanceOf(PdsStepIndicatorItem);
  });

  it('renders each status and active', async () => {
    const completed = await fixture(
      '<pds-step-indicator-item status="completed" />',
    );
    const current = await fixture(
      '<pds-step-indicator-item status="current" />',
    );
    const incomplete = await fixture(
      '<pds-step-indicator-item status="incomplete" />',
    );
    const active = await fixture('<pds-step-indicator-item active />');
    expect(completed).toBeInstanceOf(PdsStepIndicatorItem);
    expect(current).toBeInstanceOf(PdsStepIndicatorItem);
    expect(incomplete).toBeInstanceOf(PdsStepIndicatorItem);
    expect(active).toBeInstanceOf(PdsStepIndicatorItem);
  });

  it('renders a link when there is a href', async () => {
    element = await fixture('<pds-step-indicator-item href="#" />');
    expect(element.shadowRoot?.querySelector('a')).toBeTruthy();
  });

  it('dispatches a custom click event when the link is clicked', async () => {
    element = await fixture(
      '<pds-step-indicator-item href="#">Step one</pds-step-indicator-item>',
    );
    const linkEl = element.shadowRoot?.querySelector('a');

    const handler = jest.fn();
    element.addEventListener('pds-step-indicator-item-click', handler);

    await linkEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('Step one');
    });
  });

  it('prevents default click if it has been prevented on pds-step-indicator-item-click', async () => {
    element = await fixture(
      '<pds-step-indicator-item href="#">Step one</pds-step-indicator-item>',
    );
    const linkEl = element.shadowRoot?.querySelector('a');

    const handler = (e: Event) => {
      e.preventDefault();
    };
    element.addEventListener('pds-step-indicator-item-click', handler);

    const clickEvent = new Event('click');
    clickEvent.preventDefault = jest.fn();

    await linkEl?.dispatchEvent(clickEvent);

    return Promise.resolve().then(() => {
      expect(clickEvent.preventDefault).toHaveBeenCalledTimes(1);
    });
  });

  it('renders Spanish aria label', async () => {
    element = await fixture(
      '<pds-step-indicator-item lang="es" href="#" status="completed">Step one</pds-step-indicator-item>',
    );
    const srOnly = element.shadowRoot?.querySelector('.pds-u-sr-only');
    expect(srOnly).toHaveTextContent('paso completo');
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      ignoredRules: ['aria-required-parent'],
    });
  });
});
