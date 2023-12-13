import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './footer';
import '../list/list';
import '../heading/heading';
import '../footer-nav/footer-nav';
import '../footer-contact-link/footer-contact-link';

const meta: Meta = {
  title: 'Components/Footer',
  component: 'pds-footer',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'subtle'],
    },
    layoutContainerVariant: {
      control: 'select',
      options: ['default', 'narrow'],
    },
    layoutContainerRemovePadding: { control: 'text' },
    disclosuresLink: {
      control: 'text',
    },
    reportFraudLink: {
      control: 'text',
    },
    behavior: {
      control: 'select',
      options: ['login', 'super', 'default'],
    },
    hideContactPhone: { control: 'boolean' },
    hideHelpLink: { control: 'boolean' },
    hideContactLink: { control: 'boolean' },
    logoAriaLabel: { control: 'text' },
    legalNavAriaLabel: { control: 'text' },
    hideSocialIcons: { control: 'boolean' },
    hideLegalLinks: { control: 'boolean' },
  },
  render: (args) =>
    html`<pds-footer
      variant="${args.variant || nothing}"
      lang="${args.lang || nothing}"
      behavior="${args.behavior || nothing}"
      hideContactPhone="${args.hideContactPhone || nothing}"
      hideHelpLink="${args.hideHelpLink || nothing}"
      hideLegalLinks="${args.hideLegalLinks || nothing}"
      hideContactLink="${args.hideContactLink || nothing}"
      layoutContainerVariant="${args.layoutContainerVariant || nothing}"
      layoutContainerRemovePadding="${args.layoutContainerRemovePadding ||
      nothing}"
    ></pds-footer>`,
  parameters: {
    happo: {
      // @ts-expect-error
      waitFor: () => document.querySelector('pds-footer')?.updateComplete,
      beforeScreenshot: () => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });

        document
          .querySelector('pds-footer')
          ?.querySelectorAll('pds-footer-nav')[0]
          .querySelectorAll('pds-footer-nav-item')
          .forEach((el) => {
            el.shadowRoot
              ?.querySelector('pds-collapsible')
              ?.shadowRoot?.querySelector('.pds-c-collapsible__summary')
              ?.dispatchEvent(clickEvent);
          });
      },
      delay: 1000,
    },
    actions: {
      handles: ['pds-link-click'],
    },
    a11y: {
      config: {
        rules: [
          {
            // The icon links do have an aria-label.  They do have aria-hidden, but that's needed for when the icons are not used as links.
            // The aria-label on the link should be enough for screen readers.
            // @link https://dequeuniversity.com/rules/axe/4.4/link-name
            id: 'link-name',
            enabled: false,
          },
        ],
      },
    },
  },
};
export default meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {
    variant: 'default',
  },
};

export const Spanish: StoryObj = {
  name: 'Spanish',
  parameters: {
    lang: 'es',
  },
  args: {
    variant: 'default',
  },
};

export const Subtle: StoryObj = {
  name: 'Subtle',
  args: {
    variant: 'subtle',
  },
  parameters: {
    happo: {
      delay: 1000,
    },
  },
  render: (args) =>
    html`<pds-footer variant="${args.variant}" behavior="${args.behavior}">
      <pds-list slot="custom-legal-links">
        <pds-list-item>
          <pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >Link 1</pds-link
          >
        </pds-list-item>
        <pds-list-item>
          <pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >Link 2</pds-link
          >
        </pds-list-item>
      </pds-list>
    </pds-footer>`,
};

export const Login: StoryObj = {
  name: 'Login',
  args: {
    variant: 'default',
    behavior: 'login',
  },
  parameters: {
    happo: {
      delay: 1000,
    },
  },
  render: (args) =>
    html`<pds-footer variant="${args.variant}" behavior="${args.behavior}">
      <pds-list slot="custom-legal-links">
        <pds-list-item>
          <pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >Link 1</pds-link
          >
        </pds-list-item>
        <pds-list-item>
          <pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >Link 2</pds-link
          >
        </pds-list-item>
      </pds-list>
    </pds-footer>`,
};

