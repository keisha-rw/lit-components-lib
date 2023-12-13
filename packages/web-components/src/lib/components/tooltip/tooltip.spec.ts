import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { waitFor } from '@testing-library/dom';
import { PdsTooltip } from './tooltip';
import createSnapshots from '../../../../test/utils/snapshots';
import '@testing-library/jest-dom';

initStoryshots({
  storyKindRegex: /Tooltip/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Tooltip unit tests', () => {
  let element: PdsTooltip;

  beforeEach(async () => {
    element = await fixture(`<pds-tooltip variant="default"
    ><pds-button
    slot="trigger"
    variant="icon"
    ariaLabel="This button opens a tooltip"
  >
    <pds-icon-help-circle></pds-icon-help-circle
  ></pds-button>
    tooltip text</pds-tooltip
  >
  `);
  });

  it('is an instance of PdsTooltip', () => {
    expect(element).toBeInstanceOf(PdsTooltip);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('opens and closes the tooltip as expected on hover to the icon', async () => {
    const buttonEl = element.querySelector('pds-button') as HTMLElement;

    const element1 = (await fixture(
      `<pds-tooltip variant="subtle" placement="left"
      ><pds-button
      slot="trigger"
      variant="icon"
      ariaLabel="This button opens a tooltip"
    >
      <pds-icon-help-circle></pds-icon-help-circle
    ></pds-button>
      tooltip text</pds-tooltip
    >`,
    )) as PdsTooltip;

    // Verify that the tooltip isn't visible without hover to the button
    const tooltip = element.shadowRoot?.querySelector(
      '.pds-c-tooltip__tooltip',
    );
    expect(tooltip).not.toHaveAttribute('data-show');

    const newMouseEvent = new MouseEvent('mouseenter');
    buttonEl?.dispatchEvent(newMouseEvent);
    element1.tooltip.dispatchEvent(newMouseEvent);

    // Verify that the tooltip is visible on hover to the button
    expect(tooltip).toHaveAttribute('data-show');
    expect(element1.contentHasFocus).toBeTruthy();

    const newMouseEvent1 = new MouseEvent('mouseleave');
    element1.tooltip.dispatchEvent(newMouseEvent1);
    buttonEl?.dispatchEvent(newMouseEvent);
    buttonEl?.dispatchEvent(newMouseEvent1);

    // Remove focus from button again, expect the tooltip to close
    await waitFor(
      () => {
        expect(tooltip).not.toHaveAttribute('data-show');
      },
      {
        timeout: 300,
      },
    );
  });

  it('closes the tooltip as expected when focused on the button & escape key is pressed', async () => {
    const buttonEl = element.querySelector('pds-button') as HTMLElement;

    // Verify that the tooltip isn't visible without focus to the button
    const tooltip = element.shadowRoot?.querySelector(
      '.pds-c-tooltip__tooltip',
    );
    expect(tooltip).not.toHaveAttribute('data-show');

    const newFocusEvent = new FocusEvent('focus');
    buttonEl?.dispatchEvent(newFocusEvent);

    // Verify that the tooltip is visible on focus to the button
    expect(tooltip).toHaveAttribute('data-show');

    buttonEl.dispatchEvent(
      new KeyboardEvent('keydown', {
        code: 'Escape',
        key: 'Escape',
      }),
    );
    expect(tooltip).not.toHaveAttribute('data-show');
  });

  it('opens and closes the tooltip as expected on focus to the button', async () => {
    const buttonEl = element.querySelector('pds-button') as HTMLElement;

    // Verify that the tooltip isn't visible without focus to the button
    const tooltip = element.shadowRoot?.querySelector(
      '.pds-c-tooltip__tooltip',
    );
    expect(tooltip).not.toHaveAttribute('data-show');

    const newFocusEvent = new FocusEvent('focus');
    buttonEl?.dispatchEvent(newFocusEvent);

    // Verify that the tooltip is visible on focus to the button
    expect(tooltip).toHaveAttribute('data-show');

    const newFocusEvent1 = new FocusEvent('blur');
    buttonEl?.dispatchEvent(newFocusEvent1);

    // Remove focus from button again, expect the tooltip to close
    await waitFor(
      () => {
        expect(tooltip).not.toHaveAttribute('data-show');
      },
      {
        timeout: 300,
      },
    );
  });

  it('opens and closes the tooltip as expected when clicking the button', async () => {
    const buttonEl = element.querySelector('pds-button') as HTMLElement;

    // Verify that the tooltip isn't visible without focus to the button
    const tooltip = element.shadowRoot?.querySelector(
      '.pds-c-tooltip__tooltip',
    );
    expect(tooltip).not.toHaveAttribute('data-show');

    const newTouchEvent = new TouchEvent('touchstart');
    buttonEl?.dispatchEvent(newTouchEvent);

    // Verify that the tooltip is visible after clicking the button
    expect(tooltip).toHaveAttribute('data-show');

    // Click the button again, expect the tooltip to close
    const newTouchEvent1 = new TouchEvent('touchstart');
    buttonEl?.dispatchEvent(newTouchEvent1);
    expect(tooltip).not.toHaveAttribute('data-show');
  });

  it('renders expected tooltip when using subtle varaint with placement left', async () => {
    const element1 = await fixture(
      `<pds-tooltip variant="subtle" placement="left"
      ><pds-button
      slot="trigger"
      variant="icon"
      ariaLabel="This button opens a tooltip"
    >
      <pds-icon-help-circle></pds-icon-help-circle
    ></pds-button>
      tooltip text</pds-tooltip
    >`,
    );

    const buttonEl = element1.querySelector('pds-button') as HTMLElement;

    const newTouchEvent = new TouchEvent('touchstart');
    buttonEl?.dispatchEvent(newTouchEvent);

    expect(
      element1.outerHTML.replaceAll(/<!--\?lit\$\d*\$-->/g, ''),
    ).toMatchSnapshot();
  });
});
