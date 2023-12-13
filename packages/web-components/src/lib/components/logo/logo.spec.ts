import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsLogo } from './logo';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Logo/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Logo unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-logo variant="default" />');
  });

  it('works with the default variant passed in', async () => {
    expect(
      element.shadowRoot?.querySelector('svg')?.getElementsByTagName('style')[0]
        .innerHTML,
    ).toBe(`
          .st0 {
            fill: #4e4f53;
          }
          .st1 {
            fill: url(#SVGID_1_);
          }
        `);
  });

  it('works with the white variant passed in', async () => {
    element = await fixture('<pds-logo variant="white"/>');
    expect(
      element.shadowRoot?.querySelector('svg')?.getElementsByTagName('style')[0]
        .innerHTML,
    ).toBe(`
          .st0 {
            fill: #ffffff;
          }
          .st1 {
            fill: #ffffff;
          }
        `);
  });

  it('works with the default p white font variant passed in', async () => {
    element = await fixture('<pds-logo variant="default-p-white-font"/>');
    expect(
      element.shadowRoot?.querySelector('svg')?.getElementsByTagName('style')[0]
        .innerHTML,
    ).toBe(`
          .st0 {
            fill: #ffffff;
          }
          .st1 {
            fill: url(#SVGID_1_);
          }
        `);
  });

  it('works with the p-gradient variant passed in', async () => {
    element = await fixture('<pds-logo variant="p-gradient"/>');
    expect(
      element.shadowRoot?.querySelector('svg')?.getElementsByTagName('style')[0]
        .innerHTML,
    ).toBe(`
            .logoPSymbol {
              fill: <!---->url(#SVG_ID_GRADIENT_P_SYMBOL_1_);
            }
          <!---->`);
  });

  it('works with the p variant passed in', async () => {
    element = await fixture('<pds-logo variant="p"/>');
    expect(
      element.shadowRoot?.querySelector('svg')?.getElementsByTagName('style')[0]
        .innerHTML,
    ).toBe(`
            .logoPSymbol {
              fill: <!---->#0091da;
            }
          <!---->`);
  });

  it('works with the p-white variant passed in', async () => {
    element = await fixture('<pds-logo variant="p-white"/>');
    expect(
      element.shadowRoot?.querySelector('svg')?.getElementsByTagName('style')[0]
        .innerHTML,
    ).toBe(`
            .logoPSymbol {
              fill: <!---->#ffffff;
            }
          <!---->`);
  });

  it('does not work with invalid variant passed in', async () => {
    element = await fixture('<pds-logo variant="tada"/>');
    expect(
      element.shadowRoot?.querySelector('svg')?.getElementsByTagName('style')[0]
        .innerHTML,
    ).toBe(`
            .logoPSymbol {
              fill: <!---->;
            }
          <!---->`);
  });

  it('is an instance of PdsLogo', () => {
    expect(element).toBeInstanceOf(PdsLogo);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