export const RemoveContact: StoryObj = {
  name: 'Remove contact',
  args: {
    variant: 'default',
    hideContactPhone: true,
    hideHelpLink: true,
    hideContactLink: true,
  },
};

export const CustomContact: StoryObj = {
  name: 'Custom contact links',
  args: { variant: 'default' },
  render: (args) =>
    html`<pds-footer variant="${args.variant}">
      <pds-list slot="custom-contact">
        <pds-list-item>
          <pds-footer-contact-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            ariaLabel="Call us toll-free at 800-334-7244"
            linkCategory="phone"
            href="tel:800-334-7244"
            >Tol: 800-334-7244</pds-footer-contact-link
          >
        </pds-list-item>
        <pds-list-item>
          <pds-footer-contact-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="tel:858-689-0904"
            ariaLabel="Call us at 858-689-0904"
            linkCategory="phone"
            >Tel: 858-689-0904</pds-footer-contact-link
          >
        </pds-list-item>
        <pds-list-item>
          <pds-footer-contact-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="tel:858-689-9232"
            ariaLabel="Fax us at 858-689-9232"
            linkCategory="fax"
            >Fax: 858-689-9232</pds-footer-contact-link
          >
        </pds-list-item>
      </pds-list>
    </pds-footer>`,
};

export const HideLegalLinks: StoryObj = {
  name: 'Hide legal links',
  args: {
    variant: 'default',
    hideLegalLinks: true,
  },
};

export const RemoveSocial: StoryObj = {
  name: 'Remove social icons',
  args: {
    variant: 'default',
    hideSocialIcons: true,
  },
  render: (args) =>
    html`<pds-footer
      variant="${args.variant}"
      hideSocialIcons="${args.hideSocialIcons}"
    ></pds-footer>`,
};

export const CustomSocial: StoryObj = {
  name: 'Custom social icons',
  args: {
    variant: 'default',
  },
  render: (args: any) =>
    html`<pds-footer variant="${args.variant}">
      <pds-list orientation="horizontal" slot="social-icons">
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="https://api.whatsapp/"
            ariaLabel="Company Co on WhatsApp"
            target="_blank"
            ><pds-icon-whatsapp
              size="xl"
              color="currentColor"
            ></pds-icon-whatsapp> </pds-link
        ></pds-list-item>
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="https://www.facebook.com"
            ariaLabel="Company Co on Facebook"
            target="_blank"
            ><pds-icon-facebook
              size="xl"
              color="currentColor"
            ></pds-icon-facebook> </pds-link
        ></pds-list-item>
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="https://twitter.com"
            ariaLabel="Company Co on Twitter"
            target="_blank"
            ><pds-icon-twitter
              size="xl"
              color="currentColor"
            ></pds-icon-twitter> </pds-link
        ></pds-list-item>
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="https://www.instagram.com"
            ariaLabel="Company Co on Instagram"
            target="_blank"
            ><pds-icon-instagram
              size="xl"
              color="currentColor"
            ></pds-icon-instagram> </pds-link
        ></pds-list-item>
      </pds-list>
    </pds-footer>`,
};

export const CustomLegalText: StoryObj = {
  name: 'Custom legal text',
  args: { variant: 'default' },
  render: (args) =>
    html`<pds-footer variant="${args.variant}">
      <div slot="legal-text">
        <p class="pds-u-margin-0">
          Copyright ©2020 First Dental Health | 5771 Copley Drive #101, San
          Diego, CA 92111.
        </p>
        <p class="pds-u-margin-0">
          Company Co Asset Management℠ is a trade name of Company Co Global
          Investors, LLC. Company Co®, Company Co®, Company Co
          Asset Management, and Company Co and the logomark design are registered
          trademarks and service marks of Company Co Financial Services, Inc., a
          Company Co company, in various countries around the
          world and may be used only with the permission of Company Co Financial
          Services, Inc.
        </p>
        <p class="pds-u-margin-0">
          Investing involves risk, including possible loss of principal.
        </p>
      </div>
    </pds-footer>`,
};

