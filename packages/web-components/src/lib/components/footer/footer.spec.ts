import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PdsFooter } from './footer';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Footer/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Footer unit tests', () => {
  it('is an instance of PdsFooter', async () => {
    const element = await fixture('<pds-footer/>');
    expect(element).toBeInstanceOf(PdsFooter);
  });

  it('generates login support when behavior is set to login', async () => {
    const element = await fixture('<pds-footer behavior="login" />');
    expect(element).toMatchSnapshot();
  });

  it('does not generate login support when behavior is not set to login', async () => {
    const element = await fixture('<pds-footer behavior="notlogin" />');
    expect(element).toMatchSnapshot();
  });

  it('applies subtle markup when variant is subtle', async () => {
    const element = await fixture('<pds-footer variant="subtle" />');
    expect(element).toMatchSnapshot();
  });

  it('generates spanish support when lang is switched to es', async () => {
    const element = await fixture('<pds-footer lang="es" />');
    expect(element).toMatchSnapshot();
  });

  it('is accessible', async () => {
    const element = await fixture('<pds-footer/>');
    await assert.isAccessible(element);
  });

  it('generates the default Company Co logo when behavior is set to super', async () => {
    const element = await fixture(
      `<pds-footer
        variant="default"
        behavior="super"
      ><pds-footer-nav variant="default" behavior="3col"
      ><pds-footer-nav-item label="Our company">
      <pds-list>
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >About us</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Investor relations</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >News room</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Sustainability</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Insights</pds-link
          ></pds-list-item
        >
      </pds-list>
    </pds-footer-nav-item>
    <pds-footer-nav-item label="We're hiring">
      <pds-list>
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Careers</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Global jobs</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Financial professional opportunities</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Internships</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Recent graduates</pds-link
          ></pds-list-item
        >
      </pds-list>
    </pds-footer-nav-item>
    <pds-footer-nav-item label="Other sites">
      <pds-list>
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >For dental providers</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >For financial professionals</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Company Co Asset Management</pds-link
          ></pds-list-item
        >
      </pds-list>
    </pds-footer-nav-item></pds-footer-nav></pds-footer>`,
    );

    expect(
      element.shadowRoot?.querySelector('a.pds-c-footer__logo-link'),
    ).toHaveAttribute('aria-label');

    expect(element).toMatchSnapshot();
  });

  it('adds aria-label attributes to social icons', async () => {
    const element = await fixture(
      `<pds-footer
        variant="default"
      ></pds-footer>`,
    );

    // Select all pds-link elements in the social-icons list.
    const pdsLinks = element.shadowRoot?.querySelectorAll(
      'pds-list[class="pds-c-footer__social-icons"] pds-link',
    );

    // Loop through each pds-link and expect an aria-label on the link tag.
    pdsLinks?.forEach((pdsLink) =>
      expect(pdsLink?.shadowRoot?.querySelector('a')).toHaveAttribute(
        'aria-label',
      ),
    );

    expect(element).toMatchSnapshot();
  });

  it('hides the contact phone, help link and the contact link when the string of none is entered', async () => {
    const element = (await fixture(
      `<pds-footer
        variant="subtle"
        hideContactPhone="true"
        hideHelpLink="true"
        hideContactLink="true"
        behavior="super"
    ><pds-footer-nav variant="default" behavior="3col"
      ><pds-footer-nav-item label="Our company">
      <pds-list>
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >About us</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Investor relations</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >News room</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Sustainability</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Insights</pds-link
          ></pds-list-item
        >
      </pds-list>
    </pds-footer-nav-item>
    <pds-footer-nav-item label="We're hiring">
      <pds-list>
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Careers</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Global jobs</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Financial professional opportunities</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Internships</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Recent graduates</pds-link
          ></pds-list-item
        >
      </pds-list>
    </pds-footer-nav-item>
    <pds-footer-nav-item label="Other sites">
      <pds-list>
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >For dental providers</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >For financial professionals</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Company Co Asset Management</pds-link
          ></pds-list-item
        >
      </pds-list>
    </pds-footer-nav-item></pds-footer-nav></pds-footer>`,
    )) as PdsFooter;
    // Look for the contact us phone link with phone icon and make sure it is not there.
    expect(
      element.shadowRoot?.querySelector('pds-link pds-icon-phone'),
    ).toBeNull();

    // Look for the help topics link with help circle icon and make sure it is not there.
    expect(
      element.shadowRoot?.querySelector('pds-link pds-icon-help-circle'),
    ).toBeNull();

    // Look for the contact us mail icon and make sure it is not there.
    expect(
      element.shadowRoot?.querySelector('pds-link pds-icon-mail'),
    ).toBeNull();
  });

  it('shows the contact phone, help link and the contact link when at least one has a value', async () => {
    const element = (await fixture(
      `<pds-footer
        variant="subtle"
        hideContactPhone="true"
        hideContactLink="true"
        behavior="super"
    ><pds-footer-nav variant="default" behavior="3col"
      ><pds-footer-nav-item label="Our company">
      <pds-list>
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >About us</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Investor relations</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >News room</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Sustainability</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Insights</pds-link
          ></pds-list-item
        >
      </pds-list>
    </pds-footer-nav-item>
    <pds-footer-nav-item label="We're hiring">
      <pds-list>
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Careers</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Global jobs</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Financial professional opportunities</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Internships</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Recent graduates</pds-link
          ></pds-list-item
        >
      </pds-list>
    </pds-footer-nav-item>
    <pds-footer-nav-item label="Other sites">
      <pds-list>
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >For dental providers</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >For financial professionals</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="inverted"
            href="#"
            >Company Co Asset Management</pds-link
          ></pds-list-item
        >
      </pds-list>
    </pds-footer-nav-item></pds-footer-nav></pds-footer>`,
    )) as PdsFooter;
    expect(element).toMatchSnapshot();
  });

  it('should render default variant collapsible contact links correctly', async () => {
    const element = (await fixture(
      '<pds-footer variant="default" behavior="super" />',
    )) as PdsFooter;

    element.responsiveViewportSize = 'xs';
    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('pds-collapsible')).toBeTruthy();
    expect(
      element.shadowRoot?.querySelector('pds-collapsible'),
    ).toHaveAttribute('variant', 'inverted');
  });

  it('should render subtle variant collapsible contact links correctly', async () => {
    const element = (await fixture(
      '<pds-footer variant="subtle" behavior="super" />',
    )) as PdsFooter;

    element.responsiveViewportSize = 'xs';
    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('pds-collapsible')).toBeTruthy();
    expect(
      element.shadowRoot?.querySelector('pds-collapsible'),
    ).toHaveAttribute('variant', 'strong');
  });

  it('renders a list of custom links with correct label and href', async () => {
    const element = (await fixture(
      `<pds-footer
      variant="subtle"
      behavior="super"
    >
    <pds-list slot="custom-legal-links">
        <pds-list-item>
          <pds-link
            variant="inverted"
            href="#"
            >Link 1</pds-link
          >
        </pds-list-item>
        <pds-list-item>
          <pds-link
            variant="inverted"
            href="#"
            >Link 2</pds-link
          >
        </pds-list-item>
      </pds-list>
    </pds-footer>`,
    )) as PdsFooter;
    await waitFor(
      () => {
        const legalLinks = element.shadowRoot
          ?.querySelector('.pds-c-footer__extra-links')
          ?.querySelectorAll('pds-link');
        expect(legalLinks?.length).toBe(7);
      },
      {
        timeout: 1000,
      },
    );
  });

  it('renders a list of custom legal links', async () => {
    const element = (await fixture(
      `<pds-footer
      variant="subtle"
      behavior="super"
    >
    <pds-list slot="custom-legal-links">
        <pds-list-item>
          <pds-link
            variant="inverted"
            href="#"
            >Link 1</pds-link
          >
        </pds-list-item>
        <pds-list-item>
          <pds-link
            variant="inverted"
            href="#"
            >Link 2</pds-link
          >
        </pds-list-item>
      </pds-list>
    </pds-footer>`,
    )) as PdsFooter;
    await waitFor(
      () => {
        const legalLinks = element.shadowRoot
          ?.querySelector('.pds-c-footer__extra-links')
          ?.querySelectorAll('pds-link');
        expect(legalLinks?.length).toBe(7);
      },
      {
        timeout: 1000,
      },
    );
  });

  it('hides the social icons when hideSocialIcons is set to true', async () => {
    const element = (await fixture(
      `<pds-footer
      variant="subtle"
      behavior="super"
      hideSocialIcons="true"
    />`,
    )) as PdsFooter;
    expect(
      element.shadowRoot?.querySelector('.pds-c-footer__social-icons'),
    ).not.toBeInTheDocument();
  });
});
