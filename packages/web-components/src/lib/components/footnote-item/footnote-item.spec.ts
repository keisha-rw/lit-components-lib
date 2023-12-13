import { assert, fixture, html } from '@open-wc/testing';
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { PdsFootnoteItem } from './footnote-item';
import '../link/link';

describe('FootnoteItem unit tests', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await fixture(
      `<pds-footnote-item id="id1"> </pds-footnote-item>`,
    );
  });

  it('is an instance of PdsFootnoteItem', () => {
    expect(element).toBeInstanceOf(PdsFootnoteItem);
  });

  it('console.error should be called when Id is duplicate or not not passed', async () => {
    const consoleWarn = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    element = await fixture('<pds-footnote-item></pds-footnote-item>');

    expect(consoleWarn).toBeCalledTimes(1);

    element = await fixture(
      '<pds-footnote-item id="test" footnoteId="test"></pds-footnote-item>',
    );

    expect(consoleError).toBeCalledTimes(1);
  });

  it('When we click the link of the pds-footnote-link then it gives focus to the footnote item', async () => {
    element = (await fixture(
      html`<pds-text-passage>
        <pds-footnote-link
          href="#footnote"
          id="superscript"
        ></pds-footnote-link>
        <pds-footnote
          ><pds-footnote-item
            ariaLabel="back to content"
            id="footnote"
            href="#superscript"
            >This is footnote text.</pds-footnote-item
          ></pds-footnote
        >
      </pds-text-passage>`,
    )) as HTMLElement;

    const footnote = document.querySelector('pds-footnote-item') as HTMLElement;
    const backLinkEl = footnote?.shadowRoot
      ?.querySelector('.pds-c-footnote-item--backlink')
      ?.shadowRoot?.querySelector('a') as HTMLElement;
    const pdsFootnoteLink = document.querySelector(
      '#superscript',
    ) as HTMLElement;

    footnote.setAttribute('href', '#superscript');
    const userEventWithoutDelay = userEvent.setup({ delay: null });
    await userEventWithoutDelay.click(backLinkEl);
    await waitFor(
      () => {
        expect(document.activeElement?.getAttribute('href')).toContain(
          pdsFootnoteLink.id,
        );
      },
      {
        timeout: 1000,
      },
    );
  });

  it('is accessible, ignores listitem needs list wrapper test', async () => {
    const elementWithWrapper = await fixture(
      '<pds-footnote><pds-footnote-item id="footnote"></pds-footnote-item></pds-footnote>',
    );

    await assert.isAccessible(elementWithWrapper, {
      ignoredRules: ['aria-required-parent'],
    });
  });
});