const renderSuperFooterLinks = (args: any) =>
  html`<pds-footer-nav-item label="Our company">
      <pds-list>
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >About us</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >Investor relations</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >News room</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >Sustainability</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
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
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >Careers</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >Global jobs</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >Financial professional opportunities</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >Internships</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
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
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >For dental providers</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >For financial professionals</pds-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-link
            variant="${args.variant === 'default' ? 'inverted' : 'default'}"
            href="#"
            >Company Co Asset Management</pds-link
          ></pds-list-item
        >
      </pds-list>
    </pds-footer-nav-item>`;

export const SuperFooter: StoryObj = {
  name: 'Super footer',
  args: {
    variant: 'default',
    behavior: 'super',
  },
  render: (args) =>
    html`<pds-footer variant="${args.variant}" behavior="${args.behavior}">
      <pds-footer-nav behavior="3col">
        ${renderSuperFooterLinks(args)}
      </pds-footer-nav>
    </pds-footer>`,
};

export const SuperFooterSubtle: StoryObj = {
  name: 'Super footer subtle',
  args: {
    variant: 'subtle',
    behavior: 'super',
    logoAriaLabel: 'Link to custom site name',
  },
  render: (args) =>
    html`<pds-footer variant="${args.variant}" behavior="${args.behavior}">
      <pds-footer-nav behavior="4col">
        ${renderSuperFooterLinks(args)}
        <pds-footer-nav-item label="Fourth column">
          <pds-list>
            <pds-list-item
              ><pds-link
                variant="${args.variant === 'default' ? 'inverted' : 'default'}"
                href="#"
                >About us again</pds-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-link
                variant="${args.variant === 'default' ? 'inverted' : 'default'}"
                href="#"
                >Still investor relations</pds-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-link
                variant="${args.variant === 'default' ? 'inverted' : 'default'}"
                href="#"
                >News room two</pds-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-link
                variant="${args.variant === 'default' ? 'inverted' : 'default'}"
                href="#"
                >Sustainable sustainability</pds-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-link
                variant="${args.variant === 'default' ? 'inverted' : 'default'}"
                href="#"
                >More insights</pds-link
              ></pds-list-item
            >
          </pds-list>
        </pds-footer-nav-item>
      </pds-footer-nav>
    </pds-footer>`,
};

export const SuperFooterWithAdditionalInfo: StoryObj = {
  name: 'Super footer with additional info',
  args: {
    variant: 'default',
    behavior: 'super',
  },
  render: (args) =>
    html`<pds-footer variant="${args.variant}" behavior="${args.behavior}">
      <div slot="additional-info">
        <p>
          Company Co Asset Management℠ is a trade name of Company Co Global
          Investors, LLC. Company Co®, Company Co®, Company Co
          Asset Management, and Company Co and the logomark design are registered
          trademarks and service marks of Company Co Financial Services, Inc., a
          Company Co company, in various countries around the
          world and may be used only with the permission of Company Co Financial
          Services, Inc.
        </p>
        <p>Investing involves risk, including possible loss of principal.</p>
      </div>
      <pds-footer-nav behavior="3col">
        ${renderSuperFooterLinks(args)}
      </pds-footer-nav>
    </pds-footer>`,
};

export const CustomLogoSuperFooter: StoryObj = {
  name: 'Super footer with custom logo',
  args: {
    variant: 'default',
    behavior: 'super',
    logoAriaLabel: 'Custom logo aria-label',
  },
  render: (args) =>
    html`<pds-footer
      variant="${args.variant}"
      behavior="${args.behavior}"
      logoAriaLabel="${args.logoAriaLabel}"
    >
      <svg slot="logo" width="144" height="58">
        <rect
          width="144"
          height="58"
          style="fill:#000000;stroke-width:3;stroke:rgb(0,0,0)"
        />
      </svg>
      <pds-footer-nav behavior="3col">
        ${renderSuperFooterLinks(args)}
      </pds-footer-nav>
    </pds-footer>`,
};
