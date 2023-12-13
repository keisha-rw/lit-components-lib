import * as React from 'react';
import { StoryFn } from '@storybook/react';
import {
  PdsIconFacebook,
  PdsIconInstagram,
  PdsIconTwitter,
  PdsIconWhatsapp,
} from '@keisha/design-system-icons-react';
import { PdsFooter } from './footer';
import { PdsFooterNav } from '../footer-nav/footer-nav';
import { PdsFooterContactLink } from '../footer-contact-link/footer-contact-link';
import { PdsFooterNavItem } from '../footer-nav-item/footer-nav-item';
import { PdsLink } from '../link/link';
import { PdsList } from '../list/list';
import { PdsListItem } from '../list-item/list-item';

export default {
  title: 'Components/Footer',
  component: PdsFooter,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'subtle'] },
    hideContactPhone: { control: 'boolean' },
    hideHelpLink: { control: 'boolean' },
    hideContactLink: { control: 'boolean' },
    hideSocialIcons: { control: 'boolean' },
    hideLegalLinks: { control: 'boolean' },
  },
};

const Template: StoryFn<typeof PdsFooter> = (args) => <PdsFooter {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Spanish = Template.bind({});
Spanish.args = {
  variant: 'default',
};
Spanish.parameters = {
  lang: 'es',
};

const CustomlegalLinksTemplate: StoryFn<typeof PdsFooter> = (args) => (
  <PdsFooter {...args}>
    <PdsList slot="custom-legal-links">
      <PdsListItem>
        <PdsLink
          variant={args.variant === 'default' ? 'inverted' : 'default'}
          href="#"
        >
          Link 1
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink
          variant={args.variant === 'default' ? 'inverted' : 'default'}
          href="#"
        >
          Link 2
        </PdsLink>
      </PdsListItem>
    </PdsList>
  </PdsFooter>
);
export const Subtle = CustomlegalLinksTemplate.bind({});
Subtle.args = {
  variant: 'subtle',
};
Subtle.parameters = {
  happo: {
    delay: 1000,
  },
};

export const Login = CustomlegalLinksTemplate.bind({});
Login.args = {
  variant: 'default',
  behavior: 'login',
};
Login.parameters = {
  happo: {
    delay: 1000,
  },
};

export const RemoveContact = Template.bind({});
RemoveContact.storyName = 'Remove contact';
RemoveContact.args = {
  variant: 'default',
  hideContactPhone: true,
  hideHelpLink: true,
  hideContactLink: true,
};

export const HideLegalLinks = Template.bind({});
HideLegalLinks.storyName = 'Hide legal links';
HideLegalLinks.args = {
  hideLegalLinks: true,
};

const CustomContactTemplate: StoryFn<typeof PdsFooter> = (args) => (
  <PdsFooter {...args}>
    <PdsList slot="custom-contact">
      <PdsListItem>
        <PdsFooterContactLink
          linkCategory="phone"
          variant={args.variant === 'default' ? 'inverted' : 'default'}
          href="tel:800-334-7244"
          ariaLabel="Call us toll-free at 800-334-7244"
        >
          Tol: 800-334-7244
        </PdsFooterContactLink>
      </PdsListItem>
      <PdsListItem>
        <PdsFooterContactLink
          linkCategory="phone"
          variant={args.variant === 'default' ? 'inverted' : 'default'}
          href="tel:858-689-0904"
          ariaLabel="Call us at 858-689-0904"
        >
          Tel: 858-689-0904
        </PdsFooterContactLink>
      </PdsListItem>
      <PdsListItem>
        <PdsFooterContactLink
          linkCategory="fax"
          variant={args.variant === 'default' ? 'inverted' : 'default'}
          href="tel:858-689-9232"
          ariaLabel="Fax us at 858-689-9232"
        >
          Fax: 858-689-9232
        </PdsFooterContactLink>
      </PdsListItem>
    </PdsList>
  </PdsFooter>
);
export const CustomContactLinks = CustomContactTemplate.bind({});
CustomContactLinks.storyName = 'Custom contact links';
CustomContactLinks.args = {
  variant: 'default',
};

export const RemoveSocial = Template.bind({});
RemoveSocial.storyName = 'Remove social icons';
RemoveSocial.args = {
  variant: 'default',
  hideSocialIcons: true,
};

const CustomSocialIconsTemplate: StoryFn<typeof PdsFooter> = (args) => (
  <PdsFooter {...args}>
    <PdsList orientation="horizontal" slot="social-icons">
      <PdsListItem>
        <PdsLink
          variant={args.variant === 'default' ? 'inverted' : 'default'}
          href="https://api.whatsapp.com/"
          ariaLabel="Company Co on WhatsApp"
          target="_blank"
        >
          <PdsIconWhatsapp size="xl" color="currentColor" />
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink
          variant={args.variant === 'default' ? 'inverted' : 'default'}
          href="https://www.facebook.com"
          ariaLabel="Company Co on Facebook"
          target="_blank"
        >
          <PdsIconFacebook size="xl" color="currentColor" />
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink
          variant={args.variant === 'default' ? 'inverted' : 'default'}
          href="https://twitter.com"
          ariaLabel="Company Co on Twitter"
          target="_blank"
        >
          <PdsIconTwitter size="xl" color="currentColor" />
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink
          variant={args.variant === 'default' ? 'inverted' : 'default'}
          href="https://www.instagram.com"
          ariaLabel="Company Co on Instagram"
          target="_blank"
        >
          <PdsIconInstagram size="xl" color="currentColor" />
        </PdsLink>
      </PdsListItem>
    </PdsList>
  </PdsFooter>
);

export const CustomSocial = CustomSocialIconsTemplate.bind({});
CustomSocial.storyName = 'Custom social icons';
CustomSocial.args = {
  variant: 'default',
};

const CustomLegalTextTemplate: StoryFn<typeof PdsFooter> = (args) => (
  <PdsFooter {...args}>
    <div slot="legal-text">
      <p className="pds-u-margin-0">
        Copyright ©2020 First Dental Health | 5771 Copley Drive #101, San
        Diego, CA 92111.
      </p>
      <p className="pds-u-margin-0">
        Company Co Asset Management℠ is a trade name of Company Co Global
        Investors, LLC. Company Co®, Company Co®, Company Co
        Asset Management, and Company Co and the logomark design are registered
        trademarks and service marks of Company Co Financial Services, Inc., a
        Company Co company, in various countries around the world
        and may be used only with the permission of Company Co Financial
        Services, Inc.
      </p>
      <p className="pds-u-margin-0">
        Investing involves risk, including possible loss of principal.
      </p>
    </div>
  </PdsFooter>
);

export const CustomLegalText = CustomLegalTextTemplate.bind({});
CustomLegalText.storyName = 'Custom legal text';
CustomLegalText.args = {
  variant: 'default',
};

const renderSuperFooterLinks = (args: any) => (
  <>
    <PdsFooterNavItem label="Our company">
      <PdsList>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            About us
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            Investor relations
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            News room
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            Sustainability
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            Insights
          </PdsLink>
        </PdsListItem>
      </PdsList>
    </PdsFooterNavItem>
    <PdsFooterNavItem label="We're hiring">
      <PdsList>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            Careers
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            Global jobs
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            Financial professional opportunities
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            Internships
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            Recent graduates
          </PdsLink>
        </PdsListItem>
      </PdsList>
    </PdsFooterNavItem>
    <PdsFooterNavItem label="Other sites">
      <PdsList>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            For dental providers
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            For financial professionals
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            variant={args.variant === 'default' ? 'inverted' : 'default'}
            href="#"
          >
            Company Co Asset Management
          </PdsLink>
        </PdsListItem>
      </PdsList>
    </PdsFooterNavItem>
  </>
);

const SuperTemplate: StoryFn<typeof PdsFooter> = (args) => (
  <PdsFooter {...args}>
    <PdsFooterNav behavior="3col">{renderSuperFooterLinks(args)}</PdsFooterNav>
  </PdsFooter>
);

export const SuperFooter = SuperTemplate.bind({});
SuperFooter.storyName = 'Super footer';
SuperFooter.args = {
  behavior: 'super',
  variant: 'default',
};

const SuperSubtleTemplate: StoryFn<typeof PdsFooter> = (args) => (
  <PdsFooter {...args}>
    <PdsFooterNav behavior="4col">
      {renderSuperFooterLinks(args)}
      <PdsFooterNavItem label="Fourth column">
        <PdsList>
          <PdsListItem>
            <PdsLink
              variant={args.variant === 'default' ? 'inverted' : 'default'}
              href="#"
            >
              About us again
            </PdsLink>
          </PdsListItem>
          <PdsListItem>
            <PdsLink
              variant={args.variant === 'default' ? 'inverted' : 'default'}
              href="#"
            >
              Still investor relations
            </PdsLink>
          </PdsListItem>
          <PdsListItem>
            <PdsLink
              variant={args.variant === 'default' ? 'inverted' : 'default'}
              href="#"
            >
              News room two
            </PdsLink>
          </PdsListItem>
          <PdsListItem>
            <PdsLink
              variant={args.variant === 'default' ? 'inverted' : 'default'}
              href="#"
            >
              Sustainable sustainability
            </PdsLink>
          </PdsListItem>
          <PdsListItem>
            <PdsLink
              variant={args.variant === 'default' ? 'inverted' : 'default'}
              href="#"
            >
              More insights
            </PdsLink>
          </PdsListItem>
        </PdsList>
      </PdsFooterNavItem>
    </PdsFooterNav>
  </PdsFooter>
);

export const SuperFooterSubtle = SuperSubtleTemplate.bind({});
SuperFooterSubtle.storyName = 'Super footer subtle';
SuperFooterSubtle.args = {
  variant: 'subtle',
  behavior: 'super',
  logoAriaLabel: 'Link to custom site name',
};

const SuperFooterWithAdditionalInfoTemplate: StoryFn<typeof PdsFooter> = (
  args,
) => (
  <PdsFooter {...args}>
    <div slot="additional-info">
      <p>
        Company Co Asset Management℠ is a trade name of Company Co Global
        Investors, LLC. Company Co®, Company Co®, Company Co
        Asset Management, and Company Co and the logomark design are registered
        trademarks and service marks of Company Co Financial Services, Inc., a
        Company Co company, in various countries around the world
        and may be used only with the permission of Company Co Financial
        Services, Inc.
      </p>
      <p>Investing involves risk, including possible loss of principal.</p>
    </div>
    <PdsFooterNav behavior="3col">{renderSuperFooterLinks(args)}</PdsFooterNav>
  </PdsFooter>
);

export const SuperFooterWithAdditionalInfo =
  SuperFooterWithAdditionalInfoTemplate.bind({});
SuperFooterWithAdditionalInfo.storyName = 'Super footer with additional info';
SuperFooterWithAdditionalInfo.args = {
  behavior: 'super',
  variant: 'default',
};

const CustomLogoSuperTemplate: StoryFn<typeof PdsFooter> = (args) => (
  <PdsFooter {...args}>
    {/* @ts-expect-error */}
    <svg slot="logo" width="144" height="58">
      <rect
        width="144"
        height="58"
        style={{ fill: '#000000', stroke: 'rgb(0,0,0)' }}
      />
    </svg>
    <PdsFooterNav behavior="3col">{renderSuperFooterLinks(args)}</PdsFooterNav>
  </PdsFooter>
);

export const CustomLogoSuperFooter = CustomLogoSuperTemplate.bind({});
CustomLogoSuperFooter.storyName = 'Super footer with custom logo';
CustomLogoSuperFooter.args = {
  behavior: 'super',
  logoAriaLabel: 'Custom logo aria-label',
  variant: 'default',
};
