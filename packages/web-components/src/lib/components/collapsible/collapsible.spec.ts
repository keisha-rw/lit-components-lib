import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, expect, fixture } from '@open-wc/testing';
import { PdsCollapsible } from './collapsible';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Collapsible/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Collapsible unit tests', () => {
  let element: PdsCollapsible;

  beforeEach(async () => {
    element =
      await fixture(`<pds-collapsible><span slot="summary-title">What is a 1099 tax form?</span>Form 1099 is a
      series of forms described by the Internal Revenue Service (IRS) as
      “information returns”, used to report income other than a regular salary.
    </pds-collapsible>`);
  });

  afterEach(() => {
    // Clean up the animation
    // @ts-expect-error Silly TS, the animation is set by now
    element.animation?.onfinish();

    Object.defineProperty(element, 'animation', Object.create(null));
  });

  it('is an instance of PdsCollapsible', () => {
    expect(element).to.be.instanceOf(PdsCollapsible);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('dispatches a custom event on open and gets correct summary', async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
      })),
    });
    const summaryEl = element.shadowRoot?.querySelector('summary');

    const handler = jest.fn();
    element.addEventListener('pds-collapsible-open', handler);

    summaryEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).equal(
        'What is a 1099 tax form?',
      );
    });
  });

  it('dispatches a custom event on open with empty slot and gets undefined summary', async () => {
    element = await fixture(`<pds-collapsible>Form 1099 is a
    series of forms described by the Internal Revenue Service (IRS) as
    “information returns”, used to report income other than a regular salary.
  </pds-collapsible>`);
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
      })),
    });
    const summaryEl = element.shadowRoot?.querySelector('summary');

    const handler = jest.fn();
    element.addEventListener('pds-collapsible-open', handler);

    summaryEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).equal(undefined);
    });
  });

  it('opens without animation', async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
      })),
    });
    const summaryEl = element.shadowRoot?.querySelector('summary');
    const detailsEl = element.shadowRoot?.querySelector('details');
    await summaryEl?.dispatchEvent(new Event('click'));
    assert.isTrue(detailsEl?.open);
  });

  it('opens with animation', async () => {
    jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: any) => {
        cb(0);
        return 0;
      });
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
      })),
    });
    const detailsEl = element.shadowRoot?.querySelector('details');
    Object.defineProperty(detailsEl, 'animate', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        cancel: () => {},
        onfinish: () => {},
        oncancel: () => {},
      })),
    });
    const summaryEl = element.shadowRoot?.querySelector('summary');
    await summaryEl?.dispatchEvent(new Event('click'));
    assert.isTrue(detailsEl?.open);
  });

  it('dispatches a custom event on close and gets correct summary', async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
      })),
    });
    const summaryEl = element.shadowRoot?.querySelector('summary');

    const handler = jest.fn();
    element.addEventListener('pds-collapsible-close', handler);

    summaryEl?.dispatchEvent(new Event('click'));
    await summaryEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).equal(
        'What is a 1099 tax form?',
      );
    });
  });

  it('dispatches a custom event on close with empty slot and gets undefined summary', async () => {
    element = await fixture(`<pds-collapsible>Form 1099 is a
    series of forms described by the Internal Revenue Service (IRS) as
    “information returns”, used to report income other than a regular salary.
  </pds-collapsible>`);
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
      })),
    });
    const summaryEl = element.shadowRoot?.querySelector('summary');

    const handler = jest.fn();
    element.addEventListener('pds-collapsible-close', handler);

    summaryEl?.dispatchEvent(new Event('click'));
    await summaryEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).equal(undefined);
    });
  });

  it('closes without animation', async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
      })),
    });
    const summaryEl = element.shadowRoot?.querySelector('summary');
    const detailsEl = element.shadowRoot?.querySelector('details');
    await summaryEl?.dispatchEvent(new Event('click'));
    await summaryEl?.dispatchEvent(new Event('click'));
    assert.isFalse(detailsEl?.open);
  });

  it('closes with animation', async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
      })),
    });

    const detailsEl = element.shadowRoot?.querySelector('details');
    const summaryEl = element.shadowRoot?.querySelector('summary');
    Object.defineProperty(detailsEl, 'animate', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        cancel: () => {},
        onfinish: () => {},
        oncancel: () => {},
      })),
    });
    Object.defineProperty(element, 'animation', {
      writable: true,
      value: {
        cancel: () => {},
        onfinish: () => {},
        oncancel: () => {},
      },
    });
    await summaryEl?.dispatchEvent(new Event('click'));
    await summaryEl?.dispatchEvent(new Event('click'));
    assert.isFalse(detailsEl?.open);
  });

  it('appropriate style properties are setup after animation is finished', async () => {
    const detailsEl = element.shadowRoot?.querySelector('details');
    // Dont call this directly in normal circumstances, we have mocked it as we have dont have real DOM and to increase overall coverage
    await element.onAnimationFinish(true);
    expect(detailsEl?.style.height).to.be.equal('');
    expect(detailsEl?.style.overflow).to.be.equal('');
  });
});
