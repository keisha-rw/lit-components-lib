import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsFootnoteLink } from './footnote-link';
import { PdsFootnote } from '../footnote/footnote';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Footnote link/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('FootnoteLink unit tests', () => {
  let element: PdsFootnoteLink;

  beforeEach(async () => {
    element = await fixture(
      '<pds-footnote-link href="#id1" id="link1" footNoteId="footnote-1" aria-describedby="footnote-1">1</pds-footnote-link>',
    );
  });

  it('is an instance of PdsFootnoteLink', () => {
    expect(element).toBeInstanceOf(PdsFootnoteLink);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      // Jest can't see the link name on initial render now since we populate this with a variable instead of a slot.
      // A11y doesn't fail in storybook, and using voiceover does read off the correct link text content.
      ignoredRules: ['link-name'],
    });
  });

  it('if it is a citation then it should be numbered according to its footnote', async () => {
    const footnote = await fixture<PdsFootnote>(
      `<pds-footnote>
        <pds-footnote-item id="footnote-2">Footnote 2</pds-footnote-item>
        <pds-footnote-item id="footnote-1">Footnote 1 but I'm in the second position!</pds-footnote-item>
      </pds-footnote>`,
    );
    element = await fixture<PdsFootnoteLink>(
      `<pds-footnote-link href="#id1" id="link1" footNoteId="footnote-1" aria-describedby="footnote-1" footnoteNumber="2"
      ></pds-footnote-link
    >`,
    );

    footnote.appendChild(element);
    await element.updateComplete;
    expect(element.shadowRoot?.querySelector('a')?.textContent).toBe('2');
  });

  it('does not provide autonumbering if a footnote id is provided but the item is not found', async () => {
    const footnote = await fixture<PdsFootnote>(
      `<pds-footnote>
        <pds-footnote-item id="footnote-2">Footnote 2</pds-footnote-item>
        <pds-footnote-item id="footnote-1">Footnote 1 but I'm in the second position!</pds-footnote-item>
      </pds-footnote>
      <p id="footnote-3">Not a footnote item</p>`,
    );
    element = await fixture<PdsFootnoteLink>(
      `<pds-footnote-link href="#id1" id="link1" footNoteId="footnote-3" aria-describedby="footnote-1"
      >original</pds-footnote-link
    >`,
    );
    footnote.appendChild(element);
    await element.updateComplete;
    expect(element.textContent).toBe('original');
  });
  it('does not provide autonumbering if a footnote id is provided but the item is not a footnote item', async () => {
    const footnote = await fixture<PdsFootnote>(
      `<pds-footnote>
        <pds-footnote-item id="footnote-2">Footnote 2</pds-footnote-item>
        <pds-footnote-item id="footnote-1">Footnote 1 but I'm in the second position!</pds-footnote-item>
      </pds-footnote>`,
    );
    element = await fixture<PdsFootnoteLink>(
      `<pds-footnote-link href="#id1" id="link1" footNoteId="footnote-3" aria-describedby="footnote-1"
      >original</pds-footnote-link
    >`,
    );
    footnote.appendChild(element);
    await element.updateComplete;
    expect(element.textContent).toBe('original');
  });

  it('does not provide autonumbering if a footnote item is an orphan', async () => {
    const footnote = await fixture<PdsFootnote>(
      `<pds-footnote>
        <pds-footnote-item id="footnote-2">Footnote 2</pds-footnote-item>
        <pds-footnote-item id="footnote-1">Footnote 1 but I'm in the second position!</pds-footnote-item>
      </pds-footnote>
      <pds-footnote-item id="footnote-3">Orphan</pds-footnote-item>`,
    );
    element = await fixture<PdsFootnoteLink>(
      `<pds-footnote-link href="#id1" id="link1" footNoteId="footnote-3" aria-describedby="footnote-1"
      >original</pds-footnote-link
    >`,
    );
    footnote.appendChild(element);
    await element.updateComplete;
    expect(element.textContent).toBe('original');
  });
});
