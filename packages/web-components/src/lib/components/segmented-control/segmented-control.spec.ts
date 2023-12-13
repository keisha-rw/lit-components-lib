import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, elementUpdated, fixture } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/dom';
import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer';
import { PdsSegmentedControl } from './segmented-control';
import createSnapshots from '../../../../test/utils/snapshots';
import { PdsSegmentedControlItem } from '../segmented-control-item/segmented-control-item';
import { PdsButton } from '../button/button';

initStoryshots({
  storyKindRegex: /Segmented control/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('SegmentedControl unit tests', () => {
  let element: PdsSegmentedControl;

  beforeEach(async () => {
    element = await fixture(
      `<pds-segmented-control>
      <pds-segmented-control-item isSegmentActive>first</pds-segmented-control-item>
      <pds-segmented-control-item>second</pds-segmented-control-item>
      <pds-segmented-control-item>Third</pds-segmented-control-item>  
      </pds-segmented-control>`,
    );
  });

  it('is an instance of PdsSegmentedControl', () => {
    expect(element).toBeInstanceOf(PdsSegmentedControl);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
  it('should set properties to segmented-control-item', async () => {
    element = (await fixture(
      `<pds-segmented-control disabled>
      <pds-segmented-control-item>First</pds-segmented-control-item>
      <pds-segmented-control-item>second</pds-segmented-control-item> 
      </pds-segmented-control>`,
    )) as PdsSegmentedControl;

    const segmentedItems = Array.from(
      element.querySelectorAll('pds-segmented-control-item'),
    ) as PdsSegmentedControlItem[];

    segmentedItems.forEach((item) => {
      expect(item.disabled).toBeTruthy();
      expect(item.size).toEqual('default');
      expect(item.isNarrowContainer).toBeFalsy();
    });

    element.updateSegments();
    expect(segmentedItems[0].isSegmentActive).toBeTruthy();
  });

  it('should manage the isSegmentActive prop value on click', async () => {
    const segmentedItems = Array.from(
      element.querySelectorAll('pds-segmented-control-item'),
    ) as PdsSegmentedControlItem[];

    element.updateSegments();

    await elementUpdated;

    expect(element.activeSegment).toEqual(segmentedItems[0]);
    expect(element.activeSegment.textContent).toEqual('first');

    segmentedItems[1].click();

    expect(segmentedItems[0].isSegmentActive).toBeFalsy();

    expect(element.activeSegment).toEqual(segmentedItems[1]);
    expect(element.activeSegment.textContent).toEqual('second');
  });

  it('should set correct active state to segment-control for narrow-container', async () => {
    element.isNarrowContainer = true;
    await element.updateComplete;

    const buttonEl = element.shadowRoot?.querySelector(
      'pds-button',
    ) as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });

    await userEventWithoutDelay.click(buttonEl);

    expect(element.isActive).toBeTruthy();
    expect((buttonEl as PdsButton).isActive).toBeTruthy();
    expect((buttonEl as PdsButton).getAttribute('ariaExpanded')).toBe('true');
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('div')
            ?.classList.contains('pds-is-active'),
        ).toBeTruthy();
      },
      {
        timeout: 1000,
      },
    );

    await userEventWithoutDelay.click(buttonEl);
    await waitFor(() => {}, {
      timeout: 1000,
    });
    expect(element.isActive).toBeFalsy();
    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('div')
            ?.classList.contains('pds-is-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('should close the menu if click outside segment-control', async () => {
    element.isNarrowContainer = true;
    element.isActive = true;
    await element.updateComplete;

    const panelContainerEl = element.shadowRoot?.querySelector(
      '.pds-c-segmented-control__segments-panel',
    ) as HTMLElement;

    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('div')
            ?.classList.contains('pds-is-active'),
        ).toBeTruthy();
      },
      {
        timeout: 1000,
      },
    );

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the button to open segments
    await userEventWithoutDelay.click(panelContainerEl);
    await waitFor(() => {}, {
      timeout: 1000,
    });
    expect(element.isActive).toBeFalsy();

    await waitFor(
      () => {
        expect(
          element.shadowRoot
            ?.querySelector('div')
            ?.classList.contains('pds-is-active'),
        ).toBeFalsy();
      },
      {
        timeout: 1000,
      },
    );
  });

  it('should set properties to pds-button', async () => {
    element.isNarrowContainer = true;
    element.isActive = true;
    element.size = 'sm';
    await element.updateComplete;

    const buttonEl = element.shadowRoot?.querySelector(
      'pds-button',
    ) as PdsButton;
    expect(buttonEl.size).toEqual('sm');
    expect(buttonEl.isActive).toBeTruthy();
  });

  it('handlePanelPopup should be called', async () => {
    const mockhandlePanelPopup = jest.spyOn(element, 'handlePanelPopUp');

    element.isNarrowContainer = true;
    await element.updateComplete;

    const buttonEl = element.shadowRoot?.querySelector(
      'pds-button',
    ) as HTMLElement;

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.click(buttonEl);

    expect(mockhandlePanelPopup).toHaveBeenCalled();

    mockhandlePanelPopup.mockRestore();
  });

  it('should determine if the container is narrow for segmented-control', async () => {
    const element1 = (await fixture(
      `<div>
      </div>`,
    )) as HTMLElement;
    const hostElement = element;

    element1.appendChild(hostElement);
    Object.defineProperty(hostElement.parentElement, 'clientWidth', {
      value: 300,
    });
    hostElement.controlWidth = 400;

    hostElement.getContainerSize();

    await hostElement.updateComplete;

    expect(hostElement.parentElement?.clientWidth).toBeLessThanOrEqual(
      hostElement.controlWidth,
    );

    expect(hostElement.isNarrowContainer).toBeTruthy();
  });

  it("sets ResizeObserver to polyfill if it doesn't exist", async () => {
    // @ts-expect-error
    window.ResizeObserver = null;
    element.resizeObserver.observe(element);
    expect(element.ResizeObserver).toBe(ResizeObserverPolyfill);
    window.ResizeObserver = ResizeObserver;
  });

  it('handleKeydown function with Esc key', async () => {
    element.isNarrowContainer = true;
    element.isActive = true;

    await element.updateComplete;

    const mockEvent = new KeyboardEvent('keyup', { key: 'Esc' });
    element.handleKeydown(mockEvent);
    expect(element.isActive).toBeFalsy();
  });
});
