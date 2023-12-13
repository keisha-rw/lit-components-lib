import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { mockIntersectionObserver } from 'jsdom-testing-mocks';
import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer';
import { PdsTable } from './table';
import '../link/link';
import createSnapshots from '../../../../test/utils/snapshots';

const mockIntersectionObserverObj = mockIntersectionObserver();

initStoryshots({
  storyKindRegex: /Table/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Table unit tests', () => {
  let element: PdsTable;

  beforeEach(async () => {
    element = await fixture(
      `<pds-table>
        <table>
          <thead>
            <tr>
              <th><span>row 1 cell 1</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>row 2 cell 1</span></td>
            </tr>
          </tbody>
        </table>
      </pds-table>`,
    );
  });

  it('is an instance of PdsTable', () => {
    expect(element).toBeInstanceOf(PdsTable);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('renders table as a direct child', async () => {
    element = await fixture(
      `<pds-table>
        <table>
          <thead>
            <tr>
              <th><span>row 1 cell 1</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>row 2 cell 1</span></td>
            </tr>
          </tbody>
        </table>
      </pds-table>`,
    );
    expect(
      element.outerHTML.replaceAll(/<!--\?lit\$\d*\$-->/g, ''),
    ).toMatchSnapshot();
  });

  it('renders table as a nested child', async () => {
    element = await fixture(
      `<pds-table>
        <div>
          <span>
            <table>
              <thead>
                <tr>
                  <th><span>row 1 cell 1</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span>row 2 cell 1</span></td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
      </pds-table>`,
    );
    expect(
      element.outerHTML.replaceAll(/<!--\?lit\$\d*\$-->/g, ''),
    ).toMatchSnapshot();
  });

  it('has a style tag put into the dom', async () => {
    element = await fixture(
      `<pds-table>
        <div>
          <span>
            <table>
              <thead>
                <tr>
                  <th><span>row 1 cell 1</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span>row 2 cell 1</span></td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
      </pds-table>`,
    );
    const styles = document.querySelector('#pds-table-styles');
    expect(styles).not.toBeNull();
  });

  it('adds the remove border class when removeBorder is true', async () => {
    element = await fixture(
      `<pds-table removeBorder>
        <div>
          <span>
            <table>
              <thead>
                <tr>
                  <th><span>row 1 cell 1</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span>row 2 cell 1</span></td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
      </pds-table>`,
    );
    expect(
      element.innerHTML.replaceAll(/<!--\?lit\$\d*\$-->/g, ''),
    ).toMatchSnapshot();
  });

  it('renders a table with an expandable row', async () => {
    element = await fixture(
      `<pds-table>
    <table>
      <thead>
        <tr>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
        </tr>
      </thead>
      <tbody>
        <tr class="pds-c-table__expandable-row">
          <td>
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">link</a></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">link</a></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr class="pds-c-table__expandable-row">
          <td>
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">link</a></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td><span>Footer</span></td>
          <td><span>Footer</span></td>
        </tr>
      </tfoot>
    </table>
  </pds-table>`,
    );
    const expandableRow = element.querySelector('.pds-c-table__expandable-row');
    const expandableRowTrigger = expandableRow?.querySelector('button');
    expect(expandableRowTrigger).not.toBeNull();
    expect(expandableRowTrigger?.getAttribute('aria-expanded')).toBe('false');
    await expandableRowTrigger?.click();
    //  expect that the expandable row has an aria-expanded of true
    expect(expandableRowTrigger?.getAttribute('aria-expanded')).toBe('true');
    await expandableRowTrigger?.click();
    expect(expandableRowTrigger?.getAttribute('aria-expanded')).toBe('false');
  });

  it('renders a table with an expandable row when window.crypto is undefined', async () => {
    const originalWindowCrypto = window.crypto;
    // @ts-expect-error This is a test so we don't care that null is not type Crypto
    window.crypto = null;
    element = await fixture(
      `<pds-table>
    <table>
      <thead>
        <tr>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
        </tr>
      </thead>
      <tbody>
        <tr class="pds-c-table__expandable-row">
          <td>
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">link</a></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">link</a></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr class="pds-c-table__expandable-row">
          <td>
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">link</a></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td><span>Footer</span></td>
          <td><span>Footer</span></td>
        </tr>
      </tfoot>
    </table>
  </pds-table>`,
    );
    expect(
      element.innerHTML.replaceAll(/<!--\?lit\$\d*\$-->/g, ''),
    ).toMatchSnapshot();
    window.crypto = originalWindowCrypto;
  });

  it('renders a table with an expandable row when window.crypto.randomUUID is undefined', async () => {
    const originalWindowCrypto = window.crypto;
    // @ts-expect-error This is a test so we don't care that null is not type Crypto
    window.crypto.randomUUID = null;
    element = await fixture(
      `<pds-table>
    <table>
      <thead>
        <tr>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
        </tr>
      </thead>
      <tbody>
        <tr class="pds-c-table__expandable-row">
          <td>
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">link</a></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">link</a></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr class="pds-c-table__expandable-row">
          <td>
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">link</a></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td><span>Footer</span></td>
          <td><span>Footer</span></td>
        </tr>
      </tfoot>
    </table>
  </pds-table>`,
    );
    expect(
      element.innerHTML.replaceAll(/<!--\?lit\$\d*\$-->/g, ''),
    ).toMatchSnapshot();
    window.crypto = originalWindowCrypto;
  });

  it('renders a table with an expandable row without tbody', async () => {
    element = await fixture(
      `<pds-table>
    <table>
      <thead>
        <tr>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
        </tr>
      </thead>
      <tbody>
        <tr class="pds-c-table__expandable-row">
          <td>
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">link</a></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">link</a></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
              </table>
            </div>
          </td>
        </tr>
        <tr class="pds-c-table__expandable-row">
          <td>
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">link</a></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td><span>Footer</span></td>
          <td><span>Footer</span></td>
        </tr>
      </tfoot>
    </table>
  </pds-table>`,
    );
    const expandableRow = element.querySelector('.pds-c-table__expandable-row');
    const expandableRowTrigger = expandableRow?.querySelector('button');
    expect(expandableRowTrigger).not.toBeNull();
    expect(expandableRowTrigger?.getAttribute('aria-expanded')).toBe('false');
    await expandableRowTrigger?.click();
    //  expect that the expandable row has an aria-expanded of true
    expect(expandableRowTrigger?.getAttribute('aria-expanded')).toBe('true');
    await expandableRowTrigger?.click();
    expect(expandableRowTrigger?.getAttribute('aria-expanded')).toBe('false');
  });

  it('re-applies default classes and expandable classes when a change is made', async () => {
    element = await fixture(
      `<pds-table>
    <table>
      <thead>
        <tr>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
        </tr>
      </thead>
      <tbody>
        <tr class="pds-c-table__expandable-row">
          <td>
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody id="body-with-row-removed">
                  <tr id="remove-me">
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr class="pds-c-table__expandable-row">
          <td>
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td><span>Footer</span></td>
          <td><span>Footer</span></td>
        </tr>
      </tfoot>
    </table>
  </pds-table>`,
    );
    // Remove and re-add a row to the table
    const rowToRemove =
      element.querySelector('#remove-me') || document.createElement('div');
    rowToRemove?.remove();
    const tBodyWithRowRemoved = element.querySelector('#body-with-row-removed');
    tBodyWithRowRemoved?.append(rowToRemove);

    expect(
      element.innerHTML.replaceAll(/<!--\?lit\$\d*\$-->/g, ''),
    ).toMatchSnapshot();
  });

  it('applies the correct classes when the table is scrollable', async () => {
    element = await fixture(`<pds-table
      style="width: 200px; display: block"
    >
      <table>
        <thead>
          <tr>
            <th><span>Header</span></th>
            <th><span>Header</span></th>
            <th><span>Header</span></th>
            <th><span>Header</span></th>
            <th><span>Header</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
          <tr>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
            <td><span>Cell Body</span></td>
          </tr>
        </tbody>
      </table>
    </pds-table>`);
    const wrapper = element.shadowRoot?.querySelector('.pds-c-table__wrapper');

    if (wrapper) {
      wrapper.scrollLeft = 10;
      wrapper.scrollTop = 10;
      wrapper.dispatchEvent(new Event('scroll'));
      await element.updateComplete;
      expect(
        element.classList.contains('pds-c-table--can-be-scrolled-left'),
      ).toBe(true);
      expect(
        element.classList.contains('pds-c-table--can-be-scrolled-up'),
      ).toBe(true);
    }
  });

  it('removes the scroll left class when wrapper.scrollLeft = 0', async () => {
    element = await fixture(
      `<pds-table>
        <table>
          <thead>
            <tr>
              <th><span>row 1 cell 1</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>row 2 cell 1</span></td>
            </tr>
          </tbody>
        </table>
      </pds-table>`,
    );
    // Set scrollLeft class on the element
    element.classList.add('pds-c-table--can-be-scrolled-left');
    const { wrapper } = element;
    // Set scrollLeft to 0
    if (wrapper) {
      wrapper.scrollLeft = 0;
    }
    element.applyScrollClasses();

    // Verify that the class has been removed
    expect(
      element.classList.contains('pds-c-table--can-be-scrolled-left'),
    ).toStrictEqual(false);
  });

  it('removes the scroll up class when wrapper.scrollTop = 0', async () => {
    element = await fixture(
      `<pds-table>
        <table>
          <thead>
            <tr>
              <th><span>row 1 cell 1</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>row 2 cell 1</span></td>
            </tr>
          </tbody>
        </table>
      </pds-table>`,
    );
    // Set scrollLeft class on the element
    element.classList.add('pds-c-table--can-be-scrolled-up');
    const wrapper = element.shadowRoot?.querySelector(
      '.pds-c-table__wrapper',
    ) as HTMLElement;
    // Set scrollTop to 0
    if (wrapper) {
      wrapper.scrollTop = 0;
    }
    element.applyScrollClasses();

    // Verify that the class has been removed
    expect(
      element.classList.contains('pds-c-table--can-be-scrolled-up'),
    ).toStrictEqual(false);
  });

  it('calls applyClasses and prepareExpandableRows when a change event is fired on the wrapper element', async () => {
    element = await fixture(
      `<pds-table>
      <table>
      <thead>
      <tr>
      <th><span>row 1 cell 1</span></th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><span>row 2 cell 1</span></td>
      </tr>
      </tbody>
      </table>
      </pds-table>`,
    );
    jest.spyOn(element, 'applyClasses').mockReturnValue();
    jest.spyOn(element, 'prepareExpandableRows').mockReturnValue();
    const { wrapper } = element;
    // Fire the change event
    if (wrapper) {
      wrapper.dispatchEvent(new Event('change'));
    }

    // Verify that applyClasses and prepareExpandableRows have been called
    expect(element.applyClasses).toHaveBeenCalledTimes(1);
    expect(element.prepareExpandableRows).toHaveBeenCalledTimes(1);

    jest.clearAllMocks();
  });

  it('removes the collapsible classes when a pds-table-expand-all event is fired on the wrapper element', async () => {
    element = await fixture(
      `<pds-table>
      <table>
      <thead>
        <tr>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
        </tr>
      </thead>
      <tbody>
        <tr class="pds-c-table__expandable-row">
          <td colspan="5">
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr class="pds-c-table__expandable-row">
          <td colspan="5">
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
      </pds-table>`,
    );
    const { wrapper } = element;

    // Fire the pds-table-expand-all event
    if (wrapper) {
      wrapper.dispatchEvent(new Event('pds-table-expand-all'));
    }

    const collapsibleRegions = Array.from(
      element.querySelectorAll('.pds-c-table__expandable-row'),
    ) as HTMLElement[];

    collapsibleRegions.forEach((region: HTMLElement) => {
      const regionWrapper = region.querySelector(
        '.pds-c-table__expandable-row-wrapper',
      ) as HTMLElement;
      expect(regionWrapper.classList).not.toContain(
        'pds-c-table__expandable-row--is-collapsed',
      );
    });
  });

  it('adds the collapsible classes when a pds-table-collapse-all event is fired on the wrapper element', async () => {
    element = await fixture(
      `<pds-table>
      <table>
      <thead>
        <tr>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
        </tr>
      </thead>
      <tbody>
        <tr class="pds-c-table__expandable-row">
          <td colspan="5">
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr class="pds-c-table__expandable-row">
          <td colspan="5">
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
      </pds-table>`,
    );
    const { wrapper } = element;

    // Fire the pds-table-expand-all event
    if (wrapper) {
      wrapper.dispatchEvent(new Event('pds-table-collapse-all'));
    }

    const collapsibleRegions = Array.from(
      element.querySelectorAll('.pds-c-table__expandable-row'),
    ) as HTMLElement[];

    collapsibleRegions.forEach((region: HTMLElement) => {
      const regionWrapper = region.querySelector(
        '.pds-c-table__expandable-row-wrapper',
      ) as HTMLElement;
      expect(regionWrapper.classList).toContain(
        'pds-c-table__expandable-row--is-collapsed',
      );
    });
  });

  it('renders the with the rows expanded when expandAllOnLoad is true', async () => {
    element = await fixture(
      `<pds-table expandAllOnLoad>
      <table>
      <thead>
        <tr>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
        </tr>
      </thead>
      <tbody>
        <tr class="pds-c-table__expandable-row">
          <td colspan="5">
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">tada</a></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><pds-link href="https://www.google.com">This is a WC</pds-link></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr class="pds-c-table__expandable-row">
          <td colspan="5">
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
      </pds-table>`,
    );

    expect(
      element.outerHTML.replaceAll(/<!--\?lit\$\d*\$-->/g, ''),
    ).toMatchSnapshot();
  });

  it('renders the with the rows collapsed when expandAllOnLoad is false', async () => {
    element = await fixture(
      `<pds-table>
      <table>
      <thead>
        <tr>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
          <th><span>Header</span></th>
        </tr>
      </thead>
      <tbody>
        <tr class="pds-c-table__expandable-row">
          <td colspan="5">
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><a href="https://www.google.com">tada</a></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><pds-link href="https://www.google.com">This is a WC</pds-link></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr class="pds-c-table__expandable-row">
          <td colspan="5">
            <div class="pds-c-table__expandable-row-wrapper">
              <table
                cellpadding="0"
                cellspacing="0"
                class="pds-c-table__expandable-row-table"
              >
                <tbody>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                  <tr>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                    <td><span>Cell Body</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
      </pds-table>`,
    );

    expect(
      element.outerHTML.replaceAll(/<!--\?lit\$\d*\$-->/g, ''),
    ).toMatchSnapshot();
  });

  it('calls applyClasses and prepareExpandableRows when childNodeObserverCallback is called', async () => {
    element = await fixture(
      `<pds-table>
      <table>
      <thead>
      <tr>
      <th><span>row 1 cell 1</span></th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><span>row 2 cell 1</span></td>
      </tr>
      </tbody>
      </table>
      </pds-table>`,
    );
    jest.spyOn(element, 'applyClasses').mockReturnValue();
    jest.spyOn(element, 'prepareExpandableRows').mockReturnValue();
    element.childNodeObserverCallback(element);

    // Verify that applyClasses and prepareExpandableRows have been called
    expect(element.applyClasses).toHaveBeenCalledTimes(1);
    expect(element.prepareExpandableRows).toHaveBeenCalledTimes(1);

    jest.clearAllMocks();
  });

  it('adds the scroll right classes when wrapper.scrollLeft < wrapper.scrollWidth - wrapper.clientWidth', async () => {
    element = (await fixture(
      `<pds-table>
        <table>
          <thead>
            <tr>
              <th><span>row 1 cell 1</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>row 2 cell 1</span></td>
            </tr>
          </tbody>
        </table>
      </pds-table>`,
    )) as PdsTable;

    const { wrapper } = element;
    // Set wrapper.scrollLeft < wrapper.scrollWidth - wrapper.clientWidth (1 < 4-2)
    if (wrapper) {
      wrapper.scrollLeft = 1;
      // ScrollWidth and ClientWidth are supposed to be readonly, but we need to manipulate them for tests
      Object.defineProperty(wrapper, 'scrollWidth', {
        writable: true,
        configurable: true,
        value: 4,
      });
      Object.defineProperty(wrapper, 'clientWidth', {
        writable: true,
        configurable: true,
        value: 2,
      });
    }
    // Call applyScrollClasses on the wrapper
    element.applyScrollClasses();

    // Verify that the class has been added
    expect(
      element.wrapper.classList.contains('pds-c-table--can-be-scrolled-right'),
    ).toStrictEqual(true);
  });

  it('adds the scroll up classes when wrapper.scrollTop > 0', async () => {
    element = (await fixture(
      `<pds-table>
        <table>
          <thead>
            <tr>
              <th><span>row 1 cell 1</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>row 2 cell 1</span></td>
            </tr>
          </tbody>
        </table>
      </pds-table>`,
    )) as PdsTable;

    const wrapper = element.shadowRoot?.querySelector(
      '.pds-c-table__wrapper',
    ) as HTMLElement;
    // Set wrapper.scrollTop > 0
    if (wrapper) {
      wrapper.scrollTop = 1;
    }
    // Call applyScrollClasses on the wrapper
    element.applyScrollClasses();

    // Verify that the class has been added
    expect(
      element.classList.contains('pds-c-table--can-be-scrolled-up'),
    ).toStrictEqual(true);
  });

  it('adds the scroll down classes when wrapper.scrollTop < wrapper.scrollHeight - wrapper.clientHeight', async () => {
    element = (await fixture(
      `<pds-table>
        <table>
          <thead>
            <tr>
              <th><span>row 1 cell 1</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>row 2 cell 1</span></td>
            </tr>
          </tbody>
        </table>
      </pds-table>`,
    )) as PdsTable;

    const wrapper = element.shadowRoot?.querySelector(
      '.pds-c-table__wrapper',
    ) as HTMLElement;
    // Set wrapper.scrollTop < wrapper.scrollHeight - wrapper.clientHeight (1 < 4-2)
    if (wrapper) {
      wrapper.scrollTop = 1;
      // ScrollWidth and ClientWidth are supposed to be readonly, but we need to manipulate them for tests
      Object.defineProperty(wrapper, 'scrollHeight', {
        writable: true,
        configurable: true,
        value: 4,
      });
      Object.defineProperty(wrapper, 'clientHeight', {
        writable: true,
        configurable: true,
        value: 2,
      });
    }
    // Call applyScrollClasses on the wrapper
    element.applyScrollClasses();

    // Verify that the class has been added
    expect(
      wrapper.classList.contains('pds-c-table--can-be-scrolled-down'),
    ).toStrictEqual(true);
  });

  it('removes scroll classes when calling the resizedCallback and parentElement.clientWidth does not exist and is not < clientWidth', async () => {
    const target = (await fixture(`<div></div>`)) as Element;
    Object.defineProperty(target, 'clientWidth', {
      writable: true,
      configurable: true,
      value: 0,
    });

    // Set the scroll classes on the element, so we can verify they've been removed
    element.classList.add('pds-c-table--can-be-scrolled-left');
    element.classList.add('pds-c-table--can-be-scrolled-right');

    // Call resizedCallback on the target
    element.resizedCallback();

    // Verify that the classes have been removed
    expect(
      element.classList.contains('pds-c-table--can-be-scrolled-left'),
    ).toStrictEqual(false);
    expect(
      element.classList.contains('pds-c-table--can-be-scrolled-right'),
    ).toStrictEqual(false);
  });

  it('calls applyScrollClasses when calling the resizedCallback and parentElement.clientWidth does not exist and the default (0) is < clientWidth', async () => {
    element = (await fixture(
      `<pds-table>
        <table>
          <thead>
            <tr>
              <th><span>row 1 cell 1</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>row 2 cell 1</span></td>
            </tr>
          </tbody>
        </table>
      </pds-table>`,
    )) as PdsTable;

    Object.defineProperty(element.table, 'clientWidth', {
      writable: true,
      configurable: true,
      value: 2,
    });

    Object.defineProperty(element.wrapper, 'clientWidth', {
      writable: true,
      configurable: true,
      value: undefined,
    });

    // Spy on applyScrollClasses, so we can verify that it gets called
    jest.spyOn(element, 'applyScrollClasses').mockReturnValue();

    // Call resizedCallback on the target
    element.resizedCallback();

    // Verify that applyScrollClasses was called
    expect(element.applyScrollClasses).toHaveBeenCalledTimes(1);
  });

  it('calls applyScrollClasses when calling the resizedCallback and parentElement.clientWidth < target.clientWidth', async () => {
    element = (await fixture(
      `<pds-table>
        <table>
          <thead>
            <tr>
              <th><span>row 1 cell 1</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>row 2 cell 1</span></td>
            </tr>
          </tbody>
        </table>
      </pds-table>`,
    )) as PdsTable;

    // Set up the target element and give it a width of 2
    Object.defineProperty(element.table, 'clientWidth', {
      writable: true,
      configurable: true,
      value: 2,
    });

    // Set up a parent element for the target and give it a width of 1
    Object.defineProperty(element.wrapper, 'clientWidth', {
      writable: true,
      configurable: true,
      value: 1,
    });

    // Spy on applyScrollClasses, so we can verify that it gets called
    jest.spyOn(element, 'applyScrollClasses').mockReturnValue();

    // Call resizedCallback on the target
    element.resizedCallback();

    // Verify that applyScrollClasses was called
    expect(element.applyScrollClasses).toHaveBeenCalledTimes(1);
  });

  it('removes scroll classes when calling the resizedCallback and parentElement.clientWidth = target.clientWidth', async () => {
    // Set up the target element and give it a width of 2
    const target = (await fixture(`<div></div>`)) as Element;
    Object.defineProperty(target, 'clientWidth', {
      writable: true,
      configurable: true,
      value: 2,
    });

    // Set up a parent element for the target and give it a width of 1
    const parentElement = (await fixture(`<div></div>`)) as Element;
    Object.defineProperty(parentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: 2,
    });

    // Set our parent element as the target element's parent
    Object.defineProperty(target, 'parentElement', {
      writable: true,
      configurable: true,
      value: parentElement,
    });

    // Set the scroll classes on the element, so we can verify they've been removed
    element.classList.add('pds-c-table--can-be-scrolled-left');
    element.classList.add('pds-c-table--can-be-scrolled-right');

    // Call resizedCallback on the target
    element.resizedCallback();

    // Verify that the classes have been removed
    expect(
      element.classList.contains('pds-c-table--can-be-scrolled-left'),
    ).toStrictEqual(false);
    expect(
      element.classList.contains('pds-c-table--can-be-scrolled-right'),
    ).toStrictEqual(false);
  });

  it('removes scroll classes when calling the resizedCallback and parentElement.clientWidth > target.clientWidth', async () => {
    // Set up the target element and give it a width of 2
    const target = (await fixture(`<div></div>`)) as Element;
    Object.defineProperty(target, 'clientWidth', {
      writable: true,
      configurable: true,
      value: 2,
    });

    // Set up a parent element for the target and give it a width of 1
    const parentElement = (await fixture(`<div></div>`)) as Element;
    Object.defineProperty(parentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: 3,
    });

    // Set our parent element as the target element's parent
    Object.defineProperty(target, 'parentElement', {
      writable: true,
      configurable: true,
      value: parentElement,
    });

    // Set the scroll classes on the element, so we can verify they've been removed
    element.classList.add('pds-c-table--can-be-scrolled-left');
    element.classList.add('pds-c-table--can-be-scrolled-right');

    // Call resizedCallback on the target
    element.resizedCallback();

    // Verify that the classes have been removed
    expect(
      element.classList.contains('pds-c-table--can-be-scrolled-left'),
    ).toStrictEqual(false);
    expect(
      element.classList.contains('pds-c-table--can-be-scrolled-right'),
    ).toStrictEqual(false);
  });

  it('returns an HTMLElement when wrapper query is called', async () => {
    // we need to make sure that element.wrapper returns an HTML element, because data-table component requires the wrapper element
    expect(element.wrapper).toBeInstanceOf(HTMLElement);
  });

  it('sets css custom properties', async () => {
    element = (await fixture(
      `<pds-table fixedheight="300px" stickyheader>
        <table>
          <thead>
            <tr>
              <th><span>row 1 cell 1</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>row 2 cell 1</span></td>
            </tr>
          </tbody>
        </table>
      </pds-table>`,
    )) as PdsTable;
    element.setCssCustomProps();
    expect(element.style.cssText).toEqual(
      '--pds-table-column-percentage: 100%; --pds-table-horizontal-scroller-offset: -1px; --pds-table-vertical-scroller-offset: -1px; --pds-table-pinned-offset: 0px; --pds-table-fixed-height: 300px;',
    );
  });

  it('handles is-pinned class when IntersectionObserver fires', async () => {
    element = (await fixture(
      `<pds-table fixedheight="300px" stickyheader>
        <table>
          <thead>
            <tr>
              <th><span>row 1 cell 1</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>row 2 cell 1</span></td>
            </tr>
          </tbody>
        </table>
      </pds-table>`,
    )) as PdsTable;

    const firstTableRow = element.querySelector(
      `.pds-c-table > .${element.classEl('tbody')} > .${element.classEl('tr')}`,
    ) as HTMLElement;
    mockIntersectionObserverObj.leaveNode(firstTableRow);

    expect(
      element
        .querySelector('thead')
        ?.classList.contains('pds-c-table--is-pinned'),
    ).toBeTruthy();

    mockIntersectionObserverObj.enterNode(firstTableRow);

    expect(
      element
        .querySelector('thead')
        ?.classList.contains('pds-c-table--is-pinned'),
    ).toBeFalsy();
  });

  it("sets ResizeObserver to polyfill if it doesn't exist", async () => {
    // @ts-expect-error
    window.ResizeObserver = null;
    element = (await fixture(
      `<pds-table fixedheight="300px" stickyheader>
        <table>
          <thead>
            <tr>
              <th><span>row 1 cell 1</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>row 2 cell 1</span></td>
            </tr>
          </tbody>
        </table>
      </pds-table>`,
    )) as PdsTable;
    expect(element.ResizeObserver).toBe(ResizeObserverPolyfill);
    window.ResizeObserver = ResizeObserver;
  });
});
