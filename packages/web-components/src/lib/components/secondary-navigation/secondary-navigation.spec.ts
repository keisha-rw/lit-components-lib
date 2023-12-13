import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { fixture } from '@open-wc/testing';
import { PdsSecondaryNavigation } from './secondary-navigation';
import createSnapshots from '../../../../test/utils/snapshots';

jest.mock('lit', () => ({
  ...jest.requireActual('lit'),
  isServer: false,
}));

initStoryshots({
  storyKindRegex: /Secondary navigation/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('SecondaryNavigation unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(`<pds-secondary-navigation
    title="Defined contribution plan"
    description="Franklin Login - ABC Test DEFINED CONTRIBUTION PLAN - Account #: 397011"
  >
    <pds-secondary-navigation-level-one
      title="Account"
      columns="2col"
    >
      <pds-secondary-navigation-level-two
        title="Account information"
      >
        <pds-list spacing="none">
          <pds-list-item><pds-link href="#">Account history</pds-link></pds-list-item>
          <pds-list-item><pds-link href="#">Beneficiaries</pds-link></pds-list-item>
          <pds-list-item><pds-link href="#">Statements</pds-link></pds-list-item>
        </pds-list>
      </pds-secondary-navigation-level-two>
      <pds-secondary-navigation-level-two
        title="Plan details"
      >
        <pds-list spacing="none">
          <pds-list-item><pds-link href="#">Plan information</pds-link></pds-list-item>
          <pds-list-item><pds-link href="#">Plan fees</pds-link></pds-list-item>
        </pds-list>
      </pds-secondary-navigation-level-two></pds-secondary-navigation-level-one
    >
    <pds-secondary-navigation-level-one
      title="Contributions"
    >
      <pds-secondary-navigation-level-two
        title="Contribution details"
        href="${window.location.href}"
      ></pds-secondary-navigation-level-two>
      <pds-secondary-navigation-level-two
        title="Contribution summary"
        href="#"
      ></pds-secondary-navigation-level-two>
    </pds-secondary-navigation-level-one>
    <span slot="logo">
      <svg width="160" height="104">
        <rect
          width="160"
          height="104"
          style="fill:#000000;stroke-width:3;stroke:rgb(0,0,0)"
        />
      </svg>
    </span>
  </pds-secondary-navigation>`);
  });

  it('is an instance of PdsSecondaryNavigation', () => {
    expect(element).toBeInstanceOf(PdsSecondaryNavigation);
  });

  it('if language is Spanish, the aria-label should be in Spanish', async () => {
    element = await fixture(`<pds-secondary-navigation
      title="Defined contribution plan"
      description="Franklin Login - ABC Test DEFINED CONTRIBUTION PLAN - Account #: 397011"
      lang="es"
    >
    </pds-secondary-navigation>`);
    const ariaLabel = element.shadowRoot
      ?.querySelector('.pds-c-secondary-navigation')
      ?.getAttribute('aria-label');
    expect(ariaLabel).toBe('secundario navigation');
  });

  it('is a valid instance of PdsSecondaryNavigation when no description is passed in', async () => {
    element = await fixture(`<pds-secondary-navigation
      title="Defined contribution plan"
    >
    </pds-secondary-navigation>`);
    expect(element).toBeInstanceOf(PdsSecondaryNavigation);
  });

  it('renders the mobile view in smaller viewports', async () => {
    global.innerWidth = 600;
    element = await fixture(`<pds-secondary-navigation
    title="Defined contribution plan"
    description="Franklin Login - ABC Test DEFINED CONTRIBUTION PLAN - Account #: 397011"
  >
    <pds-secondary-navigation-level-one
      title="Account"
      columns="2col"
    >
      <pds-secondary-navigation-level-two
        title="Account information"
      >
        <pds-list spacing="none">
          <pds-list-item><pds-link href="#">Account history</pds-link></pds-list-item>
          <pds-list-item><pds-link href="#">Beneficiaries</pds-link></pds-list-item>
          <pds-list-item><pds-link href="#">Statements</pds-link></pds-list-item>
        </pds-list>
      </pds-secondary-navigation-level-two>
      <pds-secondary-navigation-level-two
        title="Plan details"
      >
        <pds-list spacing="none">
          <pds-list-item><pds-link href="#">Plan information</pds-link></pds-list-item>
          <pds-list-item><pds-link href="#">Plan fees</pds-link></pds-list-item>
        </pds-list>
      </pds-secondary-navigation-level-two></pds-secondary-navigation-level-one
    >
    <pds-secondary-navigation-level-one
      title="Contributions"
    >
      <pds-secondary-navigation-level-two
        title="Contribution details"
        href="${window.location.href}"
      ></pds-secondary-navigation-level-two>
      <pds-secondary-navigation-level-two
        title="Contribution summary"
        href="#"
      ></pds-secondary-navigation-level-two>
    </pds-secondary-navigation-level-one>
    <span slot="logo">
      <svg width="160" height="104">
        <rect
          width="160"
          height="104"
          style="fill:#000000;stroke-width:3;stroke:rgb(0,0,0)"
        />
      </svg>
    </span>
  </pds-secondary-navigation>`);

    expect(
      element.shadowRoot?.querySelector(
        '.pds-c-secondary-navigation--mobile > .pds-c-secondary-navigation__collapsible',
      ),
    ).not.toBeNull();
  });

  it('renders the mobile view in smaller viewports without a description', async () => {
    global.innerWidth = 600;
    element = await fixture(`<pds-secondary-navigation
    title="Defined contribution plan"
  >
    <pds-secondary-navigation-level-one
      title="Account"
      columns="2col"
    >
      <pds-secondary-navigation-level-two
        title="Account information"
      >
        <pds-list spacing="none">
          <pds-list-item><pds-link href="#">Account history</pds-link></pds-list-item>
          <pds-list-item><pds-link href="#">Beneficiaries</pds-link></pds-list-item>
          <pds-list-item><pds-link href="#">Statements</pds-link></pds-list-item>
        </pds-list>
      </pds-secondary-navigation-level-two>
      <pds-secondary-navigation-level-two
        title="Plan details"
      >
        <pds-list spacing="none">
          <pds-list-item><pds-link href="#">Plan information</pds-link></pds-list-item>
          <pds-list-item><pds-link href="#">Plan fees</pds-link></pds-list-item>
        </pds-list>
      </pds-secondary-navigation-level-two></pds-secondary-navigation-level-one
    >
    <pds-secondary-navigation-level-one
      title="Contributions"
    >
      <pds-secondary-navigation-level-two
        title="Contribution details"
        href="${window.location.href}"
      ></pds-secondary-navigation-level-two>
      <pds-secondary-navigation-level-two
        title="Contribution summary"
        href="#"
      ></pds-secondary-navigation-level-two>
    </pds-secondary-navigation-level-one>
    <span slot="logo">
      <svg width="160" height="104">
        <rect
          width="160"
          height="104"
          style="fill:#000000;stroke-width:3;stroke:rgb(0,0,0)"
        />
      </svg>
    </span>
  </pds-secondary-navigation>`);

    expect(
      element.shadowRoot?.querySelector(
        '.pds-c-secondary-navigation--mobile > .pds-c-secondary-navigation__collapsible',
      ),
    ).not.toBeNull();
  });
});
