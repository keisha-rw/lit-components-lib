import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsLink } from './link';

import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Link/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Link unit tests', () => {
  let element: PdsLink;

  beforeEach(async () => {
    element = await fixture(
      `<pds-link target="_blank" href="https://www.google.com"><span>This is a link</span></pds-link>`,
    );
  });

  it('is an instance of PdsLink', () => {
    expect(element).toBeInstanceOf(PdsLink);
  });

  it('dispatches a custom event on click and gets correct summary', async () => {
    const linkEl = element.shadowRoot?.querySelector('a');

    const handler = jest.fn();
    element.addEventListener('pds-link-click', handler);

    linkEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('This is a link');
    });
  });

  it('should preventDefault on the original event if the dispatched event is cancelled', async () => {
    const mockEvent = {
      preventDefault: jest.fn(),
    };
    element.addEventListener('pds-link-click', (e) => e.preventDefault());
    // @ts-ignore testing private method
    element.handleClick(mockEvent);

    expect(mockEvent.preventDefault).toBeCalled();
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('populates the icon-left slot when provided with a PDS icon element', async () => {
    // In this case, the snapshot renders object info for the custom element rather than the actual markup,
    // so we are testing instead that no console error displays (i.e. the slotted element is valid)
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    element = await fixture(
      '<pds-link><pds-icon-check slot="icon-left"></pds-icon-check></pds-link>',
    );

    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it('populates the icon-right slot when provided with a span element', async () => {
    element = await fixture(
      '<pds-link><span slot="icon-right"></span></pds-link>',
    );

    expect(element).toMatchSnapshot();
  });

  it('does not populate an icon slot if the element is neither a PDS icon nor a span', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    element = await fixture(
      '<pds-link><div slot="icon-left"> An icon would go here</div></pds-link>',
    );

    expect(element).toMatchSnapshot();
    expect(consoleError).toHaveBeenCalledTimes(1);
    consoleError.mockRestore();
  });

  it('populates the icon-left slot in link button when provided', async () => {
    element = await fixture(
      '<pds-link button><span slot="icon-left"> An icon would go here</span></pds-link>',
    );
    expect(element).toMatchSnapshot();
  });

  it('populates the icon-right slot in link button when provided', async () => {
    element = await fixture(
      '<pds-link button><span slot="icon-right"> An icon would go here</span></pds-link>',
    );
    expect(element).toMatchSnapshot();
  });

  it('Passes size down to the icon', async () => {
    element = await fixture(
      '<pds-link><pds-icon-check slot="icon-left"></pds-icon-check>Icon link</pds-link>',
    );

    const iconSlot = element.querySelector('pds-icon-check') as HTMLElement;
    expect(iconSlot.getAttribute('size')).toEqual('default');

    element = await fixture(
      '<pds-link size="sm"><pds-icon-check slot="icon-left"></pds-icon-check>Icon link</pds-link>',
    );

    const smIconSlot = element.querySelector('pds-icon-check') as HTMLElement;
    expect(smIconSlot.getAttribute('size')).toEqual('sm');

    // If the link is xl, expect the icon to be lg instead of xl. This is the only size that should be different
    element = await fixture(
      '<pds-link size="xl"><pds-icon-check slot="icon-left"></pds-icon-check>Icon link</pds-link>',
    );

    const xlIconSlot = element.querySelector('pds-icon-check') as HTMLElement;
    expect(xlIconSlot.getAttribute('size')).toEqual('lg');
  });
});
